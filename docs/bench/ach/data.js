window.BENCHMARK_DATA = {
  "lastUpdate": 1768700381459,
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
          "id": "0057bb41757ecaea0cf3aaf718a7bf13d83cdcd2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 07ac4647c93753dfa6add6c20053f5a68a0e8e6b",
          "timestamp": "2025-12-24T03:21:33Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0057bb41757ecaea0cf3aaf718a7bf13d83cdcd2"
        },
        "date": 1766625701170,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13707,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86088 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13707,
            "unit": "ns/op",
            "extra": "86088 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86088 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86088 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42313,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42313,
            "unit": "ns/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
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
            "value": 75449,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75449,
            "unit": "ns/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31328,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38562 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31328,
            "unit": "ns/op",
            "extra": "38562 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38562 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38562 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300581,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300581,
            "unit": "ns/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59058,
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
            "value": 314416,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 314416,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
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
            "value": 101808,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101808,
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
            "value": 50050,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50050,
            "unit": "ns/op",
            "extra": "24250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24250 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200365,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200365,
            "unit": "ns/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8243,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8243,
            "unit": "ns/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156472,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156472,
            "unit": "ns/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512260121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512260121A094101Federal",
            "value": 231380104,
            "unit": "1210428822512260121A094101Federal",
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
            "value": 975.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1232280 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975.7,
            "unit": "ns/op",
            "extra": "1232280 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1232280 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1232280 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.77,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12056168 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.77,
            "unit": "ns/op",
            "extra": "12056168 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12056168 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12056168 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18702034 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.5,
            "unit": "ns/op",
            "extra": "18702034 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18702034 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18702034 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.04,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39694891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.04,
            "unit": "ns/op",
            "extra": "39694891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39694891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39694891 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91682845 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "91682845 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91682845 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91682845 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198859825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.94,
            "unit": "ns/op",
            "extra": "198859825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "198859825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "198859825 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310067,
            "unit": "ns/op\t   57875 B/op\t     666 allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310067,
            "unit": "ns/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57875,
            "unit": "B/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 305310,
            "unit": "ns/op\t   57895 B/op\t     666 allocs/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305310,
            "unit": "ns/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57895,
            "unit": "B/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177002,
            "unit": "ns/op\t   58089 B/op\t     669 allocs/op",
            "extra": "6712 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177002,
            "unit": "ns/op",
            "extra": "6712 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58089,
            "unit": "B/op",
            "extra": "6712 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6712 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 181721,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 181721,
            "unit": "ns/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362172,
            "unit": "ns/op\t   63626 B/op\t     726 allocs/op",
            "extra": "3175 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362172,
            "unit": "ns/op",
            "extra": "3175 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63626,
            "unit": "B/op",
            "extra": "3175 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3175 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 366882,
            "unit": "ns/op\t   63584 B/op\t     726 allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 366882,
            "unit": "ns/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63584,
            "unit": "B/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351081,
            "unit": "ns/op\t   63612 B/op\t     726 allocs/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351081,
            "unit": "ns/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63612,
            "unit": "B/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346456,
            "unit": "ns/op\t   63101 B/op\t     727 allocs/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346456,
            "unit": "ns/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63101,
            "unit": "B/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48241956 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.2,
            "unit": "ns/op",
            "extra": "48241956 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48241956 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48241956 times\n4 procs"
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
          "id": "5002ae88f8dccf1db4da7299c2e653aad41915b1",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 12e489fb42897c7495249095d4bfaeed5119d32c",
          "timestamp": "2025-12-25T03:24:17Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5002ae88f8dccf1db4da7299c2e653aad41915b1"
        },
        "date": 1766712107161,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14551,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87399 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14551,
            "unit": "ns/op",
            "extra": "87399 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87399 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87399 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41981,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28635 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41981,
            "unit": "ns/op",
            "extra": "28635 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28635 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28635 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75307,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75307,
            "unit": "ns/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15902 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30988,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30988,
            "unit": "ns/op",
            "extra": "38612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38612 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298118,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298118,
            "unit": "ns/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297893,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297893,
            "unit": "ns/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 104825,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 104825,
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
            "value": 49352,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24433 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49352,
            "unit": "ns/op",
            "extra": "24433 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24433 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24433 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201680,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5732 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201680,
            "unit": "ns/op",
            "extra": "5732 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5732 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5732 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8105,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "147002 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8105,
            "unit": "ns/op",
            "extra": "147002 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "147002 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147002 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155225,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7558 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155225,
            "unit": "ns/op",
            "extra": "7558 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7558 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7558 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512270121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512270121A094101Federal",
            "value": 231380104,
            "unit": "1210428822512270121A094101Federal",
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
            "value": 1007,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1239153 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1007,
            "unit": "ns/op",
            "extra": "1239153 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1239153 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1239153 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12214389 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.86,
            "unit": "ns/op",
            "extra": "12214389 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12214389 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12214389 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.54,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18598412 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.54,
            "unit": "ns/op",
            "extra": "18598412 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18598412 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18598412 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.99,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39633652 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.99,
            "unit": "ns/op",
            "extra": "39633652 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39633652 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39633652 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91343053 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.68,
            "unit": "ns/op",
            "extra": "91343053 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91343053 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91343053 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202720646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.919,
            "unit": "ns/op",
            "extra": "202720646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202720646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202720646 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306101,
            "unit": "ns/op\t   57872 B/op\t     666 allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306101,
            "unit": "ns/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57872,
            "unit": "B/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300746,
            "unit": "ns/op\t   57884 B/op\t     666 allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300746,
            "unit": "ns/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57884,
            "unit": "B/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174958,
            "unit": "ns/op\t   58073 B/op\t     669 allocs/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174958,
            "unit": "ns/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58073,
            "unit": "B/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174629,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6278 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174629,
            "unit": "ns/op",
            "extra": "6278 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6278 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6278 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363553,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3301 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363553,
            "unit": "ns/op",
            "extra": "3301 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63585,
            "unit": "B/op",
            "extra": "3301 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3301 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 350555,
            "unit": "ns/op\t   63600 B/op\t     726 allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 350555,
            "unit": "ns/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63600,
            "unit": "B/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356263,
            "unit": "ns/op\t   63621 B/op\t     726 allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356263,
            "unit": "ns/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63621,
            "unit": "B/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345414,
            "unit": "ns/op\t   63102 B/op\t     727 allocs/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345414,
            "unit": "ns/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63102,
            "unit": "B/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48301514 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.96,
            "unit": "ns/op",
            "extra": "48301514 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48301514 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48301514 times\n4 procs"
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
          "id": "9f5d7b028a6a370d33e2aab3b5c8b960c72fc78a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3387c60612c403a677bbc3b44a5ceb0d30f13127",
          "timestamp": "2025-12-26T03:22:31Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9f5d7b028a6a370d33e2aab3b5c8b960c72fc78a"
        },
        "date": 1766798391656,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13723,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87694 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13723,
            "unit": "ns/op",
            "extra": "87694 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87694 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87694 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42108,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42108,
            "unit": "ns/op",
            "extra": "28488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28488 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 79384,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15949 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 79384,
            "unit": "ns/op",
            "extra": "15949 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15949 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15949 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31105,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38665 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31105,
            "unit": "ns/op",
            "extra": "38665 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38665 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38665 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300982,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300982,
            "unit": "ns/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297100,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297100,
            "unit": "ns/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99625,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99625,
            "unit": "ns/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49270,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "23910 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49270,
            "unit": "ns/op",
            "extra": "23910 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "23910 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23910 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207472,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6044 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207472,
            "unit": "ns/op",
            "extra": "6044 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6044 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6044 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8164,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "143640 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8164,
            "unit": "ns/op",
            "extra": "143640 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "143640 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "143640 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156413,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156413,
            "unit": "ns/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512280119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512280119A094101Federal",
            "value": 231380104,
            "unit": "1210428822512280119A094101Federal",
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
            "value": 975.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1228573 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975.2,
            "unit": "ns/op",
            "extra": "1228573 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1228573 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1228573 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.95,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12249380 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.95,
            "unit": "ns/op",
            "extra": "12249380 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12249380 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12249380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.46,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18915001 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.46,
            "unit": "ns/op",
            "extra": "18915001 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18915001 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18915001 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38815156 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.96,
            "unit": "ns/op",
            "extra": "38815156 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38815156 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38815156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91425896 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.43,
            "unit": "ns/op",
            "extra": "91425896 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91425896 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91425896 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.918,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202545860 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.918,
            "unit": "ns/op",
            "extra": "202545860 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202545860 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202545860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305127,
            "unit": "ns/op\t   57883 B/op\t     666 allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305127,
            "unit": "ns/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57883,
            "unit": "B/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 307249,
            "unit": "ns/op\t   57894 B/op\t     666 allocs/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 307249,
            "unit": "ns/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57894,
            "unit": "B/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172805,
            "unit": "ns/op\t   58065 B/op\t     669 allocs/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172805,
            "unit": "ns/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58065,
            "unit": "B/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173219,
            "unit": "ns/op\t   58103 B/op\t     669 allocs/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173219,
            "unit": "ns/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58103,
            "unit": "B/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 367406,
            "unit": "ns/op\t   63610 B/op\t     726 allocs/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 367406,
            "unit": "ns/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63610,
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
            "value": 358313,
            "unit": "ns/op\t   63580 B/op\t     726 allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358313,
            "unit": "ns/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63580,
            "unit": "B/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352786,
            "unit": "ns/op\t   63612 B/op\t     726 allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352786,
            "unit": "ns/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63612,
            "unit": "B/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351535,
            "unit": "ns/op\t   63567 B/op\t     727 allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351535,
            "unit": "ns/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63567,
            "unit": "B/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47254855 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.55,
            "unit": "ns/op",
            "extra": "47254855 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47254855 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47254855 times\n4 procs"
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
          "id": "85f38cf1cc1c92739fe212556fa656bb70b3a2fc",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ec3ca5edbb2eadcff3c4cbdac7431b2059ce83cc",
          "timestamp": "2025-12-27T03:20:54Z",
          "url": "https://github.com/moov-io/benchmarks/commit/85f38cf1cc1c92739fe212556fa656bb70b3a2fc"
        },
        "date": 1766885967583,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13375,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "90723 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13375,
            "unit": "ns/op",
            "extra": "90723 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "90723 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "90723 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36410,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "32829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36410,
            "unit": "ns/op",
            "extra": "32829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "32829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32829 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 65515,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "18253 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 65515,
            "unit": "ns/op",
            "extra": "18253 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "18253 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "18253 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28333,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "44854 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28333,
            "unit": "ns/op",
            "extra": "44854 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "44854 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 265380,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "4413 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 265380,
            "unit": "ns/op",
            "extra": "4413 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "4413 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4413 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 265919,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 265919,
            "unit": "ns/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 88042,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "13650 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 88042,
            "unit": "ns/op",
            "extra": "13650 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "13650 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "13650 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47382,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "25378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47382,
            "unit": "ns/op",
            "extra": "25378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "25378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25378 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 193480,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 193480,
            "unit": "ns/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8381,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "148020 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8381,
            "unit": "ns/op",
            "extra": "148020 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "148020 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148020 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145600,
            "unit": "ns/op\t   61099 B/op\t     721 allocs/op",
            "extra": "7591 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145600,
            "unit": "ns/op",
            "extra": "7591 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61099,
            "unit": "B/op",
            "extra": "7591 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7591 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512290138A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512290138A094101Federal",
            "value": 231380104,
            "unit": "1210428822512290138A094101Federal",
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
            "value": 981.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1213254 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 981.6,
            "unit": "ns/op",
            "extra": "1213254 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1213254 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1213254 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 85.07,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13925997 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 85.07,
            "unit": "ns/op",
            "extra": "13925997 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13925997 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13925997 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 55.24,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21265542 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 55.24,
            "unit": "ns/op",
            "extra": "21265542 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21265542 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21265542 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.33,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46370210 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.33,
            "unit": "ns/op",
            "extra": "46370210 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "46370210 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "46370210 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98162503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.28,
            "unit": "ns/op",
            "extra": "98162503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "98162503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "98162503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "231344979 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.197,
            "unit": "ns/op",
            "extra": "231344979 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "231344979 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "231344979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 275836,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 275836,
            "unit": "ns/op",
            "extra": "4435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
            "unit": "B/op",
            "extra": "4435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 278041,
            "unit": "ns/op\t   57895 B/op\t     666 allocs/op",
            "extra": "4590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 278041,
            "unit": "ns/op",
            "extra": "4590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57895,
            "unit": "B/op",
            "extra": "4590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 195865,
            "unit": "ns/op\t   58095 B/op\t     669 allocs/op",
            "extra": "6782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 195865,
            "unit": "ns/op",
            "extra": "6782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58095,
            "unit": "B/op",
            "extra": "6782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 185176,
            "unit": "ns/op\t   58112 B/op\t     669 allocs/op",
            "extra": "6220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 185176,
            "unit": "ns/op",
            "extra": "6220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58112,
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
            "value": 330814,
            "unit": "ns/op\t   63598 B/op\t     726 allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 330814,
            "unit": "ns/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63598,
            "unit": "B/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 329308,
            "unit": "ns/op\t   63605 B/op\t     726 allocs/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 329308,
            "unit": "ns/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63605,
            "unit": "B/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 318168,
            "unit": "ns/op\t   63563 B/op\t     726 allocs/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 318168,
            "unit": "ns/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63563,
            "unit": "B/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 310985,
            "unit": "ns/op\t   63660 B/op\t     727 allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 310985,
            "unit": "ns/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63660,
            "unit": "B/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51668491 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.87,
            "unit": "ns/op",
            "extra": "51668491 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51668491 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51668491 times\n4 procs"
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
          "id": "9387f1053307d1a91cd3597270810399ef596fd6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 22800c7488bfbb1ae617fa5e89617000dd70065e",
          "timestamp": "2025-12-28T03:44:47Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9387f1053307d1a91cd3597270810399ef596fd6"
        },
        "date": 1766971669376,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13611,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88178 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13611,
            "unit": "ns/op",
            "extra": "88178 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88178 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88178 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42133,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42133,
            "unit": "ns/op",
            "extra": "28434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28434 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 79114,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15937 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 79114,
            "unit": "ns/op",
            "extra": "15937 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15937 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15937 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31154,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38319 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31154,
            "unit": "ns/op",
            "extra": "38319 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38319 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38319 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300296,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300296,
            "unit": "ns/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299007,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299007,
            "unit": "ns/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100398,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100398,
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
            "value": 49576,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24198 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49576,
            "unit": "ns/op",
            "extra": "24198 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24198 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24198 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200746,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200746,
            "unit": "ns/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8442,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "125907 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8442,
            "unit": "ns/op",
            "extra": "125907 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "125907 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "125907 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156731,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7237 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156731,
            "unit": "ns/op",
            "extra": "7237 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7237 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7237 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512300127A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512300127A094101Federal",
            "value": 231380104,
            "unit": "1210428822512300127A094101Federal",
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
            "value": 973.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1236591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 973.6,
            "unit": "ns/op",
            "extra": "1236591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1236591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1236591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.18,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12001579 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.18,
            "unit": "ns/op",
            "extra": "12001579 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12001579 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12001579 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.52,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18714296 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.52,
            "unit": "ns/op",
            "extra": "18714296 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18714296 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18714296 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39689120 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.13,
            "unit": "ns/op",
            "extra": "39689120 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39689120 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39689120 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91650256 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "91650256 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91650256 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91650256 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202825538 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202825538 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202825538 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202825538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301845,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301845,
            "unit": "ns/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
            "unit": "B/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300987,
            "unit": "ns/op\t   57889 B/op\t     666 allocs/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300987,
            "unit": "ns/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57889,
            "unit": "B/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 191912,
            "unit": "ns/op\t   58088 B/op\t     669 allocs/op",
            "extra": "6883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 191912,
            "unit": "ns/op",
            "extra": "6883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58088,
            "unit": "B/op",
            "extra": "6883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175012,
            "unit": "ns/op\t   58102 B/op\t     669 allocs/op",
            "extra": "6067 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175012,
            "unit": "ns/op",
            "extra": "6067 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58102,
            "unit": "B/op",
            "extra": "6067 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6067 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363952,
            "unit": "ns/op\t   63581 B/op\t     726 allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363952,
            "unit": "ns/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63581,
            "unit": "B/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357000,
            "unit": "ns/op\t   63630 B/op\t     726 allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357000,
            "unit": "ns/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63630,
            "unit": "B/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355321,
            "unit": "ns/op\t   63614 B/op\t     726 allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355321,
            "unit": "ns/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63614,
            "unit": "B/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356901,
            "unit": "ns/op\t   63564 B/op\t     727 allocs/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356901,
            "unit": "ns/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63564,
            "unit": "B/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47480767 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.95,
            "unit": "ns/op",
            "extra": "47480767 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47480767 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47480767 times\n4 procs"
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
          "id": "6fc47017884a61446f307d83627bd17db41fd273",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c8122f4f987ac1a70fb64b5f995652dcb19f6fad",
          "timestamp": "2025-12-29T03:46:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6fc47017884a61446f307d83627bd17db41fd273"
        },
        "date": 1767057726696,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13434,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "89299 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13434,
            "unit": "ns/op",
            "extra": "89299 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "89299 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "89299 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37471,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37471,
            "unit": "ns/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 67663,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "17784 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 67663,
            "unit": "ns/op",
            "extra": "17784 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "17784 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "17784 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 26647,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "44403 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 26647,
            "unit": "ns/op",
            "extra": "44403 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "44403 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44403 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 269811,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 269811,
            "unit": "ns/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 271855,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "4281 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 271855,
            "unit": "ns/op",
            "extra": "4281 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "4281 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4281 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 89679,
            "unit": "ns/op\t   29720 B/op\t     264 allocs/op",
            "extra": "13489 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 89679,
            "unit": "ns/op",
            "extra": "13489 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29720,
            "unit": "B/op",
            "extra": "13489 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "13489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47760,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "25135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47760,
            "unit": "ns/op",
            "extra": "25135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "25135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25135 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 194327,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 194327,
            "unit": "ns/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6206 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7902,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "152052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7902,
            "unit": "ns/op",
            "extra": "152052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "152052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "152052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148601,
            "unit": "ns/op\t   61099 B/op\t     721 allocs/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148601,
            "unit": "ns/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61099,
            "unit": "B/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512310121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512310121A094101Federal",
            "value": 231380104,
            "unit": "1210428822512310121A094101Federal",
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
            "extra": "1204579 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1014,
            "unit": "ns/op",
            "extra": "1204579 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1204579 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1204579 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13921393 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 86,
            "unit": "ns/op",
            "extra": "13921393 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13921393 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13921393 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 56.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21101892 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 56.6,
            "unit": "ns/op",
            "extra": "21101892 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21101892 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21101892 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.65,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45634687 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.65,
            "unit": "ns/op",
            "extra": "45634687 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "45634687 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45634687 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "97590522 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.22,
            "unit": "ns/op",
            "extra": "97590522 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "97590522 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "97590522 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.192,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230948564 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.192,
            "unit": "ns/op",
            "extra": "230948564 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230948564 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230948564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 272093,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 272093,
            "unit": "ns/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
            "unit": "B/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 269738,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "4311 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 269738,
            "unit": "ns/op",
            "extra": "4311 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "4311 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4311 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 180655,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "5846 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 180655,
            "unit": "ns/op",
            "extra": "5846 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "5846 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5846 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184284,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184284,
            "unit": "ns/op",
            "extra": "6153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 329444,
            "unit": "ns/op\t   63621 B/op\t     726 allocs/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 329444,
            "unit": "ns/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63621,
            "unit": "B/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 325302,
            "unit": "ns/op\t   63581 B/op\t     726 allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 325302,
            "unit": "ns/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63581,
            "unit": "B/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 321813,
            "unit": "ns/op\t   63590 B/op\t     726 allocs/op",
            "extra": "3630 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 321813,
            "unit": "ns/op",
            "extra": "3630 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63590,
            "unit": "B/op",
            "extra": "3630 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3630 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 318925,
            "unit": "ns/op\t   63523 B/op\t     727 allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 318925,
            "unit": "ns/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63523,
            "unit": "B/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52573185 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.89,
            "unit": "ns/op",
            "extra": "52573185 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52573185 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52573185 times\n4 procs"
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
          "id": "0fc2fb64e4fd0ae70741dd1e4ef9ca54e3bd5d2a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e19b4d1e39f5af30ab9d8434e8e6586cae372c1f",
          "timestamp": "2025-12-30T03:25:13Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0fc2fb64e4fd0ae70741dd1e4ef9ca54e3bd5d2a"
        },
        "date": 1767144187719,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13552,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87663 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13552,
            "unit": "ns/op",
            "extra": "87663 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87663 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87663 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42201,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42201,
            "unit": "ns/op",
            "extra": "28281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28281 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74829,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74829,
            "unit": "ns/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31101,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38206 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31101,
            "unit": "ns/op",
            "extra": "38206 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38206 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38206 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 299363,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 299363,
            "unit": "ns/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299383,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299383,
            "unit": "ns/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 108309,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 108309,
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
            "value": 50031,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "24397 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50031,
            "unit": "ns/op",
            "extra": "24397 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "24397 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24397 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199302,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6090 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199302,
            "unit": "ns/op",
            "extra": "6090 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6090 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6090 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8162,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145352 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8162,
            "unit": "ns/op",
            "extra": "145352 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145352 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145352 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156194,
            "unit": "ns/op\t   61098 B/op\t     721 allocs/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156194,
            "unit": "ns/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61098,
            "unit": "B/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601010122A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601010122A094101Federal",
            "value": 231380104,
            "unit": "1210428822601010122A094101Federal",
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
            "value": 969.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1228113 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 969.3,
            "unit": "ns/op",
            "extra": "1228113 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1228113 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1228113 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.01,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12173406 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.01,
            "unit": "ns/op",
            "extra": "12173406 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12173406 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12173406 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.48,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18898076 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.48,
            "unit": "ns/op",
            "extra": "18898076 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18898076 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18898076 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.38,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40151932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.38,
            "unit": "ns/op",
            "extra": "40151932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40151932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40151932 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91616109 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91616109 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91616109 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91616109 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202806561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "202806561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202806561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202806561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306961,
            "unit": "ns/op\t   57871 B/op\t     666 allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306961,
            "unit": "ns/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57871,
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
            "value": 312751,
            "unit": "ns/op\t   57892 B/op\t     666 allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 312751,
            "unit": "ns/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57892,
            "unit": "B/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175208,
            "unit": "ns/op\t   58077 B/op\t     669 allocs/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175208,
            "unit": "ns/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58077,
            "unit": "B/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184291,
            "unit": "ns/op\t   58111 B/op\t     669 allocs/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184291,
            "unit": "ns/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58111,
            "unit": "B/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 374990,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 374990,
            "unit": "ns/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 371287,
            "unit": "ns/op\t   63674 B/op\t     726 allocs/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 371287,
            "unit": "ns/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63674,
            "unit": "B/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 366347,
            "unit": "ns/op\t   63601 B/op\t     726 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 366347,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63601,
            "unit": "B/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356039,
            "unit": "ns/op\t   63569 B/op\t     727 allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356039,
            "unit": "ns/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63569,
            "unit": "B/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48117385 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.03,
            "unit": "ns/op",
            "extra": "48117385 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48117385 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48117385 times\n4 procs"
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
          "id": "3a604725c81482ac51ee9a0aa3cb9104d7f805eb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 776ce20611972bcdfb1c420c7da2c5ba825a72e9",
          "timestamp": "2025-12-31T03:24:10Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3a604725c81482ac51ee9a0aa3cb9104d7f805eb"
        },
        "date": 1767231005017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13566,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88281 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13566,
            "unit": "ns/op",
            "extra": "88281 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88281 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42309,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28384 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42309,
            "unit": "ns/op",
            "extra": "28384 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28384 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28384 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78436,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15861 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78436,
            "unit": "ns/op",
            "extra": "15861 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15861 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15861 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31183,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31183,
            "unit": "ns/op",
            "extra": "38402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38402 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 303302,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 303302,
            "unit": "ns/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3852 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298309,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298309,
            "unit": "ns/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100191,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12075 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100191,
            "unit": "ns/op",
            "extra": "12075 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12075 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12075 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49922,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24043 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49922,
            "unit": "ns/op",
            "extra": "24043 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24043 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24043 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208411,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208411,
            "unit": "ns/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8144,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "147411 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8144,
            "unit": "ns/op",
            "extra": "147411 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "147411 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147411 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157480,
            "unit": "ns/op\t   61098 B/op\t     721 allocs/op",
            "extra": "7587 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157480,
            "unit": "ns/op",
            "extra": "7587 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61098,
            "unit": "B/op",
            "extra": "7587 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7587 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601020129A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601020129A094101Federal",
            "value": 231380104,
            "unit": "1210428822601020129A094101Federal",
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
            "extra": "1235732 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 968.7,
            "unit": "ns/op",
            "extra": "1235732 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1235732 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1235732 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12109833 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.3,
            "unit": "ns/op",
            "extra": "12109833 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12109833 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12109833 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.25,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18694292 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.25,
            "unit": "ns/op",
            "extra": "18694292 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18694292 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18694292 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39785376 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.87,
            "unit": "ns/op",
            "extra": "39785376 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39785376 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39785376 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91693605 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.41,
            "unit": "ns/op",
            "extra": "91693605 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91693605 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91693605 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.014,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202383662 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.014,
            "unit": "ns/op",
            "extra": "202383662 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202383662 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202383662 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298889,
            "unit": "ns/op\t   57882 B/op\t     666 allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298889,
            "unit": "ns/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57882,
            "unit": "B/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300332,
            "unit": "ns/op\t   57891 B/op\t     666 allocs/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300332,
            "unit": "ns/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57891,
            "unit": "B/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174779,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174779,
            "unit": "ns/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6519 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 180527,
            "unit": "ns/op\t   58104 B/op\t     669 allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 180527,
            "unit": "ns/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58104,
            "unit": "B/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361041,
            "unit": "ns/op\t   63651 B/op\t     726 allocs/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361041,
            "unit": "ns/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63651,
            "unit": "B/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354657,
            "unit": "ns/op\t   63600 B/op\t     726 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354657,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63600,
            "unit": "B/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 361435,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 361435,
            "unit": "ns/op",
            "extra": "3493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63585,
            "unit": "B/op",
            "extra": "3493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344184,
            "unit": "ns/op\t   63611 B/op\t     727 allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344184,
            "unit": "ns/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63611,
            "unit": "B/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45269654 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.62,
            "unit": "ns/op",
            "extra": "45269654 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45269654 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45269654 times\n4 procs"
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
          "id": "64007550bbce660ca6953510a0f270ae93bf5aca",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d2ba85ee8211076f80339eb0b2b380bc0fa5c18e",
          "timestamp": "2026-01-01T03:47:21Z",
          "url": "https://github.com/moov-io/benchmarks/commit/64007550bbce660ca6953510a0f270ae93bf5aca"
        },
        "date": 1767317022123,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13771,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86160 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13771,
            "unit": "ns/op",
            "extra": "86160 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86160 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86160 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42207,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42207,
            "unit": "ns/op",
            "extra": "28668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28668 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75167,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75167,
            "unit": "ns/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32879,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38636 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32879,
            "unit": "ns/op",
            "extra": "38636 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38636 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38636 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297273,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297273,
            "unit": "ns/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298779,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298779,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99216,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12036 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99216,
            "unit": "ns/op",
            "extra": "12036 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12036 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12036 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48955,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24376 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48955,
            "unit": "ns/op",
            "extra": "24376 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24376 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24376 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202621,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202621,
            "unit": "ns/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8512,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144902 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8512,
            "unit": "ns/op",
            "extra": "144902 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144902 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144902 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156590,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7692 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156590,
            "unit": "ns/op",
            "extra": "7692 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7692 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7692 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601030123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601030123A094101Federal",
            "value": 231380104,
            "unit": "1210428822601030123A094101Federal",
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
            "value": 969.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1238126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 969.2,
            "unit": "ns/op",
            "extra": "1238126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1238126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1238126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12195591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.3,
            "unit": "ns/op",
            "extra": "12195591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12195591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12195591 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.46,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17515645 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.46,
            "unit": "ns/op",
            "extra": "17515645 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17515645 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17515645 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.85,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40527637 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.85,
            "unit": "ns/op",
            "extra": "40527637 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40527637 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40527637 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91249360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "91249360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91249360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91249360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201876225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.913,
            "unit": "ns/op",
            "extra": "201876225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201876225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201876225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306962,
            "unit": "ns/op\t   57880 B/op\t     666 allocs/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306962,
            "unit": "ns/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57880,
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
            "value": 301001,
            "unit": "ns/op\t   57894 B/op\t     666 allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301001,
            "unit": "ns/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57894,
            "unit": "B/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 195297,
            "unit": "ns/op\t   58095 B/op\t     669 allocs/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 195297,
            "unit": "ns/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58095,
            "unit": "B/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170005,
            "unit": "ns/op\t   58106 B/op\t     669 allocs/op",
            "extra": "6424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170005,
            "unit": "ns/op",
            "extra": "6424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58106,
            "unit": "B/op",
            "extra": "6424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361874,
            "unit": "ns/op\t   63581 B/op\t     726 allocs/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361874,
            "unit": "ns/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63581,
            "unit": "B/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356657,
            "unit": "ns/op\t   63606 B/op\t     726 allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356657,
            "unit": "ns/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63606,
            "unit": "B/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356912,
            "unit": "ns/op\t   63612 B/op\t     726 allocs/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356912,
            "unit": "ns/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63612,
            "unit": "B/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348685,
            "unit": "ns/op\t   63664 B/op\t     727 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348685,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63664,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47061544 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.89,
            "unit": "ns/op",
            "extra": "47061544 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47061544 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47061544 times\n4 procs"
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
          "id": "f87301527113ab97bbee9f8c34b6731949aaf2dd",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2780f30b88a5c3aead75f7ea4ce5ab065a532007",
          "timestamp": "2026-01-02T03:27:45Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f87301527113ab97bbee9f8c34b6731949aaf2dd"
        },
        "date": 1767403153731,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13864,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "83625 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13864,
            "unit": "ns/op",
            "extra": "83625 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "83625 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "83625 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43231,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "27709 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43231,
            "unit": "ns/op",
            "extra": "27709 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "27709 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "27709 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 77381,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15664 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 77381,
            "unit": "ns/op",
            "extra": "15664 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15664 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32330,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "37305 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32330,
            "unit": "ns/op",
            "extra": "37305 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "37305 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "37305 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 308085,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 308085,
            "unit": "ns/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 315356,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 315356,
            "unit": "ns/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101477,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101477,
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
            "value": 49468,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24248 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49468,
            "unit": "ns/op",
            "extra": "24248 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24248 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24248 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201642,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6134 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201642,
            "unit": "ns/op",
            "extra": "6134 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6134 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6134 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8153,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144948 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8153,
            "unit": "ns/op",
            "extra": "144948 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144948 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144948 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156986,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7431 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156986,
            "unit": "ns/op",
            "extra": "7431 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7431 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7431 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601040118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601040118A094101Federal",
            "value": 231380104,
            "unit": "1210428822601040118A094101Federal",
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
            "value": 977.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1211048 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 977.1,
            "unit": "ns/op",
            "extra": "1211048 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1211048 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1211048 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.14,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11963823 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.14,
            "unit": "ns/op",
            "extra": "11963823 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11963823 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11963823 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.76,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18988978 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.76,
            "unit": "ns/op",
            "extra": "18988978 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18988978 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18988978 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40272165 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.02,
            "unit": "ns/op",
            "extra": "40272165 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40272165 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40272165 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91823935 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.37,
            "unit": "ns/op",
            "extra": "91823935 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91823935 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91823935 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202864146 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.136,
            "unit": "ns/op",
            "extra": "202864146 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202864146 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202864146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299593,
            "unit": "ns/op\t   57875 B/op\t     666 allocs/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299593,
            "unit": "ns/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57875,
            "unit": "B/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306211,
            "unit": "ns/op\t   57906 B/op\t     666 allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306211,
            "unit": "ns/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57906,
            "unit": "B/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 180267,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "6568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 180267,
            "unit": "ns/op",
            "extra": "6568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "6568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 181197,
            "unit": "ns/op\t   58107 B/op\t     669 allocs/op",
            "extra": "6516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 181197,
            "unit": "ns/op",
            "extra": "6516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58107,
            "unit": "B/op",
            "extra": "6516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 376503,
            "unit": "ns/op\t   63658 B/op\t     726 allocs/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 376503,
            "unit": "ns/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63658,
            "unit": "B/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 365387,
            "unit": "ns/op\t   63632 B/op\t     726 allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 365387,
            "unit": "ns/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63632,
            "unit": "B/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 378510,
            "unit": "ns/op\t   63611 B/op\t     726 allocs/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 378510,
            "unit": "ns/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63611,
            "unit": "B/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 355017,
            "unit": "ns/op\t   63615 B/op\t     727 allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 355017,
            "unit": "ns/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63615,
            "unit": "B/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46605373 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.98,
            "unit": "ns/op",
            "extra": "46605373 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46605373 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46605373 times\n4 procs"
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
          "id": "3871207b1485e4a789b9f6c08c816c75aa71e0c3",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 378a3ff454e2c9d606af63c77e6a74f4e4b003f4",
          "timestamp": "2026-01-03T03:20:01Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3871207b1485e4a789b9f6c08c816c75aa71e0c3"
        },
        "date": 1767490830758,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13659,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87429 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13659,
            "unit": "ns/op",
            "extra": "87429 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87429 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87429 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41856,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28677 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41856,
            "unit": "ns/op",
            "extra": "28677 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28677 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28677 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75166,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16042 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75166,
            "unit": "ns/op",
            "extra": "16042 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16042 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16042 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32230,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38545 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32230,
            "unit": "ns/op",
            "extra": "38545 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38545 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38545 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297687,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297687,
            "unit": "ns/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298222,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298222,
            "unit": "ns/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101004,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12073 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101004,
            "unit": "ns/op",
            "extra": "12073 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12073 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12073 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49220,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24469 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49220,
            "unit": "ns/op",
            "extra": "24469 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24469 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24469 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201453,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201453,
            "unit": "ns/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8439,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144876 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8439,
            "unit": "ns/op",
            "extra": "144876 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144876 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144876 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155322,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155322,
            "unit": "ns/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6921 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601050139A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601050139A094101Federal",
            "value": 231380104,
            "unit": "1210428822601050139A094101Federal",
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
            "value": 971.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1228262 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 971.4,
            "unit": "ns/op",
            "extra": "1228262 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1228262 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1228262 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.06,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12207325 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.06,
            "unit": "ns/op",
            "extra": "12207325 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12207325 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12207325 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.36,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18704972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.36,
            "unit": "ns/op",
            "extra": "18704972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18704972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18704972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.94,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40275486 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.94,
            "unit": "ns/op",
            "extra": "40275486 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40275486 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40275486 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91657774 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91657774 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91657774 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91657774 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.927,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202856827 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.927,
            "unit": "ns/op",
            "extra": "202856827 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202856827 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202856827 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302820,
            "unit": "ns/op\t   57873 B/op\t     666 allocs/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302820,
            "unit": "ns/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57873,
            "unit": "B/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301797,
            "unit": "ns/op\t   57900 B/op\t     666 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301797,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57900,
            "unit": "B/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 186307,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 186307,
            "unit": "ns/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173422,
            "unit": "ns/op\t   58124 B/op\t     669 allocs/op",
            "extra": "6720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173422,
            "unit": "ns/op",
            "extra": "6720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58124,
            "unit": "B/op",
            "extra": "6720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359528,
            "unit": "ns/op\t   63571 B/op\t     726 allocs/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359528,
            "unit": "ns/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63571,
            "unit": "B/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352755,
            "unit": "ns/op\t   63612 B/op\t     726 allocs/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352755,
            "unit": "ns/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63612,
            "unit": "B/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 361752,
            "unit": "ns/op\t   63602 B/op\t     726 allocs/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 361752,
            "unit": "ns/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63602,
            "unit": "B/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345677,
            "unit": "ns/op\t   63071 B/op\t     727 allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345677,
            "unit": "ns/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63071,
            "unit": "B/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48146242 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.9,
            "unit": "ns/op",
            "extra": "48146242 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48146242 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48146242 times\n4 procs"
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
          "id": "67589ccd4419de610e0ef028c67625f6e22c3d28",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 63083ff5c2a18f8c698d270b4e41f351d7994e17",
          "timestamp": "2026-01-04T03:48:05Z",
          "url": "https://github.com/moov-io/benchmarks/commit/67589ccd4419de610e0ef028c67625f6e22c3d28"
        },
        "date": 1767576583600,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13493,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87752 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13493,
            "unit": "ns/op",
            "extra": "87752 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87752 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87752 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41866,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28578 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41866,
            "unit": "ns/op",
            "extra": "28578 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
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
            "value": 74802,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "16035 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74802,
            "unit": "ns/op",
            "extra": "16035 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "16035 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16035 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32578,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32578,
            "unit": "ns/op",
            "extra": "38883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297455,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297455,
            "unit": "ns/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 300408,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 300408,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
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
            "value": 101008,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101008,
            "unit": "ns/op",
            "extra": "12057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12057 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49716,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49716,
            "unit": "ns/op",
            "extra": "24392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24392 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202625,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5816 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202625,
            "unit": "ns/op",
            "extra": "5816 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5816 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5816 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8609,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146839 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8609,
            "unit": "ns/op",
            "extra": "146839 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146839 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146839 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157318,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157318,
            "unit": "ns/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601060129A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601060129A094101Federal",
            "value": 231380104,
            "unit": "1210428822601060129A094101Federal",
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
            "value": 973,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1238042 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 973,
            "unit": "ns/op",
            "extra": "1238042 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1238042 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1238042 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.78,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12182958 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.78,
            "unit": "ns/op",
            "extra": "12182958 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12182958 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12182958 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.28,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18802708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.28,
            "unit": "ns/op",
            "extra": "18802708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18802708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18802708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.05,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40094928 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.05,
            "unit": "ns/op",
            "extra": "40094928 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40094928 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40094928 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90351859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "90351859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90351859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90351859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "197580646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "197580646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "197580646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "197580646 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296905,
            "unit": "ns/op\t   57880 B/op\t     666 allocs/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296905,
            "unit": "ns/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57880,
            "unit": "B/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298444,
            "unit": "ns/op\t   57898 B/op\t     666 allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298444,
            "unit": "ns/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57898,
            "unit": "B/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 194634,
            "unit": "ns/op\t   58080 B/op\t     669 allocs/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 194634,
            "unit": "ns/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58080,
            "unit": "B/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173735,
            "unit": "ns/op\t   58103 B/op\t     669 allocs/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173735,
            "unit": "ns/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58103,
            "unit": "B/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357636,
            "unit": "ns/op\t   63617 B/op\t     726 allocs/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357636,
            "unit": "ns/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63617,
            "unit": "B/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354397,
            "unit": "ns/op\t   63633 B/op\t     726 allocs/op",
            "extra": "3307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354397,
            "unit": "ns/op",
            "extra": "3307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63633,
            "unit": "B/op",
            "extra": "3307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346748,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346748,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63592,
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
            "value": 347002,
            "unit": "ns/op\t   63068 B/op\t     727 allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347002,
            "unit": "ns/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63068,
            "unit": "B/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48111376 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.97,
            "unit": "ns/op",
            "extra": "48111376 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48111376 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48111376 times\n4 procs"
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
          "id": "e3497ae7ec531b9eca0b3e94b2f5ac3bed6f22c1",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a86993cfd0170426f71a9ad2e7408b081e7587f2",
          "timestamp": "2026-01-05T03:52:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e3497ae7ec531b9eca0b3e94b2f5ac3bed6f22c1"
        },
        "date": 1767662610094,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14193,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "83463 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14193,
            "unit": "ns/op",
            "extra": "83463 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "83463 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "83463 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 45376,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "26330 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 45376,
            "unit": "ns/op",
            "extra": "26330 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "26330 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "26330 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 81487,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "14755 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 81487,
            "unit": "ns/op",
            "extra": "14755 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "14755 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "14755 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 33380,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "36158 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 33380,
            "unit": "ns/op",
            "extra": "36158 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "36158 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "36158 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 320844,
            "unit": "ns/op\t   59064 B/op\t     810 allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 320844,
            "unit": "ns/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59064,
            "unit": "B/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 322426,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 322426,
            "unit": "ns/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 107897,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 107897,
            "unit": "ns/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 52877,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "22795 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 52877,
            "unit": "ns/op",
            "extra": "22795 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "22795 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "22795 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 215206,
            "unit": "ns/op\t   54710 B/op\t    2069 allocs/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 215206,
            "unit": "ns/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54710,
            "unit": "B/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8350,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "135910 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8350,
            "unit": "ns/op",
            "extra": "135910 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "135910 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "135910 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 165283,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 165283,
            "unit": "ns/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601070122A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601070122A094101Federal",
            "value": 231380104,
            "unit": "1210428822601070122A094101Federal",
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
            "value": 1002,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1002,
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
            "value": 107.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10333428 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 107.3,
            "unit": "ns/op",
            "extra": "10333428 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10333428 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10333428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.36,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17459332 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.36,
            "unit": "ns/op",
            "extra": "17459332 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17459332 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17459332 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 31.17,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "37175812 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 31.17,
            "unit": "ns/op",
            "extra": "37175812 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "37175812 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "37175812 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83747060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.98,
            "unit": "ns/op",
            "extra": "83747060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "83747060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "83747060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.602,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "182838843 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.602,
            "unit": "ns/op",
            "extra": "182838843 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "182838843 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "182838843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 313532,
            "unit": "ns/op\t   57894 B/op\t     666 allocs/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 313532,
            "unit": "ns/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57894,
            "unit": "B/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3333 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 320613,
            "unit": "ns/op\t   57884 B/op\t     666 allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 320613,
            "unit": "ns/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57884,
            "unit": "B/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 185802,
            "unit": "ns/op\t   58075 B/op\t     669 allocs/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 185802,
            "unit": "ns/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58075,
            "unit": "B/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 183573,
            "unit": "ns/op\t   58110 B/op\t     669 allocs/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 183573,
            "unit": "ns/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58110,
            "unit": "B/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 395070,
            "unit": "ns/op\t   63621 B/op\t     726 allocs/op",
            "extra": "3016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 395070,
            "unit": "ns/op",
            "extra": "3016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63621,
            "unit": "B/op",
            "extra": "3016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 378803,
            "unit": "ns/op\t   63657 B/op\t     726 allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 378803,
            "unit": "ns/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63657,
            "unit": "B/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 372063,
            "unit": "ns/op\t   63673 B/op\t     726 allocs/op",
            "extra": "3234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 372063,
            "unit": "ns/op",
            "extra": "3234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63673,
            "unit": "B/op",
            "extra": "3234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 372271,
            "unit": "ns/op\t   63107 B/op\t     727 allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 372271,
            "unit": "ns/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63107,
            "unit": "B/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44623456 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.85,
            "unit": "ns/op",
            "extra": "44623456 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44623456 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44623456 times\n4 procs"
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
          "id": "61ae3e8da31731194f980fc3d45cf21b3099b484",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8cd011369d6c7c5b3965d5156ecd121ede8d86e9",
          "timestamp": "2026-01-06T03:26:39Z",
          "url": "https://github.com/moov-io/benchmarks/commit/61ae3e8da31731194f980fc3d45cf21b3099b484"
        },
        "date": 1767749027048,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13675,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87306 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13675,
            "unit": "ns/op",
            "extra": "87306 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87306 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87306 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41914,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41914,
            "unit": "ns/op",
            "extra": "28657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28657 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74940,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16206 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74940,
            "unit": "ns/op",
            "extra": "16206 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16206 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16206 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31087,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38661 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31087,
            "unit": "ns/op",
            "extra": "38661 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38661 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38661 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 307040,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 307040,
            "unit": "ns/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293419,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293419,
            "unit": "ns/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98385,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12207 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98385,
            "unit": "ns/op",
            "extra": "12207 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12207 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12207 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49847,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49847,
            "unit": "ns/op",
            "extra": "24417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24417 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201096,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5865 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201096,
            "unit": "ns/op",
            "extra": "5865 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5865 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5865 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8140,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144697 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8140,
            "unit": "ns/op",
            "extra": "144697 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144697 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144697 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162806,
            "unit": "ns/op\t   61095 B/op\t     721 allocs/op",
            "extra": "7617 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162806,
            "unit": "ns/op",
            "extra": "7617 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61095,
            "unit": "B/op",
            "extra": "7617 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7617 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601080123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601080123A094101Federal",
            "value": 231380104,
            "unit": "1210428822601080123A094101Federal",
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
            "value": 962.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1231453 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 962.7,
            "unit": "ns/op",
            "extra": "1231453 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1231453 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1231453 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.03,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12159410 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.03,
            "unit": "ns/op",
            "extra": "12159410 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12159410 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12159410 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.15,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18826089 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.15,
            "unit": "ns/op",
            "extra": "18826089 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18826089 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18826089 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.12,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40402382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.12,
            "unit": "ns/op",
            "extra": "40402382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40402382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40402382 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87199580 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.05,
            "unit": "ns/op",
            "extra": "87199580 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87199580 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87199580 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.558,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183124198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.558,
            "unit": "ns/op",
            "extra": "183124198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183124198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183124198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299053,
            "unit": "ns/op\t   57881 B/op\t     666 allocs/op",
            "extra": "4378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299053,
            "unit": "ns/op",
            "extra": "4378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57881,
            "unit": "B/op",
            "extra": "4378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296610,
            "unit": "ns/op\t   57893 B/op\t     666 allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296610,
            "unit": "ns/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57893,
            "unit": "B/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168058,
            "unit": "ns/op\t   58090 B/op\t     669 allocs/op",
            "extra": "6726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168058,
            "unit": "ns/op",
            "extra": "6726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58090,
            "unit": "B/op",
            "extra": "6726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170372,
            "unit": "ns/op\t   58107 B/op\t     669 allocs/op",
            "extra": "6240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170372,
            "unit": "ns/op",
            "extra": "6240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58107,
            "unit": "B/op",
            "extra": "6240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354136,
            "unit": "ns/op\t   63582 B/op\t     726 allocs/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354136,
            "unit": "ns/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63582,
            "unit": "B/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351009,
            "unit": "ns/op\t   63603 B/op\t     726 allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351009,
            "unit": "ns/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63603,
            "unit": "B/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349838,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349838,
            "unit": "ns/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63592,
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
            "value": 344746,
            "unit": "ns/op\t   63575 B/op\t     727 allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344746,
            "unit": "ns/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63575,
            "unit": "B/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45335484 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.97,
            "unit": "ns/op",
            "extra": "45335484 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45335484 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45335484 times\n4 procs"
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
          "id": "38b5b2e62d41853e110d4ec5669da0c4ced9e7a8",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e59e02b97717f928e40b12950625b519cdfe1414",
          "timestamp": "2026-01-07T03:26:40Z",
          "url": "https://github.com/moov-io/benchmarks/commit/38b5b2e62d41853e110d4ec5669da0c4ced9e7a8"
        },
        "date": 1767835468487,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13678,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88317 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13678,
            "unit": "ns/op",
            "extra": "88317 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88317 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88317 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38318,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "31923 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38318,
            "unit": "ns/op",
            "extra": "31923 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "31923 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "31923 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74333,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "17666 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74333,
            "unit": "ns/op",
            "extra": "17666 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "17666 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "17666 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 26782,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "42993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 26782,
            "unit": "ns/op",
            "extra": "42993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "42993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "42993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 273469,
            "unit": "ns/op\t   59062 B/op\t     810 allocs/op",
            "extra": "4210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 273469,
            "unit": "ns/op",
            "extra": "4210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59062,
            "unit": "B/op",
            "extra": "4210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 276399,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 276399,
            "unit": "ns/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 91225,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12997 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 91225,
            "unit": "ns/op",
            "extra": "12997 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12997 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12997 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47097,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "25126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47097,
            "unit": "ns/op",
            "extra": "25126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "25126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25126 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206636,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5986 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206636,
            "unit": "ns/op",
            "extra": "5986 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5986 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5986 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7955,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "151532 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7955,
            "unit": "ns/op",
            "extra": "151532 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "151532 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "151532 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151579,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151579,
            "unit": "ns/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601090123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601090123A094101Federal",
            "value": 231380104,
            "unit": "1210428822601090123A094101Federal",
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
            "value": 995.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1203901 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 995.5,
            "unit": "ns/op",
            "extra": "1203901 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1203901 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1203901 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 87.37,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13548117 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 87.37,
            "unit": "ns/op",
            "extra": "13548117 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13548117 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13548117 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 56.93,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21083011 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 56.93,
            "unit": "ns/op",
            "extra": "21083011 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21083011 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21083011 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.62,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43899919 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.62,
            "unit": "ns/op",
            "extra": "43899919 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43899919 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43899919 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93308547 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.71,
            "unit": "ns/op",
            "extra": "93308547 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93308547 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93308547 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "229075317 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.215,
            "unit": "ns/op",
            "extra": "229075317 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "229075317 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "229075317 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 287544,
            "unit": "ns/op\t   57880 B/op\t     666 allocs/op",
            "extra": "4396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 287544,
            "unit": "ns/op",
            "extra": "4396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57880,
            "unit": "B/op",
            "extra": "4396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 286131,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 286131,
            "unit": "ns/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 194501,
            "unit": "ns/op\t   58069 B/op\t     669 allocs/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 194501,
            "unit": "ns/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58069,
            "unit": "B/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 202273,
            "unit": "ns/op\t   58114 B/op\t     669 allocs/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 202273,
            "unit": "ns/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58114,
            "unit": "B/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 347813,
            "unit": "ns/op\t   63641 B/op\t     726 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 347813,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63641,
            "unit": "B/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351409,
            "unit": "ns/op\t   63586 B/op\t     726 allocs/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351409,
            "unit": "ns/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63586,
            "unit": "B/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351717,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351717,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 333527,
            "unit": "ns/op\t   63529 B/op\t     727 allocs/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 333527,
            "unit": "ns/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63529,
            "unit": "B/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52877587 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.63,
            "unit": "ns/op",
            "extra": "52877587 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52877587 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52877587 times\n4 procs"
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
          "id": "bf0ed1a244e5ca9bc3f379c5a066d8f1e2b6c361",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7904ec103427fb4e7fcc199b823181e793770ab7",
          "timestamp": "2026-01-08T03:26:59Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bf0ed1a244e5ca9bc3f379c5a066d8f1e2b6c361"
        },
        "date": 1767921867297,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13673,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87909 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13673,
            "unit": "ns/op",
            "extra": "87909 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87909 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87909 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42064,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28426 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42064,
            "unit": "ns/op",
            "extra": "28426 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28426 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28426 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75602,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15957 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75602,
            "unit": "ns/op",
            "extra": "15957 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15957 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15957 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31514,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38234 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31514,
            "unit": "ns/op",
            "extra": "38234 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38234 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38234 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294902,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294902,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294804,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294804,
            "unit": "ns/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 104541,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 104541,
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
            "value": 49428,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49428,
            "unit": "ns/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200983,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200983,
            "unit": "ns/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8100,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144778 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8100,
            "unit": "ns/op",
            "extra": "144778 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144778 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144778 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155096,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155096,
            "unit": "ns/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601100123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601100123A094101Federal",
            "value": 231380104,
            "unit": "1210428822601100123A094101Federal",
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
            "value": 1000,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1233346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1000,
            "unit": "ns/op",
            "extra": "1233346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1233346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1233346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.97,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12096927 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.97,
            "unit": "ns/op",
            "extra": "12096927 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12096927 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12096927 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18679002 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.7,
            "unit": "ns/op",
            "extra": "18679002 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18679002 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18679002 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.89,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40252281 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.89,
            "unit": "ns/op",
            "extra": "40252281 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40252281 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40252281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87185464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.88,
            "unit": "ns/op",
            "extra": "87185464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87185464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87185464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.547,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183673172 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.547,
            "unit": "ns/op",
            "extra": "183673172 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183673172 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183673172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293666,
            "unit": "ns/op\t   57887 B/op\t     666 allocs/op",
            "extra": "4125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293666,
            "unit": "ns/op",
            "extra": "4125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57887,
            "unit": "B/op",
            "extra": "4125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297326,
            "unit": "ns/op\t   57884 B/op\t     666 allocs/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297326,
            "unit": "ns/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57884,
            "unit": "B/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178302,
            "unit": "ns/op\t   58072 B/op\t     669 allocs/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178302,
            "unit": "ns/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58072,
            "unit": "B/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171262,
            "unit": "ns/op\t   58107 B/op\t     669 allocs/op",
            "extra": "6193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171262,
            "unit": "ns/op",
            "extra": "6193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58107,
            "unit": "B/op",
            "extra": "6193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355869,
            "unit": "ns/op\t   63629 B/op\t     726 allocs/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355869,
            "unit": "ns/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63629,
            "unit": "B/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 349803,
            "unit": "ns/op\t   63603 B/op\t     726 allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 349803,
            "unit": "ns/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63603,
            "unit": "B/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356963,
            "unit": "ns/op\t   63594 B/op\t     726 allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356963,
            "unit": "ns/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63594,
            "unit": "B/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351613,
            "unit": "ns/op\t   63670 B/op\t     727 allocs/op",
            "extra": "3948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351613,
            "unit": "ns/op",
            "extra": "3948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63670,
            "unit": "B/op",
            "extra": "3948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3948 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45294256 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.45,
            "unit": "ns/op",
            "extra": "45294256 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45294256 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45294256 times\n4 procs"
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
          "id": "a99e2215bad01500327b3c0817a92e70523fe8c5",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d233667c54fe2a46f03029769afb1168e3b4d76e",
          "timestamp": "2026-01-09T03:27:48Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a99e2215bad01500327b3c0817a92e70523fe8c5"
        },
        "date": 1768008116211,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13857,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86724 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13857,
            "unit": "ns/op",
            "extra": "86724 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86724 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86724 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42624,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42624,
            "unit": "ns/op",
            "extra": "28309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28309 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78850,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15754 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78850,
            "unit": "ns/op",
            "extra": "15754 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15754 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31378,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38166 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31378,
            "unit": "ns/op",
            "extra": "38166 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38166 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38166 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296364,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296364,
            "unit": "ns/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297922,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297922,
            "unit": "ns/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98928,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "12129 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98928,
            "unit": "ns/op",
            "extra": "12129 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29719,
            "unit": "B/op",
            "extra": "12129 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12129 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49599,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49599,
            "unit": "ns/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24213 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206920,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6020 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206920,
            "unit": "ns/op",
            "extra": "6020 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6020 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6020 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8218,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "142078 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8218,
            "unit": "ns/op",
            "extra": "142078 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "142078 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "142078 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 158204,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 158204,
            "unit": "ns/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601110121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601110121A094101Federal",
            "value": 231380104,
            "unit": "1210428822601110121A094101Federal",
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
            "value": 963.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1240047 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 963.2,
            "unit": "ns/op",
            "extra": "1240047 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1240047 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1240047 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12177172 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.71,
            "unit": "ns/op",
            "extra": "12177172 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12177172 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12177172 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 65.71,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18987060 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 65.71,
            "unit": "ns/op",
            "extra": "18987060 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18987060 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18987060 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.85,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39831722 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.85,
            "unit": "ns/op",
            "extra": "39831722 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39831722 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39831722 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87248188 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.87,
            "unit": "ns/op",
            "extra": "87248188 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87248188 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87248188 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.568,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183851838 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.568,
            "unit": "ns/op",
            "extra": "183851838 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183851838 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183851838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 311341,
            "unit": "ns/op\t   57881 B/op\t     666 allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 311341,
            "unit": "ns/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57881,
            "unit": "B/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298865,
            "unit": "ns/op\t   57894 B/op\t     666 allocs/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298865,
            "unit": "ns/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57894,
            "unit": "B/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173632,
            "unit": "ns/op\t   58086 B/op\t     669 allocs/op",
            "extra": "6835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173632,
            "unit": "ns/op",
            "extra": "6835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58086,
            "unit": "B/op",
            "extra": "6835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174399,
            "unit": "ns/op\t   58116 B/op\t     669 allocs/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174399,
            "unit": "ns/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58116,
            "unit": "B/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360485,
            "unit": "ns/op\t   63586 B/op\t     726 allocs/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360485,
            "unit": "ns/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63586,
            "unit": "B/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 365452,
            "unit": "ns/op\t   63622 B/op\t     726 allocs/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 365452,
            "unit": "ns/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63622,
            "unit": "B/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362879,
            "unit": "ns/op\t   63589 B/op\t     726 allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362879,
            "unit": "ns/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63589,
            "unit": "B/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 353167,
            "unit": "ns/op\t   63069 B/op\t     727 allocs/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 353167,
            "unit": "ns/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63069,
            "unit": "B/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45855000 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.46,
            "unit": "ns/op",
            "extra": "45855000 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45855000 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45855000 times\n4 procs"
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
          "id": "2c8c0b1ee277608f8925c33ca648ac6b38088fb6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2b3a20284f2e9ffb573aca887023eb2329d2eac5",
          "timestamp": "2026-01-10T03:21:34Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2c8c0b1ee277608f8925c33ca648ac6b38088fb6"
        },
        "date": 1768095632300,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12809,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "93147 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12809,
            "unit": "ns/op",
            "extra": "93147 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "93147 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "93147 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36083,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "33646 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36083,
            "unit": "ns/op",
            "extra": "33646 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "33646 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "33646 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69299,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "18624 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69299,
            "unit": "ns/op",
            "extra": "18624 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "18624 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "18624 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 25766,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "46786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 25766,
            "unit": "ns/op",
            "extra": "46786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "46786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "46786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 262651,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 262651,
            "unit": "ns/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 261566,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 261566,
            "unit": "ns/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "4494 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 85535,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "13933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 85535,
            "unit": "ns/op",
            "extra": "13933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "13933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "13933 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45674,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "26191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45674,
            "unit": "ns/op",
            "extra": "26191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "26191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "26191 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201036,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201036,
            "unit": "ns/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7709,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "155544 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7709,
            "unit": "ns/op",
            "extra": "155544 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "155544 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "155544 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 141686,
            "unit": "ns/op\t   61101 B/op\t     721 allocs/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 141686,
            "unit": "ns/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61101,
            "unit": "B/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601120139A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601120139A094101Federal",
            "value": 231380104,
            "unit": "1210428822601120139A094101Federal",
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
            "value": 977,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1226659 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 977,
            "unit": "ns/op",
            "extra": "1226659 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1226659 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1226659 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 86.32,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13690885 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 86.32,
            "unit": "ns/op",
            "extra": "13690885 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13690885 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13690885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 54.69,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21520405 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 54.69,
            "unit": "ns/op",
            "extra": "21520405 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21520405 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21520405 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.07,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46388998 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.07,
            "unit": "ns/op",
            "extra": "46388998 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "46388998 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "46388998 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93504658 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.66,
            "unit": "ns/op",
            "extra": "93504658 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93504658 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93504658 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230533694 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.196,
            "unit": "ns/op",
            "extra": "230533694 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230533694 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230533694 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 274196,
            "unit": "ns/op\t   57881 B/op\t     666 allocs/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 274196,
            "unit": "ns/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57881,
            "unit": "B/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 271161,
            "unit": "ns/op\t   57891 B/op\t     666 allocs/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 271161,
            "unit": "ns/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57891,
            "unit": "B/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181530,
            "unit": "ns/op\t   58068 B/op\t     669 allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181530,
            "unit": "ns/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58068,
            "unit": "B/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 179262,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 179262,
            "unit": "ns/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 323851,
            "unit": "ns/op\t   63619 B/op\t     726 allocs/op",
            "extra": "3681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 323851,
            "unit": "ns/op",
            "extra": "3681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63619,
            "unit": "B/op",
            "extra": "3681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 316499,
            "unit": "ns/op\t   63625 B/op\t     726 allocs/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 316499,
            "unit": "ns/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63625,
            "unit": "B/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 318033,
            "unit": "ns/op\t   63595 B/op\t     726 allocs/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 318033,
            "unit": "ns/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63595,
            "unit": "B/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 316802,
            "unit": "ns/op\t   63446 B/op\t     727 allocs/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 316802,
            "unit": "ns/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63446,
            "unit": "B/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53266728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.54,
            "unit": "ns/op",
            "extra": "53266728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53266728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53266728 times\n4 procs"
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
          "id": "2ca0ffc00685fccca07d66e980920fe6a9da11f9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a88da2ef0e3ff054b30eef83439ff2dc7e59a602",
          "timestamp": "2026-01-11T03:47:22Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2ca0ffc00685fccca07d66e980920fe6a9da11f9"
        },
        "date": 1768181261773,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13783,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86268 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13783,
            "unit": "ns/op",
            "extra": "86268 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86268 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86268 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41877,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28377 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41877,
            "unit": "ns/op",
            "extra": "28377 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28377 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28377 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74343,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16153 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74343,
            "unit": "ns/op",
            "extra": "16153 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16153 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16153 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31096,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38587 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31096,
            "unit": "ns/op",
            "extra": "38587 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38587 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38587 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294629,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294629,
            "unit": "ns/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 304163,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 304163,
            "unit": "ns/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98176,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "12216 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98176,
            "unit": "ns/op",
            "extra": "12216 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "12216 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12216 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49463,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24190 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49463,
            "unit": "ns/op",
            "extra": "24190 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24190 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24190 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203785,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203785,
            "unit": "ns/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8241,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "139441 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8241,
            "unit": "ns/op",
            "extra": "139441 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "139441 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "139441 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153912,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153912,
            "unit": "ns/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822601130127A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822601130127A094101Federal",
            "value": 231380104,
            "unit": "1210428822601130127A094101Federal",
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
            "value": 982.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1253190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.5,
            "unit": "ns/op",
            "extra": "1253190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1253190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1253190 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.89,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12069590 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.89,
            "unit": "ns/op",
            "extra": "12069590 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12069590 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12069590 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.86,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18592378 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.86,
            "unit": "ns/op",
            "extra": "18592378 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18592378 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18592378 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.99,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40141084 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.99,
            "unit": "ns/op",
            "extra": "40141084 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40141084 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40141084 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87272384 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.71,
            "unit": "ns/op",
            "extra": "87272384 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87272384 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87272384 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.538,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183763112 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.538,
            "unit": "ns/op",
            "extra": "183763112 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183763112 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183763112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300708,
            "unit": "ns/op\t   57878 B/op\t     666 allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300708,
            "unit": "ns/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57878,
            "unit": "B/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295446,
            "unit": "ns/op\t   57884 B/op\t     666 allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295446,
            "unit": "ns/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57884,
            "unit": "B/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169234,
            "unit": "ns/op\t   58082 B/op\t     669 allocs/op",
            "extra": "6762 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169234,
            "unit": "ns/op",
            "extra": "6762 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58082,
            "unit": "B/op",
            "extra": "6762 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6762 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175318,
            "unit": "ns/op\t   58104 B/op\t     669 allocs/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175318,
            "unit": "ns/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58104,
            "unit": "B/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355648,
            "unit": "ns/op\t   63623 B/op\t     726 allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355648,
            "unit": "ns/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63623,
            "unit": "B/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355928,
            "unit": "ns/op\t   63607 B/op\t     726 allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355928,
            "unit": "ns/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348536,
            "unit": "ns/op\t   63573 B/op\t     726 allocs/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348536,
            "unit": "ns/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63573,
            "unit": "B/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347863,
            "unit": "ns/op\t   63521 B/op\t     727 allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347863,
            "unit": "ns/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63521,
            "unit": "B/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45750373 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.19,
            "unit": "ns/op",
            "extra": "45750373 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45750373 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45750373 times\n4 procs"
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