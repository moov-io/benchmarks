(() => {
  "use strict";

  const SOURCES = [
    {
      id: "ach",
      title: "ACH",
      repo: "moov-io/ach",
      urls: [
        "https://raw.githubusercontent.com/moov-io/ach/bench-data/docs/bench/data.js",
        "./bench/ach/data.js",
      ],
    },
    {
      id: "cryptfs",
      title: "cryptfs",
      repo: "moov-io/cryptfs",
      urls: [
        "https://raw.githubusercontent.com/moov-io/cryptfs/bench-data/docs/bench/data.js",
        "./bench/cryptfs/data.js",
      ],
    },
    {
      id: "iso8583",
      title: "iso8583",
      repo: "moov-io/iso8583",
      urls: ["https://raw.githubusercontent.com/moov-io/iso8583/bench-data/docs/bench/data.js"],
    },
    {
      id: "watchman",
      title: "Watchman",
      repo: "moov-io/watchman",
      urls: ["https://raw.githubusercontent.com/moov-io/watchman/master/docs/bench/common/data.js"],
    },
    {
      id: "watchman-ofac",
      title: "Watchman OFAC",
      repo: "moov-io/watchman",
      urls: ["https://raw.githubusercontent.com/moov-io/watchman/master/docs/bench/sources/ofac/data.js"],
    },
    {
      id: "watchman-csl",
      title: "Watchman CSL US",
      repo: "moov-io/watchman",
      urls: ["https://raw.githubusercontent.com/moov-io/watchman/master/docs/bench/sources/csl_us/data.js"],
    },
  ];

  const SUFFIX = {
    "ns/op": " - ns/op",
    "B/op": " - B/op",
    "allocs/op": " - allocs/op",
  };

  const state = {
    metric: "ns/op",
    project: "all",
    sources: [],
    chart: null,
  };

  const $ = (id) => document.getElementById(id);

  function parseDataJs(text) {
    const trimmed = text.replace(/^\uFEFF/, "").trim();
    const eq = trimmed.indexOf("=");
    if (eq === -1) {
      throw new Error("not a BENCHMARK_DATA file");
    }
    let json = trimmed.slice(eq + 1).trim();
    if (json.endsWith(";")) {
      json = json.slice(0, -1);
    }
    return JSON.parse(json);
  }

  async function loadSource(source) {
    let lastError = null;
    for (let i = 0; i < source.urls.length; i++) {
      const url = source.urls[i];
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
          lastError = new Error(`${url} → ${res.status}`);
          continue;
        }
        const data = parseDataJs(await res.text());
        const legacy = Boolean(data.repoUrl && data.repoUrl.includes("/benchmarks"));
        return { ...source, data, legacy, from: url, error: null };
      } catch (err) {
        lastError = err;
      }
    }
    return { ...source, data: null, legacy: false, from: null, error: lastError };
  }

  function pointFrom(entry, bench, group) {
    return {
      value: bench.value,
      unit: bench.unit,
      extra: bench.extra || "",
      date: entry.date,
      commit: entry.commit,
      group,
    };
  }

  function seriesFor(loaded, metric) {
    const suffix = SUFFIX[metric];
    const out = [];
    if (!loaded.data || !loaded.data.entries) {
      return out;
    }
    for (const [group, entries] of Object.entries(loaded.data.entries)) {
      const split = new Map();
      const combined = new Map();
      for (const entry of entries) {
        for (const bench of entry.benches || []) {
          if (!bench.name) {
            continue;
          }
          if (bench.name.endsWith(suffix)) {
            const name = bench.name.slice(0, -suffix.length);
            if (!split.has(name)) {
              split.set(name, []);
            }
            split.get(name).push(pointFrom(entry, bench, group));
            continue;
          }
          if (metric === "ns/op" && bench.unit && String(bench.unit).startsWith("ns/op") && !bench.name.includes(" - ")) {
            if (!combined.has(bench.name)) {
              combined.set(bench.name, []);
            }
            combined.get(bench.name).push(pointFrom(entry, bench, group));
          }
        }
      }
      const names = split.size ? split : combined;
      for (const [name, points] of names) {
        points.sort((a, b) => a.date - b.date);
        out.push({ name, group, points, sourceId: loaded.id, title: loaded.title, legacy: loaded.legacy });
      }
    }
    return out;
  }

  function fmtNumber(n) {
    if (!Number.isFinite(n)) {
      return "—";
    }
    const abs = Math.abs(n);
    if (abs >= 1e9) {
      return (n / 1e9).toFixed(2) + "e9";
    }
    if (abs >= 1e6) {
      return (n / 1e6).toFixed(2) + "e6";
    }
    if (abs >= 1000) {
      return Math.round(n).toLocaleString("en-US");
    }
    if (abs >= 10) {
      return n.toFixed(1);
    }
    return n.toFixed(3);
  }

  function fmtDelta(curr, prev) {
    if (!Number.isFinite(curr) || !Number.isFinite(prev) || prev === 0) {
      return { text: "—", cls: "" };
    }
    const pct = ((curr - prev) / prev) * 100;
    const cls = pct > 0.5 ? "bad" : pct < -0.5 ? "good" : "";
    const sign = pct > 0 ? "+" : "";
    return { text: `${sign}${pct.toFixed(1)}%`, cls, pct };
  }

  function median(values) {
    if (!values.length) {
      return NaN;
    }
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2) {
      return sorted[mid];
    }
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  // Latest vs median of the previous up-to-10 runs, not just the last pair.
  const TREND_WINDOW = 10;
  const TREND_MIN = 3;

  function trendVsMedian(points) {
    const values = points.map((pt) => pt.value);
    if (values.length < TREND_MIN) {
      return { text: `need ${TREND_MIN}+ runs`, cls: "", title: "Trend uses the median of prior runs once there are at least 3" };
    }
    const latest = values[values.length - 1];
    const prior = values.slice(Math.max(0, values.length - 1 - TREND_WINDOW), -1);
    const base = median(prior);
    const delta = fmtDelta(latest, base);
    const n = prior.length;
    return {
      text: `${delta.text} vs median (${n})`,
      cls: delta.cls,
      title: `Latest vs median of the previous ${n} run${n === 1 ? "" : "s"} (window up to ${TREND_WINDOW})`,
    };
  }

  function fmtWhen(ms) {
    if (!ms) {
      return "unknown";
    }
    return new Date(ms).toISOString().slice(0, 16).replace("T", " ") + " UTC";
  }

  function sparkline(values) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "spark");
    svg.setAttribute("viewBox", "0 0 120 28");
    svg.setAttribute("width", "120");
    svg.setAttribute("height", "28");
    if (values.length < 2) {
      return svg;
    }
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    const pts = values.map((v, i) => {
      const x = 2 + (i / (values.length - 1)) * 116;
      const y = 26 - ((v - min) / span) * 24;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("fill", "none");
    line.setAttribute("points", pts.join(" "));
    svg.appendChild(line);
    return svg;
  }

  function colorSpark(svg, cls) {
    if (cls) {
      svg.classList.add(cls);
    }
    return svg;
  }

  function visibleSources() {
    if (state.project === "all") {
      return state.sources.filter((s) => s.data);
    }
    return state.sources.filter((s) => s.id === state.project && s.data);
  }

  function renderStatus() {
    const box = $("status");
    box.replaceChildren();
    for (const src of state.sources) {
      const pill = document.createElement("span");
      pill.className = "pill";
      if (src.error && !src.data) {
        pill.classList.add("error");
        pill.textContent = `${src.title}: not published yet`;
      } else if (src.legacy) {
        pill.classList.add("legacy");
        pill.textContent = `${src.title}: archive (hashes are this hub)`;
      } else {
        const last = src.data.lastUpdate;
        pill.textContent = `${src.title}: ${fmtWhen(last)}`;
      }
      box.appendChild(pill);
    }
  }

  function renderOverview() {
    const root = $("overview");
    root.replaceChildren();
    for (const src of visibleSources()) {
      const series = seriesFor(src, state.metric);
      series.sort((a, b) => (b.points.at(-1)?.value || 0) - (a.points.at(-1)?.value || 0));

      const card = document.createElement("article");
      card.className = "card";
      const h = document.createElement("h2");
      h.textContent = src.title;
      card.appendChild(h);

      const sub = document.createElement("p");
      sub.className = "sub";
      const latest = series[0]?.points.at(-1);
      const commit = latest?.commit;
      const repoLink = document.createElement("a");
      repoLink.href = `https://github.com/${src.repo}`;
      repoLink.textContent = src.repo;
      sub.appendChild(repoLink);
      if (commit) {
        sub.appendChild(document.createTextNode(" · "));
        const c = document.createElement("a");
        c.href = commit.url;
        c.textContent = (commit.id || "").slice(0, 7) || "commit";
        c.title = commit.message || "";
        sub.appendChild(c);
        if (commit.message) {
          sub.appendChild(document.createTextNode(" · " + commit.message.split("\n")[0]));
        }
      }
      if (src.legacy) {
        sub.appendChild(document.createTextNode(" · archived data from this hub"));
      }
      card.appendChild(sub);

      const table = document.createElement("table");
      const thead = document.createElement("thead");
      thead.innerHTML =
        "<tr><th>Benchmark</th><th>Latest</th><th>Previous</th><th>Δ prev</th><th>Trend</th></tr>";
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      for (const row of series) {
        const last = row.points.at(-1);
        const prev = row.points.length > 1 ? row.points.at(-2) : null;
        const tr = document.createElement("tr");
        tr.className = "bench";
        tr.addEventListener("click", () => showDetail(row));

        const n = document.createElement("td");
        n.className = "name";
        n.textContent = row.name;
        tr.appendChild(n);

        const v = document.createElement("td");
        v.textContent = `${fmtNumber(last.value)} ${state.metric}`;
        tr.appendChild(v);

        const p = document.createElement("td");
        p.textContent = prev ? `${fmtNumber(prev.value)} ${state.metric}` : "—";
        tr.appendChild(p);

        const d = document.createElement("td");
        const delta = fmtDelta(last.value, prev?.value);
        d.className = "delta " + delta.cls;
        d.title = "Change from the immediately previous run";
        d.textContent = delta.text;
        tr.appendChild(d);

        const trend = trendVsMedian(row.points);
        const s = document.createElement("td");
        s.className = "trend";
        s.title = trend.title;
        s.appendChild(colorSpark(sparkline(row.points.map((pt) => pt.value)), trend.cls));
        const label = document.createElement("span");
        label.className = "delta " + trend.cls;
        label.textContent = trend.text;
        s.appendChild(label);
        tr.appendChild(s);

        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      card.appendChild(table);
      root.appendChild(card);
    }
  }

  function showDetail(row) {
    const section = $("detail");
    section.hidden = false;
    $("detail-title").textContent = `${row.title} · ${row.name}`;
    const last = row.points.at(-1);
    $("detail-meta").textContent = `${row.points.length} runs · last ${fmtWhen(last.date)} · ${state.metric}`;

    const canvas = $("detail-chart");
    if (state.chart) {
      state.chart.destroy();
      state.chart = null;
    }
    const labels = row.points.map((pt) => {
      const d = new Date(pt.date);
      return d.toISOString().slice(0, 16).replace("T", " ");
    });
    state.chart = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: `${row.name} (${state.metric})`,
            data: row.points.map((pt) => pt.value),
            borderColor: "#0b6e99",
            backgroundColor: "rgba(11, 110, 153, 0.12)",
            tension: 0.15,
            pointRadius: 3,
            pointHoverRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        resizeDelay: 50,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterTitle(items) {
                const pt = row.points[items[0].dataIndex];
                const sha = (pt.commit?.id || "").slice(0, 7);
                const msg = (pt.commit?.message || "").split("\n")[0];
                return `${sha} ${msg}`.trim();
              },
              label(item) {
                return `${fmtNumber(item.parsed.y)} ${state.metric}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: state.metric },
          },
          x: {
            title: { display: true, text: "run time (UTC)" },
            ticks: {
              maxRotation: 45,
              minRotation: 0,
              autoSkip: true,
              maxTicksLimit: 8,
            },
          },
        },
        onClick(_evt, elements) {
          if (!elements.length) {
            return;
          }
          const pt = row.points[elements[0].index];
          if (pt.commit?.url) {
            window.open(pt.commit.url, "_blank", "noopener");
          }
        },
      },
    });
    section.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function fillProjectSelect() {
    const sel = $("project");
    for (const src of SOURCES) {
      const opt = document.createElement("option");
      opt.value = src.id;
      opt.textContent = src.title;
      sel.appendChild(opt);
    }
  }

  function render() {
    renderStatus();
    renderOverview();
  }

  async function main() {
    fillProjectSelect();
    $("metric").addEventListener("change", (e) => {
      state.metric = e.target.value;
      $("detail").hidden = true;
      render();
    });
    $("project").addEventListener("change", (e) => {
      state.project = e.target.value;
      $("detail").hidden = true;
      render();
    });
    $("detail-close").addEventListener("click", () => {
      $("detail").hidden = true;
      if (state.chart) {
        state.chart.destroy();
        state.chart = null;
      }
    });

    state.sources = await Promise.all(SOURCES.map(loadSource));
    render();
  }

  main();
})();
