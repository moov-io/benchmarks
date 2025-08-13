window.BENCHMARK_DATA = {
  "lastUpdate": 1755048018204,
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
          "id": "54466a213e9757fe56af552ff6fd40dd0ff9f324",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f26118046f0fc40b73d2ba13079dd834cb6a1cd9",
          "timestamp": "2025-07-19T03:20:46Z",
          "url": "https://github.com/moov-io/benchmarks/commit/54466a213e9757fe56af552ff6fd40dd0ff9f324"
        },
        "date": 1752975580569,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11920,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100874 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11920,
            "unit": "ns/op",
            "extra": "100874 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100874 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100874 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38321,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38321,
            "unit": "ns/op",
            "extra": "31238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31238 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73072,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17002 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73072,
            "unit": "ns/op",
            "extra": "17002 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17002 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17002 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28858,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28858,
            "unit": "ns/op",
            "extra": "41382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41382 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290271,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290271,
            "unit": "ns/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289601,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289601,
            "unit": "ns/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93489,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93489,
            "unit": "ns/op",
            "extra": "12849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12849 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43488,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27573 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43488,
            "unit": "ns/op",
            "extra": "27573 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27573 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27573 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209493,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5755 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209493,
            "unit": "ns/op",
            "extra": "5755 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5755 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5755 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5814,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202340 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5814,
            "unit": "ns/op",
            "extra": "202340 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202340 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202340 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146888,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7844 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146888,
            "unit": "ns/op",
            "extra": "7844 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7844 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7844 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507210139A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507210139A094101Federal",
            "value": 231380104,
            "unit": "1210428822507210139A094101Federal",
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
            "value": 1030,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1030,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 104.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11519308 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.4,
            "unit": "ns/op",
            "extra": "11519308 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11519308 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11519308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.81,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19077356 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.81,
            "unit": "ns/op",
            "extra": "19077356 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19077356 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19077356 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39437859 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.26,
            "unit": "ns/op",
            "extra": "39437859 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39437859 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39437859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87500610 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.68,
            "unit": "ns/op",
            "extra": "87500610 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87500610 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87500610 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.538,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183201891 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.538,
            "unit": "ns/op",
            "extra": "183201891 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183201891 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183201891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295426,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295426,
            "unit": "ns/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298324,
            "unit": "ns/op\t   57068 B/op\t     638 allocs/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298324,
            "unit": "ns/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57068,
            "unit": "B/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176938,
            "unit": "ns/op\t   57258 B/op\t     641 allocs/op",
            "extra": "7056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176938,
            "unit": "ns/op",
            "extra": "7056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57258,
            "unit": "B/op",
            "extra": "7056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172213,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172213,
            "unit": "ns/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358815,
            "unit": "ns/op\t   62750 B/op\t     698 allocs/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358815,
            "unit": "ns/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357666,
            "unit": "ns/op\t   62798 B/op\t     698 allocs/op",
            "extra": "3309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357666,
            "unit": "ns/op",
            "extra": "3309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62798,
            "unit": "B/op",
            "extra": "3309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346973,
            "unit": "ns/op\t   62769 B/op\t     698 allocs/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346973,
            "unit": "ns/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62769,
            "unit": "B/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341681,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341681,
            "unit": "ns/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45865545 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45865545 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45865545 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45865545 times\n4 procs"
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
          "id": "7a2b22d13b84c3560fab0dd439084d1830407acb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for be3e436809339502e253b5af3272e49877e1e040",
          "timestamp": "2025-07-20T03:43:55Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7a2b22d13b84c3560fab0dd439084d1830407acb"
        },
        "date": 1753061294319,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12088,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "95576 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12088,
            "unit": "ns/op",
            "extra": "95576 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "95576 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "95576 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39532,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "30079 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39532,
            "unit": "ns/op",
            "extra": "30079 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "30079 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30079 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75247,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16460 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75247,
            "unit": "ns/op",
            "extra": "16460 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16460 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16460 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30550,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "37210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30550,
            "unit": "ns/op",
            "extra": "37210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "37210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "37210 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298881,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298881,
            "unit": "ns/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296914,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296914,
            "unit": "ns/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96112,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96112,
            "unit": "ns/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44950,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27420 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44950,
            "unit": "ns/op",
            "extra": "27420 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27420 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27420 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203456,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5524 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203456,
            "unit": "ns/op",
            "extra": "5524 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5524 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5524 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6104,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "197236 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6104,
            "unit": "ns/op",
            "extra": "197236 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "197236 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "197236 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152840,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152840,
            "unit": "ns/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507220127A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507220127A094101Federal",
            "value": 231380104,
            "unit": "1210428822507220127A094101Federal",
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
            "value": 1049,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1049,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 104.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11455495 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.3,
            "unit": "ns/op",
            "extra": "11455495 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11455495 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11455495 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.78,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19036812 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.78,
            "unit": "ns/op",
            "extra": "19036812 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19036812 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19036812 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39830361 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.2,
            "unit": "ns/op",
            "extra": "39830361 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39830361 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39830361 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87450680 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.11,
            "unit": "ns/op",
            "extra": "87450680 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87450680 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87450680 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.536,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183398504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.536,
            "unit": "ns/op",
            "extra": "183398504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183398504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183398504 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304240,
            "unit": "ns/op\t   57042 B/op\t     638 allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304240,
            "unit": "ns/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57042,
            "unit": "B/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302031,
            "unit": "ns/op\t   57069 B/op\t     638 allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302031,
            "unit": "ns/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57069,
            "unit": "B/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179151,
            "unit": "ns/op\t   57244 B/op\t     641 allocs/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179151,
            "unit": "ns/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57244,
            "unit": "B/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 179624,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "6214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 179624,
            "unit": "ns/op",
            "extra": "6214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "6214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 377114,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 377114,
            "unit": "ns/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 370796,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 370796,
            "unit": "ns/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359852,
            "unit": "ns/op\t   62786 B/op\t     698 allocs/op",
            "extra": "3351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359852,
            "unit": "ns/op",
            "extra": "3351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62786,
            "unit": "B/op",
            "extra": "3351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352344,
            "unit": "ns/op\t   62804 B/op\t     698 allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352344,
            "unit": "ns/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62804,
            "unit": "B/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45841761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "45841761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45841761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45841761 times\n4 procs"
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
          "id": "98259972a53c1e60afd1f3722013125ec4986434",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 775840b69aa5e96ee7b3286b6e6c0c54e1e6ed40",
          "timestamp": "2025-07-21T03:42:10Z",
          "url": "https://github.com/moov-io/benchmarks/commit/98259972a53c1e60afd1f3722013125ec4986434"
        },
        "date": 1753147436375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11867,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99592 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11867,
            "unit": "ns/op",
            "extra": "99592 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99592 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38378,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38378,
            "unit": "ns/op",
            "extra": "31196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31196 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74159,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16924 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74159,
            "unit": "ns/op",
            "extra": "16924 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16924 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16924 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29111,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "39528 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29111,
            "unit": "ns/op",
            "extra": "39528 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "39528 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "39528 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289113,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289113,
            "unit": "ns/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 305307,
            "unit": "ns/op\t   57012 B/op\t     744 allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 305307,
            "unit": "ns/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93292,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93292,
            "unit": "ns/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43129,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43129,
            "unit": "ns/op",
            "extra": "27699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27699 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210260,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5791 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210260,
            "unit": "ns/op",
            "extra": "5791 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5791 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5791 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5797,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202539 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5797,
            "unit": "ns/op",
            "extra": "202539 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202539 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202539 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145295,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "8006 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145295,
            "unit": "ns/op",
            "extra": "8006 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "8006 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "8006 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507230123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507230123A094101Federal",
            "value": 231380104,
            "unit": "1210428822507230123A094101Federal",
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
            "value": 1051,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1051,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11462866 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.8,
            "unit": "ns/op",
            "extra": "11462866 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11462866 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11462866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.3,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19169538 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.3,
            "unit": "ns/op",
            "extra": "19169538 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19169538 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19169538 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40343150 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.13,
            "unit": "ns/op",
            "extra": "40343150 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40343150 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40343150 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89612773 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.66,
            "unit": "ns/op",
            "extra": "89612773 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89612773 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89612773 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.491,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183956472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.491,
            "unit": "ns/op",
            "extra": "183956472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183956472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183956472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294651,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294651,
            "unit": "ns/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298137,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298137,
            "unit": "ns/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 183635,
            "unit": "ns/op\t   57269 B/op\t     641 allocs/op",
            "extra": "7305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 183635,
            "unit": "ns/op",
            "extra": "7305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57269,
            "unit": "B/op",
            "extra": "7305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171653,
            "unit": "ns/op\t   57278 B/op\t     641 allocs/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171653,
            "unit": "ns/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57278,
            "unit": "B/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360696,
            "unit": "ns/op\t   62779 B/op\t     698 allocs/op",
            "extra": "3318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360696,
            "unit": "ns/op",
            "extra": "3318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62779,
            "unit": "B/op",
            "extra": "3318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360464,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360464,
            "unit": "ns/op",
            "extra": "3556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350820,
            "unit": "ns/op\t   62770 B/op\t     698 allocs/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350820,
            "unit": "ns/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62770,
            "unit": "B/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352416,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352416,
            "unit": "ns/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45899694 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.17,
            "unit": "ns/op",
            "extra": "45899694 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45899694 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45899694 times\n4 procs"
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
          "id": "554474a054e361f7c5dda8b4d0cc04268d018eb9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 02d1b06940e365f48e41224e3026d49c264d4edb",
          "timestamp": "2025-07-22T03:27:05Z",
          "url": "https://github.com/moov-io/benchmarks/commit/554474a054e361f7c5dda8b4d0cc04268d018eb9"
        },
        "date": 1753233900736,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12012,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99295 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12012,
            "unit": "ns/op",
            "extra": "99295 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99295 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99295 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38778,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "30805 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38778,
            "unit": "ns/op",
            "extra": "30805 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "30805 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30805 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71535,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16520 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71535,
            "unit": "ns/op",
            "extra": "16520 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16520 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29315,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40640 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29315,
            "unit": "ns/op",
            "extra": "40640 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40640 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40640 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291524,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291524,
            "unit": "ns/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 308553,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 308553,
            "unit": "ns/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94155,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94155,
            "unit": "ns/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44396,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27098 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44396,
            "unit": "ns/op",
            "extra": "27098 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27098 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27098 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206440,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6056 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206440,
            "unit": "ns/op",
            "extra": "6056 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6056 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6056 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5872,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "201778 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5872,
            "unit": "ns/op",
            "extra": "201778 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "201778 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "201778 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147456,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7681 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147456,
            "unit": "ns/op",
            "extra": "7681 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7681 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7681 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507240124A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507240124A094101Federal",
            "value": 231380104,
            "unit": "1210428822507240124A094101Federal",
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
            "value": 1036,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1036,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 105.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11479939 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 105.9,
            "unit": "ns/op",
            "extra": "11479939 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11479939 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11479939 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.23,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19151707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.23,
            "unit": "ns/op",
            "extra": "19151707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19151707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19151707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.21,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39590104 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.21,
            "unit": "ns/op",
            "extra": "39590104 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39590104 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39590104 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89342503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.99,
            "unit": "ns/op",
            "extra": "89342503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89342503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89342503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.379,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "191390472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.379,
            "unit": "ns/op",
            "extra": "191390472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191390472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191390472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303601,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303601,
            "unit": "ns/op",
            "extra": "4246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309237,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309237,
            "unit": "ns/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171264,
            "unit": "ns/op\t   57254 B/op\t     641 allocs/op",
            "extra": "7065 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171264,
            "unit": "ns/op",
            "extra": "7065 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57254,
            "unit": "B/op",
            "extra": "7065 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7065 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176288,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176288,
            "unit": "ns/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370639,
            "unit": "ns/op\t   62746 B/op\t     698 allocs/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370639,
            "unit": "ns/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62746,
            "unit": "B/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 364327,
            "unit": "ns/op\t   62794 B/op\t     698 allocs/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364327,
            "unit": "ns/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62794,
            "unit": "B/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355886,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355886,
            "unit": "ns/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62752,
            "unit": "B/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 357561,
            "unit": "ns/op\t   62722 B/op\t     698 allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 357561,
            "unit": "ns/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62722,
            "unit": "B/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45741285 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45741285 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45741285 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45741285 times\n4 procs"
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
          "id": "a5b8708391e8ab280d5eadea9e873f828bc55905",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c202c33d9b62484728eff606aad2783e42c2e6f3",
          "timestamp": "2025-07-23T03:28:37Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a5b8708391e8ab280d5eadea9e873f828bc55905"
        },
        "date": 1753320264856,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11932,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98959 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11932,
            "unit": "ns/op",
            "extra": "98959 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98959 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98959 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38117,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31490 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38117,
            "unit": "ns/op",
            "extra": "31490 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31490 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31490 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70446,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70446,
            "unit": "ns/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30079,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41904 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30079,
            "unit": "ns/op",
            "extra": "41904 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41904 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289914,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289914,
            "unit": "ns/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292426,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292426,
            "unit": "ns/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93365,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93365,
            "unit": "ns/op",
            "extra": "12902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12902 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43279,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27644 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43279,
            "unit": "ns/op",
            "extra": "27644 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27644 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27644 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198060,
            "unit": "ns/op\t   53856 B/op\t    2040 allocs/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198060,
            "unit": "ns/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53856,
            "unit": "B/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6034,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "187711 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6034,
            "unit": "ns/op",
            "extra": "187711 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "187711 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "187711 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146280,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7714 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146280,
            "unit": "ns/op",
            "extra": "7714 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7714 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507250123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507250123A094101Federal",
            "value": 231380104,
            "unit": "1210428822507250123A094101Federal",
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
            "value": 1030,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1030,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11492682 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.9,
            "unit": "ns/op",
            "extra": "11492682 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11492682 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11492682 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.49,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19013850 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.49,
            "unit": "ns/op",
            "extra": "19013850 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19013850 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19013850 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.72,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39710136 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.72,
            "unit": "ns/op",
            "extra": "39710136 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39710136 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39710136 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89192254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.78,
            "unit": "ns/op",
            "extra": "89192254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89192254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89192254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183396661 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.54,
            "unit": "ns/op",
            "extra": "183396661 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183396661 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183396661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295293,
            "unit": "ns/op\t   57056 B/op\t     638 allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295293,
            "unit": "ns/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57056,
            "unit": "B/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297573,
            "unit": "ns/op\t   57071 B/op\t     638 allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297573,
            "unit": "ns/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57071,
            "unit": "B/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176448,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176448,
            "unit": "ns/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168478,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168478,
            "unit": "ns/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368589,
            "unit": "ns/op\t   62770 B/op\t     698 allocs/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368589,
            "unit": "ns/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62770,
            "unit": "B/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362699,
            "unit": "ns/op\t   62766 B/op\t     698 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362699,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62766,
            "unit": "B/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359528,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359528,
            "unit": "ns/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343836,
            "unit": "ns/op\t   62800 B/op\t     698 allocs/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343836,
            "unit": "ns/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62800,
            "unit": "B/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45961503 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.19,
            "unit": "ns/op",
            "extra": "45961503 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45961503 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45961503 times\n4 procs"
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
          "id": "ca9fd082170adba43e7614f5feba67947ebdf381",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 06bbb70d4d38460a093cbc292cd7736c84c3cc37",
          "timestamp": "2025-07-24T03:26:50Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ca9fd082170adba43e7614f5feba67947ebdf381"
        },
        "date": 1753406642233,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11916,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99261 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11916,
            "unit": "ns/op",
            "extra": "99261 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99261 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99261 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38505,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31125 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38505,
            "unit": "ns/op",
            "extra": "31125 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31125 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31125 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70842,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16890 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70842,
            "unit": "ns/op",
            "extra": "16890 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16890 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16890 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28965,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28965,
            "unit": "ns/op",
            "extra": "41140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41140 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289806,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289806,
            "unit": "ns/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303705,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303705,
            "unit": "ns/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93974,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93974,
            "unit": "ns/op",
            "extra": "12824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43120,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43120,
            "unit": "ns/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201273,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201273,
            "unit": "ns/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5844,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202844 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5844,
            "unit": "ns/op",
            "extra": "202844 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202844 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202844 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146717,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7450 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146717,
            "unit": "ns/op",
            "extra": "7450 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7450 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7450 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507260123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507260123A094101Federal",
            "value": 231380104,
            "unit": "1210428822507260123A094101Federal",
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
            "value": 1037,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1037,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 103.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10585950 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.6,
            "unit": "ns/op",
            "extra": "10585950 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10585950 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10585950 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.69,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19095451 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.69,
            "unit": "ns/op",
            "extra": "19095451 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19095451 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19095451 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.29,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40326066 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.29,
            "unit": "ns/op",
            "extra": "40326066 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40326066 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40326066 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89670013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.63,
            "unit": "ns/op",
            "extra": "89670013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89670013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89670013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.435,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183604833 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.435,
            "unit": "ns/op",
            "extra": "183604833 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183604833 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183604833 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295063,
            "unit": "ns/op\t   57038 B/op\t     638 allocs/op",
            "extra": "4316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295063,
            "unit": "ns/op",
            "extra": "4316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57038,
            "unit": "B/op",
            "extra": "4316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293986,
            "unit": "ns/op\t   57063 B/op\t     638 allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293986,
            "unit": "ns/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57063,
            "unit": "B/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176555,
            "unit": "ns/op\t   57262 B/op\t     641 allocs/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176555,
            "unit": "ns/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57262,
            "unit": "B/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173410,
            "unit": "ns/op\t   57293 B/op\t     641 allocs/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173410,
            "unit": "ns/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57293,
            "unit": "B/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357748,
            "unit": "ns/op\t   62740 B/op\t     698 allocs/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357748,
            "unit": "ns/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62740,
            "unit": "B/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352945,
            "unit": "ns/op\t   62753 B/op\t     698 allocs/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352945,
            "unit": "ns/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62753,
            "unit": "B/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354866,
            "unit": "ns/op\t   62730 B/op\t     698 allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354866,
            "unit": "ns/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62730,
            "unit": "B/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341021,
            "unit": "ns/op\t   62719 B/op\t     698 allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341021,
            "unit": "ns/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62719,
            "unit": "B/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45891152 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "45891152 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45891152 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45891152 times\n4 procs"
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
          "id": "0d2d1b0e33bf7f4590cb2e410d6f1db6888828c7",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b17e2123bc4acdbbdef2cb858303b762ab2818f5",
          "timestamp": "2025-07-25T03:27:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0d2d1b0e33bf7f4590cb2e410d6f1db6888828c7"
        },
        "date": 1753492932912,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11921,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99525 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11921,
            "unit": "ns/op",
            "extra": "99525 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99525 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99525 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38460,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38460,
            "unit": "ns/op",
            "extra": "31244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31244 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74663,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16918 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74663,
            "unit": "ns/op",
            "extra": "16918 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16918 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16918 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28869,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "38580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28869,
            "unit": "ns/op",
            "extra": "38580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "38580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "38580 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289265,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289265,
            "unit": "ns/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289585,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289585,
            "unit": "ns/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93678,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12838 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93678,
            "unit": "ns/op",
            "extra": "12838 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12838 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12838 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43083,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27788 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43083,
            "unit": "ns/op",
            "extra": "27788 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27788 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27788 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207694,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5852 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207694,
            "unit": "ns/op",
            "extra": "5852 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5852 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5839,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "199714 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5839,
            "unit": "ns/op",
            "extra": "199714 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "199714 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "199714 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145498,
            "unit": "ns/op\t   57778 B/op\t     611 allocs/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145498,
            "unit": "ns/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57778,
            "unit": "B/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7764 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507270121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507270121A094101Federal",
            "value": 231380104,
            "unit": "1210428822507270121A094101Federal",
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
            "value": 1033,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1033,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 103.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11528988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.4,
            "unit": "ns/op",
            "extra": "11528988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11528988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11528988 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.27,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19011906 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.27,
            "unit": "ns/op",
            "extra": "19011906 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19011906 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19011906 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.16,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40377933 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.16,
            "unit": "ns/op",
            "extra": "40377933 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40377933 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40377933 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89652187 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.74,
            "unit": "ns/op",
            "extra": "89652187 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89652187 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89652187 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.545,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184520940 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.545,
            "unit": "ns/op",
            "extra": "184520940 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "184520940 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "184520940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305881,
            "unit": "ns/op\t   57042 B/op\t     638 allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305881,
            "unit": "ns/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57042,
            "unit": "B/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304560,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304560,
            "unit": "ns/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 191711,
            "unit": "ns/op\t   57244 B/op\t     641 allocs/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 191711,
            "unit": "ns/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57244,
            "unit": "B/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178859,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178859,
            "unit": "ns/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371756,
            "unit": "ns/op\t   62816 B/op\t     698 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371756,
            "unit": "ns/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62816,
            "unit": "B/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356651,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356651,
            "unit": "ns/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 358752,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358752,
            "unit": "ns/op",
            "extra": "3642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "3642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347125,
            "unit": "ns/op\t   62228 B/op\t     698 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347125,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62228,
            "unit": "B/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45754446 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.19,
            "unit": "ns/op",
            "extra": "45754446 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45754446 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45754446 times\n4 procs"
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
          "id": "2256cb6aa54a15aa08604b7265b47021a8b09685",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5e34ff199fd031d1280642b3c02586431f7c231e",
          "timestamp": "2025-07-26T03:23:51Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2256cb6aa54a15aa08604b7265b47021a8b09685"
        },
        "date": 1753580415395,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12578,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99182 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12578,
            "unit": "ns/op",
            "extra": "99182 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99182 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99182 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38253,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "31084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38253,
            "unit": "ns/op",
            "extra": "31084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "31084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31084 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70936,
            "unit": "ns/op\t   25516 B/op\t     137 allocs/op",
            "extra": "16917 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70936,
            "unit": "ns/op",
            "extra": "16917 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25516,
            "unit": "B/op",
            "extra": "16917 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16917 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28862,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41554 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28862,
            "unit": "ns/op",
            "extra": "41554 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41554 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41554 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290232,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290232,
            "unit": "ns/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289932,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289932,
            "unit": "ns/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100949,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12759 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100949,
            "unit": "ns/op",
            "extra": "12759 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12759 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12759 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43340,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43340,
            "unit": "ns/op",
            "extra": "27542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27542 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202289,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5779 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202289,
            "unit": "ns/op",
            "extra": "5779 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5779 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5779 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5809,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "199940 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5809,
            "unit": "ns/op",
            "extra": "199940 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "199940 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "199940 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146296,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7575 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146296,
            "unit": "ns/op",
            "extra": "7575 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7575 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7575 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507280139A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507280139A094101Federal",
            "value": 231380104,
            "unit": "1210428822507280139A094101Federal",
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
            "value": 1039,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1039,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 106.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11376511 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.7,
            "unit": "ns/op",
            "extra": "11376511 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11376511 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11376511 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.57,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19155454 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.57,
            "unit": "ns/op",
            "extra": "19155454 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19155454 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19155454 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.15,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39438861 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.15,
            "unit": "ns/op",
            "extra": "39438861 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39438861 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39438861 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89597264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.72,
            "unit": "ns/op",
            "extra": "89597264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89597264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89597264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.533,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183976431 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.533,
            "unit": "ns/op",
            "extra": "183976431 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183976431 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183976431 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 309916,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 309916,
            "unit": "ns/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298042,
            "unit": "ns/op\t   57053 B/op\t     638 allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298042,
            "unit": "ns/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177331,
            "unit": "ns/op\t   57239 B/op\t     641 allocs/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177331,
            "unit": "ns/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57239,
            "unit": "B/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174393,
            "unit": "ns/op\t   57273 B/op\t     641 allocs/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174393,
            "unit": "ns/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57273,
            "unit": "B/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365757,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365757,
            "unit": "ns/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62752,
            "unit": "B/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360061,
            "unit": "ns/op\t   62757 B/op\t     698 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360061,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356931,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356931,
            "unit": "ns/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345661,
            "unit": "ns/op\t   62813 B/op\t     698 allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345661,
            "unit": "ns/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62813,
            "unit": "B/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45832272 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.12,
            "unit": "ns/op",
            "extra": "45832272 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45832272 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45832272 times\n4 procs"
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
          "id": "8ffc32e9fa7824bb250386a45df00229f8b826aa",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 86da0f64c88e9629fe36bc8d56af94632cd77bff",
          "timestamp": "2025-07-27T03:45:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8ffc32e9fa7824bb250386a45df00229f8b826aa"
        },
        "date": 1753666162848,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12015,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98931 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12015,
            "unit": "ns/op",
            "extra": "98931 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98931 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98931 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38385,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "31168 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38385,
            "unit": "ns/op",
            "extra": "31168 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "31168 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31168 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71349,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16746 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71349,
            "unit": "ns/op",
            "extra": "16746 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16746 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16746 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29096,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41157 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29096,
            "unit": "ns/op",
            "extra": "41157 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41157 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41157 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291974,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291974,
            "unit": "ns/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292486,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292486,
            "unit": "ns/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97214,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12558 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97214,
            "unit": "ns/op",
            "extra": "12558 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12558 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12558 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43349,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27537 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43349,
            "unit": "ns/op",
            "extra": "27537 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27537 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27537 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201155,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201155,
            "unit": "ns/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5858,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "197198 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5858,
            "unit": "ns/op",
            "extra": "197198 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "197198 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "197198 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147861,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7698 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147861,
            "unit": "ns/op",
            "extra": "7698 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7698 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7698 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507290128A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507290128A094101Federal",
            "value": 231380104,
            "unit": "1210428822507290128A094101Federal",
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
            "value": 1036,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1036,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 104.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11423713 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.4,
            "unit": "ns/op",
            "extra": "11423713 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11423713 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11423713 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.93,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18967308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.93,
            "unit": "ns/op",
            "extra": "18967308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18967308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18967308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.44,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39277382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.44,
            "unit": "ns/op",
            "extra": "39277382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39277382 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39277382 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87693322 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.83,
            "unit": "ns/op",
            "extra": "87693322 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87693322 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87693322 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.533,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184179572 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.533,
            "unit": "ns/op",
            "extra": "184179572 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "184179572 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "184179572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307759,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307759,
            "unit": "ns/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306897,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306897,
            "unit": "ns/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176307,
            "unit": "ns/op\t   57262 B/op\t     641 allocs/op",
            "extra": "6708 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176307,
            "unit": "ns/op",
            "extra": "6708 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57262,
            "unit": "B/op",
            "extra": "6708 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6708 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175697,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175697,
            "unit": "ns/op",
            "extra": "6548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 374541,
            "unit": "ns/op\t   62743 B/op\t     698 allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 374541,
            "unit": "ns/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62743,
            "unit": "B/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 367331,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 367331,
            "unit": "ns/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 358913,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358913,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350353,
            "unit": "ns/op\t   62806 B/op\t     698 allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350353,
            "unit": "ns/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62806,
            "unit": "B/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45894438 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.51,
            "unit": "ns/op",
            "extra": "45894438 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45894438 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45894438 times\n4 procs"
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
          "id": "29876033f887f2c9667738c883cf90c1d1e8735b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c344dd96a6946ae555de78d5dfb10e654ad1fb27",
          "timestamp": "2025-07-28T03:43:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/29876033f887f2c9667738c883cf90c1d1e8735b"
        },
        "date": 1753753437394,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12032,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99022 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12032,
            "unit": "ns/op",
            "extra": "99022 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99022 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38834,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "30703 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38834,
            "unit": "ns/op",
            "extra": "30703 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "30703 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30703 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72046,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16755 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72046,
            "unit": "ns/op",
            "extra": "16755 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16755 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16755 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29350,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41120 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29350,
            "unit": "ns/op",
            "extra": "41120 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41120 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41120 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291605,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291605,
            "unit": "ns/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293711,
            "unit": "ns/op\t   57012 B/op\t     744 allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293711,
            "unit": "ns/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100174,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100174,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44056,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27301 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44056,
            "unit": "ns/op",
            "extra": "27301 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27301 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27301 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203561,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5916 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203561,
            "unit": "ns/op",
            "extra": "5916 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5916 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5916 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5894,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "201874 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5894,
            "unit": "ns/op",
            "extra": "201874 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "201874 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "201874 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148845,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148845,
            "unit": "ns/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7650 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507300143A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507300143A094101Federal",
            "value": 231380104,
            "unit": "1210428822507300143A094101Federal",
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
            "value": 1061,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1061,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 104.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11409114 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.8,
            "unit": "ns/op",
            "extra": "11409114 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11409114 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11409114 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.37,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18656743 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.37,
            "unit": "ns/op",
            "extra": "18656743 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18656743 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18656743 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.41,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39636027 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.41,
            "unit": "ns/op",
            "extra": "39636027 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39636027 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39636027 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89436745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.71,
            "unit": "ns/op",
            "extra": "89436745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89436745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89436745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.544,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184057820 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.544,
            "unit": "ns/op",
            "extra": "184057820 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "184057820 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "184057820 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300057,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300057,
            "unit": "ns/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4172 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295960,
            "unit": "ns/op\t   57072 B/op\t     638 allocs/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295960,
            "unit": "ns/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57072,
            "unit": "B/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169949,
            "unit": "ns/op\t   57241 B/op\t     641 allocs/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169949,
            "unit": "ns/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168684,
            "unit": "ns/op\t   57281 B/op\t     641 allocs/op",
            "extra": "6086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168684,
            "unit": "ns/op",
            "extra": "6086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57281,
            "unit": "B/op",
            "extra": "6086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358701,
            "unit": "ns/op\t   62807 B/op\t     698 allocs/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358701,
            "unit": "ns/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62807,
            "unit": "B/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358415,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358415,
            "unit": "ns/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353744,
            "unit": "ns/op\t   62733 B/op\t     698 allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353744,
            "unit": "ns/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62733,
            "unit": "B/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347747,
            "unit": "ns/op\t   62219 B/op\t     698 allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347747,
            "unit": "ns/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62219,
            "unit": "B/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45830557 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.19,
            "unit": "ns/op",
            "extra": "45830557 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45830557 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45830557 times\n4 procs"
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
          "id": "d4cfc24f6e545269033ca63c7b2c982ad1bb7e4b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ddaa69508e5c6dcbd55cc5aae59499660244dd9e",
          "timestamp": "2025-07-29T03:47:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d4cfc24f6e545269033ca63c7b2c982ad1bb7e4b"
        },
        "date": 1753838750414,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11853,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99290 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11853,
            "unit": "ns/op",
            "extra": "99290 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99290 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99290 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38108,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "28702 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38108,
            "unit": "ns/op",
            "extra": "28702 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "28702 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "28702 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75587,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17049 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75587,
            "unit": "ns/op",
            "extra": "17049 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17049 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28972,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41617 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28972,
            "unit": "ns/op",
            "extra": "41617 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41617 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41617 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288756,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288756,
            "unit": "ns/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289287,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289287,
            "unit": "ns/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93102,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12664 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93102,
            "unit": "ns/op",
            "extra": "12664 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12664 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43285,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43285,
            "unit": "ns/op",
            "extra": "27754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27754 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205548,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5974 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205548,
            "unit": "ns/op",
            "extra": "5974 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5974 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5974 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5800,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202156 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5800,
            "unit": "ns/op",
            "extra": "202156 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202156 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202156 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145922,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7512 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145922,
            "unit": "ns/op",
            "extra": "7512 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7512 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507310125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507310125A094101Federal",
            "value": 231380104,
            "unit": "1210428822507310125A094101Federal",
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
            "value": 1047,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1047,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11500522 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.9,
            "unit": "ns/op",
            "extra": "11500522 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11500522 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11500522 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.47,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19269072 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.47,
            "unit": "ns/op",
            "extra": "19269072 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19269072 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19269072 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.12,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39479438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.12,
            "unit": "ns/op",
            "extra": "39479438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39479438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39479438 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89379036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.97,
            "unit": "ns/op",
            "extra": "89379036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89379036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89379036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.413,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "185084911 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.413,
            "unit": "ns/op",
            "extra": "185084911 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "185084911 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "185084911 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300360,
            "unit": "ns/op\t   57058 B/op\t     638 allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300360,
            "unit": "ns/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57058,
            "unit": "B/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304457,
            "unit": "ns/op\t   57069 B/op\t     638 allocs/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304457,
            "unit": "ns/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57069,
            "unit": "B/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 190406,
            "unit": "ns/op\t   57263 B/op\t     641 allocs/op",
            "extra": "7126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 190406,
            "unit": "ns/op",
            "extra": "7126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57263,
            "unit": "B/op",
            "extra": "7126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167091,
            "unit": "ns/op\t   57291 B/op\t     641 allocs/op",
            "extra": "6714 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167091,
            "unit": "ns/op",
            "extra": "6714 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57291,
            "unit": "B/op",
            "extra": "6714 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6714 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360031,
            "unit": "ns/op\t   62749 B/op\t     698 allocs/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360031,
            "unit": "ns/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352169,
            "unit": "ns/op\t   62763 B/op\t     698 allocs/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352169,
            "unit": "ns/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62763,
            "unit": "B/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357114,
            "unit": "ns/op\t   62747 B/op\t     698 allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357114,
            "unit": "ns/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62747,
            "unit": "B/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345158,
            "unit": "ns/op\t   62672 B/op\t     698 allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345158,
            "unit": "ns/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62672,
            "unit": "B/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41048992 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "41048992 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41048992 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41048992 times\n4 procs"
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
          "id": "5b19e38736aa71c205d125384a1c5c012c1bef22",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fc6e384b8a22eacf4061626936b5a2c8074160bf",
          "timestamp": "2025-07-30T03:40:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5b19e38736aa71c205d125384a1c5c012c1bef22"
        },
        "date": 1753925128293,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12528,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "93747 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12528,
            "unit": "ns/op",
            "extra": "93747 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "93747 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "93747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39823,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "30127 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39823,
            "unit": "ns/op",
            "extra": "30127 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "30127 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30127 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73421,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16389 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73421,
            "unit": "ns/op",
            "extra": "16389 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16389 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30515,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "39753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30515,
            "unit": "ns/op",
            "extra": "39753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "39753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "39753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 306775,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 306775,
            "unit": "ns/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297330,
            "unit": "ns/op\t   57013 B/op\t     744 allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297330,
            "unit": "ns/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57013,
            "unit": "B/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96681,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12420 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96681,
            "unit": "ns/op",
            "extra": "12420 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12420 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12420 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45669,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26307 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45669,
            "unit": "ns/op",
            "extra": "26307 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26307 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26307 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203683,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203683,
            "unit": "ns/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6105,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "195738 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6105,
            "unit": "ns/op",
            "extra": "195738 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "195738 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "195738 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 161126,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7834 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 161126,
            "unit": "ns/op",
            "extra": "7834 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7834 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7834 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508010124A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508010124A094101Federal",
            "value": 231380104,
            "unit": "1210428822508010124A094101Federal",
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
            "value": 1045,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1045,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 104.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11397202 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.2,
            "unit": "ns/op",
            "extra": "11397202 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11397202 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11397202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.04,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19084310 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.04,
            "unit": "ns/op",
            "extra": "19084310 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19084310 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19084310 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.36,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39758470 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.36,
            "unit": "ns/op",
            "extra": "39758470 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39758470 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39758470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89701095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.88,
            "unit": "ns/op",
            "extra": "89701095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89701095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89701095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.393,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183731557 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.393,
            "unit": "ns/op",
            "extra": "183731557 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183731557 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183731557 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303075,
            "unit": "ns/op\t   57055 B/op\t     638 allocs/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303075,
            "unit": "ns/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304470,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304470,
            "unit": "ns/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179596,
            "unit": "ns/op\t   57243 B/op\t     641 allocs/op",
            "extra": "6372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179596,
            "unit": "ns/op",
            "extra": "6372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57243,
            "unit": "B/op",
            "extra": "6372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 197578,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 197578,
            "unit": "ns/op",
            "extra": "6226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365356,
            "unit": "ns/op\t   62785 B/op\t     698 allocs/op",
            "extra": "3247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365356,
            "unit": "ns/op",
            "extra": "3247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62785,
            "unit": "B/op",
            "extra": "3247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 369078,
            "unit": "ns/op\t   62790 B/op\t     698 allocs/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 369078,
            "unit": "ns/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62790,
            "unit": "B/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 358683,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358683,
            "unit": "ns/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 358418,
            "unit": "ns/op\t   62799 B/op\t     698 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 358418,
            "unit": "ns/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62799,
            "unit": "B/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45828066 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.19,
            "unit": "ns/op",
            "extra": "45828066 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45828066 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45828066 times\n4 procs"
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
          "id": "06c1c82f8027ed60398910b90872d707677c1f5e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6facb1e0c131ee3100e1ee92d41c575220201590",
          "timestamp": "2025-07-31T03:39:22Z",
          "url": "https://github.com/moov-io/benchmarks/commit/06c1c82f8027ed60398910b90872d707677c1f5e"
        },
        "date": 1754012628748,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12099,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99663 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12099,
            "unit": "ns/op",
            "extra": "99663 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99663 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99663 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38262,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "31356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38262,
            "unit": "ns/op",
            "extra": "31356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "31356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31356 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71075,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71075,
            "unit": "ns/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29250,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40279 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29250,
            "unit": "ns/op",
            "extra": "40279 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40279 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40279 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290469,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290469,
            "unit": "ns/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 291649,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291649,
            "unit": "ns/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100080,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100080,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43106,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43106,
            "unit": "ns/op",
            "extra": "27632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27632 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199644,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199644,
            "unit": "ns/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5843,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "204256 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5843,
            "unit": "ns/op",
            "extra": "204256 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "204256 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "204256 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146149,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146149,
            "unit": "ns/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508020143A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508020143A094101Federal",
            "value": 231380104,
            "unit": "1210428822508020143A094101Federal",
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
            "value": 1037,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1037,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 106.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11428929 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.3,
            "unit": "ns/op",
            "extra": "11428929 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11428929 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11428929 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.51,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19143042 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.51,
            "unit": "ns/op",
            "extra": "19143042 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19143042 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19143042 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.82,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39559459 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.82,
            "unit": "ns/op",
            "extra": "39559459 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39559459 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39559459 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89268112 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "89268112 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89268112 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89268112 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.535,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183583232 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.535,
            "unit": "ns/op",
            "extra": "183583232 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183583232 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183583232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301373,
            "unit": "ns/op\t   57046 B/op\t     638 allocs/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301373,
            "unit": "ns/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300393,
            "unit": "ns/op\t   57071 B/op\t     638 allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300393,
            "unit": "ns/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57071,
            "unit": "B/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171517,
            "unit": "ns/op\t   57241 B/op\t     641 allocs/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171517,
            "unit": "ns/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174835,
            "unit": "ns/op\t   57288 B/op\t     641 allocs/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174835,
            "unit": "ns/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57288,
            "unit": "B/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 366762,
            "unit": "ns/op\t   62753 B/op\t     698 allocs/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 366762,
            "unit": "ns/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62753,
            "unit": "B/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357113,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357113,
            "unit": "ns/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354543,
            "unit": "ns/op\t   62748 B/op\t     698 allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354543,
            "unit": "ns/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62748,
            "unit": "B/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351202,
            "unit": "ns/op\t   62807 B/op\t     698 allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351202,
            "unit": "ns/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62807,
            "unit": "B/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46050372 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.2,
            "unit": "ns/op",
            "extra": "46050372 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46050372 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46050372 times\n4 procs"
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
          "id": "64f3d05d5f47d6f34fff1ad8195cbee786ecbe33",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9865126711efd1f7137b0b5085ba07c9693234d0",
          "timestamp": "2025-08-01T03:53:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/64f3d05d5f47d6f34fff1ad8195cbee786ecbe33"
        },
        "date": 1754097721151,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12024,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98485 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12024,
            "unit": "ns/op",
            "extra": "98485 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98485 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98485 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38413,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "31281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38413,
            "unit": "ns/op",
            "extra": "31281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "31281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31281 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71002,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16951 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71002,
            "unit": "ns/op",
            "extra": "16951 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16951 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29767,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41263 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29767,
            "unit": "ns/op",
            "extra": "41263 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41263 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41263 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290111,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290111,
            "unit": "ns/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294828,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294828,
            "unit": "ns/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94090,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94090,
            "unit": "ns/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43289,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27614 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43289,
            "unit": "ns/op",
            "extra": "27614 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27614 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27614 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201772,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6232 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201772,
            "unit": "ns/op",
            "extra": "6232 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6232 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6232 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6112,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202506 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6112,
            "unit": "ns/op",
            "extra": "202506 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202506 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202506 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145525,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145525,
            "unit": "ns/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508030121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508030121A094101Federal",
            "value": 231380104,
            "unit": "1210428822508030121A094101Federal",
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
            "value": 1033,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1033,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 103,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11511775 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103,
            "unit": "ns/op",
            "extra": "11511775 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11511775 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11511775 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.67,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19097944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.67,
            "unit": "ns/op",
            "extra": "19097944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19097944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19097944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.17,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39834723 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.17,
            "unit": "ns/op",
            "extra": "39834723 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39834723 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39834723 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89752453 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.89,
            "unit": "ns/op",
            "extra": "89752453 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89752453 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89752453 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183650218 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.4,
            "unit": "ns/op",
            "extra": "183650218 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183650218 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183650218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306981,
            "unit": "ns/op\t   57051 B/op\t     638 allocs/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306981,
            "unit": "ns/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295654,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295654,
            "unit": "ns/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177213,
            "unit": "ns/op\t   57245 B/op\t     641 allocs/op",
            "extra": "6564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177213,
            "unit": "ns/op",
            "extra": "6564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57245,
            "unit": "B/op",
            "extra": "6564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178367,
            "unit": "ns/op\t   57278 B/op\t     641 allocs/op",
            "extra": "6403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178367,
            "unit": "ns/op",
            "extra": "6403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57278,
            "unit": "B/op",
            "extra": "6403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360825,
            "unit": "ns/op\t   62749 B/op\t     698 allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360825,
            "unit": "ns/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352119,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352119,
            "unit": "ns/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 347975,
            "unit": "ns/op\t   62769 B/op\t     698 allocs/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 347975,
            "unit": "ns/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62769,
            "unit": "B/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346368,
            "unit": "ns/op\t   62720 B/op\t     698 allocs/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346368,
            "unit": "ns/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62720,
            "unit": "B/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45766161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.29,
            "unit": "ns/op",
            "extra": "45766161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45766161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45766161 times\n4 procs"
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
          "id": "2099083f31ee42e3288dcdb2bc3d406a7a4d37d1",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 76bf0087f6eb5aef23d9a52cceaca0849cd29db5",
          "timestamp": "2025-08-02T03:23:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2099083f31ee42e3288dcdb2bc3d406a7a4d37d1"
        },
        "date": 1754185305453,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11754,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101526 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11754,
            "unit": "ns/op",
            "extra": "101526 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101526 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101526 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38031,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38031,
            "unit": "ns/op",
            "extra": "31519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31519 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69971,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17136 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69971,
            "unit": "ns/op",
            "extra": "17136 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17136 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17136 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29923,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41403 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29923,
            "unit": "ns/op",
            "extra": "41403 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41403 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41403 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 286135,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 286135,
            "unit": "ns/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287811,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287811,
            "unit": "ns/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92263,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92263,
            "unit": "ns/op",
            "extra": "12952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12952 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42956,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "28116 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42956,
            "unit": "ns/op",
            "extra": "28116 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "28116 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28116 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199121,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5906 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199121,
            "unit": "ns/op",
            "extra": "5906 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5906 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5906 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5780,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "212821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5780,
            "unit": "ns/op",
            "extra": "212821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "212821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212821 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145347,
            "unit": "ns/op\t   57782 B/op\t     611 allocs/op",
            "extra": "7852 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145347,
            "unit": "ns/op",
            "extra": "7852 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57782,
            "unit": "B/op",
            "extra": "7852 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7852 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508040141A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508040141A094101Federal",
            "value": 231380104,
            "unit": "1210428822508040141A094101Federal",
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1007,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11677857 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.8,
            "unit": "ns/op",
            "extra": "11677857 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11677857 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11677857 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19046688 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.7,
            "unit": "ns/op",
            "extra": "19046688 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19046688 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19046688 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39888300 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.67,
            "unit": "ns/op",
            "extra": "39888300 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39888300 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39888300 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87653647 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.13,
            "unit": "ns/op",
            "extra": "87653647 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87653647 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87653647 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.202,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167986874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.202,
            "unit": "ns/op",
            "extra": "167986874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167986874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167986874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296576,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296576,
            "unit": "ns/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 290117,
            "unit": "ns/op\t   57064 B/op\t     638 allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 290117,
            "unit": "ns/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57064,
            "unit": "B/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168094,
            "unit": "ns/op\t   57245 B/op\t     641 allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168094,
            "unit": "ns/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57245,
            "unit": "B/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172989,
            "unit": "ns/op\t   57296 B/op\t     641 allocs/op",
            "extra": "7308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172989,
            "unit": "ns/op",
            "extra": "7308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57296,
            "unit": "B/op",
            "extra": "7308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357389,
            "unit": "ns/op\t   62789 B/op\t     698 allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357389,
            "unit": "ns/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62789,
            "unit": "B/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 346012,
            "unit": "ns/op\t   62769 B/op\t     698 allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 346012,
            "unit": "ns/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62769,
            "unit": "B/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349337,
            "unit": "ns/op\t   62786 B/op\t     698 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349337,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62786,
            "unit": "B/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338967,
            "unit": "ns/op\t   62683 B/op\t     698 allocs/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338967,
            "unit": "ns/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62683,
            "unit": "B/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43080531 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.77,
            "unit": "ns/op",
            "extra": "43080531 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43080531 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43080531 times\n4 procs"
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
          "id": "baea22e5e4b6c3ef61d477a6eb9846f7a57120c2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0cbee97c2735c45e8342ec6c3bf5228afd7943fc",
          "timestamp": "2025-08-03T03:48:31Z",
          "url": "https://github.com/moov-io/benchmarks/commit/baea22e5e4b6c3ef61d477a6eb9846f7a57120c2"
        },
        "date": 1754271711143,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11657,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99670 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11657,
            "unit": "ns/op",
            "extra": "99670 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99670 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99670 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37509,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31779 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37509,
            "unit": "ns/op",
            "extra": "31779 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31779 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31779 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73723,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17322 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73723,
            "unit": "ns/op",
            "extra": "17322 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17322 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28532,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "42123 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28532,
            "unit": "ns/op",
            "extra": "42123 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "42123 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "42123 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 285063,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 285063,
            "unit": "ns/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 286798,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 286798,
            "unit": "ns/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92066,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "13155 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92066,
            "unit": "ns/op",
            "extra": "13155 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "13155 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "13155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42551,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42551,
            "unit": "ns/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28218 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201836,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201836,
            "unit": "ns/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5524,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "216669 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5524,
            "unit": "ns/op",
            "extra": "216669 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "216669 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216669 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 143822,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 143822,
            "unit": "ns/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508050141A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508050141A094101Federal",
            "value": 231380104,
            "unit": "1210428822508050141A094101Federal",
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
            "value": 1016,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1016,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11724181 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.5,
            "unit": "ns/op",
            "extra": "11724181 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11724181 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11724181 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.74,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19097751 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.74,
            "unit": "ns/op",
            "extra": "19097751 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19097751 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19097751 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 31.47,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40462806 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 31.47,
            "unit": "ns/op",
            "extra": "40462806 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40462806 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40462806 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87387130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.26,
            "unit": "ns/op",
            "extra": "87387130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87387130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87387130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.862,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167757494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.862,
            "unit": "ns/op",
            "extra": "167757494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167757494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167757494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 289070,
            "unit": "ns/op\t   57049 B/op\t     638 allocs/op",
            "extra": "4381 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 289070,
            "unit": "ns/op",
            "extra": "4381 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "4381 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4381 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 294791,
            "unit": "ns/op\t   57071 B/op\t     638 allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 294791,
            "unit": "ns/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57071,
            "unit": "B/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 186825,
            "unit": "ns/op\t   57245 B/op\t     641 allocs/op",
            "extra": "6364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 186825,
            "unit": "ns/op",
            "extra": "6364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57245,
            "unit": "B/op",
            "extra": "6364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175425,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175425,
            "unit": "ns/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57292,
            "unit": "B/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 375105,
            "unit": "ns/op\t   62788 B/op\t     698 allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 375105,
            "unit": "ns/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62788,
            "unit": "B/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 345468,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 345468,
            "unit": "ns/op",
            "extra": "3486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "3486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 343981,
            "unit": "ns/op\t   62748 B/op\t     698 allocs/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 343981,
            "unit": "ns/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62748,
            "unit": "B/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3637 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344480,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344480,
            "unit": "ns/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43261124 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.72,
            "unit": "ns/op",
            "extra": "43261124 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43261124 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43261124 times\n4 procs"
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
          "id": "ed569c5738b40189f6bf336bf878d7ffe246e920",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7b12f0dfd6731201f7849448db335cc6d363321d",
          "timestamp": "2025-08-04T03:53:20Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ed569c5738b40189f6bf336bf878d7ffe246e920"
        },
        "date": 1754357262316,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11720,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102274 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11720,
            "unit": "ns/op",
            "extra": "102274 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102274 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37893,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "29497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37893,
            "unit": "ns/op",
            "extra": "29497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "29497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "29497 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73323,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17184 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73323,
            "unit": "ns/op",
            "extra": "17184 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17184 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17184 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28602,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28602,
            "unit": "ns/op",
            "extra": "41641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41641 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287287,
            "unit": "ns/op\t   57012 B/op\t     744 allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287287,
            "unit": "ns/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 285967,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 285967,
            "unit": "ns/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4041 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92251,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92251,
            "unit": "ns/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43033,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "28021 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43033,
            "unit": "ns/op",
            "extra": "28021 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "28021 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28021 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201422,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5997 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201422,
            "unit": "ns/op",
            "extra": "5997 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5997 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5997 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5526,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "216843 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5526,
            "unit": "ns/op",
            "extra": "216843 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "216843 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216843 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144125,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144125,
            "unit": "ns/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508060127A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508060127A094101Federal",
            "value": 231380104,
            "unit": "1210428822508060127A094101Federal",
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
            "value": 1009,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11694979 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.3,
            "unit": "ns/op",
            "extra": "11694979 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11694979 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11694979 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.31,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19272976 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.31,
            "unit": "ns/op",
            "extra": "19272976 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19272976 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19272976 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.5,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39868082 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.5,
            "unit": "ns/op",
            "extra": "39868082 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39868082 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39868082 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87605551 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.2,
            "unit": "ns/op",
            "extra": "87605551 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87605551 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87605551 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168058468 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.149,
            "unit": "ns/op",
            "extra": "168058468 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168058468 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168058468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 288447,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 288447,
            "unit": "ns/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295924,
            "unit": "ns/op\t   57066 B/op\t     638 allocs/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295924,
            "unit": "ns/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57066,
            "unit": "B/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 190471,
            "unit": "ns/op\t   57239 B/op\t     641 allocs/op",
            "extra": "6648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 190471,
            "unit": "ns/op",
            "extra": "6648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57239,
            "unit": "B/op",
            "extra": "6648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168845,
            "unit": "ns/op\t   57280 B/op\t     641 allocs/op",
            "extra": "6570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168845,
            "unit": "ns/op",
            "extra": "6570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57280,
            "unit": "B/op",
            "extra": "6570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361342,
            "unit": "ns/op\t   62797 B/op\t     698 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361342,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62797,
            "unit": "B/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 343986,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 343986,
            "unit": "ns/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 342188,
            "unit": "ns/op\t   62742 B/op\t     698 allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 342188,
            "unit": "ns/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62742,
            "unit": "B/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 334657,
            "unit": "ns/op\t   62635 B/op\t     698 allocs/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 334657,
            "unit": "ns/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62635,
            "unit": "B/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4342 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43396522 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.74,
            "unit": "ns/op",
            "extra": "43396522 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43396522 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43396522 times\n4 procs"
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
          "id": "63a907a52288ccf8ef92b5a2f9995a42f4a3be6f",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for add1ea21e59369284ae5b5c81e4e2652851ce086",
          "timestamp": "2025-08-05T03:44:42Z",
          "url": "https://github.com/moov-io/benchmarks/commit/63a907a52288ccf8ef92b5a2f9995a42f4a3be6f"
        },
        "date": 1754443549802,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11716,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100284 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11716,
            "unit": "ns/op",
            "extra": "100284 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100284 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100284 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38108,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31338 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38108,
            "unit": "ns/op",
            "extra": "31338 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31338 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31338 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69748,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16429 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69748,
            "unit": "ns/op",
            "extra": "16429 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16429 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16429 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28981,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28981,
            "unit": "ns/op",
            "extra": "41436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41436 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287140,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287140,
            "unit": "ns/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3975 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303542,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303542,
            "unit": "ns/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93633,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12949 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93633,
            "unit": "ns/op",
            "extra": "12949 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12949 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12949 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42720,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "28040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42720,
            "unit": "ns/op",
            "extra": "28040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "28040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28040 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 196426,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 196426,
            "unit": "ns/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5580,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "196142 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5580,
            "unit": "ns/op",
            "extra": "196142 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "196142 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "196142 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144835,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7824 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144835,
            "unit": "ns/op",
            "extra": "7824 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7824 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508070125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508070125A094101Federal",
            "value": 231380104,
            "unit": "1210428822508070125A094101Federal",
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
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
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11714025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.7,
            "unit": "ns/op",
            "extra": "11714025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11714025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11714025 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18945753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.7,
            "unit": "ns/op",
            "extra": "18945753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18945753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18945753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39522267 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.43,
            "unit": "ns/op",
            "extra": "39522267 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39522267 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39522267 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87490989 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.03,
            "unit": "ns/op",
            "extra": "87490989 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87490989 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87490989 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171734307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.182,
            "unit": "ns/op",
            "extra": "171734307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "171734307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "171734307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 287394,
            "unit": "ns/op\t   57049 B/op\t     638 allocs/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 287394,
            "unit": "ns/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 288716,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4131 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 288716,
            "unit": "ns/op",
            "extra": "4131 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4131 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4131 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170327,
            "unit": "ns/op\t   57252 B/op\t     641 allocs/op",
            "extra": "7194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170327,
            "unit": "ns/op",
            "extra": "7194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57252,
            "unit": "B/op",
            "extra": "7194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 164567,
            "unit": "ns/op\t   57280 B/op\t     641 allocs/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 164567,
            "unit": "ns/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57280,
            "unit": "B/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354879,
            "unit": "ns/op\t   62795 B/op\t     698 allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354879,
            "unit": "ns/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62795,
            "unit": "B/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 346946,
            "unit": "ns/op\t   62777 B/op\t     698 allocs/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 346946,
            "unit": "ns/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62777,
            "unit": "B/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348125,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348125,
            "unit": "ns/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338020,
            "unit": "ns/op\t   62671 B/op\t     698 allocs/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338020,
            "unit": "ns/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62671,
            "unit": "B/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43248931 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.81,
            "unit": "ns/op",
            "extra": "43248931 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43248931 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43248931 times\n4 procs"
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
          "id": "a6d9c3e77c25bf55c0ca9e4c2d78829917969838",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1c734d97f94e31ac05895a2998fc085857d85c14",
          "timestamp": "2025-08-06T03:42:03Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a6d9c3e77c25bf55c0ca9e4c2d78829917969838"
        },
        "date": 1754529995537,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11739,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101118 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11739,
            "unit": "ns/op",
            "extra": "101118 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101118 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101118 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38692,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38692,
            "unit": "ns/op",
            "extra": "31154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31154 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70940,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16977 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70940,
            "unit": "ns/op",
            "extra": "16977 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16977 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16977 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29318,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29318,
            "unit": "ns/op",
            "extra": "40732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40732 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289856,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289856,
            "unit": "ns/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3939 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287774,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287774,
            "unit": "ns/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94537,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12325 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94537,
            "unit": "ns/op",
            "extra": "12325 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12325 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12325 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42758,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42758,
            "unit": "ns/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195123,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195123,
            "unit": "ns/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5531,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "211321 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5531,
            "unit": "ns/op",
            "extra": "211321 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "211321 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211321 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145960,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7870 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145960,
            "unit": "ns/op",
            "extra": "7870 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7870 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7870 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508080125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508080125A094101Federal",
            "value": 231380104,
            "unit": "1210428822508080125A094101Federal",
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
            "value": 1013,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11641864 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.9,
            "unit": "ns/op",
            "extra": "11641864 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11641864 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11641864 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.81,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18951430 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.81,
            "unit": "ns/op",
            "extra": "18951430 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18951430 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18951430 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.31,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39888782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.31,
            "unit": "ns/op",
            "extra": "39888782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39888782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39888782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87745262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.06,
            "unit": "ns/op",
            "extra": "87745262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87745262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87745262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167686377 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.121,
            "unit": "ns/op",
            "extra": "167686377 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167686377 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167686377 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295962,
            "unit": "ns/op\t   57057 B/op\t     638 allocs/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295962,
            "unit": "ns/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296144,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296144,
            "unit": "ns/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170921,
            "unit": "ns/op\t   57234 B/op\t     641 allocs/op",
            "extra": "6560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170921,
            "unit": "ns/op",
            "extra": "6560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57234,
            "unit": "B/op",
            "extra": "6560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169612,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169612,
            "unit": "ns/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363733,
            "unit": "ns/op\t   62822 B/op\t     698 allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363733,
            "unit": "ns/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62822,
            "unit": "B/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355666,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355666,
            "unit": "ns/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355864,
            "unit": "ns/op\t   62742 B/op\t     698 allocs/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355864,
            "unit": "ns/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62742,
            "unit": "B/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 339459,
            "unit": "ns/op\t   62678 B/op\t     698 allocs/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 339459,
            "unit": "ns/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62678,
            "unit": "B/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4213 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43091769 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.73,
            "unit": "ns/op",
            "extra": "43091769 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43091769 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43091769 times\n4 procs"
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
          "id": "325ca92e7e5cfcef76221319efbe25776c751985",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c06c552f98e0bc87237f8eb536d4e2edfbea5c2a",
          "timestamp": "2025-08-07T03:41:57Z",
          "url": "https://github.com/moov-io/benchmarks/commit/325ca92e7e5cfcef76221319efbe25776c751985"
        },
        "date": 1754616371852,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11759,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99952 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11759,
            "unit": "ns/op",
            "extra": "99952 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99952 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99952 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39150,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39150,
            "unit": "ns/op",
            "extra": "30786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30786 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75076,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75076,
            "unit": "ns/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29319,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "39777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29319,
            "unit": "ns/op",
            "extra": "39777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "39777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "39777 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293215,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293215,
            "unit": "ns/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290507,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290507,
            "unit": "ns/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97100,
            "unit": "ns/op\t   27750 B/op\t     200 allocs/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97100,
            "unit": "ns/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27750,
            "unit": "B/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43722,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43722,
            "unit": "ns/op",
            "extra": "27436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27436 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203265,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5731 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203265,
            "unit": "ns/op",
            "extra": "5731 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5731 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5731 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5679,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "208585 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5679,
            "unit": "ns/op",
            "extra": "208585 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "208585 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "208585 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154502,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154502,
            "unit": "ns/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7567 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508090125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508090125A094101Federal",
            "value": 231380104,
            "unit": "1210428822508090125A094101Federal",
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
            "value": 1004,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1004,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 109.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11594008 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 109.6,
            "unit": "ns/op",
            "extra": "11594008 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11594008 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11594008 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.49,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18751429 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.49,
            "unit": "ns/op",
            "extra": "18751429 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18751429 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18751429 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.22,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38771232 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.22,
            "unit": "ns/op",
            "extra": "38771232 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38771232 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38771232 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86799841 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.09,
            "unit": "ns/op",
            "extra": "86799841 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86799841 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86799841 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168976046 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.168,
            "unit": "ns/op",
            "extra": "168976046 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168976046 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168976046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305286,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305286,
            "unit": "ns/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297091,
            "unit": "ns/op\t   57076 B/op\t     638 allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297091,
            "unit": "ns/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57076,
            "unit": "B/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177074,
            "unit": "ns/op\t   57248 B/op\t     641 allocs/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177074,
            "unit": "ns/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57248,
            "unit": "B/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178937,
            "unit": "ns/op\t   57284 B/op\t     641 allocs/op",
            "extra": "6051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178937,
            "unit": "ns/op",
            "extra": "6051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57284,
            "unit": "B/op",
            "extra": "6051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365072,
            "unit": "ns/op\t   62799 B/op\t     698 allocs/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365072,
            "unit": "ns/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62799,
            "unit": "B/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361456,
            "unit": "ns/op\t   62778 B/op\t     698 allocs/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361456,
            "unit": "ns/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62778,
            "unit": "B/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355991,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355991,
            "unit": "ns/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344654,
            "unit": "ns/op\t   62727 B/op\t     698 allocs/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344654,
            "unit": "ns/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62727,
            "unit": "B/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43223937 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.74,
            "unit": "ns/op",
            "extra": "43223937 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43223937 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43223937 times\n4 procs"
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
          "id": "6473c656e320ba1d6997bbd4b8b9791e2650900e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c8a4bef53cc45738f33e654e217bd5baa9453b67",
          "timestamp": "2025-08-08T03:41:30Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6473c656e320ba1d6997bbd4b8b9791e2650900e"
        },
        "date": 1754702378165,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11831,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100076 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11831,
            "unit": "ns/op",
            "extra": "100076 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100076 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100076 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38936,
            "unit": "ns/op\t   21621 B/op\t      62 allocs/op",
            "extra": "30721 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38936,
            "unit": "ns/op",
            "extra": "30721 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21621,
            "unit": "B/op",
            "extra": "30721 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30721 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73772,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16880 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73772,
            "unit": "ns/op",
            "extra": "16880 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16880 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16880 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29577,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "38734 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29577,
            "unit": "ns/op",
            "extra": "38734 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "38734 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "38734 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292523,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292523,
            "unit": "ns/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290228,
            "unit": "ns/op\t   57012 B/op\t     744 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290228,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95953,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95953,
            "unit": "ns/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43347,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43347,
            "unit": "ns/op",
            "extra": "27590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27590 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208569,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208569,
            "unit": "ns/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6036 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5706,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205615 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5706,
            "unit": "ns/op",
            "extra": "205615 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205615 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205615 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149564,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149564,
            "unit": "ns/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508100119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508100119A094101Federal",
            "value": 231380104,
            "unit": "1210428822508100119A094101Federal",
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
            "value": 1001,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1001,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 127.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "9324330 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 127.8,
            "unit": "ns/op",
            "extra": "9324330 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "9324330 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9324330 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.11,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19090246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.11,
            "unit": "ns/op",
            "extra": "19090246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19090246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19090246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 31.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38385118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 31.46,
            "unit": "ns/op",
            "extra": "38385118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38385118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38385118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85615075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.21,
            "unit": "ns/op",
            "extra": "85615075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85615075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85615075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "170844952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.134,
            "unit": "ns/op",
            "extra": "170844952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "170844952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "170844952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 309892,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 309892,
            "unit": "ns/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300438,
            "unit": "ns/op\t   57066 B/op\t     638 allocs/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300438,
            "unit": "ns/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57066,
            "unit": "B/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171248,
            "unit": "ns/op\t   57253 B/op\t     641 allocs/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171248,
            "unit": "ns/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57253,
            "unit": "B/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172284,
            "unit": "ns/op\t   57275 B/op\t     641 allocs/op",
            "extra": "6464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172284,
            "unit": "ns/op",
            "extra": "6464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57275,
            "unit": "B/op",
            "extra": "6464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361494,
            "unit": "ns/op\t   62743 B/op\t     698 allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361494,
            "unit": "ns/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62743,
            "unit": "B/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 365694,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 365694,
            "unit": "ns/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62752,
            "unit": "B/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350882,
            "unit": "ns/op\t   62776 B/op\t     698 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350882,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346820,
            "unit": "ns/op\t   62730 B/op\t     698 allocs/op",
            "extra": "4189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346820,
            "unit": "ns/op",
            "extra": "4189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62730,
            "unit": "B/op",
            "extra": "4189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4189 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43230074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.73,
            "unit": "ns/op",
            "extra": "43230074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43230074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43230074 times\n4 procs"
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
          "id": "c37066c71cc0e26ce44b160995f3b54f391b2222",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 83d7fb353a2b58faafecaf36fa3cea16773a5c50",
          "timestamp": "2025-08-09T03:18:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c37066c71cc0e26ce44b160995f3b54f391b2222"
        },
        "date": 1754789940228,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11528,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102266 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11528,
            "unit": "ns/op",
            "extra": "102266 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102266 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102266 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38053,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31269 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38053,
            "unit": "ns/op",
            "extra": "31269 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31269 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31269 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71822,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71822,
            "unit": "ns/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28977,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41620 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28977,
            "unit": "ns/op",
            "extra": "41620 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41620 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41620 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289099,
            "unit": "ns/op\t   57013 B/op\t     744 allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289099,
            "unit": "ns/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57013,
            "unit": "B/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 286541,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 286541,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93622,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93622,
            "unit": "ns/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42542,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "28062 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42542,
            "unit": "ns/op",
            "extra": "28062 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "28062 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28062 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199705,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5620 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199705,
            "unit": "ns/op",
            "extra": "5620 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5620 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5620 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5589,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "208233 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5589,
            "unit": "ns/op",
            "extra": "208233 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "208233 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "208233 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144283,
            "unit": "ns/op\t   57782 B/op\t     611 allocs/op",
            "extra": "7855 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144283,
            "unit": "ns/op",
            "extra": "7855 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57782,
            "unit": "B/op",
            "extra": "7855 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7855 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508110138A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508110138A094101Federal",
            "value": 231380104,
            "unit": "1210428822508110138A094101Federal",
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
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
            "value": 96,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11194126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.7,
            "unit": "ns/op",
            "extra": "11194126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11194126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11194126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.47,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17608922 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.47,
            "unit": "ns/op",
            "extra": "17608922 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17608922 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17608922 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.89,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39062126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.89,
            "unit": "ns/op",
            "extra": "39062126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39062126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39062126 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87355158 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.29,
            "unit": "ns/op",
            "extra": "87355158 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87355158 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87355158 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "169445510 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.147,
            "unit": "ns/op",
            "extra": "169445510 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "169445510 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "169445510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294011,
            "unit": "ns/op\t   57058 B/op\t     638 allocs/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294011,
            "unit": "ns/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57058,
            "unit": "B/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292385,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292385,
            "unit": "ns/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170336,
            "unit": "ns/op\t   57259 B/op\t     641 allocs/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170336,
            "unit": "ns/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57259,
            "unit": "B/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168066,
            "unit": "ns/op\t   57269 B/op\t     641 allocs/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168066,
            "unit": "ns/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57269,
            "unit": "B/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 352475,
            "unit": "ns/op\t   62791 B/op\t     698 allocs/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 352475,
            "unit": "ns/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62791,
            "unit": "B/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357710,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357710,
            "unit": "ns/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348416,
            "unit": "ns/op\t   62750 B/op\t     698 allocs/op",
            "extra": "3720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348416,
            "unit": "ns/op",
            "extra": "3720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3720 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338428,
            "unit": "ns/op\t   62216 B/op\t     698 allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338428,
            "unit": "ns/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62216,
            "unit": "B/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43245093 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.72,
            "unit": "ns/op",
            "extra": "43245093 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43245093 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43245093 times\n4 procs"
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
          "id": "be04dbea338de3a22213a4ec21014b35c15c0747",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for cd54216682112011e86cc3c3f796c2911f172d2a",
          "timestamp": "2025-08-10T03:41:32Z",
          "url": "https://github.com/moov-io/benchmarks/commit/be04dbea338de3a22213a4ec21014b35c15c0747"
        },
        "date": 1754875609936,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11532,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102486 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11532,
            "unit": "ns/op",
            "extra": "102486 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102486 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102486 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38230,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31990 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38230,
            "unit": "ns/op",
            "extra": "31990 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31990 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31990 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 68862,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 68862,
            "unit": "ns/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28361,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "42199 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28361,
            "unit": "ns/op",
            "extra": "42199 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "42199 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "42199 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300465,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300465,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295819,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295819,
            "unit": "ns/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 91649,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "13000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 91649,
            "unit": "ns/op",
            "extra": "13000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "13000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "13000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42733,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42733,
            "unit": "ns/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28274 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198947,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198947,
            "unit": "ns/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5494,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "212712 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5494,
            "unit": "ns/op",
            "extra": "212712 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "212712 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212712 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146276,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7497 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146276,
            "unit": "ns/op",
            "extra": "7497 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7497 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508120126A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508120126A094101Federal",
            "value": 231380104,
            "unit": "1210428822508120126A094101Federal",
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
            "value": 982,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1218458 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982,
            "unit": "ns/op",
            "extra": "1218458 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1218458 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1218458 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11701125 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.8,
            "unit": "ns/op",
            "extra": "11701125 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11701125 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11701125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19178269 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.2,
            "unit": "ns/op",
            "extra": "19178269 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19178269 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19178269 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39560742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.66,
            "unit": "ns/op",
            "extra": "39560742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39560742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39560742 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86846509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.35,
            "unit": "ns/op",
            "extra": "86846509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86846509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86846509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167699307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.112,
            "unit": "ns/op",
            "extra": "167699307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167699307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167699307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 288448,
            "unit": "ns/op\t   57037 B/op\t     638 allocs/op",
            "extra": "4357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 288448,
            "unit": "ns/op",
            "extra": "4357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57037,
            "unit": "B/op",
            "extra": "4357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291685,
            "unit": "ns/op\t   57053 B/op\t     638 allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291685,
            "unit": "ns/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 164910,
            "unit": "ns/op\t   57255 B/op\t     641 allocs/op",
            "extra": "6820 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 164910,
            "unit": "ns/op",
            "extra": "6820 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57255,
            "unit": "B/op",
            "extra": "6820 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6820 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184942,
            "unit": "ns/op\t   57291 B/op\t     641 allocs/op",
            "extra": "6753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184942,
            "unit": "ns/op",
            "extra": "6753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57291,
            "unit": "B/op",
            "extra": "6753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 344876,
            "unit": "ns/op\t   62812 B/op\t     698 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 344876,
            "unit": "ns/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62812,
            "unit": "B/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 343265,
            "unit": "ns/op\t   62812 B/op\t     698 allocs/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 343265,
            "unit": "ns/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62812,
            "unit": "B/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 340086,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 340086,
            "unit": "ns/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344500,
            "unit": "ns/op\t   62642 B/op\t     698 allocs/op",
            "extra": "4363 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344500,
            "unit": "ns/op",
            "extra": "4363 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62642,
            "unit": "B/op",
            "extra": "4363 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4363 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43286071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28,
            "unit": "ns/op",
            "extra": "43286071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43286071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43286071 times\n4 procs"
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
          "id": "93da54caea2a9e9353e0799e6007da2e7f9257bd",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7c888f2d88369dc50a72363cc1b63933d3c66445",
          "timestamp": "2025-08-11T03:41:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/93da54caea2a9e9353e0799e6007da2e7f9257bd"
        },
        "date": 1754961523109,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11521,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102597 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11521,
            "unit": "ns/op",
            "extra": "102597 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102597 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102597 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38192,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38192,
            "unit": "ns/op",
            "extra": "31010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70319,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16335 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70319,
            "unit": "ns/op",
            "extra": "16335 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16335 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16335 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30438,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41222 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30438,
            "unit": "ns/op",
            "extra": "41222 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41222 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41222 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287179,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287179,
            "unit": "ns/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296936,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296936,
            "unit": "ns/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92916,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92916,
            "unit": "ns/op",
            "extra": "12900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12900 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42654,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42654,
            "unit": "ns/op",
            "extra": "27898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27898 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199975,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5864 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199975,
            "unit": "ns/op",
            "extra": "5864 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5864 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5864 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5786,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "214456 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5786,
            "unit": "ns/op",
            "extra": "214456 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "214456 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214456 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145354,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7504 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145354,
            "unit": "ns/op",
            "extra": "7504 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7504 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7504 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508130118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508130118A094101Federal",
            "value": 231380104,
            "unit": "1210428822508130118A094101Federal",
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
            "value": 986.8,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1213768 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 986.8,
            "unit": "ns/op",
            "extra": "1213768 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1213768 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1213768 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11694468 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.7,
            "unit": "ns/op",
            "extra": "11694468 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11694468 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11694468 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.81,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19079036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.81,
            "unit": "ns/op",
            "extra": "19079036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19079036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19079036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39319558 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.76,
            "unit": "ns/op",
            "extra": "39319558 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39319558 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39319558 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87566587 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14,
            "unit": "ns/op",
            "extra": "87566587 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87566587 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87566587 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "174025242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.158,
            "unit": "ns/op",
            "extra": "174025242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "174025242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "174025242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292518,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292518,
            "unit": "ns/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298481,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298481,
            "unit": "ns/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 182933,
            "unit": "ns/op\t   57241 B/op\t     641 allocs/op",
            "extra": "6634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 182933,
            "unit": "ns/op",
            "extra": "6634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167712,
            "unit": "ns/op\t   57266 B/op\t     641 allocs/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167712,
            "unit": "ns/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57266,
            "unit": "B/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364512,
            "unit": "ns/op\t   62803 B/op\t     698 allocs/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364512,
            "unit": "ns/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62803,
            "unit": "B/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355629,
            "unit": "ns/op\t   62778 B/op\t     698 allocs/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355629,
            "unit": "ns/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62778,
            "unit": "B/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 341343,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 341343,
            "unit": "ns/op",
            "extra": "3507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62752,
            "unit": "B/op",
            "extra": "3507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337225,
            "unit": "ns/op\t   62673 B/op\t     698 allocs/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337225,
            "unit": "ns/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62673,
            "unit": "B/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43293918 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.71,
            "unit": "ns/op",
            "extra": "43293918 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43293918 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43293918 times\n4 procs"
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
          "id": "344310bc516148fd9e6c16ca050e03a67fe344ed",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 50175e3eeb4974c234d19fd09e367e3534375858",
          "timestamp": "2025-08-12T03:14:58Z",
          "url": "https://github.com/moov-io/benchmarks/commit/344310bc516148fd9e6c16ca050e03a67fe344ed"
        },
        "date": 1755048018187,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11544,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102355 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11544,
            "unit": "ns/op",
            "extra": "102355 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102355 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38042,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38042,
            "unit": "ns/op",
            "extra": "31262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31262 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74129,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74129,
            "unit": "ns/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30341,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41594 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30341,
            "unit": "ns/op",
            "extra": "41594 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41594 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41594 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 285654,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 285654,
            "unit": "ns/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287717,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287717,
            "unit": "ns/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94691,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12889 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94691,
            "unit": "ns/op",
            "extra": "12889 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12889 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12889 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44891,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27862 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44891,
            "unit": "ns/op",
            "extra": "27862 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27862 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27862 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198780,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5959 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198780,
            "unit": "ns/op",
            "extra": "5959 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5959 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5959 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5548,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213804 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5548,
            "unit": "ns/op",
            "extra": "213804 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213804 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213804 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146850,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7696 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146850,
            "unit": "ns/op",
            "extra": "7696 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7696 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508140119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508140119A094101Federal",
            "value": 231380104,
            "unit": "1210428822508140119A094101Federal",
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
            "value": 1008,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1206523 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1008,
            "unit": "ns/op",
            "extra": "1206523 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1206523 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1206523 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11722486 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.9,
            "unit": "ns/op",
            "extra": "11722486 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11722486 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11722486 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.94,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18997970 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.94,
            "unit": "ns/op",
            "extra": "18997970 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18997970 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18997970 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.06,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39196106 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.06,
            "unit": "ns/op",
            "extra": "39196106 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39196106 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39196106 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87605622 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.97,
            "unit": "ns/op",
            "extra": "87605622 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87605622 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87605622 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "169134266 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.179,
            "unit": "ns/op",
            "extra": "169134266 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "169134266 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "169134266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293251,
            "unit": "ns/op\t   57053 B/op\t     638 allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293251,
            "unit": "ns/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 289348,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 289348,
            "unit": "ns/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171710,
            "unit": "ns/op\t   57254 B/op\t     641 allocs/op",
            "extra": "7233 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171710,
            "unit": "ns/op",
            "extra": "7233 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57254,
            "unit": "B/op",
            "extra": "7233 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7233 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171592,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171592,
            "unit": "ns/op",
            "extra": "6619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6619 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 350738,
            "unit": "ns/op\t   62784 B/op\t     698 allocs/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 350738,
            "unit": "ns/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62784,
            "unit": "B/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 349831,
            "unit": "ns/op\t   62788 B/op\t     698 allocs/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 349831,
            "unit": "ns/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62788,
            "unit": "B/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354383,
            "unit": "ns/op\t   62750 B/op\t     698 allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354383,
            "unit": "ns/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342875,
            "unit": "ns/op\t   62681 B/op\t     698 allocs/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342875,
            "unit": "ns/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62681,
            "unit": "B/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43155134 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.82,
            "unit": "ns/op",
            "extra": "43155134 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43155134 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43155134 times\n4 procs"
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