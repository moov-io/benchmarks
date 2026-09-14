# Adding a project to the benchmark hub

Run Go benchmarks **in the project repo** so `github-action-benchmark` records that project's commit, not a hash from `moov-io/benchmarks`.

Watchman already does this. ACH, cryptfs, and iso8583 follow the same layout:

- workflow: `.github/workflows/bench.yml`
- command: `make bench` writes `output.txt`
- results: `docs/bench/data.js` on the `bench-data` branch (default branches require PRs, so Actions cannot push results to `master`)
- hub: [moov-io.github.io/benchmarks](https://moov-io.github.io/benchmarks/) fetches `docs/bench/data.js` from each repo

## 1. Curate the suite

Do not `-bench .` on packages that turned unit tests into `Benchmark*` helpers. Track hot paths only: parse/write of large files, merge, search, marshal.

```make
.PHONY: bench
bench:
	go test . -count=1 -run '^$$' -bench '^(BenchmarkHotPath|BenchmarkOther)' -benchmem | tee output.txt
```

Add `output.txt` to `.gitignore`.

## 2. Workflow

Copy `.github/workflows/bench.yml` from `moov-io/ach`. Keep:

- action pins by commit SHA
- `permissions: {}` at workflow level; `contents: write` and `deployments: write` on the job
- `persist-credentials: false` on checkout
- `fetch-depth: 50` so the job can walk past previous result commits
- `gh-pages-branch: bench-data` (not `master`; default branches require PRs)
- `ref:` set to the last commit whose message does not contain `benchmark result`
- `summary-always: true` so each run shows a comparison in the job log
- `paths-ignore: ['docs/bench/**']` on the project's existing `push` CI so result commits do not re-run the test matrix

## 3. Hub catalog

Add a source in `docs/dashboard.js` in this repository:

```js
{
  id: "yourlib",
  title: "yourlib",
  repo: "moov-io/yourlib",
  urls: ["https://raw.githubusercontent.com/moov-io/yourlib/bench-data/docs/bench/data.js"],
}
```

GitHub Pages on the project is optional. The hub reads `raw.githubusercontent.com`.
