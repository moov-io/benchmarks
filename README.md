# benchmarks

Hub for Moov OSS Go benchmark history: [moov-io.github.io/benchmarks](https://moov-io.github.io/benchmarks/).

Each library runs its own suite on a schedule and stores `docs/bench/data.js` next to the code. The commit on the chart is the library commit that was measured.

| Project | Suite | Results |
| --- | --- | --- |
| [ACH](https://github.com/moov-io/ach) | `make bench` in `moov-io/ach` | [data](https://github.com/moov-io/ach/tree/master/docs/bench) |
| [cryptfs](https://github.com/moov-io/cryptfs) | `make bench` in `moov-io/cryptfs` | [data](https://github.com/moov-io/cryptfs/tree/master/docs/bench) |
| [iso8583](https://github.com/moov-io/iso8583) | `make bench` in `moov-io/iso8583` | [data](https://github.com/moov-io/iso8583/tree/master/docs/bench) |
| [Watchman](https://github.com/moov-io/watchman) | `.github/workflows/bench.yml` | [common](https://moov-io.github.io/watchman/bench/common/), [OFAC](https://moov-io.github.io/watchman/bench/sources/ofac/), [CSL US](https://moov-io.github.io/watchman/bench/sources/csl_us/) |

What we keep in the suite is the hot path, not every `Benchmark*` helper that used to be a unit test. ACH tracks large-file read/write, merge, build, and field parse/format. cryptfs tracks AES read/write and gzip. iso8583 tracks marshal and unpack. Watchman tracks search, scoring, and list ingest.

[adding-a-project.md](./docs/adding-a-project.md) is the checklist for another repo.

`docs/bench/ach` and `docs/bench/cryptfs` in *this* repo are an archive of runs from when the hub executed other modules. Those points are labeled in the UI; their Git SHAs are commits in `moov-io/benchmarks`.
