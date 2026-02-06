window.BENCHMARK_DATA = {
  "lastUpdate": 1770342543646,
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
          "id": "23a48a43b0a595beec4f3a6ff1c089061cd546ad",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1c577b25f269bd14cb70d5653a4cdd9307b5809c",
          "timestamp": "2026-01-12T03:46:17Z",
          "url": "https://github.com/moov-io/benchmarks/commit/23a48a43b0a595beec4f3a6ff1c089061cd546ad"
        },
        "date": 1768267255718,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13850,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "85720 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13850,
            "unit": "ns/op",
            "extra": "85720 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "85720 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "85720 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42641,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28568 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42641,
            "unit": "ns/op",
            "extra": "28568 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28568 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28568 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76005,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15836 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76005,
            "unit": "ns/op",
            "extra": "15836 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15836 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15836 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 33026,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 33026,
            "unit": "ns/op",
            "extra": "38654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38654 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 302221,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 302221,
            "unit": "ns/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 304753,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 304753,
            "unit": "ns/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100651,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100651,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50548,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "23918 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50548,
            "unit": "ns/op",
            "extra": "23918 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "23918 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23918 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203766,
            "unit": "ns/op\t   54710 B/op\t    2069 allocs/op",
            "extra": "5893 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203766,
            "unit": "ns/op",
            "extra": "5893 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54710,
            "unit": "B/op",
            "extra": "5893 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5893 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8484,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "142293 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8484,
            "unit": "ns/op",
            "extra": "142293 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "142293 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "142293 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 164388,
            "unit": "ns/op\t   61098 B/op\t     721 allocs/op",
            "extra": "7543 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 164388,
            "unit": "ns/op",
            "extra": "7543 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61098,
            "unit": "B/op",
            "extra": "7543 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7543 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601140120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601140120A094101Federal",
            "value": 231380104,
            "unit": "1210428822601140120A094101Federal",
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
            "value": 971,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1237190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 971,
            "unit": "ns/op",
            "extra": "1237190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1237190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1237190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.41,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12141787 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.41,
            "unit": "ns/op",
            "extra": "12141787 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12141787 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12141787 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.55,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18631816 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.55,
            "unit": "ns/op",
            "extra": "18631816 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18631816 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18631816 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.69,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40658484 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.69,
            "unit": "ns/op",
            "extra": "40658484 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40658484 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40658484 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89398918 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "89398918 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89398918 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89398918 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.927,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202405854 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.927,
            "unit": "ns/op",
            "extra": "202405854 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202405854 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202405854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 308914,
            "unit": "ns/op\t   57882 B/op\t     666 allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 308914,
            "unit": "ns/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57882,
            "unit": "B/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 311057,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 311057,
            "unit": "ns/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 192480,
            "unit": "ns/op\t   58069 B/op\t     669 allocs/op",
            "extra": "6477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 192480,
            "unit": "ns/op",
            "extra": "6477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58069,
            "unit": "B/op",
            "extra": "6477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175564,
            "unit": "ns/op\t   58104 B/op\t     669 allocs/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175564,
            "unit": "ns/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58104,
            "unit": "B/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 372382,
            "unit": "ns/op\t   63641 B/op\t     726 allocs/op",
            "extra": "3340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 372382,
            "unit": "ns/op",
            "extra": "3340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63641,
            "unit": "B/op",
            "extra": "3340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 367330,
            "unit": "ns/op\t   63598 B/op\t     726 allocs/op",
            "extra": "3496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 367330,
            "unit": "ns/op",
            "extra": "3496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63598,
            "unit": "B/op",
            "extra": "3496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362476,
            "unit": "ns/op\t   63611 B/op\t     726 allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362476,
            "unit": "ns/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63611,
            "unit": "B/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 354165,
            "unit": "ns/op\t   63065 B/op\t     727 allocs/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 354165,
            "unit": "ns/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63065,
            "unit": "B/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48243297 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.34,
            "unit": "ns/op",
            "extra": "48243297 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48243297 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48243297 times\n4 procs"
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
          "id": "506bf626cc087620c7c28f3e8b8e546b78efcb5c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ab44b55be2afa510bb39bc59dbde1a0beb067e1d",
          "timestamp": "2026-01-13T03:25:25Z",
          "url": "https://github.com/moov-io/benchmarks/commit/506bf626cc087620c7c28f3e8b8e546b78efcb5c"
        },
        "date": 1768354016539,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13584,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86636 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13584,
            "unit": "ns/op",
            "extra": "86636 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86636 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86636 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36844,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "32354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36844,
            "unit": "ns/op",
            "extra": "32354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "32354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32354 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72097,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "17869 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72097,
            "unit": "ns/op",
            "extra": "17869 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "17869 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "17869 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 26953,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "44827 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 26953,
            "unit": "ns/op",
            "extra": "44827 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "44827 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44827 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 271377,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 271377,
            "unit": "ns/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 271639,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 271639,
            "unit": "ns/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 90843,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "13411 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 90843,
            "unit": "ns/op",
            "extra": "13411 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "13411 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "13411 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48437,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "24912 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48437,
            "unit": "ns/op",
            "extra": "24912 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "24912 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24912 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203393,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6304 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203393,
            "unit": "ns/op",
            "extra": "6304 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6304 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6304 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8167,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145592 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8167,
            "unit": "ns/op",
            "extra": "145592 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145592 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145592 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149007,
            "unit": "ns/op\t   61099 B/op\t     721 allocs/op",
            "extra": "7747 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149007,
            "unit": "ns/op",
            "extra": "7747 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61099,
            "unit": "B/op",
            "extra": "7747 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601150126A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601150126A094101Federal",
            "value": 231380104,
            "unit": "1210428822601150126A094101Federal",
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
            "value": 988.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1219288 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 988.2,
            "unit": "ns/op",
            "extra": "1219288 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1219288 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1219288 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 88.02,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13656744 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 88.02,
            "unit": "ns/op",
            "extra": "13656744 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13656744 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13656744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 55.76,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20766919 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 55.76,
            "unit": "ns/op",
            "extra": "20766919 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20766919 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20766919 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.16,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43267520 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "43267520 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43267520 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43267520 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93010594 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.58,
            "unit": "ns/op",
            "extra": "93010594 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93010594 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93010594 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230759266 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.198,
            "unit": "ns/op",
            "extra": "230759266 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230759266 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230759266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 270717,
            "unit": "ns/op\t   57877 B/op\t     666 allocs/op",
            "extra": "4422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 270717,
            "unit": "ns/op",
            "extra": "4422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57877,
            "unit": "B/op",
            "extra": "4422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 273791,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 273791,
            "unit": "ns/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 193805,
            "unit": "ns/op\t   58085 B/op\t     669 allocs/op",
            "extra": "5780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 193805,
            "unit": "ns/op",
            "extra": "5780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58085,
            "unit": "B/op",
            "extra": "5780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 182665,
            "unit": "ns/op\t   58106 B/op\t     669 allocs/op",
            "extra": "5900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 182665,
            "unit": "ns/op",
            "extra": "5900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58106,
            "unit": "B/op",
            "extra": "5900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 330263,
            "unit": "ns/op\t   63599 B/op\t     726 allocs/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 330263,
            "unit": "ns/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63599,
            "unit": "B/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 322066,
            "unit": "ns/op\t   63624 B/op\t     726 allocs/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 322066,
            "unit": "ns/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63624,
            "unit": "B/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 324447,
            "unit": "ns/op\t   63619 B/op\t     726 allocs/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 324447,
            "unit": "ns/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63619,
            "unit": "B/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 320712,
            "unit": "ns/op\t   63064 B/op\t     727 allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 320712,
            "unit": "ns/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63064,
            "unit": "B/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52407912 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.8,
            "unit": "ns/op",
            "extra": "52407912 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52407912 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52407912 times\n4 procs"
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
          "id": "fdce3813ee0b176b4433aa02403c04b9959a4f75",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b03e1da49b08e57124fd7171179e057e2b7b6c45",
          "timestamp": "2026-01-14T03:44:23Z",
          "url": "https://github.com/moov-io/benchmarks/commit/fdce3813ee0b176b4433aa02403c04b9959a4f75"
        },
        "date": 1768440152778,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13828,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86304 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13828,
            "unit": "ns/op",
            "extra": "86304 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86304 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42279,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28578 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42279,
            "unit": "ns/op",
            "extra": "28578 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28578 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28578 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 79928,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15986 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 79928,
            "unit": "ns/op",
            "extra": "15986 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15986 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15986 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31050,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31050,
            "unit": "ns/op",
            "extra": "38688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38688 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296583,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296583,
            "unit": "ns/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297279,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297279,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98936,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12117 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98936,
            "unit": "ns/op",
            "extra": "12117 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12117 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12117 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49312,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24202 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49312,
            "unit": "ns/op",
            "extra": "24202 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24202 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24202 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209390,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "6000 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209390,
            "unit": "ns/op",
            "extra": "6000 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "6000 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6000 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8265,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144795 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8265,
            "unit": "ns/op",
            "extra": "144795 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144795 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144795 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154471,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7260 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154471,
            "unit": "ns/op",
            "extra": "7260 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7260 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7260 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601160121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601160121A094101Federal",
            "value": 231380104,
            "unit": "1210428822601160121A094101Federal",
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
            "value": 968.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1229346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 968.7,
            "unit": "ns/op",
            "extra": "1229346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1229346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1229346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.26,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12170109 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.26,
            "unit": "ns/op",
            "extra": "12170109 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12170109 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12170109 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.42,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18930050 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.42,
            "unit": "ns/op",
            "extra": "18930050 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18930050 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18930050 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.5,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40292618 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.5,
            "unit": "ns/op",
            "extra": "40292618 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40292618 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40292618 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88790468 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.89,
            "unit": "ns/op",
            "extra": "88790468 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88790468 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88790468 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200615445 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.913,
            "unit": "ns/op",
            "extra": "200615445 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "200615445 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "200615445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310070,
            "unit": "ns/op\t   57885 B/op\t     666 allocs/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310070,
            "unit": "ns/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57885,
            "unit": "B/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306154,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306154,
            "unit": "ns/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178013,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178013,
            "unit": "ns/op",
            "extra": "6316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177564,
            "unit": "ns/op\t   58114 B/op\t     669 allocs/op",
            "extra": "6087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177564,
            "unit": "ns/op",
            "extra": "6087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58114,
            "unit": "B/op",
            "extra": "6087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368047,
            "unit": "ns/op\t   63590 B/op\t     726 allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368047,
            "unit": "ns/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63590,
            "unit": "B/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 365141,
            "unit": "ns/op\t   63586 B/op\t     726 allocs/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 365141,
            "unit": "ns/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63586,
            "unit": "B/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353331,
            "unit": "ns/op\t   63593 B/op\t     726 allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353331,
            "unit": "ns/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63593,
            "unit": "B/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356652,
            "unit": "ns/op\t   63563 B/op\t     727 allocs/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356652,
            "unit": "ns/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63563,
            "unit": "B/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44268673 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.55,
            "unit": "ns/op",
            "extra": "44268673 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44268673 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44268673 times\n4 procs"
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
          "id": "0b96115f5195e625a38cc010c5ce521432c0c7c4",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fe96034ae45ab0b1b58f3ba0cc428d59ff29a3a5",
          "timestamp": "2026-01-15T03:28:05Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0b96115f5195e625a38cc010c5ce521432c0c7c4"
        },
        "date": 1768526705760,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14143,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "83596 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14143,
            "unit": "ns/op",
            "extra": "83596 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "83596 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "83596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42488,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "26079 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42488,
            "unit": "ns/op",
            "extra": "26079 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "26079 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "26079 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 82022,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15750 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 82022,
            "unit": "ns/op",
            "extra": "15750 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15750 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15750 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31528,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38162 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31528,
            "unit": "ns/op",
            "extra": "38162 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38162 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38162 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300993,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300993,
            "unit": "ns/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299931,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299931,
            "unit": "ns/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101312,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101312,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49801,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24098 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49801,
            "unit": "ns/op",
            "extra": "24098 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24098 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24098 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206656,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5772 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206656,
            "unit": "ns/op",
            "extra": "5772 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5772 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5772 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8977,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "140408 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8977,
            "unit": "ns/op",
            "extra": "140408 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "140408 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "140408 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155715,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "6937 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155715,
            "unit": "ns/op",
            "extra": "6937 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "6937 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6937 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601170124A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601170124A094101Federal",
            "value": 231380104,
            "unit": "1210428822601170124A094101Federal",
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
            "value": 972,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1236639 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 972,
            "unit": "ns/op",
            "extra": "1236639 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1236639 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1236639 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.85,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12060074 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.85,
            "unit": "ns/op",
            "extra": "12060074 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12060074 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12060074 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.54,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18765301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.54,
            "unit": "ns/op",
            "extra": "18765301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18765301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18765301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.52,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39252247 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.52,
            "unit": "ns/op",
            "extra": "39252247 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39252247 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39252247 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89616200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "89616200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89616200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89616200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.922,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202668423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.922,
            "unit": "ns/op",
            "extra": "202668423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202668423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202668423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305376,
            "unit": "ns/op\t   57880 B/op\t     666 allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305376,
            "unit": "ns/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57880,
            "unit": "B/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301620,
            "unit": "ns/op\t   57900 B/op\t     666 allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301620,
            "unit": "ns/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57900,
            "unit": "B/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 201719,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 201719,
            "unit": "ns/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171080,
            "unit": "ns/op\t   58104 B/op\t     669 allocs/op",
            "extra": "6132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171080,
            "unit": "ns/op",
            "extra": "6132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58104,
            "unit": "B/op",
            "extra": "6132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 372952,
            "unit": "ns/op\t   63613 B/op\t     726 allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 372952,
            "unit": "ns/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63613,
            "unit": "B/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360037,
            "unit": "ns/op\t   63666 B/op\t     726 allocs/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360037,
            "unit": "ns/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63666,
            "unit": "B/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 360372,
            "unit": "ns/op\t   63581 B/op\t     726 allocs/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 360372,
            "unit": "ns/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63581,
            "unit": "B/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356665,
            "unit": "ns/op\t   63631 B/op\t     727 allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356665,
            "unit": "ns/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63631,
            "unit": "B/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44759034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.97,
            "unit": "ns/op",
            "extra": "44759034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44759034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44759034 times\n4 procs"
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
          "id": "f6659c4b319c427e69e0bce162f37a5b68f73e7d",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 203592c69eaebd7583aec04cba23230f8dad4b96",
          "timestamp": "2026-01-16T03:27:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f6659c4b319c427e69e0bce162f37a5b68f73e7d"
        },
        "date": 1768612859597,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14144,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "82124 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14144,
            "unit": "ns/op",
            "extra": "82124 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "82124 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82124 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43839,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "23934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43839,
            "unit": "ns/op",
            "extra": "23934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "23934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "23934 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76197,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15631 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76197,
            "unit": "ns/op",
            "extra": "15631 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15631 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15631 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32139,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "37428 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32139,
            "unit": "ns/op",
            "extra": "37428 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "37428 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "37428 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298390,
            "unit": "ns/op\t   59063 B/op\t     810 allocs/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298390,
            "unit": "ns/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59063,
            "unit": "B/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 304031,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 304031,
            "unit": "ns/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3841 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100688,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100688,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 51910,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "23750 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51910,
            "unit": "ns/op",
            "extra": "23750 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "23750 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23750 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203469,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203469,
            "unit": "ns/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5919 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8097,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144793 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8097,
            "unit": "ns/op",
            "extra": "144793 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144793 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144793 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157003,
            "unit": "ns/op\t   61100 B/op\t     721 allocs/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157003,
            "unit": "ns/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61100,
            "unit": "B/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601180120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601180120A094101Federal",
            "value": 231380104,
            "unit": "1210428822601180120A094101Federal",
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
            "value": 958.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1274701 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 958.2,
            "unit": "ns/op",
            "extra": "1274701 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1274701 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1274701 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.85,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12232771 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.85,
            "unit": "ns/op",
            "extra": "12232771 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12232771 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12232771 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.44,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18702888 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.44,
            "unit": "ns/op",
            "extra": "18702888 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18702888 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18702888 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.64,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40469392 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.64,
            "unit": "ns/op",
            "extra": "40469392 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40469392 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40469392 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85637156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.34,
            "unit": "ns/op",
            "extra": "85637156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85637156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85637156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167529993 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.136,
            "unit": "ns/op",
            "extra": "167529993 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167529993 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167529993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298482,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298482,
            "unit": "ns/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
            "unit": "B/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295450,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295450,
            "unit": "ns/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 180124,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "6315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 180124,
            "unit": "ns/op",
            "extra": "6315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "6315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174387,
            "unit": "ns/op\t   58100 B/op\t     669 allocs/op",
            "extra": "6588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174387,
            "unit": "ns/op",
            "extra": "6588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58100,
            "unit": "B/op",
            "extra": "6588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 369750,
            "unit": "ns/op\t   63588 B/op\t     726 allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 369750,
            "unit": "ns/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63588,
            "unit": "B/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353081,
            "unit": "ns/op\t   63598 B/op\t     726 allocs/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353081,
            "unit": "ns/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63598,
            "unit": "B/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348988,
            "unit": "ns/op\t   63590 B/op\t     726 allocs/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348988,
            "unit": "ns/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63590,
            "unit": "B/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 355005,
            "unit": "ns/op\t   63531 B/op\t     727 allocs/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 355005,
            "unit": "ns/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63531,
            "unit": "B/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45816603 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "45816603 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45816603 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45816603 times\n4 procs"
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
          "id": "6257c15aa7188f648e84eaffe36c0ff21f32ce5c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2bfb59a203c9355c3116ed429c9b225012b4289a",
          "timestamp": "2026-01-17T03:20:10Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6257c15aa7188f648e84eaffe36c0ff21f32ce5c"
        },
        "date": 1768700381442,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13461,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88129 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13461,
            "unit": "ns/op",
            "extra": "88129 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88129 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88129 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42590,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28418 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42590,
            "unit": "ns/op",
            "extra": "28418 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28418 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28418 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78837,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78837,
            "unit": "ns/op",
            "extra": "16130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31142,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31142,
            "unit": "ns/op",
            "extra": "38419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38419 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298065,
            "unit": "ns/op\t   59063 B/op\t     810 allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298065,
            "unit": "ns/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59063,
            "unit": "B/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297981,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297981,
            "unit": "ns/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99976,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12140 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99976,
            "unit": "ns/op",
            "extra": "12140 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12140 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49122,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49122,
            "unit": "ns/op",
            "extra": "24322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24322 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206019,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5787 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206019,
            "unit": "ns/op",
            "extra": "5787 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5787 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5787 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7994,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "140042 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7994,
            "unit": "ns/op",
            "extra": "140042 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "140042 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "140042 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154162,
            "unit": "ns/op\t   61095 B/op\t     721 allocs/op",
            "extra": "7777 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154162,
            "unit": "ns/op",
            "extra": "7777 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61095,
            "unit": "B/op",
            "extra": "7777 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601190138A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601190138A094101Federal",
            "value": 231380104,
            "unit": "1210428822601190138A094101Federal",
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
            "value": 944.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1245045 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 944.8,
            "unit": "ns/op",
            "extra": "1245045 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1245045 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1245045 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12210366 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.3,
            "unit": "ns/op",
            "extra": "12210366 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12210366 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12210366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 64.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19063195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 64.7,
            "unit": "ns/op",
            "extra": "19063195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19063195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19063195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.69,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40706701 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.69,
            "unit": "ns/op",
            "extra": "40706701 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40706701 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40706701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86250312 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.03,
            "unit": "ns/op",
            "extra": "86250312 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86250312 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86250312 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "174695857 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.164,
            "unit": "ns/op",
            "extra": "174695857 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "174695857 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "174695857 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293780,
            "unit": "ns/op\t   57877 B/op\t     666 allocs/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293780,
            "unit": "ns/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57877,
            "unit": "B/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302186,
            "unit": "ns/op\t   57895 B/op\t     666 allocs/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302186,
            "unit": "ns/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57895,
            "unit": "B/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181202,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "6243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181202,
            "unit": "ns/op",
            "extra": "6243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "6243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 166319,
            "unit": "ns/op\t   58118 B/op\t     669 allocs/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 166319,
            "unit": "ns/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58118,
            "unit": "B/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 352178,
            "unit": "ns/op\t   63598 B/op\t     726 allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 352178,
            "unit": "ns/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63598,
            "unit": "B/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 347102,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 347102,
            "unit": "ns/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346793,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346793,
            "unit": "ns/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340836,
            "unit": "ns/op\t   63564 B/op\t     727 allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340836,
            "unit": "ns/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63564,
            "unit": "B/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44935690 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.46,
            "unit": "ns/op",
            "extra": "44935690 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44935690 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44935690 times\n4 procs"
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
          "id": "5fb16637186e29cd0434b703e77d0007a00fac69",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d4e5176df2d96965e7f9c73ea6d5e45c56323911",
          "timestamp": "2026-01-18T03:43:14Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5fb16637186e29cd0434b703e77d0007a00fac69"
        },
        "date": 1768786113391,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12300,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "96062 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12300,
            "unit": "ns/op",
            "extra": "96062 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "96062 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "96062 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41982,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "29253 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41982,
            "unit": "ns/op",
            "extra": "29253 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "29253 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "29253 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70468,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70468,
            "unit": "ns/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30287,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "39583 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30287,
            "unit": "ns/op",
            "extra": "39583 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "39583 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "39583 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 274066,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 274066,
            "unit": "ns/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 274650,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 274650,
            "unit": "ns/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92906,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92906,
            "unit": "ns/op",
            "extra": "12925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12925 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45592,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "26438 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45592,
            "unit": "ns/op",
            "extra": "26438 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "26438 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "26438 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 181582,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 181582,
            "unit": "ns/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6427 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7395,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "159213 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7395,
            "unit": "ns/op",
            "extra": "159213 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "159213 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "159213 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 142443,
            "unit": "ns/op\t   61098 B/op\t     721 allocs/op",
            "extra": "8428 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 142443,
            "unit": "ns/op",
            "extra": "8428 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61098,
            "unit": "B/op",
            "extra": "8428 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "8428 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601200127A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601200127A094101Federal",
            "value": 231380104,
            "unit": "1210428822601200127A094101Federal",
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
            "value": 964.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1274546 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 964.9,
            "unit": "ns/op",
            "extra": "1274546 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1274546 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1274546 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.24,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12033712 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.24,
            "unit": "ns/op",
            "extra": "12033712 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12033712 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12033712 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.97,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19500796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.97,
            "unit": "ns/op",
            "extra": "19500796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19500796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19500796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42204796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.03,
            "unit": "ns/op",
            "extra": "42204796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "42204796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "42204796 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88922487 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.1,
            "unit": "ns/op",
            "extra": "88922487 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88922487 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88922487 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "175978293 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.34,
            "unit": "ns/op",
            "extra": "175978293 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "175978293 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "175978293 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 283200,
            "unit": "ns/op\t   57869 B/op\t     666 allocs/op",
            "extra": "4496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 283200,
            "unit": "ns/op",
            "extra": "4496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57869,
            "unit": "B/op",
            "extra": "4496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 286512,
            "unit": "ns/op\t   57892 B/op\t     666 allocs/op",
            "extra": "4290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 286512,
            "unit": "ns/op",
            "extra": "4290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57892,
            "unit": "B/op",
            "extra": "4290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 166602,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 166602,
            "unit": "ns/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 160838,
            "unit": "ns/op\t   58118 B/op\t     669 allocs/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 160838,
            "unit": "ns/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58118,
            "unit": "B/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 348353,
            "unit": "ns/op\t   63600 B/op\t     726 allocs/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 348353,
            "unit": "ns/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63600,
            "unit": "B/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 340488,
            "unit": "ns/op\t   63602 B/op\t     726 allocs/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 340488,
            "unit": "ns/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63602,
            "unit": "B/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 340028,
            "unit": "ns/op\t   63604 B/op\t     726 allocs/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 340028,
            "unit": "ns/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63604,
            "unit": "B/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 330768,
            "unit": "ns/op\t   63576 B/op\t     727 allocs/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 330768,
            "unit": "ns/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63576,
            "unit": "B/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4195 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51144940 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.51,
            "unit": "ns/op",
            "extra": "51144940 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51144940 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51144940 times\n4 procs"
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
          "id": "afcf39613e63e54c84cf55a4a21218c1c84a5d54",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8ad5e25e187cb9dd6c9bb291998f7754ba19a79c",
          "timestamp": "2026-01-19T03:47:15Z",
          "url": "https://github.com/moov-io/benchmarks/commit/afcf39613e63e54c84cf55a4a21218c1c84a5d54"
        },
        "date": 1768872232722,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13397,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88622 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13397,
            "unit": "ns/op",
            "extra": "88622 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88622 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88622 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42090,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42090,
            "unit": "ns/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74283,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74283,
            "unit": "ns/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32777,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38746 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32777,
            "unit": "ns/op",
            "extra": "38746 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38746 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38746 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294660,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294660,
            "unit": "ns/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 291857,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291857,
            "unit": "ns/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98173,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12188 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98173,
            "unit": "ns/op",
            "extra": "12188 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12188 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49071,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49071,
            "unit": "ns/op",
            "extra": "24446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24446 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202151,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5866 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202151,
            "unit": "ns/op",
            "extra": "5866 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5866 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5866 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8332,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "148928 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8332,
            "unit": "ns/op",
            "extra": "148928 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "148928 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148928 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154246,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7226 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154246,
            "unit": "ns/op",
            "extra": "7226 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7226 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7226 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601210123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601210123A094101Federal",
            "value": 231380104,
            "unit": "1210428822601210123A094101Federal",
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
            "value": 941.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1273894 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 941.6,
            "unit": "ns/op",
            "extra": "1273894 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1273894 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1273894 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.24,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11666994 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.24,
            "unit": "ns/op",
            "extra": "11666994 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11666994 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11666994 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.48,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19062380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.48,
            "unit": "ns/op",
            "extra": "19062380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19062380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19062380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.33,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41400422 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.33,
            "unit": "ns/op",
            "extra": "41400422 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41400422 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41400422 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85673302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.98,
            "unit": "ns/op",
            "extra": "85673302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85673302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85673302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.038,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171642362 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.038,
            "unit": "ns/op",
            "extra": "171642362 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "171642362 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "171642362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293183,
            "unit": "ns/op\t   57878 B/op\t     666 allocs/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293183,
            "unit": "ns/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57878,
            "unit": "B/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 289439,
            "unit": "ns/op\t   57892 B/op\t     666 allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 289439,
            "unit": "ns/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57892,
            "unit": "B/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 186509,
            "unit": "ns/op\t   58076 B/op\t     669 allocs/op",
            "extra": "6360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 186509,
            "unit": "ns/op",
            "extra": "6360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58076,
            "unit": "B/op",
            "extra": "6360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172099,
            "unit": "ns/op\t   58101 B/op\t     669 allocs/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172099,
            "unit": "ns/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58101,
            "unit": "B/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 350067,
            "unit": "ns/op\t   63631 B/op\t     726 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 350067,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63631,
            "unit": "B/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 348719,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348719,
            "unit": "ns/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63585,
            "unit": "B/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 344828,
            "unit": "ns/op\t   63587 B/op\t     726 allocs/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344828,
            "unit": "ns/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63587,
            "unit": "B/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341751,
            "unit": "ns/op\t   63616 B/op\t     727 allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341751,
            "unit": "ns/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63616,
            "unit": "B/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45960372 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "45960372 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45960372 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45960372 times\n4 procs"
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
          "id": "d52982a57a3bf11dbab41e6e08080c1c7c08b0c8",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 35d2a2798c481c3a6712f0f6f1f10fee8163f331",
          "timestamp": "2026-01-20T03:41:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d52982a57a3bf11dbab41e6e08080c1c7c08b0c8"
        },
        "date": 1768958797286,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13343,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88771 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13343,
            "unit": "ns/op",
            "extra": "88771 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88771 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88771 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41744,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28692 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41744,
            "unit": "ns/op",
            "extra": "28692 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28692 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28692 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78254,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15032 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78254,
            "unit": "ns/op",
            "extra": "15032 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15032 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15032 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30667,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38707 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30667,
            "unit": "ns/op",
            "extra": "38707 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38707 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38707 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290034,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290034,
            "unit": "ns/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289357,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289357,
            "unit": "ns/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3866 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98640,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98640,
            "unit": "ns/op",
            "extra": "12210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48777,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48777,
            "unit": "ns/op",
            "extra": "24590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24590 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209727,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209727,
            "unit": "ns/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7946,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "150670 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7946,
            "unit": "ns/op",
            "extra": "150670 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "150670 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "150670 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151624,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7322 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151624,
            "unit": "ns/op",
            "extra": "7322 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7322 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601220125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601220125A094101Federal",
            "value": 231380104,
            "unit": "1210428822601220125A094101Federal",
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
            "value": 938.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1269776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 938.9,
            "unit": "ns/op",
            "extra": "1269776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1269776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1269776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.29,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12198158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.29,
            "unit": "ns/op",
            "extra": "12198158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12198158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12198158 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.65,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16802802 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.65,
            "unit": "ns/op",
            "extra": "16802802 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16802802 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16802802 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.38,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41402125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.38,
            "unit": "ns/op",
            "extra": "41402125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41402125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41402125 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87634533 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.91,
            "unit": "ns/op",
            "extra": "87634533 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87634533 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87634533 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.847,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167737681 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.847,
            "unit": "ns/op",
            "extra": "167737681 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167737681 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167737681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294250,
            "unit": "ns/op\t   57886 B/op\t     666 allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294250,
            "unit": "ns/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57886,
            "unit": "B/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291505,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291505,
            "unit": "ns/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4179 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170988,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170988,
            "unit": "ns/op",
            "extra": "6526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169037,
            "unit": "ns/op\t   58119 B/op\t     669 allocs/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169037,
            "unit": "ns/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58119,
            "unit": "B/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 349666,
            "unit": "ns/op\t   63602 B/op\t     726 allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 349666,
            "unit": "ns/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63602,
            "unit": "B/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 347506,
            "unit": "ns/op\t   63625 B/op\t     726 allocs/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 347506,
            "unit": "ns/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63625,
            "unit": "B/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 342205,
            "unit": "ns/op\t   63618 B/op\t     726 allocs/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 342205,
            "unit": "ns/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63618,
            "unit": "B/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 334032,
            "unit": "ns/op\t   63607 B/op\t     727 allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 334032,
            "unit": "ns/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45333770 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45333770 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45333770 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45333770 times\n4 procs"
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
          "id": "364033a77fce0f27988ee334351926b8452e10cd",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 560f567290759ce731b388ef38bd0b3d1d2046d4",
          "timestamp": "2026-01-21T03:41:03Z",
          "url": "https://github.com/moov-io/benchmarks/commit/364033a77fce0f27988ee334351926b8452e10cd"
        },
        "date": 1769045199411,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13673,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86703 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13673,
            "unit": "ns/op",
            "extra": "86703 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86703 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86703 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44546,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44546,
            "unit": "ns/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75203,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15505 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75203,
            "unit": "ns/op",
            "extra": "15505 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15505 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31295,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38227 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31295,
            "unit": "ns/op",
            "extra": "38227 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38227 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38227 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294056,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294056,
            "unit": "ns/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293144,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293144,
            "unit": "ns/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99625,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12025 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99625,
            "unit": "ns/op",
            "extra": "12025 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12025 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 51922,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "23979 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51922,
            "unit": "ns/op",
            "extra": "23979 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "23979 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23979 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205826,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205826,
            "unit": "ns/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8022,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145453 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8022,
            "unit": "ns/op",
            "extra": "145453 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145453 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145453 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154998,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7590 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154998,
            "unit": "ns/op",
            "extra": "7590 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7590 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601230126A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601230126A094101Federal",
            "value": 231380104,
            "unit": "1210428822601230126A094101Federal",
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
            "value": 964.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1276770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 964.9,
            "unit": "ns/op",
            "extra": "1276770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1276770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1276770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12128439 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98,
            "unit": "ns/op",
            "extra": "12128439 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12128439 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12128439 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.18,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18847575 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.18,
            "unit": "ns/op",
            "extra": "18847575 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18847575 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18847575 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.64,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41457484 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.64,
            "unit": "ns/op",
            "extra": "41457484 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41457484 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41457484 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87505830 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.96,
            "unit": "ns/op",
            "extra": "87505830 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87505830 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87505830 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "172256036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.223,
            "unit": "ns/op",
            "extra": "172256036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "172256036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "172256036 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304030,
            "unit": "ns/op\t   57881 B/op\t     666 allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304030,
            "unit": "ns/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57881,
            "unit": "B/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296352,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296352,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168859,
            "unit": "ns/op\t   58089 B/op\t     669 allocs/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168859,
            "unit": "ns/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58089,
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
            "value": 178042,
            "unit": "ns/op\t   58111 B/op\t     669 allocs/op",
            "extra": "6384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178042,
            "unit": "ns/op",
            "extra": "6384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58111,
            "unit": "B/op",
            "extra": "6384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363107,
            "unit": "ns/op\t   63628 B/op\t     726 allocs/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363107,
            "unit": "ns/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63628,
            "unit": "B/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351988,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351988,
            "unit": "ns/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352455,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352455,
            "unit": "ns/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63585,
            "unit": "B/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337861,
            "unit": "ns/op\t   63528 B/op\t     727 allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337861,
            "unit": "ns/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63528,
            "unit": "B/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45310359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.47,
            "unit": "ns/op",
            "extra": "45310359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45310359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45310359 times\n4 procs"
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
          "id": "ef83e46dc2f685c601301f467d4573909e04d913",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9d30df8521300b3bbcbf53100b8249dc15ea7990",
          "timestamp": "2026-01-22T03:45:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ef83e46dc2f685c601301f467d4573909e04d913"
        },
        "date": 1769131452387,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13492,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87650 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13492,
            "unit": "ns/op",
            "extra": "87650 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87650 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87650 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44337,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44337,
            "unit": "ns/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28356 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76094,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15474 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76094,
            "unit": "ns/op",
            "extra": "15474 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15474 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15474 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31419,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31419,
            "unit": "ns/op",
            "extra": "38304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38304 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292408,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292408,
            "unit": "ns/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296280,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296280,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98139,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12160 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98139,
            "unit": "ns/op",
            "extra": "12160 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12160 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12160 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 52281,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24411 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 52281,
            "unit": "ns/op",
            "extra": "24411 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24411 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24411 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200495,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200495,
            "unit": "ns/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7978,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "150247 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7978,
            "unit": "ns/op",
            "extra": "150247 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "150247 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "150247 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152900,
            "unit": "ns/op\t   61098 B/op\t     721 allocs/op",
            "extra": "7114 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152900,
            "unit": "ns/op",
            "extra": "7114 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61098,
            "unit": "B/op",
            "extra": "7114 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601240123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601240123A094101Federal",
            "value": 231380104,
            "unit": "1210428822601240123A094101Federal",
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
            "value": 945.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1263454 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 945.6,
            "unit": "ns/op",
            "extra": "1263454 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1263454 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1263454 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.72,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12034621 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.72,
            "unit": "ns/op",
            "extra": "12034621 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12034621 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12034621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.11,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18678928 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.11,
            "unit": "ns/op",
            "extra": "18678928 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18678928 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18678928 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.34,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40731742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.34,
            "unit": "ns/op",
            "extra": "40731742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40731742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40731742 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87482685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.96,
            "unit": "ns/op",
            "extra": "87482685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87482685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87482685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167454252 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.137,
            "unit": "ns/op",
            "extra": "167454252 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167454252 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167454252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299156,
            "unit": "ns/op\t   57889 B/op\t     666 allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299156,
            "unit": "ns/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57889,
            "unit": "B/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291951,
            "unit": "ns/op\t   57899 B/op\t     666 allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291951,
            "unit": "ns/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57899,
            "unit": "B/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173630,
            "unit": "ns/op\t   58079 B/op\t     669 allocs/op",
            "extra": "6013 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173630,
            "unit": "ns/op",
            "extra": "6013 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58079,
            "unit": "B/op",
            "extra": "6013 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6013 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167425,
            "unit": "ns/op\t   58103 B/op\t     669 allocs/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167425,
            "unit": "ns/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58103,
            "unit": "B/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359372,
            "unit": "ns/op\t   63607 B/op\t     726 allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359372,
            "unit": "ns/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 348278,
            "unit": "ns/op\t   63611 B/op\t     726 allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348278,
            "unit": "ns/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63611,
            "unit": "B/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346630,
            "unit": "ns/op\t   63603 B/op\t     726 allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346630,
            "unit": "ns/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63603,
            "unit": "B/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346441,
            "unit": "ns/op\t   63110 B/op\t     727 allocs/op",
            "extra": "3783 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346441,
            "unit": "ns/op",
            "extra": "3783 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63110,
            "unit": "B/op",
            "extra": "3783 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3783 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45971566 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.78,
            "unit": "ns/op",
            "extra": "45971566 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45971566 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45971566 times\n4 procs"
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
          "id": "45eb7f46995939f413e4fc9c4b1b87037ae90b47",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1aa2e7b48875e48e0a68bf7afc479752f3ea800a",
          "timestamp": "2026-01-23T03:39:51Z",
          "url": "https://github.com/moov-io/benchmarks/commit/45eb7f46995939f413e4fc9c4b1b87037ae90b47"
        },
        "date": 1769217734517,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13533,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87669 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13533,
            "unit": "ns/op",
            "extra": "87669 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87669 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87669 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42193,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42193,
            "unit": "ns/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 80985,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15907 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 80985,
            "unit": "ns/op",
            "extra": "15907 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15907 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15907 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31033,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38248 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31033,
            "unit": "ns/op",
            "extra": "38248 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38248 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38248 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294561,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294561,
            "unit": "ns/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292932,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292932,
            "unit": "ns/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100665,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100665,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49312,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "24355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49312,
            "unit": "ns/op",
            "extra": "24355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "24355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24355 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204608,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "5708 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204608,
            "unit": "ns/op",
            "extra": "5708 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "5708 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5708 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7931,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "135123 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7931,
            "unit": "ns/op",
            "extra": "135123 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "135123 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "135123 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153644,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153644,
            "unit": "ns/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601250121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601250121A094101Federal",
            "value": 231380104,
            "unit": "1210428822601250121A094101Federal",
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
            "value": 953.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1260855 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 953.6,
            "unit": "ns/op",
            "extra": "1260855 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1260855 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1260855 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12102590 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.7,
            "unit": "ns/op",
            "extra": "12102590 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12102590 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12102590 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.26,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18904646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.26,
            "unit": "ns/op",
            "extra": "18904646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18904646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18904646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.33,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39872080 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.33,
            "unit": "ns/op",
            "extra": "39872080 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39872080 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39872080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84949785 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.74,
            "unit": "ns/op",
            "extra": "84949785 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84949785 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84949785 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.059,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167633785 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.059,
            "unit": "ns/op",
            "extra": "167633785 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167633785 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167633785 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305254,
            "unit": "ns/op\t   57884 B/op\t     666 allocs/op",
            "extra": "3717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305254,
            "unit": "ns/op",
            "extra": "3717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57884,
            "unit": "B/op",
            "extra": "3717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297868,
            "unit": "ns/op\t   57892 B/op\t     666 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297868,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57892,
            "unit": "B/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 183233,
            "unit": "ns/op\t   58068 B/op\t     669 allocs/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 183233,
            "unit": "ns/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58068,
            "unit": "B/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173917,
            "unit": "ns/op\t   58113 B/op\t     669 allocs/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173917,
            "unit": "ns/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58113,
            "unit": "B/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364545,
            "unit": "ns/op\t   63618 B/op\t     726 allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364545,
            "unit": "ns/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63618,
            "unit": "B/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357022,
            "unit": "ns/op\t   63605 B/op\t     726 allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357022,
            "unit": "ns/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63605,
            "unit": "B/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355555,
            "unit": "ns/op\t   63639 B/op\t     726 allocs/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355555,
            "unit": "ns/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63639,
            "unit": "B/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348145,
            "unit": "ns/op\t   63663 B/op\t     727 allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348145,
            "unit": "ns/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63663,
            "unit": "B/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45943730 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "45943730 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45943730 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45943730 times\n4 procs"
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
          "id": "17c9c42582056d54856d1d39c524d04e06e67ded",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 257a6dcdcf98e910c895f3033e135c81a3c9bdec",
          "timestamp": "2026-01-24T03:24:13Z",
          "url": "https://github.com/moov-io/benchmarks/commit/17c9c42582056d54856d1d39c524d04e06e67ded"
        },
        "date": 1769305323379,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13440,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13440,
            "unit": "ns/op",
            "extra": "88976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88976 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42262,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42262,
            "unit": "ns/op",
            "extra": "28489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28489 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75445,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16078 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75445,
            "unit": "ns/op",
            "extra": "16078 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16078 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16078 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30970,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38113 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30970,
            "unit": "ns/op",
            "extra": "38113 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38113 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38113 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293759,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293759,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 291609,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291609,
            "unit": "ns/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 104979,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 104979,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49071,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49071,
            "unit": "ns/op",
            "extra": "24452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24452 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202318,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202318,
            "unit": "ns/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7904,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "151489 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7904,
            "unit": "ns/op",
            "extra": "151489 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "151489 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "151489 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153532,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153532,
            "unit": "ns/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601260141A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601260141A094101Federal",
            "value": 231380104,
            "unit": "1210428822601260141A094101Federal",
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
            "value": 953.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1265588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 953.2,
            "unit": "ns/op",
            "extra": "1265588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1265588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1265588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.07,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12018573 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.07,
            "unit": "ns/op",
            "extra": "12018573 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12018573 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12018573 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.58,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18753818 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.58,
            "unit": "ns/op",
            "extra": "18753818 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18753818 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18753818 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.47,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40889744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.47,
            "unit": "ns/op",
            "extra": "40889744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40889744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40889744 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86951650 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.07,
            "unit": "ns/op",
            "extra": "86951650 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86951650 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86951650 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.229,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168197644 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.229,
            "unit": "ns/op",
            "extra": "168197644 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168197644 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168197644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301470,
            "unit": "ns/op\t   57877 B/op\t     666 allocs/op",
            "extra": "4244 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301470,
            "unit": "ns/op",
            "extra": "4244 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57877,
            "unit": "B/op",
            "extra": "4244 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4244 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295834,
            "unit": "ns/op\t   57887 B/op\t     666 allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295834,
            "unit": "ns/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57887,
            "unit": "B/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170815,
            "unit": "ns/op\t   58077 B/op\t     669 allocs/op",
            "extra": "6600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170815,
            "unit": "ns/op",
            "extra": "6600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58077,
            "unit": "B/op",
            "extra": "6600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172043,
            "unit": "ns/op\t   58105 B/op\t     669 allocs/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172043,
            "unit": "ns/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58105,
            "unit": "B/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359200,
            "unit": "ns/op\t   63605 B/op\t     726 allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359200,
            "unit": "ns/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63605,
            "unit": "B/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352262,
            "unit": "ns/op\t   63591 B/op\t     726 allocs/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352262,
            "unit": "ns/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63591,
            "unit": "B/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356595,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356595,
            "unit": "ns/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342607,
            "unit": "ns/op\t   63530 B/op\t     727 allocs/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342607,
            "unit": "ns/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63530,
            "unit": "B/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45801808 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "45801808 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45801808 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45801808 times\n4 procs"
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
          "id": "2e74b9349f22a5f3a5b545d2dc63296bf4e95461",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ee8a11ce61bcaeed7361d3806bd426a462e3d2ea",
          "timestamp": "2026-01-25T03:51:06Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2e74b9349f22a5f3a5b545d2dc63296bf4e95461"
        },
        "date": 1769391733678,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13388,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "84808 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13388,
            "unit": "ns/op",
            "extra": "84808 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "84808 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "84808 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42139,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42139,
            "unit": "ns/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74220,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16220 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74220,
            "unit": "ns/op",
            "extra": "16220 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16220 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16220 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30962,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38959 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30962,
            "unit": "ns/op",
            "extra": "38959 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38959 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38959 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291054,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291054,
            "unit": "ns/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298540,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298540,
            "unit": "ns/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98173,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98173,
            "unit": "ns/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49042,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49042,
            "unit": "ns/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202381,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "5608 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202381,
            "unit": "ns/op",
            "extra": "5608 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "5608 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5608 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7953,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "147606 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7953,
            "unit": "ns/op",
            "extra": "147606 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "147606 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147606 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154420,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "6834 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154420,
            "unit": "ns/op",
            "extra": "6834 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "6834 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6834 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601270141A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601270141A094101Federal",
            "value": 231380104,
            "unit": "1210428822601270141A094101Federal",
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
            "value": 935.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1276449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 935.4,
            "unit": "ns/op",
            "extra": "1276449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1276449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1276449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.16,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12132870 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.16,
            "unit": "ns/op",
            "extra": "12132870 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12132870 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12132870 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.63,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18185437 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.63,
            "unit": "ns/op",
            "extra": "18185437 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18185437 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18185437 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.47,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41034571 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.47,
            "unit": "ns/op",
            "extra": "41034571 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41034571 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41034571 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86119922 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.05,
            "unit": "ns/op",
            "extra": "86119922 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86119922 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86119922 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "166495328 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.169,
            "unit": "ns/op",
            "extra": "166495328 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "166495328 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "166495328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297891,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297891,
            "unit": "ns/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
            "unit": "B/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291103,
            "unit": "ns/op\t   57897 B/op\t     666 allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291103,
            "unit": "ns/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57897,
            "unit": "B/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168990,
            "unit": "ns/op\t   58088 B/op\t     669 allocs/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168990,
            "unit": "ns/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58088,
            "unit": "B/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176918,
            "unit": "ns/op\t   58113 B/op\t     669 allocs/op",
            "extra": "6606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176918,
            "unit": "ns/op",
            "extra": "6606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58113,
            "unit": "B/op",
            "extra": "6606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 350925,
            "unit": "ns/op\t   63602 B/op\t     726 allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 350925,
            "unit": "ns/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63602,
            "unit": "B/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 347682,
            "unit": "ns/op\t   63605 B/op\t     726 allocs/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 347682,
            "unit": "ns/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63605,
            "unit": "B/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345692,
            "unit": "ns/op\t   63612 B/op\t     726 allocs/op",
            "extra": "3526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345692,
            "unit": "ns/op",
            "extra": "3526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63612,
            "unit": "B/op",
            "extra": "3526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3526 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344644,
            "unit": "ns/op\t   63521 B/op\t     727 allocs/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344644,
            "unit": "ns/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63521,
            "unit": "B/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45526680 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.61,
            "unit": "ns/op",
            "extra": "45526680 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45526680 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45526680 times\n4 procs"
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
          "id": "a32a7d122f7c8227b223cec1bacb9413c8c93d7a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0437eba5cfb8c7e7c964fad95ffeffecb13432ff",
          "timestamp": "2026-01-26T03:54:11Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a32a7d122f7c8227b223cec1bacb9413c8c93d7a"
        },
        "date": 1769477382870,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13383,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "89882 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13383,
            "unit": "ns/op",
            "extra": "89882 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "89882 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "89882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41833,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28639 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41833,
            "unit": "ns/op",
            "extra": "28639 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28639 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28639 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74343,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16274 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74343,
            "unit": "ns/op",
            "extra": "16274 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16274 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31368,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31368,
            "unit": "ns/op",
            "extra": "38980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288884,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288884,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296486,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296486,
            "unit": "ns/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98287,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98287,
            "unit": "ns/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48930,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24484 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48930,
            "unit": "ns/op",
            "extra": "24484 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24484 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24484 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203040,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203040,
            "unit": "ns/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8007,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144758 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8007,
            "unit": "ns/op",
            "extra": "144758 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144758 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144758 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152123,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7292 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152123,
            "unit": "ns/op",
            "extra": "7292 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7292 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7292 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601280129A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601280129A094101Federal",
            "value": 231380104,
            "unit": "1210428822601280129A094101Federal",
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
            "value": 941.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1274244 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 941.5,
            "unit": "ns/op",
            "extra": "1274244 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1274244 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1274244 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.42,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12134578 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.42,
            "unit": "ns/op",
            "extra": "12134578 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12134578 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12134578 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.21,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18845714 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.21,
            "unit": "ns/op",
            "extra": "18845714 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18845714 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18845714 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40574037 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.35,
            "unit": "ns/op",
            "extra": "40574037 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40574037 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40574037 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86961726 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.11,
            "unit": "ns/op",
            "extra": "86961726 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86961726 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86961726 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168572156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.15,
            "unit": "ns/op",
            "extra": "168572156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168572156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168572156 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302210,
            "unit": "ns/op\t   57885 B/op\t     666 allocs/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302210,
            "unit": "ns/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57885,
            "unit": "B/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 289611,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 289611,
            "unit": "ns/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173014,
            "unit": "ns/op\t   58085 B/op\t     669 allocs/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173014,
            "unit": "ns/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58085,
            "unit": "B/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 166040,
            "unit": "ns/op\t   58102 B/op\t     669 allocs/op",
            "extra": "6567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 166040,
            "unit": "ns/op",
            "extra": "6567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58102,
            "unit": "B/op",
            "extra": "6567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 345989,
            "unit": "ns/op\t   63600 B/op\t     726 allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 345989,
            "unit": "ns/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63600,
            "unit": "B/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 343454,
            "unit": "ns/op\t   63605 B/op\t     726 allocs/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 343454,
            "unit": "ns/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63605,
            "unit": "B/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 341202,
            "unit": "ns/op\t   63589 B/op\t     726 allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 341202,
            "unit": "ns/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63589,
            "unit": "B/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 335828,
            "unit": "ns/op\t   63561 B/op\t     727 allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 335828,
            "unit": "ns/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63561,
            "unit": "B/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46024744 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.2,
            "unit": "ns/op",
            "extra": "46024744 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46024744 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46024744 times\n4 procs"
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
          "id": "bca40b1ae410b25fd79455162a6cc3d9ddfc3bcf",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b2843b95d2b7522629f45c661c89f532a689c1ab",
          "timestamp": "2026-01-27T03:45:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bca40b1ae410b25fd79455162a6cc3d9ddfc3bcf"
        },
        "date": 1769563581364,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13537,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88759 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13537,
            "unit": "ns/op",
            "extra": "88759 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88759 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88759 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42133,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "27846 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42133,
            "unit": "ns/op",
            "extra": "27846 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "27846 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "27846 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76153,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15468 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76153,
            "unit": "ns/op",
            "extra": "15468 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15468 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15468 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31188,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38523 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31188,
            "unit": "ns/op",
            "extra": "38523 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38523 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38523 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293851,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293851,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294306,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294306,
            "unit": "ns/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98589,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98589,
            "unit": "ns/op",
            "extra": "12070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12070 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49146,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24385 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49146,
            "unit": "ns/op",
            "extra": "24385 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24385 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24385 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209190,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209190,
            "unit": "ns/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5712 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7964,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "151164 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7964,
            "unit": "ns/op",
            "extra": "151164 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "151164 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "151164 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155660,
            "unit": "ns/op\t   61098 B/op\t     721 allocs/op",
            "extra": "7026 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155660,
            "unit": "ns/op",
            "extra": "7026 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61098,
            "unit": "B/op",
            "extra": "7026 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7026 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601290125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601290125A094101Federal",
            "value": 231380104,
            "unit": "1210428822601290125A094101Federal",
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
            "value": 945.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1265162 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 945.5,
            "unit": "ns/op",
            "extra": "1265162 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1265162 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1265162 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11784104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11784104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11784104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11784104 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 65.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18575554 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 65.8,
            "unit": "ns/op",
            "extra": "18575554 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18575554 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18575554 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.73,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41008958 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.73,
            "unit": "ns/op",
            "extra": "41008958 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41008958 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41008958 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87161401 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.01,
            "unit": "ns/op",
            "extra": "87161401 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87161401 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87161401 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.851,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168732439 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.851,
            "unit": "ns/op",
            "extra": "168732439 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168732439 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168732439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293330,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293330,
            "unit": "ns/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
            "unit": "B/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301964,
            "unit": "ns/op\t   57898 B/op\t     666 allocs/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301964,
            "unit": "ns/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57898,
            "unit": "B/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169720,
            "unit": "ns/op\t   58077 B/op\t     669 allocs/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169720,
            "unit": "ns/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58077,
            "unit": "B/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174061,
            "unit": "ns/op\t   58108 B/op\t     669 allocs/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174061,
            "unit": "ns/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58108,
            "unit": "B/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357528,
            "unit": "ns/op\t   63605 B/op\t     726 allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357528,
            "unit": "ns/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63605,
            "unit": "B/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352339,
            "unit": "ns/op\t   63594 B/op\t     726 allocs/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352339,
            "unit": "ns/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63594,
            "unit": "B/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345546,
            "unit": "ns/op\t   63610 B/op\t     726 allocs/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345546,
            "unit": "ns/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63610,
            "unit": "B/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341135,
            "unit": "ns/op\t   63662 B/op\t     727 allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341135,
            "unit": "ns/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63662,
            "unit": "B/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45585080 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.17,
            "unit": "ns/op",
            "extra": "45585080 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45585080 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45585080 times\n4 procs"
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
          "id": "8c0c42c5fc132a3b0ebca87789d99dd356259ae9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 319d0a5893d5ff06d1960c57fc335e189308c0f0",
          "timestamp": "2026-01-28T03:42:23Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8c0c42c5fc132a3b0ebca87789d99dd356259ae9"
        },
        "date": 1769651228694,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13472,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88058 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13472,
            "unit": "ns/op",
            "extra": "88058 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88058 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88058 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36886,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "32874 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36886,
            "unit": "ns/op",
            "extra": "32874 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "32874 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32874 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 65900,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 65900,
            "unit": "ns/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 26596,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "45758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 26596,
            "unit": "ns/op",
            "extra": "45758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "45758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "45758 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 263809,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "4491 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 263809,
            "unit": "ns/op",
            "extra": "4491 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "4491 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4491 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 264384,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 264384,
            "unit": "ns/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 87541,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "13603 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 87541,
            "unit": "ns/op",
            "extra": "13603 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "13603 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "13603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47458,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "25308 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47458,
            "unit": "ns/op",
            "extra": "25308 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "25308 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25308 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200299,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6238 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200299,
            "unit": "ns/op",
            "extra": "6238 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6238 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6238 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8071,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "148309 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8071,
            "unit": "ns/op",
            "extra": "148309 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "148309 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148309 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146937,
            "unit": "ns/op\t   61099 B/op\t     721 allocs/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146937,
            "unit": "ns/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61099,
            "unit": "B/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601300146A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601300146A094101Federal",
            "value": 231380104,
            "unit": "1210428822601300146A094101Federal",
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
            "value": 985.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1220011 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 985.2,
            "unit": "ns/op",
            "extra": "1220011 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1220011 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1220011 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 87.19,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13627002 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 87.19,
            "unit": "ns/op",
            "extra": "13627002 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13627002 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13627002 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 56.52,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21027020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 56.52,
            "unit": "ns/op",
            "extra": "21027020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21027020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21027020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46306214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.26,
            "unit": "ns/op",
            "extra": "46306214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "46306214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "46306214 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 11.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99632786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 11.6,
            "unit": "ns/op",
            "extra": "99632786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "99632786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "99632786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "228484636 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.231,
            "unit": "ns/op",
            "extra": "228484636 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "228484636 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "228484636 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 269070,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4437 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 269070,
            "unit": "ns/op",
            "extra": "4437 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
            "unit": "B/op",
            "extra": "4437 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4437 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 271087,
            "unit": "ns/op\t   57899 B/op\t     666 allocs/op",
            "extra": "4376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 271087,
            "unit": "ns/op",
            "extra": "4376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57899,
            "unit": "B/op",
            "extra": "4376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 182509,
            "unit": "ns/op\t   58071 B/op\t     669 allocs/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 182509,
            "unit": "ns/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58071,
            "unit": "B/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 186528,
            "unit": "ns/op\t   58126 B/op\t     669 allocs/op",
            "extra": "5569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 186528,
            "unit": "ns/op",
            "extra": "5569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58126,
            "unit": "B/op",
            "extra": "5569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 328414,
            "unit": "ns/op\t   63620 B/op\t     726 allocs/op",
            "extra": "3738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 328414,
            "unit": "ns/op",
            "extra": "3738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63620,
            "unit": "B/op",
            "extra": "3738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 322864,
            "unit": "ns/op\t   63625 B/op\t     726 allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 322864,
            "unit": "ns/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63625,
            "unit": "B/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 324939,
            "unit": "ns/op\t   63617 B/op\t     726 allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 324939,
            "unit": "ns/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63617,
            "unit": "B/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 313363,
            "unit": "ns/op\t   63405 B/op\t     727 allocs/op",
            "extra": "4580 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 313363,
            "unit": "ns/op",
            "extra": "4580 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63405,
            "unit": "B/op",
            "extra": "4580 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4580 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 23.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51854506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 23.09,
            "unit": "ns/op",
            "extra": "51854506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51854506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51854506 times\n4 procs"
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
          "id": "147749fe3c7dbb61e3e551464d045f2a6d81f06e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 64e9d8c4cbd3853d165aef3d4fe1589e0ea8f2d4",
          "timestamp": "2026-01-29T04:05:09Z",
          "url": "https://github.com/moov-io/benchmarks/commit/147749fe3c7dbb61e3e551464d045f2a6d81f06e"
        },
        "date": 1769737664246,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13683,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87250 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13683,
            "unit": "ns/op",
            "extra": "87250 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87250 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43248,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43248,
            "unit": "ns/op",
            "extra": "28362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28362 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75049,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15946 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75049,
            "unit": "ns/op",
            "extra": "15946 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15946 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30849,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38962 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30849,
            "unit": "ns/op",
            "extra": "38962 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38962 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293421,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293421,
            "unit": "ns/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303662,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303662,
            "unit": "ns/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98028,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12238 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98028,
            "unit": "ns/op",
            "extra": "12238 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12238 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49148,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "23342 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49148,
            "unit": "ns/op",
            "extra": "23342 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "23342 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23342 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203766,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203766,
            "unit": "ns/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8172,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145974 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8172,
            "unit": "ns/op",
            "extra": "145974 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145974 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145974 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152993,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7258 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152993,
            "unit": "ns/op",
            "extra": "7258 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7258 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7258 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601310147A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601310147A094101Federal",
            "value": 231380104,
            "unit": "1210428822601310147A094101Federal",
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
            "value": 970.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1241587 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 970.6,
            "unit": "ns/op",
            "extra": "1241587 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1241587 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1241587 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12185109 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.9,
            "unit": "ns/op",
            "extra": "12185109 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12185109 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12185109 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.06,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18933361 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.06,
            "unit": "ns/op",
            "extra": "18933361 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18933361 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18933361 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.05,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41807523 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.05,
            "unit": "ns/op",
            "extra": "41807523 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41807523 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41807523 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85045981 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.33,
            "unit": "ns/op",
            "extra": "85045981 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85045981 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85045981 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167399392 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.15,
            "unit": "ns/op",
            "extra": "167399392 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167399392 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167399392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 309545,
            "unit": "ns/op\t   57874 B/op\t     666 allocs/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 309545,
            "unit": "ns/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57874,
            "unit": "B/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293893,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293893,
            "unit": "ns/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170327,
            "unit": "ns/op\t   58077 B/op\t     669 allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170327,
            "unit": "ns/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58077,
            "unit": "B/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 189056,
            "unit": "ns/op\t   58106 B/op\t     669 allocs/op",
            "extra": "6451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 189056,
            "unit": "ns/op",
            "extra": "6451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58106,
            "unit": "B/op",
            "extra": "6451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365769,
            "unit": "ns/op\t   63638 B/op\t     726 allocs/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365769,
            "unit": "ns/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63638,
            "unit": "B/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352543,
            "unit": "ns/op\t   63612 B/op\t     726 allocs/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352543,
            "unit": "ns/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63612,
            "unit": "B/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354057,
            "unit": "ns/op\t   63611 B/op\t     726 allocs/op",
            "extra": "3619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354057,
            "unit": "ns/op",
            "extra": "3619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63611,
            "unit": "B/op",
            "extra": "3619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346051,
            "unit": "ns/op\t   63571 B/op\t     727 allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346051,
            "unit": "ns/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63571,
            "unit": "B/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42973202 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.54,
            "unit": "ns/op",
            "extra": "42973202 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42973202 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42973202 times\n4 procs"
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
          "id": "e7d99bc8255fedfaa892197c534ea3151e06386c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ea54e0f33a32b5ab61c73f6795d7d26c9b5ffbae",
          "timestamp": "2026-01-30T04:06:26Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e7d99bc8255fedfaa892197c534ea3151e06386c"
        },
        "date": 1769823826428,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14033,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86239 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14033,
            "unit": "ns/op",
            "extra": "86239 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86239 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86239 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42095,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42095,
            "unit": "ns/op",
            "extra": "28542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28542 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75154,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15786 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75154,
            "unit": "ns/op",
            "extra": "15786 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15786 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30936,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38622 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30936,
            "unit": "ns/op",
            "extra": "38622 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38622 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38622 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295822,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295822,
            "unit": "ns/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299619,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299619,
            "unit": "ns/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99727,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "11570 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99727,
            "unit": "ns/op",
            "extra": "11570 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "11570 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "11570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49757,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49757,
            "unit": "ns/op",
            "extra": "24022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24022 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206509,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5770 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206509,
            "unit": "ns/op",
            "extra": "5770 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5770 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5770 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8204,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "143232 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8204,
            "unit": "ns/op",
            "extra": "143232 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "143232 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "143232 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155303,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7131 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155303,
            "unit": "ns/op",
            "extra": "7131 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7131 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7131 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822602010143A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822602010143A094101Federal",
            "value": 231380104,
            "unit": "1210428822602010143A094101Federal",
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
            "value": 970.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1231857 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 970.3,
            "unit": "ns/op",
            "extra": "1231857 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1231857 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1231857 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.55,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12024720 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.55,
            "unit": "ns/op",
            "extra": "12024720 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12024720 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12024720 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.38,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18777537 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.38,
            "unit": "ns/op",
            "extra": "18777537 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18777537 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18777537 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.15,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41169360 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.15,
            "unit": "ns/op",
            "extra": "41169360 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41169360 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41169360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85699080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.25,
            "unit": "ns/op",
            "extra": "85699080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85699080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85699080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.849,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "175271428 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.849,
            "unit": "ns/op",
            "extra": "175271428 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "175271428 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "175271428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304302,
            "unit": "ns/op\t   57878 B/op\t     666 allocs/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304302,
            "unit": "ns/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57878,
            "unit": "B/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297137,
            "unit": "ns/op\t   57899 B/op\t     666 allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297137,
            "unit": "ns/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57899,
            "unit": "B/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173157,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173157,
            "unit": "ns/op",
            "extra": "6514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 183682,
            "unit": "ns/op\t   58103 B/op\t     669 allocs/op",
            "extra": "6348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 183682,
            "unit": "ns/op",
            "extra": "6348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58103,
            "unit": "B/op",
            "extra": "6348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363008,
            "unit": "ns/op\t   63614 B/op\t     726 allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363008,
            "unit": "ns/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63614,
            "unit": "B/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 366244,
            "unit": "ns/op\t   63603 B/op\t     726 allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 366244,
            "unit": "ns/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63603,
            "unit": "B/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352888,
            "unit": "ns/op\t   63593 B/op\t     726 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352888,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63593,
            "unit": "B/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348974,
            "unit": "ns/op\t   63614 B/op\t     727 allocs/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348974,
            "unit": "ns/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63614,
            "unit": "B/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47590627 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.49,
            "unit": "ns/op",
            "extra": "47590627 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47590627 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47590627 times\n4 procs"
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
          "id": "7358a04d2ef1d3c4a169487ffcfd7076a26d45bb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4b5c9f4924887c53d9a677f9fdf2f98efe5c6d2e",
          "timestamp": "2026-01-31T04:02:51Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7358a04d2ef1d3c4a169487ffcfd7076a26d45bb"
        },
        "date": 1769911312317,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14072,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "85482 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14072,
            "unit": "ns/op",
            "extra": "85482 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "85482 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "85482 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42316,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42316,
            "unit": "ns/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75722,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15868 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75722,
            "unit": "ns/op",
            "extra": "15868 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15868 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15868 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31122,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31122,
            "unit": "ns/op",
            "extra": "38744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38744 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297410,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297410,
            "unit": "ns/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303433,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303433,
            "unit": "ns/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3931 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100289,
            "unit": "ns/op\t   29720 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100289,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29720,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49809,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "23913 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49809,
            "unit": "ns/op",
            "extra": "23913 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "23913 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23913 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208856,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5754 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208856,
            "unit": "ns/op",
            "extra": "5754 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5754 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5754 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8192,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145436 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8192,
            "unit": "ns/op",
            "extra": "145436 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145436 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145436 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154713,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7165 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154713,
            "unit": "ns/op",
            "extra": "7165 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7165 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7165 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822602020201A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822602020201A094101Federal",
            "value": 231380104,
            "unit": "1210428822602020201A094101Federal",
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
            "value": 969.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1216072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 969.9,
            "unit": "ns/op",
            "extra": "1216072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1216072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1216072 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.46,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12187383 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.46,
            "unit": "ns/op",
            "extra": "12187383 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12187383 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12187383 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.93,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18787794 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.93,
            "unit": "ns/op",
            "extra": "18787794 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18787794 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18787794 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.01,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41126624 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.01,
            "unit": "ns/op",
            "extra": "41126624 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41126624 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41126624 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84328094 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.33,
            "unit": "ns/op",
            "extra": "84328094 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84328094 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84328094 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171011816 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.172,
            "unit": "ns/op",
            "extra": "171011816 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "171011816 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "171011816 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301663,
            "unit": "ns/op\t   57889 B/op\t     666 allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301663,
            "unit": "ns/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57889,
            "unit": "B/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301235,
            "unit": "ns/op\t   57905 B/op\t     666 allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301235,
            "unit": "ns/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57905,
            "unit": "B/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168395,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168395,
            "unit": "ns/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173811,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173811,
            "unit": "ns/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357007,
            "unit": "ns/op\t   63621 B/op\t     726 allocs/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357007,
            "unit": "ns/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63621,
            "unit": "B/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361063,
            "unit": "ns/op\t   63598 B/op\t     726 allocs/op",
            "extra": "3519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361063,
            "unit": "ns/op",
            "extra": "3519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63598,
            "unit": "B/op",
            "extra": "3519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351345,
            "unit": "ns/op\t   63591 B/op\t     726 allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351345,
            "unit": "ns/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63591,
            "unit": "B/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340461,
            "unit": "ns/op\t   63080 B/op\t     727 allocs/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340461,
            "unit": "ns/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63080,
            "unit": "B/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47526110 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.66,
            "unit": "ns/op",
            "extra": "47526110 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47526110 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47526110 times\n4 procs"
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
          "id": "49e6befe7613bdc71bb9a5b1e2e2b29828389d94",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 110c13c3ba2334489c18fd9903324e8428dd33c5",
          "timestamp": "2026-02-01T04:27:39Z",
          "url": "https://github.com/moov-io/benchmarks/commit/49e6befe7613bdc71bb9a5b1e2e2b29828389d94"
        },
        "date": 1769997265758,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13697,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86203 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13697,
            "unit": "ns/op",
            "extra": "86203 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86203 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86203 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41716,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28839 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41716,
            "unit": "ns/op",
            "extra": "28839 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28839 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28839 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75051,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16186 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75051,
            "unit": "ns/op",
            "extra": "16186 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16186 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16186 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30997,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "39478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30997,
            "unit": "ns/op",
            "extra": "39478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "39478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "39478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 302659,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 302659,
            "unit": "ns/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 291367,
            "unit": "ns/op\t   59057 B/op\t     810 allocs/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291367,
            "unit": "ns/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59057,
            "unit": "B/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97966,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12324 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97966,
            "unit": "ns/op",
            "extra": "12324 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12324 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12324 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49004,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24255 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49004,
            "unit": "ns/op",
            "extra": "24255 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24255 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24255 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202745,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "5898 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202745,
            "unit": "ns/op",
            "extra": "5898 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "5898 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5898 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8519,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145711 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8519,
            "unit": "ns/op",
            "extra": "145711 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145711 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145711 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152435,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7860 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152435,
            "unit": "ns/op",
            "extra": "7860 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7860 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7860 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822602030153A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822602030153A094101Federal",
            "value": 231380104,
            "unit": "1210428822602030153A094101Federal",
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
            "value": 968.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1223094 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 968.1,
            "unit": "ns/op",
            "extra": "1223094 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1223094 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1223094 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.97,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12230463 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.97,
            "unit": "ns/op",
            "extra": "12230463 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12230463 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12230463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.62,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18860724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.62,
            "unit": "ns/op",
            "extra": "18860724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18860724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18860724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.82,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41857377 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.82,
            "unit": "ns/op",
            "extra": "41857377 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41857377 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41857377 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85236062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.34,
            "unit": "ns/op",
            "extra": "85236062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85236062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85236062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "170671209 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.161,
            "unit": "ns/op",
            "extra": "170671209 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "170671209 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "170671209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305802,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305802,
            "unit": "ns/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
            "unit": "B/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295550,
            "unit": "ns/op\t   57904 B/op\t     666 allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295550,
            "unit": "ns/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57904,
            "unit": "B/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 195779,
            "unit": "ns/op\t   58084 B/op\t     669 allocs/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 195779,
            "unit": "ns/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58084,
            "unit": "B/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6157 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170212,
            "unit": "ns/op\t   58102 B/op\t     669 allocs/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170212,
            "unit": "ns/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58102,
            "unit": "B/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 352557,
            "unit": "ns/op\t   63620 B/op\t     726 allocs/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 352557,
            "unit": "ns/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63620,
            "unit": "B/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355370,
            "unit": "ns/op\t   63599 B/op\t     726 allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355370,
            "unit": "ns/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63599,
            "unit": "B/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 347365,
            "unit": "ns/op\t   63579 B/op\t     726 allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 347365,
            "unit": "ns/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63579,
            "unit": "B/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342036,
            "unit": "ns/op\t   63572 B/op\t     727 allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342036,
            "unit": "ns/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63572,
            "unit": "B/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46544790 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.62,
            "unit": "ns/op",
            "extra": "46544790 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46544790 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46544790 times\n4 procs"
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
          "id": "3921fdb5eb207fe37eadd4b57579fdb046afa65a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 46d496d60c3e0958c94ab2070d4d190a6492f664",
          "timestamp": "2026-02-02T04:22:18Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3921fdb5eb207fe37eadd4b57579fdb046afa65a"
        },
        "date": 1770083593065,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13761,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86414 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13761,
            "unit": "ns/op",
            "extra": "86414 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86414 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86414 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42941,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42941,
            "unit": "ns/op",
            "extra": "28114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28114 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76458,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15687 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76458,
            "unit": "ns/op",
            "extra": "15687 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15687 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15687 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31311,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38241 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31311,
            "unit": "ns/op",
            "extra": "38241 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38241 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38241 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 306427,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 306427,
            "unit": "ns/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298543,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298543,
            "unit": "ns/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3886 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100005,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100005,
            "unit": "ns/op",
            "extra": "12034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12034 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49544,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49544,
            "unit": "ns/op",
            "extra": "24238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24238 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206787,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5890 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206787,
            "unit": "ns/op",
            "extra": "5890 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5890 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5890 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8197,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144588 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8197,
            "unit": "ns/op",
            "extra": "144588 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144588 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144588 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 163272,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7245 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 163272,
            "unit": "ns/op",
            "extra": "7245 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7245 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7245 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822602040152A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822602040152A094101Federal",
            "value": 231380104,
            "unit": "1210428822602040152A094101Federal",
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
            "value": 979.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1221445 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 979.9,
            "unit": "ns/op",
            "extra": "1221445 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1221445 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1221445 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.97,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12150345 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.97,
            "unit": "ns/op",
            "extra": "12150345 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12150345 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12150345 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.33,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18852865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.33,
            "unit": "ns/op",
            "extra": "18852865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18852865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18852865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41516750 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.03,
            "unit": "ns/op",
            "extra": "41516750 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41516750 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41516750 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85569879 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.37,
            "unit": "ns/op",
            "extra": "85569879 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85569879 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85569879 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.109,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168045979 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.109,
            "unit": "ns/op",
            "extra": "168045979 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168045979 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168045979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 331228,
            "unit": "ns/op\t   57884 B/op\t     666 allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 331228,
            "unit": "ns/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57884,
            "unit": "B/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297745,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297745,
            "unit": "ns/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174306,
            "unit": "ns/op\t   58087 B/op\t     669 allocs/op",
            "extra": "6660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174306,
            "unit": "ns/op",
            "extra": "6660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58087,
            "unit": "B/op",
            "extra": "6660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171879,
            "unit": "ns/op\t   58110 B/op\t     669 allocs/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171879,
            "unit": "ns/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58110,
            "unit": "B/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361242,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361242,
            "unit": "ns/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362324,
            "unit": "ns/op\t   63601 B/op\t     726 allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362324,
            "unit": "ns/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63601,
            "unit": "B/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352998,
            "unit": "ns/op\t   63596 B/op\t     726 allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352998,
            "unit": "ns/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63596,
            "unit": "B/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352242,
            "unit": "ns/op\t   63614 B/op\t     727 allocs/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352242,
            "unit": "ns/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63614,
            "unit": "B/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47515754 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.22,
            "unit": "ns/op",
            "extra": "47515754 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47515754 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47515754 times\n4 procs"
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
          "id": "c443448829bfb331c0b3d43fddb39d8dcf463542",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 55bc904c7756243fa9a8e85ed676231cc9732df0",
          "timestamp": "2026-02-03T04:12:57Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c443448829bfb331c0b3d43fddb39d8dcf463542"
        },
        "date": 1770169681367,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13909,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "85976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13909,
            "unit": "ns/op",
            "extra": "85976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "85976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "85976 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38398,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "31560 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38398,
            "unit": "ns/op",
            "extra": "31560 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "31560 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "31560 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73010,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "17053 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73010,
            "unit": "ns/op",
            "extra": "17053 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "17053 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "17053 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 27504,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "44029 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 27504,
            "unit": "ns/op",
            "extra": "44029 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "44029 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 271549,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 271549,
            "unit": "ns/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 276049,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 276049,
            "unit": "ns/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 89953,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "13166 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 89953,
            "unit": "ns/op",
            "extra": "13166 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "13166 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "13166 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49066,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24499 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49066,
            "unit": "ns/op",
            "extra": "24499 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24499 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24499 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204019,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204019,
            "unit": "ns/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8197,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146007 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8197,
            "unit": "ns/op",
            "extra": "146007 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146007 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146007 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149934,
            "unit": "ns/op\t   61099 B/op\t     721 allocs/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149934,
            "unit": "ns/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61099,
            "unit": "B/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822602050147A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822602050147A094101Federal",
            "value": 231380104,
            "unit": "1210428822602050147A094101Federal",
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
            "value": 996.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1203038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 996.6,
            "unit": "ns/op",
            "extra": "1203038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1203038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1203038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 88.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13263438 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 88.58,
            "unit": "ns/op",
            "extra": "13263438 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13263438 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13263438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 57.32,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20414766 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 57.32,
            "unit": "ns/op",
            "extra": "20414766 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20414766 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20414766 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.74,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45143746 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.74,
            "unit": "ns/op",
            "extra": "45143746 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "45143746 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45143746 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 11.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 11.63,
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
            "value": 5.226,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "229590883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.226,
            "unit": "ns/op",
            "extra": "229590883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "229590883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "229590883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 268323,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 268323,
            "unit": "ns/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
            "unit": "B/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 275373,
            "unit": "ns/op\t   57902 B/op\t     666 allocs/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 275373,
            "unit": "ns/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57902,
            "unit": "B/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 184357,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 184357,
            "unit": "ns/op",
            "extra": "6208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 180739,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 180739,
            "unit": "ns/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 331364,
            "unit": "ns/op\t   63599 B/op\t     726 allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 331364,
            "unit": "ns/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63599,
            "unit": "B/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 324779,
            "unit": "ns/op\t   63607 B/op\t     726 allocs/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 324779,
            "unit": "ns/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 322392,
            "unit": "ns/op\t   63599 B/op\t     726 allocs/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 322392,
            "unit": "ns/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63599,
            "unit": "B/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 317912,
            "unit": "ns/op\t   63534 B/op\t     727 allocs/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 317912,
            "unit": "ns/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63534,
            "unit": "B/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 23.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51492040 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 23.08,
            "unit": "ns/op",
            "extra": "51492040 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51492040 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51492040 times\n4 procs"
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
          "id": "4a3d899ff5b457562aaa7d0b63c21682eab34a68",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 20dde977d7a152e41ef4b1b75714588b9718fa9e",
          "timestamp": "2026-02-04T04:08:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/4a3d899ff5b457562aaa7d0b63c21682eab34a68"
        },
        "date": 1770256171801,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13381,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13381,
            "unit": "ns/op",
            "extra": "86958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86958 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40806,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28232 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40806,
            "unit": "ns/op",
            "extra": "28232 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28232 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28232 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74619,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74619,
            "unit": "ns/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30433,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30433,
            "unit": "ns/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287595,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287595,
            "unit": "ns/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290081,
            "unit": "ns/op\t   59063 B/op\t     810 allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290081,
            "unit": "ns/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59063,
            "unit": "B/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97869,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97869,
            "unit": "ns/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47622,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "25584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47622,
            "unit": "ns/op",
            "extra": "25584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "25584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25584 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201284,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201284,
            "unit": "ns/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7758,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "136647 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7758,
            "unit": "ns/op",
            "extra": "136647 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "136647 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "136647 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146554,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7830 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146554,
            "unit": "ns/op",
            "extra": "7830 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7830 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7830 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822602060148A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822602060148A094101Federal",
            "value": 231380104,
            "unit": "1210428822602060148A094101Federal",
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
            "value": 950.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1252797 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 950.7,
            "unit": "ns/op",
            "extra": "1252797 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1252797 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1252797 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12802646 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.27,
            "unit": "ns/op",
            "extra": "12802646 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12802646 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12802646 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 60.04,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19052236 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 60.04,
            "unit": "ns/op",
            "extra": "19052236 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19052236 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19052236 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44912456 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.55,
            "unit": "ns/op",
            "extra": "44912456 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44912456 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44912456 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85170085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.55,
            "unit": "ns/op",
            "extra": "85170085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85170085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85170085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.686,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "179789701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.686,
            "unit": "ns/op",
            "extra": "179789701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "179789701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "179789701 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 280568,
            "unit": "ns/op\t   57887 B/op\t     666 allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 280568,
            "unit": "ns/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57887,
            "unit": "B/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 281480,
            "unit": "ns/op\t   57891 B/op\t     666 allocs/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 281480,
            "unit": "ns/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57891,
            "unit": "B/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 165577,
            "unit": "ns/op\t   58091 B/op\t     669 allocs/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 165577,
            "unit": "ns/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58091,
            "unit": "B/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6709 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 160530,
            "unit": "ns/op\t   58096 B/op\t     669 allocs/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 160530,
            "unit": "ns/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58096,
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
            "value": 342288,
            "unit": "ns/op\t   63627 B/op\t     726 allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 342288,
            "unit": "ns/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63627,
            "unit": "B/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355728,
            "unit": "ns/op\t   63616 B/op\t     726 allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355728,
            "unit": "ns/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63616,
            "unit": "B/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 341285,
            "unit": "ns/op\t   63594 B/op\t     726 allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 341285,
            "unit": "ns/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63594,
            "unit": "B/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 333026,
            "unit": "ns/op\t   63607 B/op\t     727 allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 333026,
            "unit": "ns/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45334862 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.71,
            "unit": "ns/op",
            "extra": "45334862 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45334862 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45334862 times\n4 procs"
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
          "id": "65c7a968f16108461db54044442374a98352ba27",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7814961a6d047481d5ccf6027e54d965e739999e",
          "timestamp": "2026-02-05T04:11:48Z",
          "url": "https://github.com/moov-io/benchmarks/commit/65c7a968f16108461db54044442374a98352ba27"
        },
        "date": 1770342543629,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13746,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86353 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13746,
            "unit": "ns/op",
            "extra": "86353 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86353 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86353 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42857,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28450 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42857,
            "unit": "ns/op",
            "extra": "28450 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28450 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28450 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78405,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78405,
            "unit": "ns/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30883,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38859 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30883,
            "unit": "ns/op",
            "extra": "38859 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38859 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38859 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 313012,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 313012,
            "unit": "ns/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294963,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294963,
            "unit": "ns/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98818,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98818,
            "unit": "ns/op",
            "extra": "12150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12150 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50572,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50572,
            "unit": "ns/op",
            "extra": "24135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24135 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 215615,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 215615,
            "unit": "ns/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8468,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "142066 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8468,
            "unit": "ns/op",
            "extra": "142066 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "142066 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "142066 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156250,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156250,
            "unit": "ns/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822602070148A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822602070148A094101Federal",
            "value": 231380104,
            "unit": "1210428822602070148A094101Federal",
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
            "value": 978.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1206770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 978.1,
            "unit": "ns/op",
            "extra": "1206770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1206770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1206770 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.78,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11905251 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.78,
            "unit": "ns/op",
            "extra": "11905251 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11905251 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11905251 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.67,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18682389 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.67,
            "unit": "ns/op",
            "extra": "18682389 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18682389 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18682389 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.17,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40816455 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.17,
            "unit": "ns/op",
            "extra": "40816455 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40816455 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40816455 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85565340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.61,
            "unit": "ns/op",
            "extra": "85565340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85565340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85565340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.851,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168434966 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.851,
            "unit": "ns/op",
            "extra": "168434966 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168434966 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168434966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299721,
            "unit": "ns/op\t   57875 B/op\t     666 allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299721,
            "unit": "ns/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57875,
            "unit": "B/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299425,
            "unit": "ns/op\t   57888 B/op\t     666 allocs/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299425,
            "unit": "ns/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57888,
            "unit": "B/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169889,
            "unit": "ns/op\t   58071 B/op\t     669 allocs/op",
            "extra": "6339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169889,
            "unit": "ns/op",
            "extra": "6339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58071,
            "unit": "B/op",
            "extra": "6339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172343,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172343,
            "unit": "ns/op",
            "extra": "6028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358203,
            "unit": "ns/op\t   63615 B/op\t     726 allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358203,
            "unit": "ns/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63615,
            "unit": "B/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358006,
            "unit": "ns/op\t   63600 B/op\t     726 allocs/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358006,
            "unit": "ns/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63600,
            "unit": "B/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349647,
            "unit": "ns/op\t   63572 B/op\t     726 allocs/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349647,
            "unit": "ns/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63572,
            "unit": "B/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344447,
            "unit": "ns/op\t   63110 B/op\t     727 allocs/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344447,
            "unit": "ns/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63110,
            "unit": "B/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3763 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47484564 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.24,
            "unit": "ns/op",
            "extra": "47484564 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47484564 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47484564 times\n4 procs"
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