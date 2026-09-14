# benchmarks

Hub for Moov OSS Go benchmark history: [moov-io.github.io/benchmarks](https://moov-io.github.io/benchmarks/).

Each library runs its own suite on a schedule and stores `docs/bench/data.js` on a `bench-data` branch (default branches require PRs). The commit on the chart is the library commit that was measured.

| Project | Suite | Results |
| --- | --- | --- |
| [ACH](https://github.com/moov-io/ach) | `make bench` in `moov-io/ach` | [data](https://github.com/moov-io/ach/tree/bench-data/docs/bench) |
| [cryptfs](https://github.com/moov-io/cryptfs) | `make bench` in `moov-io/cryptfs` | [data](https://github.com/moov-io/cryptfs/tree/bench-data/docs/bench) |
| [iso8583](https://github.com/moov-io/iso8583) | `make bench` in `moov-io/iso8583` | [data](https://github.com/moov-io/iso8583/tree/bench-data/docs/bench) |
| [metro2](https://github.com/moov-io/metro2) | `make bench` in `moov-io/metro2` | [data](https://github.com/moov-io/metro2/tree/bench-data/docs/bench) |
| [pamspr](https://github.com/moov-io/pamspr) | `make bench` in `moov-io/pamspr` | [data](https://github.com/moov-io/pamspr/tree/bench-data/docs/bench) |
| [bertlv](https://github.com/moov-io/bertlv) | `make bench` in `moov-io/bertlv` | [data](https://github.com/moov-io/bertlv/tree/bench-data/docs/bench) |
| [signedxml](https://github.com/moov-io/signedxml) | `make bench` in `moov-io/signedxml` | [data](https://github.com/moov-io/signedxml/tree/bench-data/docs/bench) |
| [tr31](https://github.com/moov-io/tr31) | `make bench` in `moov-io/tr31` | [data](https://github.com/moov-io/tr31/tree/bench-data/docs/bench) |
| [wire20022](https://github.com/moov-io/wire20022) | `make bench` in `moov-io/wire20022` | [data](https://github.com/moov-io/wire20022/tree/bench-data/docs/bench) |
| [Watchman](https://github.com/moov-io/watchman) | `.github/workflows/bench.yml` | [common](https://moov-io.github.io/watchman/bench/common/), [OFAC](https://moov-io.github.io/watchman/bench/sources/ofac/), [CSL US](https://moov-io.github.io/watchman/bench/sources/csl_us/) |

What we keep in the suite is the hot path, not every `Benchmark*` helper that used to be a unit test. ACH tracks large-file read/write, merge, build, and field parse/format. cryptfs tracks AES and gzip. iso8583 tracks marshal/unpack. metro2 tracks file read. pamspr tracks streaming writers. bertlv tracks tag lookup. signedxml tracks XML encryption. tr31 tracks key unwrap. wire20022 tracks ISO 20022 parse/write. Watchman tracks search, scoring, and list ingest.

[adding-a-project.md](./docs/adding-a-project.md) is the checklist for another repo.

`docs/bench/ach` and `docs/bench/cryptfs` in *this* repo are an archive of runs from when the hub executed other modules. Those points are labeled in the UI; their Git SHAs are commits in `moov-io/benchmarks`.
