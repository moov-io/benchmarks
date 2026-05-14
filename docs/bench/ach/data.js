window.BENCHMARK_DATA = {
  "lastUpdate": 1778726856899,
  "repoUrl": "https://github.com/moov-io/benchmarks",
  "entries": {
    "moov-io/ach Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "0273dcec873a4a5cd96ed14213fb1e177e670bcf",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for dda5ab23c0a23e7a27529adcb35ee9d1af3e089f",
          "timestamp": "2026-04-19T04:48:21Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0273dcec873a4a5cd96ed14213fb1e177e670bcf"
        },
        "date": 1776651884301,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14467,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "82576 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14467,
            "unit": "ns/op",
            "extra": "82576 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "82576 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82576 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42623,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "27975 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42623,
            "unit": "ns/op",
            "extra": "27975 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "27975 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27975 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74760,
            "unit": "ns/op\t   27407 B/op\t     194 allocs/op",
            "extra": "15912 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74760,
            "unit": "ns/op",
            "extra": "15912 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27407,
            "unit": "B/op",
            "extra": "15912 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "15912 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31199,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38094 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31199,
            "unit": "ns/op",
            "extra": "38094 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38094 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 305239,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 305239,
            "unit": "ns/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 312018,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 312018,
            "unit": "ns/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98146,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98146,
            "unit": "ns/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 51076,
            "unit": "ns/op\t   34839 B/op\t     233 allocs/op",
            "extra": "23520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51076,
            "unit": "ns/op",
            "extra": "23520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34839,
            "unit": "B/op",
            "extra": "23520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23520 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 227081,
            "unit": "ns/op\t   54719 B/op\t    2069 allocs/op",
            "extra": "5546 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 227081,
            "unit": "ns/op",
            "extra": "5546 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54719,
            "unit": "B/op",
            "extra": "5546 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5546 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8906,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "139011 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8906,
            "unit": "ns/op",
            "extra": "139011 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "139011 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "139011 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154755,
            "unit": "ns/op\t   61091 B/op\t     720 allocs/op",
            "extra": "7702 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154755,
            "unit": "ns/op",
            "extra": "7702 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61091,
            "unit": "B/op",
            "extra": "7702 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7702 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604210224A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604210224A094101Federal",
            "value": 231380104,
            "unit": "1210428822604210224A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 965.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1248192 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 965.8,
            "unit": "ns/op",
            "extra": "1248192 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1248192 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1248192 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10279810 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.4,
            "unit": "ns/op",
            "extra": "10279810 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10279810 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10279810 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19209915 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.7,
            "unit": "ns/op",
            "extra": "19209915 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19209915 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19209915 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43158885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.7,
            "unit": "ns/op",
            "extra": "43158885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43158885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43158885 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91562898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.19,
            "unit": "ns/op",
            "extra": "91562898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91562898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91562898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.921,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202556619 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.921,
            "unit": "ns/op",
            "extra": "202556619 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202556619 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202556619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295272,
            "unit": "ns/op\t   59780 B/op\t     665 allocs/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295272,
            "unit": "ns/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59780,
            "unit": "B/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 294990,
            "unit": "ns/op\t   59801 B/op\t     665 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 294990,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59801,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177215,
            "unit": "ns/op\t   60197 B/op\t     669 allocs/op",
            "extra": "6308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177215,
            "unit": "ns/op",
            "extra": "6308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60197,
            "unit": "B/op",
            "extra": "6308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175258,
            "unit": "ns/op\t   60242 B/op\t     669 allocs/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175258,
            "unit": "ns/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60242,
            "unit": "B/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361304,
            "unit": "ns/op\t   65513 B/op\t     725 allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361304,
            "unit": "ns/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65513,
            "unit": "B/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361048,
            "unit": "ns/op\t   65516 B/op\t     725 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361048,
            "unit": "ns/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65516,
            "unit": "B/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353698,
            "unit": "ns/op\t   65519 B/op\t     725 allocs/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353698,
            "unit": "ns/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65519,
            "unit": "B/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348364,
            "unit": "ns/op\t   64989 B/op\t     726 allocs/op",
            "extra": "3812 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348364,
            "unit": "ns/op",
            "extra": "3812 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 64989,
            "unit": "B/op",
            "extra": "3812 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3812 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45861592 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "45861592 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45861592 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45861592 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "bedf5f92c62bb5fa931fa5ee48d23d93dba38259",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a62dff2facd6a897bb5d98a7e7b623f84a4d8ff2",
          "timestamp": "2026-04-20T04:55:33Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bedf5f92c62bb5fa931fa5ee48d23d93dba38259"
        },
        "date": 1776737544804,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14617,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81421 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14617,
            "unit": "ns/op",
            "extra": "81421 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81421 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81421 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42982,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "28155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42982,
            "unit": "ns/op",
            "extra": "28155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "28155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "28155 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75252,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "15132 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75252,
            "unit": "ns/op",
            "extra": "15132 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "15132 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "15132 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 33072,
            "unit": "ns/op\t   21884 B/op\t      82 allocs/op",
            "extra": "37833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 33072,
            "unit": "ns/op",
            "extra": "37833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21884,
            "unit": "B/op",
            "extra": "37833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "37833 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294890,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294890,
            "unit": "ns/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294247,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294247,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98529,
            "unit": "ns/op\t   29712 B/op\t     263 allocs/op",
            "extra": "12220 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98529,
            "unit": "ns/op",
            "extra": "12220 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29712,
            "unit": "B/op",
            "extra": "12220 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12220 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 52189,
            "unit": "ns/op\t   34839 B/op\t     233 allocs/op",
            "extra": "23155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 52189,
            "unit": "ns/op",
            "extra": "23155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34839,
            "unit": "B/op",
            "extra": "23155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23155 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 226049,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5473 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 226049,
            "unit": "ns/op",
            "extra": "5473 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5473 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5473 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8692,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "134665 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8692,
            "unit": "ns/op",
            "extra": "134665 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "134665 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "134665 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155358,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "7017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155358,
            "unit": "ns/op",
            "extra": "7017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "7017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7017 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604220211A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604220211A094101Federal",
            "value": 231380104,
            "unit": "1210428822604220211A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 972.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1236814 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 972.2,
            "unit": "ns/op",
            "extra": "1236814 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1236814 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1236814 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.25,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11850139 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.25,
            "unit": "ns/op",
            "extra": "11850139 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11850139 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11850139 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 64.79,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19116192 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 64.79,
            "unit": "ns/op",
            "extra": "19116192 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19116192 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19116192 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.37,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44417338 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.37,
            "unit": "ns/op",
            "extra": "44417338 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44417338 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44417338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91574665 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.45,
            "unit": "ns/op",
            "extra": "91574665 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91574665 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91574665 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.971,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198582051 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.971,
            "unit": "ns/op",
            "extra": "198582051 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "198582051 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "198582051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298119,
            "unit": "ns/op\t   59787 B/op\t     665 allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298119,
            "unit": "ns/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59787,
            "unit": "B/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306852,
            "unit": "ns/op\t   59805 B/op\t     665 allocs/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306852,
            "unit": "ns/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59805,
            "unit": "B/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173713,
            "unit": "ns/op\t   60197 B/op\t     669 allocs/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173713,
            "unit": "ns/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60197,
            "unit": "B/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 166563,
            "unit": "ns/op\t   60241 B/op\t     669 allocs/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 166563,
            "unit": "ns/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60241,
            "unit": "B/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360836,
            "unit": "ns/op\t   65517 B/op\t     725 allocs/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360836,
            "unit": "ns/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65517,
            "unit": "B/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351667,
            "unit": "ns/op\t   65522 B/op\t     725 allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351667,
            "unit": "ns/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65522,
            "unit": "B/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351596,
            "unit": "ns/op\t   65521 B/op\t     725 allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351596,
            "unit": "ns/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65521,
            "unit": "B/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343976,
            "unit": "ns/op\t   65575 B/op\t     726 allocs/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343976,
            "unit": "ns/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65575,
            "unit": "B/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44974634 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.88,
            "unit": "ns/op",
            "extra": "44974634 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44974634 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44974634 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "8ff0b6e9dfe2970e51814713d62ebd2367f33ff2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e1e951ea5a0fc089855a2dc69ebc23bcc7c7bc71",
          "timestamp": "2026-04-21T04:46:15Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8ff0b6e9dfe2970e51814713d62ebd2367f33ff2"
        },
        "date": 1776823839541,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 15701,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "64557 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 15701,
            "unit": "ns/op",
            "extra": "64557 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "64557 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "64557 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42257,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "28393 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42257,
            "unit": "ns/op",
            "extra": "28393 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "28393 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "28393 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 77784,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "16065 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 77784,
            "unit": "ns/op",
            "extra": "16065 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "16065 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16065 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31368,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31368,
            "unit": "ns/op",
            "extra": "38467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38467 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293675,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293675,
            "unit": "ns/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292295,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292295,
            "unit": "ns/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97013,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12318 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97013,
            "unit": "ns/op",
            "extra": "12318 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12318 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12318 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50707,
            "unit": "ns/op\t   34839 B/op\t     233 allocs/op",
            "extra": "23565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50707,
            "unit": "ns/op",
            "extra": "23565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34839,
            "unit": "B/op",
            "extra": "23565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23565 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 224308,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5638 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 224308,
            "unit": "ns/op",
            "extra": "5638 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5638 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5638 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8490,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "140052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8490,
            "unit": "ns/op",
            "extra": "140052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "140052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "140052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152454,
            "unit": "ns/op\t   61089 B/op\t     720 allocs/op",
            "extra": "7309 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152454,
            "unit": "ns/op",
            "extra": "7309 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61089,
            "unit": "B/op",
            "extra": "7309 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604230210A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604230210A094101Federal",
            "value": 231380104,
            "unit": "1210428822604230210A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 958.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1253691 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 958.9,
            "unit": "ns/op",
            "extra": "1253691 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1253691 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1253691 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.39,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12066517 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.39,
            "unit": "ns/op",
            "extra": "12066517 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12066517 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12066517 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19301646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.6,
            "unit": "ns/op",
            "extra": "19301646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19301646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19301646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43429669 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.02,
            "unit": "ns/op",
            "extra": "43429669 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43429669 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43429669 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91454833 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.32,
            "unit": "ns/op",
            "extra": "91454833 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91454833 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91454833 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202394275 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202394275 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202394275 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202394275 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 321559,
            "unit": "ns/op\t   59804 B/op\t     665 allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 321559,
            "unit": "ns/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59804,
            "unit": "B/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293852,
            "unit": "ns/op\t   59799 B/op\t     665 allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293852,
            "unit": "ns/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59799,
            "unit": "B/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177204,
            "unit": "ns/op\t   60208 B/op\t     669 allocs/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177204,
            "unit": "ns/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60208,
            "unit": "B/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 179619,
            "unit": "ns/op\t   60228 B/op\t     669 allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 179619,
            "unit": "ns/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60228,
            "unit": "B/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 353309,
            "unit": "ns/op\t   65534 B/op\t     725 allocs/op",
            "extra": "3484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 353309,
            "unit": "ns/op",
            "extra": "3484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65534,
            "unit": "B/op",
            "extra": "3484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 350971,
            "unit": "ns/op\t   65493 B/op\t     725 allocs/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 350971,
            "unit": "ns/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65493,
            "unit": "B/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 343782,
            "unit": "ns/op\t   65538 B/op\t     725 allocs/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 343782,
            "unit": "ns/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65538,
            "unit": "B/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341335,
            "unit": "ns/op\t   65530 B/op\t     726 allocs/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341335,
            "unit": "ns/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65530,
            "unit": "B/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46419655 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.9,
            "unit": "ns/op",
            "extra": "46419655 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46419655 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46419655 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "28727039bc994656412edfe833ecaeda779df5ee",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5564a1a3b3646cfea032dd5634a7756109de0bd7",
          "timestamp": "2026-04-22T04:44:28Z",
          "url": "https://github.com/moov-io/benchmarks/commit/28727039bc994656412edfe833ecaeda779df5ee"
        },
        "date": 1776910453215,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13617,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "87578 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13617,
            "unit": "ns/op",
            "extra": "87578 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "87578 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87578 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36518,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "32727 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36518,
            "unit": "ns/op",
            "extra": "32727 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "32727 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "32727 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 65765,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "18250 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 65765,
            "unit": "ns/op",
            "extra": "18250 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "18250 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "18250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 27899,
            "unit": "ns/op\t   21884 B/op\t      82 allocs/op",
            "extra": "45494 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 27899,
            "unit": "ns/op",
            "extra": "45494 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21884,
            "unit": "B/op",
            "extra": "45494 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "45494 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 270309,
            "unit": "ns/op\t   60434 B/op\t     809 allocs/op",
            "extra": "4464 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 270309,
            "unit": "ns/op",
            "extra": "4464 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60434,
            "unit": "B/op",
            "extra": "4464 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4464 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 265895,
            "unit": "ns/op\t   60433 B/op\t     809 allocs/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 265895,
            "unit": "ns/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60433,
            "unit": "B/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 87321,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "13728 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 87321,
            "unit": "ns/op",
            "extra": "13728 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "13728 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "13728 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49913,
            "unit": "ns/op\t   34839 B/op\t     233 allocs/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49913,
            "unit": "ns/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34839,
            "unit": "B/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209075,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5786 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209075,
            "unit": "ns/op",
            "extra": "5786 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5786 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5786 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8518,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "147243 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8518,
            "unit": "ns/op",
            "extra": "147243 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "147243 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147243 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144243,
            "unit": "ns/op\t   61091 B/op\t     720 allocs/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144243,
            "unit": "ns/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61091,
            "unit": "B/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7840 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604240213A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604240213A094101Federal",
            "value": 231380104,
            "unit": "1210428822604240213A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1003,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 88.05,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13430218 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 88.05,
            "unit": "ns/op",
            "extra": "13430218 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13430218 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13430218 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 55.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20861601 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 55.92,
            "unit": "ns/op",
            "extra": "20861601 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20861601 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20861601 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 23.61,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "48982770 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 23.61,
            "unit": "ns/op",
            "extra": "48982770 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "48982770 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "48982770 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 11.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 11.64,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 4.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "240341556 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 4.98,
            "unit": "ns/op",
            "extra": "240341556 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "240341556 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "240341556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 267180,
            "unit": "ns/op\t   59789 B/op\t     665 allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 267180,
            "unit": "ns/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59789,
            "unit": "B/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 272952,
            "unit": "ns/op\t   59810 B/op\t     665 allocs/op",
            "extra": "4441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 272952,
            "unit": "ns/op",
            "extra": "4441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59810,
            "unit": "B/op",
            "extra": "4441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 186043,
            "unit": "ns/op\t   60195 B/op\t     669 allocs/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 186043,
            "unit": "ns/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60195,
            "unit": "B/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 204089,
            "unit": "ns/op\t   60224 B/op\t     669 allocs/op",
            "extra": "6100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 204089,
            "unit": "ns/op",
            "extra": "6100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60224,
            "unit": "B/op",
            "extra": "6100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 322223,
            "unit": "ns/op\t   65514 B/op\t     725 allocs/op",
            "extra": "3679 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 322223,
            "unit": "ns/op",
            "extra": "3679 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65514,
            "unit": "B/op",
            "extra": "3679 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3679 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 320807,
            "unit": "ns/op\t   65490 B/op\t     725 allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 320807,
            "unit": "ns/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65490,
            "unit": "B/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 315614,
            "unit": "ns/op\t   65476 B/op\t     725 allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 315614,
            "unit": "ns/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65476,
            "unit": "B/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 310995,
            "unit": "ns/op\t   65389 B/op\t     726 allocs/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 310995,
            "unit": "ns/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65389,
            "unit": "B/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52616566 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.7,
            "unit": "ns/op",
            "extra": "52616566 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52616566 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52616566 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "12a1214373b969bcf7ff940226c26ecb802189e6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b16ec0faa94517c4e93802aed0c859bd96ea9396",
          "timestamp": "2026-04-23T04:48:11Z",
          "url": "https://github.com/moov-io/benchmarks/commit/12a1214373b969bcf7ff940226c26ecb802189e6"
        },
        "date": 1776996883410,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14427,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "83461 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14427,
            "unit": "ns/op",
            "extra": "83461 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "83461 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "83461 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42384,
            "unit": "ns/op\t   23349 B/op\t     119 allocs/op",
            "extra": "28383 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42384,
            "unit": "ns/op",
            "extra": "28383 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23349,
            "unit": "B/op",
            "extra": "28383 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "28383 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74965,
            "unit": "ns/op\t   27407 B/op\t     194 allocs/op",
            "extra": "16029 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74965,
            "unit": "ns/op",
            "extra": "16029 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27407,
            "unit": "B/op",
            "extra": "16029 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16029 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31277,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38479 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31277,
            "unit": "ns/op",
            "extra": "38479 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38479 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38479 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292576,
            "unit": "ns/op\t   60433 B/op\t     809 allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292576,
            "unit": "ns/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60433,
            "unit": "B/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295951,
            "unit": "ns/op\t   60434 B/op\t     809 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295951,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60434,
            "unit": "B/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96967,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12430 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96967,
            "unit": "ns/op",
            "extra": "12430 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12430 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12430 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50737,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "23659 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50737,
            "unit": "ns/op",
            "extra": "23659 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "23659 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23659 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 226790,
            "unit": "ns/op\t   54718 B/op\t    2069 allocs/op",
            "extra": "5082 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 226790,
            "unit": "ns/op",
            "extra": "5082 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54718,
            "unit": "B/op",
            "extra": "5082 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5082 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8498,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "138565 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8498,
            "unit": "ns/op",
            "extra": "138565 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "138565 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "138565 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153805,
            "unit": "ns/op\t   61089 B/op\t     720 allocs/op",
            "extra": "7483 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153805,
            "unit": "ns/op",
            "extra": "7483 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61089,
            "unit": "B/op",
            "extra": "7483 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604250214A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604250214A094101Federal",
            "value": 231380104,
            "unit": "1210428822604250214A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 951.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1238586 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 951.7,
            "unit": "ns/op",
            "extra": "1238586 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1238586 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1238586 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.59,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12072325 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.59,
            "unit": "ns/op",
            "extra": "12072325 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12072325 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12072325 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.07,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19233964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.07,
            "unit": "ns/op",
            "extra": "19233964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19233964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19233964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43686771 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.55,
            "unit": "ns/op",
            "extra": "43686771 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43686771 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43686771 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91398675 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.12,
            "unit": "ns/op",
            "extra": "91398675 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91398675 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91398675 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.924,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202480900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.924,
            "unit": "ns/op",
            "extra": "202480900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202480900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202480900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294543,
            "unit": "ns/op\t   59789 B/op\t     665 allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294543,
            "unit": "ns/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59789,
            "unit": "B/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296697,
            "unit": "ns/op\t   59816 B/op\t     665 allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296697,
            "unit": "ns/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59816,
            "unit": "B/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176550,
            "unit": "ns/op\t   60193 B/op\t     669 allocs/op",
            "extra": "6212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176550,
            "unit": "ns/op",
            "extra": "6212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60193,
            "unit": "B/op",
            "extra": "6212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 189852,
            "unit": "ns/op\t   60226 B/op\t     669 allocs/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 189852,
            "unit": "ns/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60226,
            "unit": "B/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354701,
            "unit": "ns/op\t   65537 B/op\t     725 allocs/op",
            "extra": "3324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354701,
            "unit": "ns/op",
            "extra": "3324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65537,
            "unit": "B/op",
            "extra": "3324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351047,
            "unit": "ns/op\t   65504 B/op\t     725 allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351047,
            "unit": "ns/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65504,
            "unit": "B/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348865,
            "unit": "ns/op\t   65486 B/op\t     725 allocs/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348865,
            "unit": "ns/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65486,
            "unit": "B/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343499,
            "unit": "ns/op\t   65478 B/op\t     726 allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343499,
            "unit": "ns/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65478,
            "unit": "B/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46314931 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.91,
            "unit": "ns/op",
            "extra": "46314931 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46314931 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46314931 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "0ca2eec589333de1ac0be19bb6cf8cf63971873d",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1384b884e08122d2105b7cc9b9a027e026c0383e",
          "timestamp": "2026-04-24T04:52:37Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0ca2eec589333de1ac0be19bb6cf8cf63971873d"
        },
        "date": 1777082707742,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13071,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "91160 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13071,
            "unit": "ns/op",
            "extra": "91160 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "91160 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "91160 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41939,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "27362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41939,
            "unit": "ns/op",
            "extra": "27362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "27362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27362 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72992,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "16419 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72992,
            "unit": "ns/op",
            "extra": "16419 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "16419 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31336,
            "unit": "ns/op\t   21882 B/op\t      82 allocs/op",
            "extra": "38475 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31336,
            "unit": "ns/op",
            "extra": "38475 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21882,
            "unit": "B/op",
            "extra": "38475 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38475 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 283641,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 283641,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 286033,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 286033,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95047,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12051 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95047,
            "unit": "ns/op",
            "extra": "12051 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12051 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12051 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47373,
            "unit": "ns/op\t   34837 B/op\t     233 allocs/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47373,
            "unit": "ns/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34837,
            "unit": "B/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "25315 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 194871,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5979 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 194871,
            "unit": "ns/op",
            "extra": "5979 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5979 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5979 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7854,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "152841 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7854,
            "unit": "ns/op",
            "extra": "152841 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "152841 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "152841 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147491,
            "unit": "ns/op\t   61088 B/op\t     720 allocs/op",
            "extra": "7375 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147491,
            "unit": "ns/op",
            "extra": "7375 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61088,
            "unit": "B/op",
            "extra": "7375 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7375 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604260204A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604260204A094101Federal",
            "value": 231380104,
            "unit": "1210428822604260204A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 902,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1340211 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 902,
            "unit": "ns/op",
            "extra": "1340211 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1340211 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1340211 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11719981 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.4,
            "unit": "ns/op",
            "extra": "11719981 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11719981 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11719981 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.31,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19647865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.31,
            "unit": "ns/op",
            "extra": "19647865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19647865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19647865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.79,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44549908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.79,
            "unit": "ns/op",
            "extra": "44549908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44549908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44549908 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86210383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.08,
            "unit": "ns/op",
            "extra": "86210383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86210383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86210383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.877,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "209303892 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.877,
            "unit": "ns/op",
            "extra": "209303892 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "209303892 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "209303892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302972,
            "unit": "ns/op\t   59799 B/op\t     665 allocs/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302972,
            "unit": "ns/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59799,
            "unit": "B/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293575,
            "unit": "ns/op\t   59813 B/op\t     665 allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293575,
            "unit": "ns/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59813,
            "unit": "B/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173503,
            "unit": "ns/op\t   60211 B/op\t     669 allocs/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173503,
            "unit": "ns/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60211,
            "unit": "B/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169366,
            "unit": "ns/op\t   60234 B/op\t     669 allocs/op",
            "extra": "7098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169366,
            "unit": "ns/op",
            "extra": "7098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60234,
            "unit": "B/op",
            "extra": "7098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356661,
            "unit": "ns/op\t   65547 B/op\t     725 allocs/op",
            "extra": "3217 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356661,
            "unit": "ns/op",
            "extra": "3217 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65547,
            "unit": "B/op",
            "extra": "3217 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3217 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 343386,
            "unit": "ns/op\t   65506 B/op\t     725 allocs/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 343386,
            "unit": "ns/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65506,
            "unit": "B/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345000,
            "unit": "ns/op\t   65478 B/op\t     725 allocs/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345000,
            "unit": "ns/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65478,
            "unit": "B/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 334132,
            "unit": "ns/op\t   65526 B/op\t     726 allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 334132,
            "unit": "ns/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65526,
            "unit": "B/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48490006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.05,
            "unit": "ns/op",
            "extra": "48490006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48490006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48490006 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "08c677087fc5cae510d3d4d14d9b178f1aa7b742",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7dab5047524496907c50202754051154ac7d1752",
          "timestamp": "2026-04-25T04:34:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/08c677087fc5cae510d3d4d14d9b178f1aa7b742"
        },
        "date": 1777170454843,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 10652,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "117072 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 10652,
            "unit": "ns/op",
            "extra": "117072 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "117072 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "117072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 32453,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "36812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 32453,
            "unit": "ns/op",
            "extra": "36812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "36812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "36812 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 56657,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "21019 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 56657,
            "unit": "ns/op",
            "extra": "21019 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "21019 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "21019 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 24274,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "48973 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 24274,
            "unit": "ns/op",
            "extra": "48973 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "48973 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "48973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 226269,
            "unit": "ns/op\t   60430 B/op\t     809 allocs/op",
            "extra": "5200 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 226269,
            "unit": "ns/op",
            "extra": "5200 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60430,
            "unit": "B/op",
            "extra": "5200 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "5200 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 220808,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "5230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 220808,
            "unit": "ns/op",
            "extra": "5230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "5230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "5230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 73868,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "16281 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 73868,
            "unit": "ns/op",
            "extra": "16281 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "16281 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "16281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 36768,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "32641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 36768,
            "unit": "ns/op",
            "extra": "32641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "32641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "32641 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 150279,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "8324 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 150279,
            "unit": "ns/op",
            "extra": "8324 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "8324 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "8324 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6134,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "184585 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6134,
            "unit": "ns/op",
            "extra": "184585 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "184585 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "184585 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 117327,
            "unit": "ns/op\t   61089 B/op\t     720 allocs/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 117327,
            "unit": "ns/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61089,
            "unit": "B/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604270226A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604270226A094101Federal",
            "value": 231380104,
            "unit": "1210428822604270226A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 696.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1729215 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 696.7,
            "unit": "ns/op",
            "extra": "1729215 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1729215 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1729215 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 77.34,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13720282 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 77.34,
            "unit": "ns/op",
            "extra": "13720282 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13720282 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13720282 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 46.03,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "24988732 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 46.03,
            "unit": "ns/op",
            "extra": "24988732 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "24988732 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "24988732 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 20.26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57064593 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 20.26,
            "unit": "ns/op",
            "extra": "57064593 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "57064593 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "57064593 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 10.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 10.65,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 4.593,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "269530683 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 4.593,
            "unit": "ns/op",
            "extra": "269530683 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "269530683 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "269530683 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 237110,
            "unit": "ns/op\t   59791 B/op\t     665 allocs/op",
            "extra": "5496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 237110,
            "unit": "ns/op",
            "extra": "5496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59791,
            "unit": "B/op",
            "extra": "5496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "5496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 239638,
            "unit": "ns/op\t   59815 B/op\t     665 allocs/op",
            "extra": "5148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 239638,
            "unit": "ns/op",
            "extra": "5148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59815,
            "unit": "B/op",
            "extra": "5148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "5148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 136389,
            "unit": "ns/op\t   60205 B/op\t     669 allocs/op",
            "extra": "8793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 136389,
            "unit": "ns/op",
            "extra": "8793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60205,
            "unit": "B/op",
            "extra": "8793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "8793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 136347,
            "unit": "ns/op\t   60244 B/op\t     669 allocs/op",
            "extra": "9148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 136347,
            "unit": "ns/op",
            "extra": "9148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60244,
            "unit": "B/op",
            "extra": "9148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "9148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 278847,
            "unit": "ns/op\t   65516 B/op\t     725 allocs/op",
            "extra": "4389 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 278847,
            "unit": "ns/op",
            "extra": "4389 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65516,
            "unit": "B/op",
            "extra": "4389 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "4389 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 283294,
            "unit": "ns/op\t   65530 B/op\t     725 allocs/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 283294,
            "unit": "ns/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65530,
            "unit": "B/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 279041,
            "unit": "ns/op\t   65607 B/op\t     725 allocs/op",
            "extra": "4803 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 279041,
            "unit": "ns/op",
            "extra": "4803 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65607,
            "unit": "B/op",
            "extra": "4803 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "4803 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 276580,
            "unit": "ns/op\t   65159 B/op\t     726 allocs/op",
            "extra": "5078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 276580,
            "unit": "ns/op",
            "extra": "5078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65159,
            "unit": "B/op",
            "extra": "5078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "5078 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 19.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62453673 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 19.18,
            "unit": "ns/op",
            "extra": "62453673 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62453673 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62453673 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "f321e93840c64c8f487cc57f84f9fd5240101807",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 751b451ae7b6ed8ff68eb4a412cbd598eec07fdf",
          "timestamp": "2026-04-26T04:56:41Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f321e93840c64c8f487cc57f84f9fd5240101807"
        },
        "date": 1777256970412,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14245,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "82143 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14245,
            "unit": "ns/op",
            "extra": "82143 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "82143 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82143 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42005,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "28498 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42005,
            "unit": "ns/op",
            "extra": "28498 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "28498 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "28498 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76740,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "16086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76740,
            "unit": "ns/op",
            "extra": "16086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "16086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31680,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38077 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31680,
            "unit": "ns/op",
            "extra": "38077 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38077 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38077 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292965,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292965,
            "unit": "ns/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293141,
            "unit": "ns/op\t   60430 B/op\t     809 allocs/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293141,
            "unit": "ns/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60430,
            "unit": "B/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96636,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12373 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96636,
            "unit": "ns/op",
            "extra": "12373 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12373 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12373 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50382,
            "unit": "ns/op\t   34839 B/op\t     233 allocs/op",
            "extra": "23726 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50382,
            "unit": "ns/op",
            "extra": "23726 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34839,
            "unit": "B/op",
            "extra": "23726 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23726 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 227311,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5702 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 227311,
            "unit": "ns/op",
            "extra": "5702 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5702 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5702 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8515,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "124735 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8515,
            "unit": "ns/op",
            "extra": "124735 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "124735 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "124735 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156310,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "7273 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156310,
            "unit": "ns/op",
            "extra": "7273 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "7273 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7273 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604280228A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604280228A094101Federal",
            "value": 231380104,
            "unit": "1210428822604280228A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 956,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1253812 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 956,
            "unit": "ns/op",
            "extra": "1253812 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1253812 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1253812 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.94,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11625163 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.94,
            "unit": "ns/op",
            "extra": "11625163 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11625163 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11625163 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.27,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19322553 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.27,
            "unit": "ns/op",
            "extra": "19322553 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19322553 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19322553 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43712341 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.76,
            "unit": "ns/op",
            "extra": "43712341 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43712341 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43712341 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91388917 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.34,
            "unit": "ns/op",
            "extra": "91388917 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91388917 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91388917 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.927,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202639660 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.927,
            "unit": "ns/op",
            "extra": "202639660 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202639660 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202639660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292175,
            "unit": "ns/op\t   59785 B/op\t     665 allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292175,
            "unit": "ns/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59785,
            "unit": "B/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293207,
            "unit": "ns/op\t   59811 B/op\t     665 allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293207,
            "unit": "ns/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59811,
            "unit": "B/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175583,
            "unit": "ns/op\t   60186 B/op\t     669 allocs/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175583,
            "unit": "ns/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60186,
            "unit": "B/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170881,
            "unit": "ns/op\t   60224 B/op\t     669 allocs/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170881,
            "unit": "ns/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60224,
            "unit": "B/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 350291,
            "unit": "ns/op\t   65508 B/op\t     725 allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 350291,
            "unit": "ns/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65508,
            "unit": "B/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351928,
            "unit": "ns/op\t   65510 B/op\t     725 allocs/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351928,
            "unit": "ns/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65510,
            "unit": "B/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 341130,
            "unit": "ns/op\t   65499 B/op\t     725 allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 341130,
            "unit": "ns/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65499,
            "unit": "B/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342190,
            "unit": "ns/op\t   65538 B/op\t     726 allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342190,
            "unit": "ns/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65538,
            "unit": "B/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46231366 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.34,
            "unit": "ns/op",
            "extra": "46231366 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46231366 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46231366 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "db2b6456b0df3333ed805032284f35c1e42c85cd",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f45d1f4f002c30d1a1c8bf58b74d9e6a6c1355ce",
          "timestamp": "2026-04-27T05:20:28Z",
          "url": "https://github.com/moov-io/benchmarks/commit/db2b6456b0df3333ed805032284f35c1e42c85cd"
        },
        "date": 1777343824812,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14458,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "83292 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14458,
            "unit": "ns/op",
            "extra": "83292 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "83292 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "83292 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43818,
            "unit": "ns/op\t   23349 B/op\t     119 allocs/op",
            "extra": "26662 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43818,
            "unit": "ns/op",
            "extra": "26662 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23349,
            "unit": "B/op",
            "extra": "26662 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "26662 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 79278,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "15718 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 79278,
            "unit": "ns/op",
            "extra": "15718 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "15718 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "15718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31399,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31399,
            "unit": "ns/op",
            "extra": "38488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38488 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 305452,
            "unit": "ns/op\t   60433 B/op\t     809 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 305452,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60433,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294400,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294400,
            "unit": "ns/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98100,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12313 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98100,
            "unit": "ns/op",
            "extra": "12313 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12313 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12313 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 51136,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "23527 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51136,
            "unit": "ns/op",
            "extra": "23527 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "23527 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23527 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 232283,
            "unit": "ns/op\t   54719 B/op\t    2069 allocs/op",
            "extra": "5206 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 232283,
            "unit": "ns/op",
            "extra": "5206 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54719,
            "unit": "B/op",
            "extra": "5206 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5206 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8489,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "138650 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8489,
            "unit": "ns/op",
            "extra": "138650 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "138650 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "138650 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 158988,
            "unit": "ns/op\t   61092 B/op\t     720 allocs/op",
            "extra": "7315 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 158988,
            "unit": "ns/op",
            "extra": "7315 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61092,
            "unit": "B/op",
            "extra": "7315 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7315 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604290236A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604290236A094101Federal",
            "value": 231380104,
            "unit": "1210428822604290236A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 966.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1241966 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 966.6,
            "unit": "ns/op",
            "extra": "1241966 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1241966 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1241966 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.65,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12116821 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.65,
            "unit": "ns/op",
            "extra": "12116821 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12116821 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12116821 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.98,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19305214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.98,
            "unit": "ns/op",
            "extra": "19305214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19305214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19305214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42347862 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.03,
            "unit": "ns/op",
            "extra": "42347862 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "42347862 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "42347862 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91555730 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.41,
            "unit": "ns/op",
            "extra": "91555730 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91555730 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91555730 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202599794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.93,
            "unit": "ns/op",
            "extra": "202599794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202599794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202599794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293291,
            "unit": "ns/op\t   59785 B/op\t     665 allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293291,
            "unit": "ns/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59785,
            "unit": "B/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298308,
            "unit": "ns/op\t   59795 B/op\t     665 allocs/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298308,
            "unit": "ns/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59795,
            "unit": "B/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170438,
            "unit": "ns/op\t   60196 B/op\t     669 allocs/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170438,
            "unit": "ns/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60196,
            "unit": "B/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173704,
            "unit": "ns/op\t   60229 B/op\t     669 allocs/op",
            "extra": "6220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173704,
            "unit": "ns/op",
            "extra": "6220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60229,
            "unit": "B/op",
            "extra": "6220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 374403,
            "unit": "ns/op\t   65537 B/op\t     725 allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 374403,
            "unit": "ns/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65537,
            "unit": "B/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 374051,
            "unit": "ns/op\t   65560 B/op\t     725 allocs/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 374051,
            "unit": "ns/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65560,
            "unit": "B/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351651,
            "unit": "ns/op\t   65610 B/op\t     725 allocs/op",
            "extra": "3190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351651,
            "unit": "ns/op",
            "extra": "3190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65610,
            "unit": "B/op",
            "extra": "3190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346279,
            "unit": "ns/op\t   64980 B/op\t     726 allocs/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346279,
            "unit": "ns/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 64980,
            "unit": "B/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45773085 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.98,
            "unit": "ns/op",
            "extra": "45773085 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45773085 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45773085 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "bad1415ea1ad437504c5a1fa9e01d783ff75bcf7",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 22ae481ef311e729857616069f6c667c67ed0222",
          "timestamp": "2026-04-28T05:28:15Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bad1415ea1ad437504c5a1fa9e01d783ff75bcf7"
        },
        "date": 1777430211508,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14853,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81793 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14853,
            "unit": "ns/op",
            "extra": "81793 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81793 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81793 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42568,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "27838 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42568,
            "unit": "ns/op",
            "extra": "27838 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "27838 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27838 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75296,
            "unit": "ns/op\t   27407 B/op\t     194 allocs/op",
            "extra": "16010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75296,
            "unit": "ns/op",
            "extra": "16010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27407,
            "unit": "B/op",
            "extra": "16010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31913,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "32344 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31913,
            "unit": "ns/op",
            "extra": "32344 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "32344 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "32344 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296950,
            "unit": "ns/op\t   60435 B/op\t     809 allocs/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296950,
            "unit": "ns/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60435,
            "unit": "B/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296671,
            "unit": "ns/op\t   60433 B/op\t     809 allocs/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296671,
            "unit": "ns/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60433,
            "unit": "B/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100242,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100242,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50314,
            "unit": "ns/op\t   34839 B/op\t     233 allocs/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50314,
            "unit": "ns/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34839,
            "unit": "B/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 224804,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 224804,
            "unit": "ns/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8951,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "127542 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8951,
            "unit": "ns/op",
            "extra": "127542 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "127542 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "127542 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154024,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "7597 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154024,
            "unit": "ns/op",
            "extra": "7597 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "7597 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7597 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822604300236A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822604300236A094101Federal",
            "value": 231380104,
            "unit": "1210428822604300236A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1031,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1031,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.22,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12016202 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.22,
            "unit": "ns/op",
            "extra": "12016202 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12016202 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12016202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.53,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18132033 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.53,
            "unit": "ns/op",
            "extra": "18132033 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18132033 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18132033 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43181362 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.3,
            "unit": "ns/op",
            "extra": "43181362 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43181362 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43181362 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91318147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.43,
            "unit": "ns/op",
            "extra": "91318147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91318147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91318147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.933,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202531930 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.933,
            "unit": "ns/op",
            "extra": "202531930 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202531930 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202531930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 309124,
            "unit": "ns/op\t   59787 B/op\t     665 allocs/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 309124,
            "unit": "ns/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59787,
            "unit": "B/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309616,
            "unit": "ns/op\t   59809 B/op\t     665 allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309616,
            "unit": "ns/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59809,
            "unit": "B/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174221,
            "unit": "ns/op\t   60195 B/op\t     669 allocs/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174221,
            "unit": "ns/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60195,
            "unit": "B/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 193420,
            "unit": "ns/op\t   60229 B/op\t     669 allocs/op",
            "extra": "5877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 193420,
            "unit": "ns/op",
            "extra": "5877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60229,
            "unit": "B/op",
            "extra": "5877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365307,
            "unit": "ns/op\t   65542 B/op\t     725 allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365307,
            "unit": "ns/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65542,
            "unit": "B/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359379,
            "unit": "ns/op\t   65509 B/op\t     725 allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359379,
            "unit": "ns/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65509,
            "unit": "B/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350303,
            "unit": "ns/op\t   65509 B/op\t     725 allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350303,
            "unit": "ns/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65509,
            "unit": "B/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 349736,
            "unit": "ns/op\t   65575 B/op\t     726 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349736,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65575,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46383714 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.22,
            "unit": "ns/op",
            "extra": "46383714 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46383714 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46383714 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "fa4f24a60785a7af24a44e6c74061c5bb764c37e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 04de8bca7f257c62ba23adb4e844d50ca71349d0",
          "timestamp": "2026-04-29T05:24:01Z",
          "url": "https://github.com/moov-io/benchmarks/commit/fa4f24a60785a7af24a44e6c74061c5bb764c37e"
        },
        "date": 1777516680783,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13014,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "91330 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13014,
            "unit": "ns/op",
            "extra": "91330 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "91330 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "91330 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41730,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "28629 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41730,
            "unit": "ns/op",
            "extra": "28629 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "28629 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "28629 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76313,
            "unit": "ns/op\t   27405 B/op\t     194 allocs/op",
            "extra": "16525 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76313,
            "unit": "ns/op",
            "extra": "16525 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27405,
            "unit": "B/op",
            "extra": "16525 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16525 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31180,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38529 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31180,
            "unit": "ns/op",
            "extra": "38529 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38529 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38529 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 283884,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 283884,
            "unit": "ns/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 284077,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 284077,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94575,
            "unit": "ns/op\t   29710 B/op\t     263 allocs/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94575,
            "unit": "ns/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29710,
            "unit": "B/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47356,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47356,
            "unit": "ns/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205182,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6174 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205182,
            "unit": "ns/op",
            "extra": "6174 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6174 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6174 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7859,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "144613 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7859,
            "unit": "ns/op",
            "extra": "144613 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "144613 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144613 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147484,
            "unit": "ns/op\t   61089 B/op\t     720 allocs/op",
            "extra": "7843 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147484,
            "unit": "ns/op",
            "extra": "7843 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61089,
            "unit": "B/op",
            "extra": "7843 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7843 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605010237A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605010237A094101Federal",
            "value": 231380104,
            "unit": "1210428822605010237A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 896,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1336072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 896,
            "unit": "ns/op",
            "extra": "1336072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1336072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1336072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11720794 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "11720794 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11720794 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11720794 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 58.86,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19827051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 58.86,
            "unit": "ns/op",
            "extra": "19827051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19827051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19827051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44113122 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.03,
            "unit": "ns/op",
            "extra": "44113122 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44113122 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44113122 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81914640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.92,
            "unit": "ns/op",
            "extra": "81914640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "81914640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "81914640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.997,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "208407933 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.997,
            "unit": "ns/op",
            "extra": "208407933 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "208407933 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "208407933 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293740,
            "unit": "ns/op\t   59791 B/op\t     665 allocs/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293740,
            "unit": "ns/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59791,
            "unit": "B/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298515,
            "unit": "ns/op\t   59816 B/op\t     665 allocs/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298515,
            "unit": "ns/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59816,
            "unit": "B/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168712,
            "unit": "ns/op\t   60188 B/op\t     669 allocs/op",
            "extra": "6541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168712,
            "unit": "ns/op",
            "extra": "6541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60188,
            "unit": "B/op",
            "extra": "6541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168171,
            "unit": "ns/op\t   60237 B/op\t     669 allocs/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168171,
            "unit": "ns/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60237,
            "unit": "B/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365031,
            "unit": "ns/op\t   65520 B/op\t     725 allocs/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365031,
            "unit": "ns/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65520,
            "unit": "B/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351595,
            "unit": "ns/op\t   65493 B/op\t     725 allocs/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351595,
            "unit": "ns/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65493,
            "unit": "B/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345873,
            "unit": "ns/op\t   65504 B/op\t     725 allocs/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345873,
            "unit": "ns/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65504,
            "unit": "B/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346144,
            "unit": "ns/op\t   65525 B/op\t     726 allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346144,
            "unit": "ns/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65525,
            "unit": "B/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49964462 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.48,
            "unit": "ns/op",
            "extra": "49964462 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49964462 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49964462 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "daa5edef9af2a9459f8d16a6e0519339a347e31e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 703cd1590ee75cad869fb376e4f7a6589a4003f3",
          "timestamp": "2026-04-30T05:27:50Z",
          "url": "https://github.com/moov-io/benchmarks/commit/daa5edef9af2a9459f8d16a6e0519339a347e31e"
        },
        "date": 1777603438448,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13081,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "91581 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13081,
            "unit": "ns/op",
            "extra": "91581 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "91581 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "91581 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42022,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "28707 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42022,
            "unit": "ns/op",
            "extra": "28707 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "28707 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "28707 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72684,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "16471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72684,
            "unit": "ns/op",
            "extra": "16471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "16471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31405,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38737 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31405,
            "unit": "ns/op",
            "extra": "38737 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38737 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38737 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 301450,
            "unit": "ns/op\t   60434 B/op\t     809 allocs/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 301450,
            "unit": "ns/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60434,
            "unit": "B/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 285716,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 285716,
            "unit": "ns/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94858,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94858,
            "unit": "ns/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47352,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47352,
            "unit": "ns/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "25497 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 193366,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6006 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 193366,
            "unit": "ns/op",
            "extra": "6006 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6006 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6006 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7718,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "152860 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7718,
            "unit": "ns/op",
            "extra": "152860 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "152860 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "152860 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152355,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "7539 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152355,
            "unit": "ns/op",
            "extra": "7539 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "7539 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7539 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605020243A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605020243A094101Federal",
            "value": 231380104,
            "unit": "1210428822605020243A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 906.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1317681 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 906.4,
            "unit": "ns/op",
            "extra": "1317681 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1317681 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1317681 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11601594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.2,
            "unit": "ns/op",
            "extra": "11601594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11601594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11601594 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 58.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19747788 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 58.92,
            "unit": "ns/op",
            "extra": "19747788 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19747788 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19747788 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43804900 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.46,
            "unit": "ns/op",
            "extra": "43804900 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43804900 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43804900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87569794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.75,
            "unit": "ns/op",
            "extra": "87569794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87569794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87569794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212673528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.991,
            "unit": "ns/op",
            "extra": "212673528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212673528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212673528 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296685,
            "unit": "ns/op\t   59793 B/op\t     665 allocs/op",
            "extra": "4382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296685,
            "unit": "ns/op",
            "extra": "4382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59793,
            "unit": "B/op",
            "extra": "4382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 316621,
            "unit": "ns/op\t   59810 B/op\t     665 allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 316621,
            "unit": "ns/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59810,
            "unit": "B/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168771,
            "unit": "ns/op\t   60188 B/op\t     669 allocs/op",
            "extra": "6603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168771,
            "unit": "ns/op",
            "extra": "6603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60188,
            "unit": "B/op",
            "extra": "6603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174367,
            "unit": "ns/op\t   60236 B/op\t     669 allocs/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174367,
            "unit": "ns/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60236,
            "unit": "B/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354103,
            "unit": "ns/op\t   65545 B/op\t     725 allocs/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354103,
            "unit": "ns/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65545,
            "unit": "B/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361958,
            "unit": "ns/op\t   65503 B/op\t     725 allocs/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361958,
            "unit": "ns/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65503,
            "unit": "B/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 378537,
            "unit": "ns/op\t   65507 B/op\t     725 allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 378537,
            "unit": "ns/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65507,
            "unit": "B/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343307,
            "unit": "ns/op\t   65430 B/op\t     726 allocs/op",
            "extra": "4278 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343307,
            "unit": "ns/op",
            "extra": "4278 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65430,
            "unit": "B/op",
            "extra": "4278 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4278 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47813074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.16,
            "unit": "ns/op",
            "extra": "47813074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47813074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47813074 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "d31c7db04d7b1c6c146fbde9a94314d459886744",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for cec8b5f7ad5c6d4b1cc558faecfe666c451057e2",
          "timestamp": "2026-05-01T05:39:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d31c7db04d7b1c6c146fbde9a94314d459886744"
        },
        "date": 1777688813070,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14558,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81610 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14558,
            "unit": "ns/op",
            "extra": "81610 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81610 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81610 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43434,
            "unit": "ns/op\t   23349 B/op\t     119 allocs/op",
            "extra": "27982 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43434,
            "unit": "ns/op",
            "extra": "27982 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23349,
            "unit": "B/op",
            "extra": "27982 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27982 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75806,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "14551 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75806,
            "unit": "ns/op",
            "extra": "14551 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "14551 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "14551 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31936,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "37582 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31936,
            "unit": "ns/op",
            "extra": "37582 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "37582 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "37582 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296523,
            "unit": "ns/op\t   60433 B/op\t     809 allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296523,
            "unit": "ns/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60433,
            "unit": "B/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296345,
            "unit": "ns/op\t   60431 B/op\t     809 allocs/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296345,
            "unit": "ns/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60431,
            "unit": "B/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98475,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12247 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98475,
            "unit": "ns/op",
            "extra": "12247 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12247 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12247 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 51919,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "23462 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51919,
            "unit": "ns/op",
            "extra": "23462 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "23462 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23462 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 231063,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 231063,
            "unit": "ns/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8758,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "137500 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8758,
            "unit": "ns/op",
            "extra": "137500 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "137500 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "137500 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154999,
            "unit": "ns/op\t   61089 B/op\t     720 allocs/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154999,
            "unit": "ns/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61089,
            "unit": "B/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605030226A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605030226A094101Federal",
            "value": 231380104,
            "unit": "1210428822605030226A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 980.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1247870 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 980.1,
            "unit": "ns/op",
            "extra": "1247870 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1247870 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1247870 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11971509 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.2,
            "unit": "ns/op",
            "extra": "11971509 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11971509 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11971509 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.59,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19544604 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.59,
            "unit": "ns/op",
            "extra": "19544604 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19544604 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19544604 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42015621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.46,
            "unit": "ns/op",
            "extra": "42015621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "42015621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "42015621 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90867868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.09,
            "unit": "ns/op",
            "extra": "90867868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90867868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90867868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.549,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183558076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.549,
            "unit": "ns/op",
            "extra": "183558076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183558076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183558076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310073,
            "unit": "ns/op\t   59790 B/op\t     665 allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310073,
            "unit": "ns/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59790,
            "unit": "B/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296689,
            "unit": "ns/op\t   59811 B/op\t     665 allocs/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296689,
            "unit": "ns/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59811,
            "unit": "B/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 184030,
            "unit": "ns/op\t   60212 B/op\t     669 allocs/op",
            "extra": "6910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 184030,
            "unit": "ns/op",
            "extra": "6910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60212,
            "unit": "B/op",
            "extra": "6910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 179722,
            "unit": "ns/op\t   60222 B/op\t     669 allocs/op",
            "extra": "6202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 179722,
            "unit": "ns/op",
            "extra": "6202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60222,
            "unit": "B/op",
            "extra": "6202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 378023,
            "unit": "ns/op\t   65528 B/op\t     725 allocs/op",
            "extra": "3255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 378023,
            "unit": "ns/op",
            "extra": "3255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65528,
            "unit": "B/op",
            "extra": "3255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351966,
            "unit": "ns/op\t   65517 B/op\t     725 allocs/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351966,
            "unit": "ns/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65517,
            "unit": "B/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346682,
            "unit": "ns/op\t   65529 B/op\t     725 allocs/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346682,
            "unit": "ns/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65529,
            "unit": "B/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350378,
            "unit": "ns/op\t   65583 B/op\t     726 allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350378,
            "unit": "ns/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65583,
            "unit": "B/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45265947 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.98,
            "unit": "ns/op",
            "extra": "45265947 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45265947 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45265947 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "7964e7bcf1e317040e25650c2532414a8639eef7",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 75717b4ccdc2bfdaac6e1f64a5eaed0838736b8c",
          "timestamp": "2026-05-02T04:56:13Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7964e7bcf1e317040e25650c2532414a8639eef7"
        },
        "date": 1777775738302,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14555,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "80572 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14555,
            "unit": "ns/op",
            "extra": "80572 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "80572 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "80572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42907,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "27866 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42907,
            "unit": "ns/op",
            "extra": "27866 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "27866 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27866 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75719,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "15834 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75719,
            "unit": "ns/op",
            "extra": "15834 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "15834 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "15834 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31464,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38275 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31464,
            "unit": "ns/op",
            "extra": "38275 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38275 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38275 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297054,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297054,
            "unit": "ns/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303128,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303128,
            "unit": "ns/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98399,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12194 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98399,
            "unit": "ns/op",
            "extra": "12194 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12194 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12194 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50809,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "23389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50809,
            "unit": "ns/op",
            "extra": "23389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "23389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23389 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 221439,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5587 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 221439,
            "unit": "ns/op",
            "extra": "5587 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5587 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5587 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8550,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "139581 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8550,
            "unit": "ns/op",
            "extra": "139581 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "139581 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "139581 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155732,
            "unit": "ns/op\t   61091 B/op\t     720 allocs/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155732,
            "unit": "ns/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61091,
            "unit": "B/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605040235A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605040235A094101Federal",
            "value": 231380104,
            "unit": "1210428822605040235A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 977.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1230703 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 977.7,
            "unit": "ns/op",
            "extra": "1230703 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1230703 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1230703 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11951324 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.98,
            "unit": "ns/op",
            "extra": "11951324 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11951324 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11951324 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.76,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19302334 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.76,
            "unit": "ns/op",
            "extra": "19302334 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19302334 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19302334 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.88,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43153728 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.88,
            "unit": "ns/op",
            "extra": "43153728 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43153728 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43153728 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91400290 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.09,
            "unit": "ns/op",
            "extra": "91400290 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91400290 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91400290 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.549,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "181494529 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.549,
            "unit": "ns/op",
            "extra": "181494529 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "181494529 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "181494529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300556,
            "unit": "ns/op\t   59796 B/op\t     665 allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300556,
            "unit": "ns/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59796,
            "unit": "B/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304226,
            "unit": "ns/op\t   59796 B/op\t     665 allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304226,
            "unit": "ns/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59796,
            "unit": "B/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178080,
            "unit": "ns/op\t   60195 B/op\t     669 allocs/op",
            "extra": "6184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178080,
            "unit": "ns/op",
            "extra": "6184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60195,
            "unit": "B/op",
            "extra": "6184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 190815,
            "unit": "ns/op\t   60228 B/op\t     669 allocs/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 190815,
            "unit": "ns/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60228,
            "unit": "B/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370088,
            "unit": "ns/op\t   65566 B/op\t     725 allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370088,
            "unit": "ns/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65566,
            "unit": "B/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358705,
            "unit": "ns/op\t   65511 B/op\t     725 allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358705,
            "unit": "ns/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65511,
            "unit": "B/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 364640,
            "unit": "ns/op\t   65523 B/op\t     725 allocs/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 364640,
            "unit": "ns/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65523,
            "unit": "B/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347209,
            "unit": "ns/op\t   64973 B/op\t     726 allocs/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347209,
            "unit": "ns/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 64973,
            "unit": "B/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45283849 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.48,
            "unit": "ns/op",
            "extra": "45283849 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45283849 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45283849 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "013d7f4bb04707e6e6925cc23fc0f26141155def",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 87f9e6070e03ababeb2f423b7131d33b63d47fec",
          "timestamp": "2026-05-03T05:28:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/013d7f4bb04707e6e6925cc23fc0f26141155def"
        },
        "date": 1777862033716,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14784,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "78982 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14784,
            "unit": "ns/op",
            "extra": "78982 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "78982 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "78982 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42668,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "27934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42668,
            "unit": "ns/op",
            "extra": "27934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "27934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27934 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76028,
            "unit": "ns/op\t   27407 B/op\t     194 allocs/op",
            "extra": "14496 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76028,
            "unit": "ns/op",
            "extra": "14496 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27407,
            "unit": "B/op",
            "extra": "14496 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "14496 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31502,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38054 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31502,
            "unit": "ns/op",
            "extra": "38054 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38054 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298247,
            "unit": "ns/op\t   60434 B/op\t     809 allocs/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298247,
            "unit": "ns/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60434,
            "unit": "B/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298268,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298268,
            "unit": "ns/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98824,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98824,
            "unit": "ns/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50578,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "23806 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50578,
            "unit": "ns/op",
            "extra": "23806 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "23806 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "23806 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 225992,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5428 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 225992,
            "unit": "ns/op",
            "extra": "5428 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5428 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5428 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8526,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "137972 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8526,
            "unit": "ns/op",
            "extra": "137972 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "137972 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "137972 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154496,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "7057 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154496,
            "unit": "ns/op",
            "extra": "7057 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "7057 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7057 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605050233A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605050233A094101Federal",
            "value": 231380104,
            "unit": "1210428822605050233A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 963.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1250449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 963.8,
            "unit": "ns/op",
            "extra": "1250449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1250449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1250449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.37,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11985920 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.37,
            "unit": "ns/op",
            "extra": "11985920 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11985920 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11985920 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.33,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19192382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.33,
            "unit": "ns/op",
            "extra": "19192382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19192382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19192382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.69,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42760210 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.69,
            "unit": "ns/op",
            "extra": "42760210 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "42760210 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "42760210 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90850959 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.11,
            "unit": "ns/op",
            "extra": "90850959 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90850959 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90850959 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "182293254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.547,
            "unit": "ns/op",
            "extra": "182293254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "182293254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "182293254 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304676,
            "unit": "ns/op\t   59790 B/op\t     665 allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304676,
            "unit": "ns/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59790,
            "unit": "B/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 315021,
            "unit": "ns/op\t   59805 B/op\t     665 allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 315021,
            "unit": "ns/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59805,
            "unit": "B/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178574,
            "unit": "ns/op\t   60196 B/op\t     669 allocs/op",
            "extra": "6046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178574,
            "unit": "ns/op",
            "extra": "6046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60196,
            "unit": "B/op",
            "extra": "6046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174037,
            "unit": "ns/op\t   60229 B/op\t     669 allocs/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174037,
            "unit": "ns/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60229,
            "unit": "B/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360869,
            "unit": "ns/op\t   65519 B/op\t     725 allocs/op",
            "extra": "3193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360869,
            "unit": "ns/op",
            "extra": "3193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65519,
            "unit": "B/op",
            "extra": "3193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359128,
            "unit": "ns/op\t   65505 B/op\t     725 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359128,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65505,
            "unit": "B/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359211,
            "unit": "ns/op\t   65515 B/op\t     725 allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359211,
            "unit": "ns/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65515,
            "unit": "B/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 353885,
            "unit": "ns/op\t   65572 B/op\t     726 allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 353885,
            "unit": "ns/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65572,
            "unit": "B/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45284149 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "45284149 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45284149 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45284149 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "8dc9e4df084cff8158a09d3b50e0b78e1e9aa3e7",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8e5b1875314eae0a0c0d088e2afe2a9252403214",
          "timestamp": "2026-05-04T05:31:34Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8dc9e4df084cff8158a09d3b50e0b78e1e9aa3e7"
        },
        "date": 1777948081633,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13034,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "90691 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13034,
            "unit": "ns/op",
            "extra": "90691 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "90691 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "90691 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42146,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "28416 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42146,
            "unit": "ns/op",
            "extra": "28416 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "28416 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "28416 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73319,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "16310 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73319,
            "unit": "ns/op",
            "extra": "16310 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "16310 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16310 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31279,
            "unit": "ns/op\t   21882 B/op\t      82 allocs/op",
            "extra": "38242 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31279,
            "unit": "ns/op",
            "extra": "38242 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21882,
            "unit": "B/op",
            "extra": "38242 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38242 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 284643,
            "unit": "ns/op\t   60430 B/op\t     809 allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 284643,
            "unit": "ns/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60430,
            "unit": "B/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288681,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288681,
            "unit": "ns/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99924,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12460 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99924,
            "unit": "ns/op",
            "extra": "12460 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12460 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12460 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47179,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "25207 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47179,
            "unit": "ns/op",
            "extra": "25207 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "25207 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "25207 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202593,
            "unit": "ns/op\t   54717 B/op\t    2069 allocs/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202593,
            "unit": "ns/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54717,
            "unit": "B/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8093,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "132926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8093,
            "unit": "ns/op",
            "extra": "132926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "132926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "132926 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147931,
            "unit": "ns/op\t   61092 B/op\t     720 allocs/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147931,
            "unit": "ns/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61092,
            "unit": "B/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605060227A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605060227A094101Federal",
            "value": 231380104,
            "unit": "1210428822605060227A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 910.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1308682 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 910.5,
            "unit": "ns/op",
            "extra": "1308682 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1308682 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1308682 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 103.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11794462 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.3,
            "unit": "ns/op",
            "extra": "11794462 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11794462 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11794462 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.22,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19605222 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.22,
            "unit": "ns/op",
            "extra": "19605222 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19605222 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19605222 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.16,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44477541 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "44477541 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44477541 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44477541 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83339803 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.23,
            "unit": "ns/op",
            "extra": "83339803 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "83339803 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "83339803 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.995,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "207201724 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.995,
            "unit": "ns/op",
            "extra": "207201724 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "207201724 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "207201724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301424,
            "unit": "ns/op\t   59791 B/op\t     665 allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301424,
            "unit": "ns/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59791,
            "unit": "B/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301121,
            "unit": "ns/op\t   59807 B/op\t     665 allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301121,
            "unit": "ns/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59807,
            "unit": "B/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173572,
            "unit": "ns/op\t   60197 B/op\t     669 allocs/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173572,
            "unit": "ns/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60197,
            "unit": "B/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184998,
            "unit": "ns/op\t   60219 B/op\t     669 allocs/op",
            "extra": "6524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184998,
            "unit": "ns/op",
            "extra": "6524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60219,
            "unit": "B/op",
            "extra": "6524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364185,
            "unit": "ns/op\t   65531 B/op\t     725 allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364185,
            "unit": "ns/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65531,
            "unit": "B/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357618,
            "unit": "ns/op\t   65505 B/op\t     725 allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357618,
            "unit": "ns/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65505,
            "unit": "B/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352262,
            "unit": "ns/op\t   65489 B/op\t     725 allocs/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352262,
            "unit": "ns/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65489,
            "unit": "B/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 357614,
            "unit": "ns/op\t   65526 B/op\t     726 allocs/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 357614,
            "unit": "ns/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65526,
            "unit": "B/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49279561 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.32,
            "unit": "ns/op",
            "extra": "49279561 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49279561 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49279561 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "99a63391ad20c93b366c3b6f15ba7ff0c7ada2ef",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6e920fb31ce38c44490852b38cc8bfefa861c149",
          "timestamp": "2026-05-05T04:58:17Z",
          "url": "https://github.com/moov-io/benchmarks/commit/99a63391ad20c93b366c3b6f15ba7ff0c7ada2ef"
        },
        "date": 1778034739790,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13068,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "90724 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13068,
            "unit": "ns/op",
            "extra": "90724 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "90724 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "90724 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41932,
            "unit": "ns/op\t   23348 B/op\t     119 allocs/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41932,
            "unit": "ns/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23348,
            "unit": "B/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73728,
            "unit": "ns/op\t   27405 B/op\t     194 allocs/op",
            "extra": "16261 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73728,
            "unit": "ns/op",
            "extra": "16261 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27405,
            "unit": "B/op",
            "extra": "16261 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16261 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31964,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "38065 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31964,
            "unit": "ns/op",
            "extra": "38065 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "38065 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "38065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287080,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287080,
            "unit": "ns/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 304391,
            "unit": "ns/op\t   60433 B/op\t     809 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 304391,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60433,
            "unit": "B/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97049,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12350 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97049,
            "unit": "ns/op",
            "extra": "12350 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12350 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12350 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 46965,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "25104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 46965,
            "unit": "ns/op",
            "extra": "25104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "25104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "25104 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 194975,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "6235 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 194975,
            "unit": "ns/op",
            "extra": "6235 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "6235 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6235 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7723,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "154623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7723,
            "unit": "ns/op",
            "extra": "154623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "154623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "154623 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147444,
            "unit": "ns/op\t   61089 B/op\t     720 allocs/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147444,
            "unit": "ns/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61089,
            "unit": "B/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605070231A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605070231A094101Federal",
            "value": 231380104,
            "unit": "1210428822605070231A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 904.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1337594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 904.7,
            "unit": "ns/op",
            "extra": "1337594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1337594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1337594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11448594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.1,
            "unit": "ns/op",
            "extra": "11448594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11448594 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11448594 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.48,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19564843 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.48,
            "unit": "ns/op",
            "extra": "19564843 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19564843 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19564843 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44323527 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26,
            "unit": "ns/op",
            "extra": "44323527 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44323527 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44323527 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85375218 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.07,
            "unit": "ns/op",
            "extra": "85375218 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85375218 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85375218 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.967,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212899069 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.967,
            "unit": "ns/op",
            "extra": "212899069 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212899069 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212899069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307279,
            "unit": "ns/op\t   59793 B/op\t     665 allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307279,
            "unit": "ns/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59793,
            "unit": "B/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302684,
            "unit": "ns/op\t   59807 B/op\t     665 allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302684,
            "unit": "ns/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59807,
            "unit": "B/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172427,
            "unit": "ns/op\t   60190 B/op\t     669 allocs/op",
            "extra": "6556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172427,
            "unit": "ns/op",
            "extra": "6556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60190,
            "unit": "B/op",
            "extra": "6556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170904,
            "unit": "ns/op\t   60225 B/op\t     669 allocs/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170904,
            "unit": "ns/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60225,
            "unit": "B/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371955,
            "unit": "ns/op\t   65521 B/op\t     725 allocs/op",
            "extra": "3260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371955,
            "unit": "ns/op",
            "extra": "3260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65521,
            "unit": "B/op",
            "extra": "3260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357835,
            "unit": "ns/op\t   65495 B/op\t     725 allocs/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357835,
            "unit": "ns/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65495,
            "unit": "B/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 368662,
            "unit": "ns/op\t   65484 B/op\t     725 allocs/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 368662,
            "unit": "ns/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65484,
            "unit": "B/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347682,
            "unit": "ns/op\t   65518 B/op\t     726 allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347682,
            "unit": "ns/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65518,
            "unit": "B/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49145011 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.91,
            "unit": "ns/op",
            "extra": "49145011 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49145011 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49145011 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "b51eb751fd82a120196b6bdea8c7a4b22b7cc7b4",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0b299cd592149fe3e15795d9e207dcfd15b08931",
          "timestamp": "2026-05-06T05:26:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b51eb751fd82a120196b6bdea8c7a4b22b7cc7b4"
        },
        "date": 1778121267546,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13268,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "90019 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13268,
            "unit": "ns/op",
            "extra": "90019 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "90019 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "90019 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42488,
            "unit": "ns/op\t   23347 B/op\t     119 allocs/op",
            "extra": "27986 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42488,
            "unit": "ns/op",
            "extra": "27986 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23347,
            "unit": "B/op",
            "extra": "27986 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 119,
            "unit": "allocs/op",
            "extra": "27986 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74233,
            "unit": "ns/op\t   27406 B/op\t     194 allocs/op",
            "extra": "16292 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74233,
            "unit": "ns/op",
            "extra": "16292 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27406,
            "unit": "B/op",
            "extra": "16292 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "16292 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 33740,
            "unit": "ns/op\t   21883 B/op\t      82 allocs/op",
            "extra": "36980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 33740,
            "unit": "ns/op",
            "extra": "36980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21883,
            "unit": "B/op",
            "extra": "36980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "36980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 285153,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 285153,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 285160,
            "unit": "ns/op\t   60432 B/op\t     809 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 285160,
            "unit": "ns/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 60432,
            "unit": "B/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 809,
            "unit": "allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97767,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12307 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97767,
            "unit": "ns/op",
            "extra": "12307 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12307 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12307 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48101,
            "unit": "ns/op\t   34838 B/op\t     233 allocs/op",
            "extra": "24705 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48101,
            "unit": "ns/op",
            "extra": "24705 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34838,
            "unit": "B/op",
            "extra": "24705 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 233,
            "unit": "allocs/op",
            "extra": "24705 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 193217,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 193217,
            "unit": "ns/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8284,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "149908 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8284,
            "unit": "ns/op",
            "extra": "149908 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "149908 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "149908 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149996,
            "unit": "ns/op\t   61088 B/op\t     720 allocs/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149996,
            "unit": "ns/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61088,
            "unit": "B/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605080233A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605080233A094101Federal",
            "value": 231380104,
            "unit": "1210428822605080233A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 905,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1318299 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 905,
            "unit": "ns/op",
            "extra": "1318299 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1318299 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1318299 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11485171 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.9,
            "unit": "ns/op",
            "extra": "11485171 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11485171 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11485171 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.3,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19419112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.3,
            "unit": "ns/op",
            "extra": "19419112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19419112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19419112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.81,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44187556 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.81,
            "unit": "ns/op",
            "extra": "44187556 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44187556 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44187556 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86691816 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.08,
            "unit": "ns/op",
            "extra": "86691816 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86691816 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86691816 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.904,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200527257 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.904,
            "unit": "ns/op",
            "extra": "200527257 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "200527257 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "200527257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307106,
            "unit": "ns/op\t   59799 B/op\t     665 allocs/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307106,
            "unit": "ns/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 59799,
            "unit": "B/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296439,
            "unit": "ns/op\t   59804 B/op\t     665 allocs/op",
            "extra": "3752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296439,
            "unit": "ns/op",
            "extra": "3752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 59804,
            "unit": "B/op",
            "extra": "3752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 665,
            "unit": "allocs/op",
            "extra": "3752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171176,
            "unit": "ns/op\t   60198 B/op\t     669 allocs/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171176,
            "unit": "ns/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 60198,
            "unit": "B/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172891,
            "unit": "ns/op\t   60235 B/op\t     669 allocs/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172891,
            "unit": "ns/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 60235,
            "unit": "B/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359574,
            "unit": "ns/op\t   65488 B/op\t     725 allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359574,
            "unit": "ns/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 65488,
            "unit": "B/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357908,
            "unit": "ns/op\t   65506 B/op\t     725 allocs/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357908,
            "unit": "ns/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 65506,
            "unit": "B/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352789,
            "unit": "ns/op\t   65519 B/op\t     725 allocs/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352789,
            "unit": "ns/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 65519,
            "unit": "B/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 725,
            "unit": "allocs/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350889,
            "unit": "ns/op\t   65529 B/op\t     726 allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350889,
            "unit": "ns/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 65529,
            "unit": "B/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49068262 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.84,
            "unit": "ns/op",
            "extra": "49068262 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49068262 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49068262 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "21befa2282e892418f100cb8b9d7f5c6dc1d0343",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0e8212fb9534a2e72d707873cc7398485acc15bc",
          "timestamp": "2026-05-07T05:29:09Z",
          "url": "https://github.com/moov-io/benchmarks/commit/21befa2282e892418f100cb8b9d7f5c6dc1d0343"
        },
        "date": 1778208036177,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14753,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "77774 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14753,
            "unit": "ns/op",
            "extra": "77774 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "77774 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "77774 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 271731316,
            "unit": "ns/op\t42450714 B/op\t  203655 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 271731316,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450714,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203655,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 101379694,
            "unit": "ns/op\t42425375 B/op\t  203605 allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 101379694,
            "unit": "ns/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425375,
            "unit": "B/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1390975886,
            "unit": "ns/op\t215541480 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1390975886,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541480,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 501004824,
            "unit": "ns/op\t215425692 B/op\t 1042806 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 501004824,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215425692,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042806,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38933,
            "unit": "ns/op\t   23267 B/op\t     113 allocs/op",
            "extra": "30393 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38933,
            "unit": "ns/op",
            "extra": "30393 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23267,
            "unit": "B/op",
            "extra": "30393 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "30393 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 67576,
            "unit": "ns/op\t   26877 B/op\t     158 allocs/op",
            "extra": "17991 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 67576,
            "unit": "ns/op",
            "extra": "17991 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26877,
            "unit": "B/op",
            "extra": "17991 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "17991 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28122,
            "unit": "ns/op\t   21803 B/op\t      76 allocs/op",
            "extra": "42892 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28122,
            "unit": "ns/op",
            "extra": "42892 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21803,
            "unit": "B/op",
            "extra": "42892 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "42892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 252453,
            "unit": "ns/op\t   56333 B/op\t     551 allocs/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 252453,
            "unit": "ns/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56333,
            "unit": "B/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 254507,
            "unit": "ns/op\t   56333 B/op\t     551 allocs/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 254507,
            "unit": "ns/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56333,
            "unit": "B/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93857,
            "unit": "ns/op\t   29712 B/op\t     263 allocs/op",
            "extra": "12693 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93857,
            "unit": "ns/op",
            "extra": "12693 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29712,
            "unit": "B/op",
            "extra": "12693 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12693 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49640,
            "unit": "ns/op\t   34742 B/op\t     227 allocs/op",
            "extra": "23346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49640,
            "unit": "ns/op",
            "extra": "23346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34742,
            "unit": "B/op",
            "extra": "23346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 227,
            "unit": "allocs/op",
            "extra": "23346 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 213722,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5649 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 213722,
            "unit": "ns/op",
            "extra": "5649 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5649 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5649 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8625,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "141278 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8625,
            "unit": "ns/op",
            "extra": "141278 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "141278 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "141278 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152794,
            "unit": "ns/op\t   61091 B/op\t     720 allocs/op",
            "extra": "7882 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152794,
            "unit": "ns/op",
            "extra": "7882 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61091,
            "unit": "B/op",
            "extra": "7882 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605090240A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605090240A094101Federal",
            "value": 231380104,
            "unit": "1210428822605090240A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1014,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1014,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 91.53,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13323507 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.53,
            "unit": "ns/op",
            "extra": "13323507 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13323507 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13323507 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 58.26,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20044564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 58.26,
            "unit": "ns/op",
            "extra": "20044564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20044564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20044564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.72,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47550244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.72,
            "unit": "ns/op",
            "extra": "47550244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "47550244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "47550244 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 11.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 11.65,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 4.967,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "240476902 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 4.967,
            "unit": "ns/op",
            "extra": "240476902 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "240476902 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "240476902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 235163,
            "unit": "ns/op\t   54080 B/op\t     305 allocs/op",
            "extra": "5092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 235163,
            "unit": "ns/op",
            "extra": "5092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54080,
            "unit": "B/op",
            "extra": "5092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "5092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 234733,
            "unit": "ns/op\t   54084 B/op\t     305 allocs/op",
            "extra": "4863 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 234733,
            "unit": "ns/op",
            "extra": "4863 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54084,
            "unit": "B/op",
            "extra": "4863 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4863 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 193617,
            "unit": "ns/op\t   54499 B/op\t     309 allocs/op",
            "extra": "7005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 193617,
            "unit": "ns/op",
            "extra": "7005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54499,
            "unit": "B/op",
            "extra": "7005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "7005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175041,
            "unit": "ns/op\t   54526 B/op\t     309 allocs/op",
            "extra": "6673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175041,
            "unit": "ns/op",
            "extra": "6673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54526,
            "unit": "B/op",
            "extra": "6673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 294064,
            "unit": "ns/op\t   59844 B/op\t     365 allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 294064,
            "unit": "ns/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59844,
            "unit": "B/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 297448,
            "unit": "ns/op\t   59839 B/op\t     365 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 297448,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59839,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 284105,
            "unit": "ns/op\t   59865 B/op\t     365 allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 284105,
            "unit": "ns/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59865,
            "unit": "B/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 275534,
            "unit": "ns/op\t   59466 B/op\t     366 allocs/op",
            "extra": "4963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 275534,
            "unit": "ns/op",
            "extra": "4963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59466,
            "unit": "B/op",
            "extra": "4963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4963 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52648800 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.79,
            "unit": "ns/op",
            "extra": "52648800 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52648800 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52648800 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "a9f0335502523d8510f6e3f589b1a5cb82f2f599",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 50bb84458210ea5de86d1c2bf9b2e39e0cd366ef",
          "timestamp": "2026-05-08T04:51:39Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a9f0335502523d8510f6e3f589b1a5cb82f2f599"
        },
        "date": 1778294070926,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14615,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81394 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14615,
            "unit": "ns/op",
            "extra": "81394 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81394 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81394 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 272400496,
            "unit": "ns/op\t42450932 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 272400496,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450932,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 96654311,
            "unit": "ns/op\t42425350 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 96654311,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425350,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1370523986,
            "unit": "ns/op\t215547008 B/op\t 1042874 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1370523986,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215547008,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042874,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 469839468,
            "unit": "ns/op\t215426213 B/op\t 1042809 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 469839468,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426213,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042809,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43620,
            "unit": "ns/op\t   23268 B/op\t     113 allocs/op",
            "extra": "27069 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43620,
            "unit": "ns/op",
            "extra": "27069 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23268,
            "unit": "B/op",
            "extra": "27069 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "27069 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74515,
            "unit": "ns/op\t   26878 B/op\t     158 allocs/op",
            "extra": "14691 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74515,
            "unit": "ns/op",
            "extra": "14691 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26878,
            "unit": "B/op",
            "extra": "14691 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "14691 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31823,
            "unit": "ns/op\t   21803 B/op\t      76 allocs/op",
            "extra": "37612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31823,
            "unit": "ns/op",
            "extra": "37612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21803,
            "unit": "B/op",
            "extra": "37612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "37612 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 277821,
            "unit": "ns/op\t   56336 B/op\t     551 allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 277821,
            "unit": "ns/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56336,
            "unit": "B/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 279444,
            "unit": "ns/op\t   56334 B/op\t     551 allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 279444,
            "unit": "ns/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56334,
            "unit": "B/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102341,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102341,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 52498,
            "unit": "ns/op\t   34743 B/op\t     227 allocs/op",
            "extra": "22891 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 52498,
            "unit": "ns/op",
            "extra": "22891 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34743,
            "unit": "B/op",
            "extra": "22891 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 227,
            "unit": "allocs/op",
            "extra": "22891 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 220459,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5540 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 220459,
            "unit": "ns/op",
            "extra": "5540 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5540 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5540 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8834,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "133911 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8834,
            "unit": "ns/op",
            "extra": "133911 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "133911 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "133911 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 161881,
            "unit": "ns/op\t   61091 B/op\t     720 allocs/op",
            "extra": "6986 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 161881,
            "unit": "ns/op",
            "extra": "6986 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61091,
            "unit": "B/op",
            "extra": "6986 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "6986 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605100233A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605100233A094101Federal",
            "value": 231380104,
            "unit": "1210428822605100233A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 993.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1204886 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 993.1,
            "unit": "ns/op",
            "extra": "1204886 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1204886 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1204886 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 91.26,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12892351 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.26,
            "unit": "ns/op",
            "extra": "12892351 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12892351 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12892351 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.02,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18027387 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.02,
            "unit": "ns/op",
            "extra": "18027387 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18027387 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18027387 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.8,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43764752 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.8,
            "unit": "ns/op",
            "extra": "43764752 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43764752 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43764752 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91672423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.04,
            "unit": "ns/op",
            "extra": "91672423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91672423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91672423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.631,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213251905 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.631,
            "unit": "ns/op",
            "extra": "213251905 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213251905 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213251905 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 265319,
            "unit": "ns/op\t   54083 B/op\t     305 allocs/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 265319,
            "unit": "ns/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54083,
            "unit": "B/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 271954,
            "unit": "ns/op\t   54093 B/op\t     305 allocs/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 271954,
            "unit": "ns/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54093,
            "unit": "B/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 156001,
            "unit": "ns/op\t   54494 B/op\t     309 allocs/op",
            "extra": "6925 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 156001,
            "unit": "ns/op",
            "extra": "6925 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54494,
            "unit": "B/op",
            "extra": "6925 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6925 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 157237,
            "unit": "ns/op\t   54515 B/op\t     309 allocs/op",
            "extra": "7624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 157237,
            "unit": "ns/op",
            "extra": "7624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54515,
            "unit": "B/op",
            "extra": "7624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "7624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 323059,
            "unit": "ns/op\t   59823 B/op\t     365 allocs/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 323059,
            "unit": "ns/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59823,
            "unit": "B/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 321234,
            "unit": "ns/op\t   59791 B/op\t     365 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 321234,
            "unit": "ns/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59791,
            "unit": "B/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 314573,
            "unit": "ns/op\t   59794 B/op\t     365 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 314573,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59794,
            "unit": "B/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 307233,
            "unit": "ns/op\t   59543 B/op\t     366 allocs/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 307233,
            "unit": "ns/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59543,
            "unit": "B/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46208239 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.02,
            "unit": "ns/op",
            "extra": "46208239 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46208239 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46208239 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "15f11e3de83e8a1b1e8181f0c7b956fa6bac1140",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c42482633e0e6e9c4dbc94e37a6dfaac93227447",
          "timestamp": "2026-05-09T05:19:14Z",
          "url": "https://github.com/moov-io/benchmarks/commit/15f11e3de83e8a1b1e8181f0c7b956fa6bac1140"
        },
        "date": 1778380694217,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14351,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "84259 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14351,
            "unit": "ns/op",
            "extra": "84259 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "84259 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "84259 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 265031198,
            "unit": "ns/op\t42450654 B/op\t  203654 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 265031198,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450654,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203654,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 94054368,
            "unit": "ns/op\t42425451 B/op\t  203606 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 94054368,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425451,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1379996497,
            "unit": "ns/op\t215541576 B/op\t 1042869 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1379996497,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541576,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042869,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 469650985,
            "unit": "ns/op\t215426482 B/op\t 1042811 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 469650985,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426482,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042811,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42627,
            "unit": "ns/op\t   23268 B/op\t     113 allocs/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42627,
            "unit": "ns/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23268,
            "unit": "B/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72646,
            "unit": "ns/op\t   26878 B/op\t     158 allocs/op",
            "extra": "16563 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72646,
            "unit": "ns/op",
            "extra": "16563 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26878,
            "unit": "B/op",
            "extra": "16563 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "16563 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30926,
            "unit": "ns/op\t   21803 B/op\t      76 allocs/op",
            "extra": "39020 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30926,
            "unit": "ns/op",
            "extra": "39020 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21803,
            "unit": "B/op",
            "extra": "39020 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "39020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 273092,
            "unit": "ns/op\t   56333 B/op\t     551 allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 273092,
            "unit": "ns/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56333,
            "unit": "B/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 273959,
            "unit": "ns/op\t   56334 B/op\t     551 allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 273959,
            "unit": "ns/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56334,
            "unit": "B/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 104215,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 104215,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 54072,
            "unit": "ns/op\t   34743 B/op\t     227 allocs/op",
            "extra": "23296 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 54072,
            "unit": "ns/op",
            "extra": "23296 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34743,
            "unit": "B/op",
            "extra": "23296 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 227,
            "unit": "allocs/op",
            "extra": "23296 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 218162,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 218162,
            "unit": "ns/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 9300,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "139332 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 9300,
            "unit": "ns/op",
            "extra": "139332 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "139332 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "139332 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 161689,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 161689,
            "unit": "ns/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605110237A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605110237A094101Federal",
            "value": 231380104,
            "unit": "1210428822605110237A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1022,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1022,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 91.43,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12892035 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.43,
            "unit": "ns/op",
            "extra": "12892035 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12892035 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12892035 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 65.33,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17237762 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 65.33,
            "unit": "ns/op",
            "extra": "17237762 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17237762 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17237762 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40137542 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.9,
            "unit": "ns/op",
            "extra": "40137542 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40137542 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40137542 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91548340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.58,
            "unit": "ns/op",
            "extra": "91548340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91548340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91548340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.709,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213743080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.709,
            "unit": "ns/op",
            "extra": "213743080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213743080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213743080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 268918,
            "unit": "ns/op\t   54076 B/op\t     305 allocs/op",
            "extra": "4737 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 268918,
            "unit": "ns/op",
            "extra": "4737 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54076,
            "unit": "B/op",
            "extra": "4737 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4737 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 262780,
            "unit": "ns/op\t   54098 B/op\t     305 allocs/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 262780,
            "unit": "ns/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54098,
            "unit": "B/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 156635,
            "unit": "ns/op\t   54506 B/op\t     309 allocs/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 156635,
            "unit": "ns/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54506,
            "unit": "B/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 156825,
            "unit": "ns/op\t   54517 B/op\t     309 allocs/op",
            "extra": "6932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 156825,
            "unit": "ns/op",
            "extra": "6932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54517,
            "unit": "B/op",
            "extra": "6932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 331071,
            "unit": "ns/op\t   59832 B/op\t     365 allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 331071,
            "unit": "ns/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59832,
            "unit": "B/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 316861,
            "unit": "ns/op\t   59799 B/op\t     365 allocs/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 316861,
            "unit": "ns/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59799,
            "unit": "B/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 317752,
            "unit": "ns/op\t   59802 B/op\t     365 allocs/op",
            "extra": "3751 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 317752,
            "unit": "ns/op",
            "extra": "3751 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59802,
            "unit": "B/op",
            "extra": "3751 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3751 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 310303,
            "unit": "ns/op\t   59613 B/op\t     366 allocs/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 310303,
            "unit": "ns/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59613,
            "unit": "B/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46380745 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "46380745 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46380745 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46380745 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "8d0e7a2119cd7b7d22111d2cdd3f1e0f7aba0d59",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ad803233168a79a62370ed7ecde6326a785c1d89",
          "timestamp": "2026-05-10T05:34:36Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8d0e7a2119cd7b7d22111d2cdd3f1e0f7aba0d59"
        },
        "date": 1778467677329,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13431,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "89528 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13431,
            "unit": "ns/op",
            "extra": "89528 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "89528 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "89528 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 262009226,
            "unit": "ns/op\t42450968 B/op\t  203657 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 262009226,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450968,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203657,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 104299541,
            "unit": "ns/op\t42425580 B/op\t  203607 allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 104299541,
            "unit": "ns/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425580,
            "unit": "B/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203607,
            "unit": "allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1387281845,
            "unit": "ns/op\t215541368 B/op\t 1042866 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1387281845,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541368,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042866,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 503248530,
            "unit": "ns/op\t215425548 B/op\t 1042804 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 503248530,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215425548,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042804,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36124,
            "unit": "ns/op\t   23267 B/op\t     113 allocs/op",
            "extra": "33270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36124,
            "unit": "ns/op",
            "extra": "33270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23267,
            "unit": "B/op",
            "extra": "33270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "33270 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 62864,
            "unit": "ns/op\t   26877 B/op\t     158 allocs/op",
            "extra": "19156 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 62864,
            "unit": "ns/op",
            "extra": "19156 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26877,
            "unit": "B/op",
            "extra": "19156 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "19156 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 25725,
            "unit": "ns/op\t   21803 B/op\t      76 allocs/op",
            "extra": "46294 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 25725,
            "unit": "ns/op",
            "extra": "46294 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21803,
            "unit": "B/op",
            "extra": "46294 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "46294 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 244596,
            "unit": "ns/op\t   56334 B/op\t     551 allocs/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 244596,
            "unit": "ns/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56334,
            "unit": "B/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 242475,
            "unit": "ns/op\t   56333 B/op\t     551 allocs/op",
            "extra": "4830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 242475,
            "unit": "ns/op",
            "extra": "4830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56333,
            "unit": "B/op",
            "extra": "4830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 86960,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "13693 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 86960,
            "unit": "ns/op",
            "extra": "13693 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "13693 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "13693 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49389,
            "unit": "ns/op\t   34742 B/op\t     227 allocs/op",
            "extra": "25347 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49389,
            "unit": "ns/op",
            "extra": "25347 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34742,
            "unit": "B/op",
            "extra": "25347 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 227,
            "unit": "allocs/op",
            "extra": "25347 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200187,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200187,
            "unit": "ns/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5666 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8054,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "149055 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8054,
            "unit": "ns/op",
            "extra": "149055 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "149055 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "149055 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145201,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "7788 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145201,
            "unit": "ns/op",
            "extra": "7788 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "7788 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7788 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605120247A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605120247A094101Federal",
            "value": 231380104,
            "unit": "1210428822605120247A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 990.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1225844 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 990.2,
            "unit": "ns/op",
            "extra": "1225844 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1225844 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1225844 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 85.91,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13738041 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 85.91,
            "unit": "ns/op",
            "extra": "13738041 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13738041 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13738041 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 57.02,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20753204 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 57.02,
            "unit": "ns/op",
            "extra": "20753204 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20753204 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20753204 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 23.31,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49846438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 23.31,
            "unit": "ns/op",
            "extra": "49846438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "49846438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "49846438 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.01,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.026,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238856990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.026,
            "unit": "ns/op",
            "extra": "238856990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "238856990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "238856990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 238326,
            "unit": "ns/op\t   54075 B/op\t     305 allocs/op",
            "extra": "5210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 238326,
            "unit": "ns/op",
            "extra": "5210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54075,
            "unit": "B/op",
            "extra": "5210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "5210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 240609,
            "unit": "ns/op\t   54097 B/op\t     305 allocs/op",
            "extra": "5020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 240609,
            "unit": "ns/op",
            "extra": "5020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54097,
            "unit": "B/op",
            "extra": "5020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "5020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 163793,
            "unit": "ns/op\t   54492 B/op\t     309 allocs/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 163793,
            "unit": "ns/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54492,
            "unit": "B/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167332,
            "unit": "ns/op\t   54511 B/op\t     309 allocs/op",
            "extra": "6373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167332,
            "unit": "ns/op",
            "extra": "6373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54511,
            "unit": "B/op",
            "extra": "6373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 293449,
            "unit": "ns/op\t   59832 B/op\t     365 allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 293449,
            "unit": "ns/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59832,
            "unit": "B/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 287112,
            "unit": "ns/op\t   59854 B/op\t     365 allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 287112,
            "unit": "ns/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59854,
            "unit": "B/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 284556,
            "unit": "ns/op\t   59834 B/op\t     365 allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 284556,
            "unit": "ns/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59834,
            "unit": "B/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 284603,
            "unit": "ns/op\t   59474 B/op\t     366 allocs/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 284603,
            "unit": "ns/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59474,
            "unit": "B/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52358616 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.9,
            "unit": "ns/op",
            "extra": "52358616 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52358616 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52358616 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "e7f0a3b3f822f568a91cdc280d964a058a055b57",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 81e24fd78744553abcedf6585ced2cdf0a665a93",
          "timestamp": "2026-05-11T05:55:39Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e7f0a3b3f822f568a91cdc280d964a058a055b57"
        },
        "date": 1778553633898,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14697,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "80481 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14697,
            "unit": "ns/op",
            "extra": "80481 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "80481 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "80481 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 268801055,
            "unit": "ns/op\t42450744 B/op\t  203654 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 268801055,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450744,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203654,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 96372703,
            "unit": "ns/op\t42425904 B/op\t  203606 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 96372703,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425904,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1390654573,
            "unit": "ns/op\t215541480 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1390654573,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541480,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 471506557,
            "unit": "ns/op\t215426386 B/op\t 1042809 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 471506557,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426386,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042809,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43371,
            "unit": "ns/op\t   23268 B/op\t     113 allocs/op",
            "extra": "27446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43371,
            "unit": "ns/op",
            "extra": "27446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23268,
            "unit": "B/op",
            "extra": "27446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "27446 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73924,
            "unit": "ns/op\t   26878 B/op\t     158 allocs/op",
            "extra": "16282 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73924,
            "unit": "ns/op",
            "extra": "16282 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26878,
            "unit": "B/op",
            "extra": "16282 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "16282 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32043,
            "unit": "ns/op\t   21803 B/op\t      76 allocs/op",
            "extra": "38001 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32043,
            "unit": "ns/op",
            "extra": "38001 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21803,
            "unit": "B/op",
            "extra": "38001 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "38001 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 276351,
            "unit": "ns/op\t   56335 B/op\t     551 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 276351,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56335,
            "unit": "B/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 276725,
            "unit": "ns/op\t   56333 B/op\t     551 allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 276725,
            "unit": "ns/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56333,
            "unit": "B/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102386,
            "unit": "ns/op\t   29712 B/op\t     263 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102386,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29712,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 51951,
            "unit": "ns/op\t   34742 B/op\t     227 allocs/op",
            "extra": "23167 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51951,
            "unit": "ns/op",
            "extra": "23167 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34742,
            "unit": "B/op",
            "extra": "23167 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 227,
            "unit": "allocs/op",
            "extra": "23167 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 224635,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5767 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 224635,
            "unit": "ns/op",
            "extra": "5767 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5767 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5767 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8743,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "136148 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8743,
            "unit": "ns/op",
            "extra": "136148 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "136148 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "136148 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162768,
            "unit": "ns/op\t   61090 B/op\t     720 allocs/op",
            "extra": "6862 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162768,
            "unit": "ns/op",
            "extra": "6862 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61090,
            "unit": "B/op",
            "extra": "6862 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "6862 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605130239A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605130239A094101Federal",
            "value": 231380104,
            "unit": "1210428822605130239A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 990,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1203499 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 990,
            "unit": "ns/op",
            "extra": "1203499 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1203499 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1203499 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.05,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13008972 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.05,
            "unit": "ns/op",
            "extra": "13008972 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13008972 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13008972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 65.83,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17907051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 65.83,
            "unit": "ns/op",
            "extra": "17907051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17907051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17907051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.78,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43197969 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.78,
            "unit": "ns/op",
            "extra": "43197969 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43197969 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43197969 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91624008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91624008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91624008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91624008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.637,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213490304 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.637,
            "unit": "ns/op",
            "extra": "213490304 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213490304 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213490304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 263202,
            "unit": "ns/op\t   54074 B/op\t     305 allocs/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 263202,
            "unit": "ns/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54074,
            "unit": "B/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 265376,
            "unit": "ns/op\t   54093 B/op\t     305 allocs/op",
            "extra": "4484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 265376,
            "unit": "ns/op",
            "extra": "4484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54093,
            "unit": "B/op",
            "extra": "4484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4484 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 155660,
            "unit": "ns/op\t   54500 B/op\t     309 allocs/op",
            "extra": "6952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 155660,
            "unit": "ns/op",
            "extra": "6952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54500,
            "unit": "B/op",
            "extra": "6952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 157235,
            "unit": "ns/op\t   54527 B/op\t     309 allocs/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 157235,
            "unit": "ns/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54527,
            "unit": "B/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 323892,
            "unit": "ns/op\t   59795 B/op\t     365 allocs/op",
            "extra": "3600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 323892,
            "unit": "ns/op",
            "extra": "3600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59795,
            "unit": "B/op",
            "extra": "3600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 323165,
            "unit": "ns/op\t   59788 B/op\t     365 allocs/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 323165,
            "unit": "ns/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59788,
            "unit": "B/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 313118,
            "unit": "ns/op\t   59822 B/op\t     365 allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 313118,
            "unit": "ns/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59822,
            "unit": "B/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 313506,
            "unit": "ns/op\t   59617 B/op\t     366 allocs/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 313506,
            "unit": "ns/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59617,
            "unit": "B/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4539 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46312428 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.07,
            "unit": "ns/op",
            "extra": "46312428 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46312428 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46312428 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "3b227e2deb420ff7ac37014860461da45f001bd3",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e876bcd81c8b722e5247512c907caaeea403ea13",
          "timestamp": "2026-05-12T05:35:51Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3b227e2deb420ff7ac37014860461da45f001bd3"
        },
        "date": 1778640367277,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14130,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81744 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14130,
            "unit": "ns/op",
            "extra": "81744 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81744 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81744 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 276610543,
            "unit": "ns/op\t42450590 B/op\t  203653 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 276610543,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450590,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203653,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 101562621,
            "unit": "ns/op\t42425365 B/op\t  203605 allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 101562621,
            "unit": "ns/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425365,
            "unit": "B/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1408563938,
            "unit": "ns/op\t215541432 B/op\t 1042867 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1408563938,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541432,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042867,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 501558810,
            "unit": "ns/op\t215425896 B/op\t 1042806 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 501558810,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215425896,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042806,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39267,
            "unit": "ns/op\t   23268 B/op\t     113 allocs/op",
            "extra": "28010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39267,
            "unit": "ns/op",
            "extra": "28010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23268,
            "unit": "B/op",
            "extra": "28010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "28010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 67064,
            "unit": "ns/op\t   26877 B/op\t     158 allocs/op",
            "extra": "17934 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 67064,
            "unit": "ns/op",
            "extra": "17934 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26877,
            "unit": "B/op",
            "extra": "17934 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "17934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29286,
            "unit": "ns/op\t   21802 B/op\t      76 allocs/op",
            "extra": "43362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29286,
            "unit": "ns/op",
            "extra": "43362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21802,
            "unit": "B/op",
            "extra": "43362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "43362 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 259862,
            "unit": "ns/op\t   56333 B/op\t     551 allocs/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 259862,
            "unit": "ns/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56333,
            "unit": "B/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 262102,
            "unit": "ns/op\t   56335 B/op\t     551 allocs/op",
            "extra": "4844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 262102,
            "unit": "ns/op",
            "extra": "4844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56335,
            "unit": "B/op",
            "extra": "4844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93177,
            "unit": "ns/op\t   29712 B/op\t     263 allocs/op",
            "extra": "12787 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93177,
            "unit": "ns/op",
            "extra": "12787 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29712,
            "unit": "B/op",
            "extra": "12787 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12787 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 52518,
            "unit": "ns/op\t   34742 B/op\t     227 allocs/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 52518,
            "unit": "ns/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34742,
            "unit": "B/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 227,
            "unit": "allocs/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207063,
            "unit": "ns/op\t   54717 B/op\t    2069 allocs/op",
            "extra": "5646 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207063,
            "unit": "ns/op",
            "extra": "5646 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54717,
            "unit": "B/op",
            "extra": "5646 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5646 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8465,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "144249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8465,
            "unit": "ns/op",
            "extra": "144249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "144249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144249 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155999,
            "unit": "ns/op\t   61089 B/op\t     720 allocs/op",
            "extra": "7498 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155999,
            "unit": "ns/op",
            "extra": "7498 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61089,
            "unit": "B/op",
            "extra": "7498 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7498 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605140245A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605140245A094101Federal",
            "value": 231380104,
            "unit": "1210428822605140245A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1012,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1012,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 88.99,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13621024 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 88.99,
            "unit": "ns/op",
            "extra": "13621024 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13621024 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13621024 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18030105 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.6,
            "unit": "ns/op",
            "extra": "18030105 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18030105 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18030105 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "47070158 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.14,
            "unit": "ns/op",
            "extra": "47070158 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "47070158 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "47070158 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.08,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.018,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238857388 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.018,
            "unit": "ns/op",
            "extra": "238857388 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "238857388 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "238857388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 243631,
            "unit": "ns/op\t   54083 B/op\t     305 allocs/op",
            "extra": "4948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 243631,
            "unit": "ns/op",
            "extra": "4948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54083,
            "unit": "B/op",
            "extra": "4948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 243824,
            "unit": "ns/op\t   54096 B/op\t     305 allocs/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 243824,
            "unit": "ns/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54096,
            "unit": "B/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177241,
            "unit": "ns/op\t   54501 B/op\t     309 allocs/op",
            "extra": "7140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177241,
            "unit": "ns/op",
            "extra": "7140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54501,
            "unit": "B/op",
            "extra": "7140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "7140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 165721,
            "unit": "ns/op\t   54512 B/op\t     309 allocs/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 165721,
            "unit": "ns/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54512,
            "unit": "B/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 298636,
            "unit": "ns/op\t   59827 B/op\t     365 allocs/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 298636,
            "unit": "ns/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59827,
            "unit": "B/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 288602,
            "unit": "ns/op\t   59760 B/op\t     365 allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 288602,
            "unit": "ns/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59760,
            "unit": "B/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 290054,
            "unit": "ns/op\t   59852 B/op\t     365 allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 290054,
            "unit": "ns/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59852,
            "unit": "B/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 280808,
            "unit": "ns/op\t   59610 B/op\t     366 allocs/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 280808,
            "unit": "ns/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59610,
            "unit": "B/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4585 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52228450 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.85,
            "unit": "ns/op",
            "extra": "52228450 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52228450 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52228450 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "committer": {
            "name": "github-action-benchmark",
            "username": "github",
            "email": "github@users.noreply.github.com"
          },
          "id": "1296971ccc3f48d47f1d4f42156afecfec17a9ba",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a1add854a2229fd2518b01a7f7f1bc20e1a08416",
          "timestamp": "2026-05-13T05:45:34Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1296971ccc3f48d47f1d4f42156afecfec17a9ba"
        },
        "date": 1778726856883,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13374,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "87816 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13374,
            "unit": "ns/op",
            "extra": "87816 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "87816 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87816 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 262232473,
            "unit": "ns/op\t42450902 B/op\t  203657 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 262232473,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450902,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203657,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 93056197,
            "unit": "ns/op\t42425357 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 93056197,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425357,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1364163313,
            "unit": "ns/op\t215541432 B/op\t 1042867 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1364163313,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541432,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042867,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 453004058,
            "unit": "ns/op\t215426117 B/op\t 1042807 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 453004058,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426117,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042807,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42450,
            "unit": "ns/op\t   23267 B/op\t     113 allocs/op",
            "extra": "28491 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42450,
            "unit": "ns/op",
            "extra": "28491 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23267,
            "unit": "B/op",
            "extra": "28491 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 113,
            "unit": "allocs/op",
            "extra": "28491 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73821,
            "unit": "ns/op\t   26878 B/op\t     158 allocs/op",
            "extra": "16742 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73821,
            "unit": "ns/op",
            "extra": "16742 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26878,
            "unit": "B/op",
            "extra": "16742 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 158,
            "unit": "allocs/op",
            "extra": "16742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31099,
            "unit": "ns/op\t   21803 B/op\t      76 allocs/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31099,
            "unit": "ns/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21803,
            "unit": "B/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 264207,
            "unit": "ns/op\t   56332 B/op\t     551 allocs/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 264207,
            "unit": "ns/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56332,
            "unit": "B/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 265220,
            "unit": "ns/op\t   56334 B/op\t     551 allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 265220,
            "unit": "ns/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56334,
            "unit": "B/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97376,
            "unit": "ns/op\t   29711 B/op\t     263 allocs/op",
            "extra": "12219 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97376,
            "unit": "ns/op",
            "extra": "12219 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29711,
            "unit": "B/op",
            "extra": "12219 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 263,
            "unit": "allocs/op",
            "extra": "12219 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48175,
            "unit": "ns/op\t   34742 B/op\t     227 allocs/op",
            "extra": "24412 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48175,
            "unit": "ns/op",
            "extra": "24412 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34742,
            "unit": "B/op",
            "extra": "24412 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 227,
            "unit": "allocs/op",
            "extra": "24412 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198979,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5847 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198979,
            "unit": "ns/op",
            "extra": "5847 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5847 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5847 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8068,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "147919 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8068,
            "unit": "ns/op",
            "extra": "147919 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "147919 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147919 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151310,
            "unit": "ns/op\t   61088 B/op\t     720 allocs/op",
            "extra": "7396 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151310,
            "unit": "ns/op",
            "extra": "7396 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61088,
            "unit": "B/op",
            "extra": "7396 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 720,
            "unit": "allocs/op",
            "extra": "7396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822605150246A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822605150246A094101Federal",
            "value": 231380104,
            "unit": "1210428822605150246A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 915.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1319858 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 915.5,
            "unit": "ns/op",
            "extra": "1319858 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1319858 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1319858 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.19,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12606153 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.19,
            "unit": "ns/op",
            "extra": "12606153 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12606153 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12606153 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.13,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19594411 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.13,
            "unit": "ns/op",
            "extra": "19594411 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19594411 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19594411 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44148907 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.3,
            "unit": "ns/op",
            "extra": "44148907 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44148907 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44148907 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85438696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.12,
            "unit": "ns/op",
            "extra": "85438696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85438696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85438696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.637,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212813641 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.637,
            "unit": "ns/op",
            "extra": "212813641 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212813641 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212813641 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 272190,
            "unit": "ns/op\t   54076 B/op\t     305 allocs/op",
            "extra": "4686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 272190,
            "unit": "ns/op",
            "extra": "4686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54076,
            "unit": "B/op",
            "extra": "4686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 272453,
            "unit": "ns/op\t   54086 B/op\t     305 allocs/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 272453,
            "unit": "ns/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54086,
            "unit": "B/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 305,
            "unit": "allocs/op",
            "extra": "4782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 156824,
            "unit": "ns/op\t   54490 B/op\t     309 allocs/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 156824,
            "unit": "ns/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54490,
            "unit": "B/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 147968,
            "unit": "ns/op\t   54524 B/op\t     309 allocs/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 147968,
            "unit": "ns/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54524,
            "unit": "B/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 309,
            "unit": "allocs/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 329325,
            "unit": "ns/op\t   59800 B/op\t     365 allocs/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 329325,
            "unit": "ns/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59800,
            "unit": "B/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 322212,
            "unit": "ns/op\t   59821 B/op\t     365 allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 322212,
            "unit": "ns/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59821,
            "unit": "B/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 314977,
            "unit": "ns/op\t   59794 B/op\t     365 allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 314977,
            "unit": "ns/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59794,
            "unit": "B/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 303085,
            "unit": "ns/op\t   59604 B/op\t     366 allocs/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 303085,
            "unit": "ns/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59604,
            "unit": "B/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48605988 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.94,
            "unit": "ns/op",
            "extra": "48605988 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48605988 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48605988 times\n4 procs"
          }
        ]
      }
    ],
    "moov-io/ach": [
      {
        "commit": {
          "author": {
            "name": "Adam Shannon",
            "username": "adamdecaf",
            "email": "adamkshannon@gmail.com"
          },
          "committer": {
            "name": "Adam Shannon",
            "username": "adamdecaf",
            "email": "adamkshannon@gmail.com"
          },
          "id": "601df1d1fffb445eee939ab368d650ec2fa02b83",
          "message": "build: might help to use $",
          "timestamp": "2024-10-03T15:43:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/601df1d1fffb445eee939ab368d650ec2fa02b83"
        },
        "date": 1727970289848,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12494,
            "unit": "ns/op\t    9668 B/op\t      99 allocs/op",
            "extra": "95439 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12494,
            "unit": "ns/op",
            "extra": "95439 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9668,
            "unit": "B/op",
            "extra": "95439 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "95439 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38854,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "30748 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38854,
            "unit": "ns/op",
            "extra": "30748 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "30748 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30748 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72494,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "16804 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72494,
            "unit": "ns/op",
            "extra": "16804 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "16804 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16804 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29847,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "37174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29847,
            "unit": "ns/op",
            "extra": "37174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "37174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "37174 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297072,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297072,
            "unit": "ns/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296731,
            "unit": "ns/op\t   56271 B/op\t     743 allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296731,
            "unit": "ns/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56271,
            "unit": "B/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102687,
            "unit": "ns/op\t   27427 B/op\t     199 allocs/op",
            "extra": "12445 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102687,
            "unit": "ns/op",
            "extra": "12445 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27427,
            "unit": "B/op",
            "extra": "12445 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12445 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43940,
            "unit": "ns/op\t   31593 B/op\t     130 allocs/op",
            "extra": "27309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43940,
            "unit": "ns/op",
            "extra": "27309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31593,
            "unit": "B/op",
            "extra": "27309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27309 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 227760,
            "unit": "ns/op\t   53916 B/op\t    2041 allocs/op",
            "extra": "5109 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 227760,
            "unit": "ns/op",
            "extra": "5109 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53916,
            "unit": "B/op",
            "extra": "5109 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2041,
            "unit": "allocs/op",
            "extra": "5109 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6081,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "171146 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6081,
            "unit": "ns/op",
            "extra": "171146 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "171146 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "171146 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153404,
            "unit": "ns/op\t   57105 B/op\t     612 allocs/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153404,
            "unit": "ns/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57105,
            "unit": "B/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 612,
            "unit": "allocs/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822410041544A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822410041544A094101Federal",
            "value": 231380104,
            "unit": "1210428822410041544A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1228,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "951274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1228,
            "unit": "ns/op",
            "extra": "951274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "951274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "951274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 13.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91558447 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 13.22,
            "unit": "ns/op",
            "extra": "91558447 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91558447 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91558447 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.58,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18466658 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.58,
            "unit": "ns/op",
            "extra": "18466658 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18466658 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18466658 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "37757061 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.35,
            "unit": "ns/op",
            "extra": "37757061 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "37757061 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "37757061 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85404012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.4,
            "unit": "ns/op",
            "extra": "85404012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85404012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85404012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.544,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183832485 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.544,
            "unit": "ns/op",
            "extra": "183832485 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183832485 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183832485 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 309709,
            "unit": "ns/op\t   56818 B/op\t     637 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 309709,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56818,
            "unit": "B/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302700,
            "unit": "ns/op\t   56839 B/op\t     637 allocs/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302700,
            "unit": "ns/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56839,
            "unit": "B/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 195615,
            "unit": "ns/op\t   57018 B/op\t     640 allocs/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 195615,
            "unit": "ns/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57018,
            "unit": "B/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 186856,
            "unit": "ns/op\t   57051 B/op\t     640 allocs/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 186856,
            "unit": "ns/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 367929,
            "unit": "ns/op\t   62535 B/op\t     697 allocs/op",
            "extra": "3282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 367929,
            "unit": "ns/op",
            "extra": "3282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62535,
            "unit": "B/op",
            "extra": "3282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362227,
            "unit": "ns/op\t   62560 B/op\t     697 allocs/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362227,
            "unit": "ns/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62560,
            "unit": "B/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 368133,
            "unit": "ns/op\t   62538 B/op\t     697 allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 368133,
            "unit": "ns/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62538,
            "unit": "B/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356743,
            "unit": "ns/op\t   62534 B/op\t     697 allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356743,
            "unit": "ns/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62534,
            "unit": "B/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 33.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35474305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 33.66,
            "unit": "ns/op",
            "extra": "35474305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35474305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35474305 times\n4 procs"
          }
        ]
      }
    ]
  }
}