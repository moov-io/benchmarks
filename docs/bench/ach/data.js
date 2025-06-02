window.BENCHMARK_DATA = {
  "lastUpdate": 1748827257359,
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
          "id": "8c5fc78344887a88abe268fbe8386f4313b13962",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b0770a953de4ffb68070e045d2bf84d3ec16fd0d",
          "timestamp": "2025-05-08T03:09:11Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8c5fc78344887a88abe268fbe8386f4313b13962"
        },
        "date": 1746753372436,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11619,
            "unit": "ns/op\t    9754 B/op\t      99 allocs/op",
            "extra": "101766 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11619,
            "unit": "ns/op",
            "extra": "101766 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9754,
            "unit": "B/op",
            "extra": "101766 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101766 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38123,
            "unit": "ns/op\t   21540 B/op\t      61 allocs/op",
            "extra": "31542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38123,
            "unit": "ns/op",
            "extra": "31542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21540,
            "unit": "B/op",
            "extra": "31542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31542 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70231,
            "unit": "ns/op\t   25437 B/op\t     136 allocs/op",
            "extra": "17292 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70231,
            "unit": "ns/op",
            "extra": "17292 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25437,
            "unit": "B/op",
            "extra": "17292 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17292 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28915,
            "unit": "ns/op\t   20947 B/op\t      54 allocs/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28915,
            "unit": "ns/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20947,
            "unit": "B/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41733 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 285595,
            "unit": "ns/op\t   56945 B/op\t     743 allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 285595,
            "unit": "ns/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56945,
            "unit": "B/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 318379,
            "unit": "ns/op\t   56946 B/op\t     743 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 318379,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56946,
            "unit": "B/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92860,
            "unit": "ns/op\t   27684 B/op\t     199 allocs/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92860,
            "unit": "ns/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27684,
            "unit": "B/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42501,
            "unit": "ns/op\t   31650 B/op\t     129 allocs/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42501,
            "unit": "ns/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31650,
            "unit": "B/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199622,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199622,
            "unit": "ns/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5571,
            "unit": "ns/op\t    6209 B/op\t      25 allocs/op",
            "extra": "207348 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5571,
            "unit": "ns/op",
            "extra": "207348 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6209,
            "unit": "B/op",
            "extra": "207348 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207348 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144056,
            "unit": "ns/op\t   57652 B/op\t     610 allocs/op",
            "extra": "8362 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144056,
            "unit": "ns/op",
            "extra": "8362 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57652,
            "unit": "B/op",
            "extra": "8362 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505100115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505100115A094101Federal",
            "value": 231380104,
            "unit": "1210428822505100115A094101Federal",
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
            "value": 1032,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1032,
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
            "value": 102.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11539588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.3,
            "unit": "ns/op",
            "extra": "11539588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11539588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11539588 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.95,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19042140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.95,
            "unit": "ns/op",
            "extra": "19042140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19042140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19042140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.52,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40994700 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.52,
            "unit": "ns/op",
            "extra": "40994700 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40994700 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40994700 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84484962 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.9,
            "unit": "ns/op",
            "extra": "84484962 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84484962 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84484962 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.463,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183678597 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.463,
            "unit": "ns/op",
            "extra": "183678597 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183678597 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183678597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296412,
            "unit": "ns/op\t   56908 B/op\t     637 allocs/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296412,
            "unit": "ns/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56908,
            "unit": "B/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 286894,
            "unit": "ns/op\t   56914 B/op\t     637 allocs/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 286894,
            "unit": "ns/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56914,
            "unit": "B/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170580,
            "unit": "ns/op\t   57120 B/op\t     640 allocs/op",
            "extra": "6717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170580,
            "unit": "ns/op",
            "extra": "6717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57120,
            "unit": "B/op",
            "extra": "6717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169628,
            "unit": "ns/op\t   57126 B/op\t     640 allocs/op",
            "extra": "6646 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169628,
            "unit": "ns/op",
            "extra": "6646 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57126,
            "unit": "B/op",
            "extra": "6646 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6646 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 352533,
            "unit": "ns/op\t   62616 B/op\t     697 allocs/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 352533,
            "unit": "ns/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62616,
            "unit": "B/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359380,
            "unit": "ns/op\t   62628 B/op\t     697 allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359380,
            "unit": "ns/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62628,
            "unit": "B/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348938,
            "unit": "ns/op\t   62629 B/op\t     697 allocs/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348938,
            "unit": "ns/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62629,
            "unit": "B/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 336548,
            "unit": "ns/op\t   62612 B/op\t     697 allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 336548,
            "unit": "ns/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62612,
            "unit": "B/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46508290 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.88,
            "unit": "ns/op",
            "extra": "46508290 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46508290 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46508290 times\n4 procs"
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
          "id": "349482d9fecb1d4396ded25a022c5168a90c1460",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9c2ce2a7a7cf5fdb3343fb762b817a931e482fcd",
          "timestamp": "2025-05-09T03:08:05Z",
          "url": "https://github.com/moov-io/benchmarks/commit/349482d9fecb1d4396ded25a022c5168a90c1460"
        },
        "date": 1746839626496,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11675,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100279 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11675,
            "unit": "ns/op",
            "extra": "100279 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100279 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100279 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38301,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31021 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38301,
            "unit": "ns/op",
            "extra": "31021 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31021 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31021 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69944,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17164 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69944,
            "unit": "ns/op",
            "extra": "17164 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17164 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17164 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30583,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30583,
            "unit": "ns/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 305003,
            "unit": "ns/op\t   57008 B/op\t     743 allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 305003,
            "unit": "ns/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290113,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290113,
            "unit": "ns/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94670,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94670,
            "unit": "ns/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43001,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43001,
            "unit": "ns/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195689,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6279 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195689,
            "unit": "ns/op",
            "extra": "6279 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6279 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6279 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5933,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "206244 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5933,
            "unit": "ns/op",
            "extra": "206244 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "206244 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "206244 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 150536,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7501 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 150536,
            "unit": "ns/op",
            "extra": "7501 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7501 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7501 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505110113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505110113A094101Federal",
            "value": 231380104,
            "unit": "1210428822505110113A094101Federal",
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
            "value": 1053,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1053,
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
            "extra": "11605422 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103,
            "unit": "ns/op",
            "extra": "11605422 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11605422 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11605422 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.12,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18820112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.12,
            "unit": "ns/op",
            "extra": "18820112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18820112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18820112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.37,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40179426 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.37,
            "unit": "ns/op",
            "extra": "40179426 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40179426 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40179426 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87340070 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.04,
            "unit": "ns/op",
            "extra": "87340070 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87340070 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87340070 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.538,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "187631458 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.538,
            "unit": "ns/op",
            "extra": "187631458 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "187631458 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "187631458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302940,
            "unit": "ns/op\t   57030 B/op\t     637 allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302940,
            "unit": "ns/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57030,
            "unit": "B/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 294646,
            "unit": "ns/op\t   57053 B/op\t     637 allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 294646,
            "unit": "ns/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170293,
            "unit": "ns/op\t   57247 B/op\t     640 allocs/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170293,
            "unit": "ns/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57247,
            "unit": "B/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175917,
            "unit": "ns/op\t   57277 B/op\t     640 allocs/op",
            "extra": "6794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175917,
            "unit": "ns/op",
            "extra": "6794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "6794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358905,
            "unit": "ns/op\t   62768 B/op\t     697 allocs/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358905,
            "unit": "ns/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353123,
            "unit": "ns/op\t   62736 B/op\t     697 allocs/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353123,
            "unit": "ns/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62736,
            "unit": "B/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348412,
            "unit": "ns/op\t   62730 B/op\t     697 allocs/op",
            "extra": "3684 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348412,
            "unit": "ns/op",
            "extra": "3684 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62730,
            "unit": "B/op",
            "extra": "3684 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3684 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343288,
            "unit": "ns/op\t   62662 B/op\t     697 allocs/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343288,
            "unit": "ns/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62662,
            "unit": "B/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45745294 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "45745294 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45745294 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45745294 times\n4 procs"
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
          "id": "3fc2c57ca3ba49b308ae70691b4f2d21d0e14199",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 01d7d08b1d767e9191b3328e41da8aa6022accbb",
          "timestamp": "2025-05-10T03:01:33Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3fc2c57ca3ba49b308ae70691b4f2d21d0e14199"
        },
        "date": 1746926455042,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11817,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101312 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11817,
            "unit": "ns/op",
            "extra": "101312 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101312 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101312 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38314,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31394 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38314,
            "unit": "ns/op",
            "extra": "31394 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31394 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31394 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69863,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69863,
            "unit": "ns/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28902,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "41660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28902,
            "unit": "ns/op",
            "extra": "41660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "41660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41660 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 312305,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 312305,
            "unit": "ns/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4052 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293949,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293949,
            "unit": "ns/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93067,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12832 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93067,
            "unit": "ns/op",
            "extra": "12832 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12832 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42474,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28170 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42474,
            "unit": "ns/op",
            "extra": "28170 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28170 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28170 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199108,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5277 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199108,
            "unit": "ns/op",
            "extra": "5277 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5277 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5277 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5678,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "210181 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5678,
            "unit": "ns/op",
            "extra": "210181 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "210181 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "210181 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151163,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7400 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151163,
            "unit": "ns/op",
            "extra": "7400 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7400 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7400 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505120120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505120120A094101Federal",
            "value": 231380104,
            "unit": "1210428822505120120A094101Federal",
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
            "value": 1064,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1064,
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
            "extra": "11578902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103,
            "unit": "ns/op",
            "extra": "11578902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11578902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11578902 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.42,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18793366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.42,
            "unit": "ns/op",
            "extra": "18793366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18793366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18793366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.38,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40425399 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.38,
            "unit": "ns/op",
            "extra": "40425399 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40425399 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40425399 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87708225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.81,
            "unit": "ns/op",
            "extra": "87708225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87708225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87708225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.308,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183029079 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.308,
            "unit": "ns/op",
            "extra": "183029079 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183029079 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183029079 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292927,
            "unit": "ns/op\t   57031 B/op\t     637 allocs/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292927,
            "unit": "ns/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57031,
            "unit": "B/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295997,
            "unit": "ns/op\t   57051 B/op\t     637 allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295997,
            "unit": "ns/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171431,
            "unit": "ns/op\t   57234 B/op\t     640 allocs/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171431,
            "unit": "ns/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57234,
            "unit": "B/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184539,
            "unit": "ns/op\t   57272 B/op\t     640 allocs/op",
            "extra": "6847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184539,
            "unit": "ns/op",
            "extra": "6847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358164,
            "unit": "ns/op\t   62746 B/op\t     697 allocs/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358164,
            "unit": "ns/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62746,
            "unit": "B/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353751,
            "unit": "ns/op\t   62730 B/op\t     697 allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353751,
            "unit": "ns/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62730,
            "unit": "B/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348780,
            "unit": "ns/op\t   62716 B/op\t     697 allocs/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348780,
            "unit": "ns/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62716,
            "unit": "B/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342047,
            "unit": "ns/op\t   62796 B/op\t     697 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342047,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62796,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45425125 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "45425125 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45425125 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45425125 times\n4 procs"
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
          "id": "37557dc273e9b1bd828ba049fabc442aba836089",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5dabb6b5eae571f0f80131edb3be03a7ee0fa24f",
          "timestamp": "2025-05-11T03:12:26Z",
          "url": "https://github.com/moov-io/benchmarks/commit/37557dc273e9b1bd828ba049fabc442aba836089"
        },
        "date": 1747012743240,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11703,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101971 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11703,
            "unit": "ns/op",
            "extra": "101971 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101971 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101971 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38288,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31540 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38288,
            "unit": "ns/op",
            "extra": "31540 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31540 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31540 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71862,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17193 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71862,
            "unit": "ns/op",
            "extra": "17193 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17193 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17193 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28942,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "41396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28942,
            "unit": "ns/op",
            "extra": "41396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "41396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41396 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 286381,
            "unit": "ns/op\t   57008 B/op\t     743 allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 286381,
            "unit": "ns/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287197,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287197,
            "unit": "ns/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93475,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93475,
            "unit": "ns/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42113,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42113,
            "unit": "ns/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197024,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197024,
            "unit": "ns/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6252 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5663,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207414 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5663,
            "unit": "ns/op",
            "extra": "207414 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207414 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207414 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146271,
            "unit": "ns/op\t   57781 B/op\t     610 allocs/op",
            "extra": "7593 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146271,
            "unit": "ns/op",
            "extra": "7593 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7593 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7593 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505130118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505130118A094101Federal",
            "value": 231380104,
            "unit": "1210428822505130118A094101Federal",
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
            "value": 1052,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1052,
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
            "value": 104.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11581557 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.6,
            "unit": "ns/op",
            "extra": "11581557 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11581557 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11581557 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.96,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18827149 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.96,
            "unit": "ns/op",
            "extra": "18827149 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18827149 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18827149 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.18,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41272566 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.18,
            "unit": "ns/op",
            "extra": "41272566 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41272566 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41272566 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87547402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.04,
            "unit": "ns/op",
            "extra": "87547402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87547402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87547402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.287,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192826042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.287,
            "unit": "ns/op",
            "extra": "192826042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192826042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192826042 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296779,
            "unit": "ns/op\t   57036 B/op\t     637 allocs/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296779,
            "unit": "ns/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57036,
            "unit": "B/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296504,
            "unit": "ns/op\t   57043 B/op\t     637 allocs/op",
            "extra": "4231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296504,
            "unit": "ns/op",
            "extra": "4231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57043,
            "unit": "B/op",
            "extra": "4231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4231 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170708,
            "unit": "ns/op\t   57247 B/op\t     640 allocs/op",
            "extra": "6787 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170708,
            "unit": "ns/op",
            "extra": "6787 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57247,
            "unit": "B/op",
            "extra": "6787 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6787 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174309,
            "unit": "ns/op\t   57256 B/op\t     640 allocs/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174309,
            "unit": "ns/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57256,
            "unit": "B/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354966,
            "unit": "ns/op\t   62806 B/op\t     697 allocs/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354966,
            "unit": "ns/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62806,
            "unit": "B/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355958,
            "unit": "ns/op\t   62739 B/op\t     697 allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355958,
            "unit": "ns/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62739,
            "unit": "B/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349050,
            "unit": "ns/op\t   62749 B/op\t     697 allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349050,
            "unit": "ns/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341121,
            "unit": "ns/op\t   62752 B/op\t     697 allocs/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341121,
            "unit": "ns/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62752,
            "unit": "B/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45928153 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.19,
            "unit": "ns/op",
            "extra": "45928153 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45928153 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45928153 times\n4 procs"
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
          "id": "488ee0939983995c44f827a62d6f0d755fbaddc6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8c7f18e5a380945aa9e878f675d2c7f7a1349006",
          "timestamp": "2025-05-12T03:12:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/488ee0939983995c44f827a62d6f0d755fbaddc6"
        },
        "date": 1747099047803,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11920,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99478 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11920,
            "unit": "ns/op",
            "extra": "99478 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99478 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38831,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "30979 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38831,
            "unit": "ns/op",
            "extra": "30979 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "30979 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30979 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70867,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "16905 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70867,
            "unit": "ns/op",
            "extra": "16905 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "16905 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16905 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30269,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "39998 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30269,
            "unit": "ns/op",
            "extra": "39998 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "39998 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "39998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296178,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296178,
            "unit": "ns/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 310107,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 310107,
            "unit": "ns/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94978,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12562 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94978,
            "unit": "ns/op",
            "extra": "12562 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12562 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12562 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43622,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43622,
            "unit": "ns/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203713,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6109 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203713,
            "unit": "ns/op",
            "extra": "6109 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6109 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6109 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5895,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "199068 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5895,
            "unit": "ns/op",
            "extra": "199068 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "199068 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "199068 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151608,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7185 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151608,
            "unit": "ns/op",
            "extra": "7185 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7185 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7185 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505140116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505140116A094101Federal",
            "value": 231380104,
            "unit": "1210428822505140116A094101Federal",
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
            "value": 1057,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1057,
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
            "value": 104.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11455046 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.1,
            "unit": "ns/op",
            "extra": "11455046 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11455046 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11455046 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18650364 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.8,
            "unit": "ns/op",
            "extra": "18650364 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18650364 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18650364 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.53,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41005897 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.53,
            "unit": "ns/op",
            "extra": "41005897 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41005897 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41005897 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87530613 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.92,
            "unit": "ns/op",
            "extra": "87530613 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87530613 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87530613 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.484,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184102782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.484,
            "unit": "ns/op",
            "extra": "184102782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "184102782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "184102782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310596,
            "unit": "ns/op\t   57032 B/op\t     637 allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310596,
            "unit": "ns/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57032,
            "unit": "B/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302342,
            "unit": "ns/op\t   57049 B/op\t     637 allocs/op",
            "extra": "3991 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302342,
            "unit": "ns/op",
            "extra": "3991 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "3991 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3991 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174975,
            "unit": "ns/op\t   57239 B/op\t     640 allocs/op",
            "extra": "6924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174975,
            "unit": "ns/op",
            "extra": "6924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57239,
            "unit": "B/op",
            "extra": "6924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184059,
            "unit": "ns/op\t   57259 B/op\t     640 allocs/op",
            "extra": "6351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184059,
            "unit": "ns/op",
            "extra": "6351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57259,
            "unit": "B/op",
            "extra": "6351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371360,
            "unit": "ns/op\t   62738 B/op\t     697 allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371360,
            "unit": "ns/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 368674,
            "unit": "ns/op\t   62759 B/op\t     697 allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 368674,
            "unit": "ns/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362805,
            "unit": "ns/op\t   62744 B/op\t     697 allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362805,
            "unit": "ns/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62744,
            "unit": "B/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 353392,
            "unit": "ns/op\t   62191 B/op\t     697 allocs/op",
            "extra": "3838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 353392,
            "unit": "ns/op",
            "extra": "3838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62191,
            "unit": "B/op",
            "extra": "3838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3838 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45971959 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45971959 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45971959 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45971959 times\n4 procs"
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
          "id": "a25be07295087205c49b0bd5536a498f0c2217db",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 90232c2b3a949bcf06fde633322160e1e03bad3a",
          "timestamp": "2025-05-13T03:09:45Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a25be07295087205c49b0bd5536a498f0c2217db"
        },
        "date": 1747185372701,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12092,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102044 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12092,
            "unit": "ns/op",
            "extra": "102044 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102044 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102044 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37882,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31765 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37882,
            "unit": "ns/op",
            "extra": "31765 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31765 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31765 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69585,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "16760 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69585,
            "unit": "ns/op",
            "extra": "16760 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "16760 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16760 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28629,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "41563 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28629,
            "unit": "ns/op",
            "extra": "41563 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "41563 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41563 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288429,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288429,
            "unit": "ns/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298876,
            "unit": "ns/op\t   57008 B/op\t     743 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298876,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95960,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12780 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95960,
            "unit": "ns/op",
            "extra": "12780 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12780 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12780 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42620,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28197 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42620,
            "unit": "ns/op",
            "extra": "28197 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28197 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28197 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199119,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199119,
            "unit": "ns/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5669,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205554 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5669,
            "unit": "ns/op",
            "extra": "205554 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205554 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205554 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146726,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146726,
            "unit": "ns/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505150115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505150115A094101Federal",
            "value": 231380104,
            "unit": "1210428822505150115A094101Federal",
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
            "value": 108.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11478204 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 108.5,
            "unit": "ns/op",
            "extra": "11478204 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11478204 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11478204 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.09,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18924480 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.09,
            "unit": "ns/op",
            "extra": "18924480 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18924480 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18924480 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.38,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41266516 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.38,
            "unit": "ns/op",
            "extra": "41266516 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41266516 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41266516 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87737685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.97,
            "unit": "ns/op",
            "extra": "87737685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87737685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87737685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.529,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183610032 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.529,
            "unit": "ns/op",
            "extra": "183610032 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183610032 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183610032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301137,
            "unit": "ns/op\t   57034 B/op\t     637 allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301137,
            "unit": "ns/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57034,
            "unit": "B/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300044,
            "unit": "ns/op\t   57045 B/op\t     637 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300044,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171515,
            "unit": "ns/op\t   57242 B/op\t     640 allocs/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171515,
            "unit": "ns/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57242,
            "unit": "B/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168499,
            "unit": "ns/op\t   57262 B/op\t     640 allocs/op",
            "extra": "6612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168499,
            "unit": "ns/op",
            "extra": "6612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57262,
            "unit": "B/op",
            "extra": "6612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361005,
            "unit": "ns/op\t   62781 B/op\t     697 allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361005,
            "unit": "ns/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62781,
            "unit": "B/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358523,
            "unit": "ns/op\t   62763 B/op\t     697 allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358523,
            "unit": "ns/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62763,
            "unit": "B/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355237,
            "unit": "ns/op\t   62718 B/op\t     697 allocs/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355237,
            "unit": "ns/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62718,
            "unit": "B/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343903,
            "unit": "ns/op\t   62662 B/op\t     697 allocs/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343903,
            "unit": "ns/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62662,
            "unit": "B/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45942613 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.17,
            "unit": "ns/op",
            "extra": "45942613 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45942613 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45942613 times\n4 procs"
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
          "id": "37edfae27e2a0bdb9349fb899b5e83ccec80fe08",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 09e79a70472c0772f7ba963a7b30d400df3b56fa",
          "timestamp": "2025-05-14T03:07:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/37edfae27e2a0bdb9349fb899b5e83ccec80fe08"
        },
        "date": 1747271661543,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11669,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102080 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11669,
            "unit": "ns/op",
            "extra": "102080 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102080 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102080 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37537,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37537,
            "unit": "ns/op",
            "extra": "31935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31935 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70115,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17360 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70115,
            "unit": "ns/op",
            "extra": "17360 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17360 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17360 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28419,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "42427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28419,
            "unit": "ns/op",
            "extra": "42427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "42427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "42427 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287167,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287167,
            "unit": "ns/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 286892,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 286892,
            "unit": "ns/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96785,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12302 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96785,
            "unit": "ns/op",
            "extra": "12302 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12302 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12302 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42043,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42043,
            "unit": "ns/op",
            "extra": "28467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28467 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197913,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197913,
            "unit": "ns/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5657,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "206852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5657,
            "unit": "ns/op",
            "extra": "206852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "206852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "206852 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145999,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145999,
            "unit": "ns/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505160113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505160113A094101Federal",
            "value": 231380104,
            "unit": "1210428822505160113A094101Federal",
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
            "value": 1055,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1055,
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
            "extra": "11523302 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.3,
            "unit": "ns/op",
            "extra": "11523302 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11523302 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11523302 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.14,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18922704 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.14,
            "unit": "ns/op",
            "extra": "18922704 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18922704 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18922704 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.24,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40457715 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.24,
            "unit": "ns/op",
            "extra": "40457715 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40457715 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40457715 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87283041 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.21,
            "unit": "ns/op",
            "extra": "87283041 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87283041 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87283041 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.392,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184893567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.392,
            "unit": "ns/op",
            "extra": "184893567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "184893567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "184893567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301636,
            "unit": "ns/op\t   57031 B/op\t     637 allocs/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301636,
            "unit": "ns/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57031,
            "unit": "B/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296754,
            "unit": "ns/op\t   57047 B/op\t     637 allocs/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296754,
            "unit": "ns/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170496,
            "unit": "ns/op\t   57237 B/op\t     640 allocs/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170496,
            "unit": "ns/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57237,
            "unit": "B/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169909,
            "unit": "ns/op\t   57266 B/op\t     640 allocs/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169909,
            "unit": "ns/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57266,
            "unit": "B/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360088,
            "unit": "ns/op\t   62753 B/op\t     697 allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360088,
            "unit": "ns/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62753,
            "unit": "B/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 350878,
            "unit": "ns/op\t   62738 B/op\t     697 allocs/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 350878,
            "unit": "ns/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 344708,
            "unit": "ns/op\t   62712 B/op\t     697 allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344708,
            "unit": "ns/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62712,
            "unit": "B/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342663,
            "unit": "ns/op\t   62241 B/op\t     697 allocs/op",
            "extra": "3726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342663,
            "unit": "ns/op",
            "extra": "3726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62241,
            "unit": "B/op",
            "extra": "3726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45940437 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.76,
            "unit": "ns/op",
            "extra": "45940437 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45940437 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45940437 times\n4 procs"
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
          "id": "e7ee8accfa0c89998ee0c7248fa0260f3f0606cb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4ebe0bf09ed17735ebba5abf3bc765b74773e4a4",
          "timestamp": "2025-05-15T03:07:38Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e7ee8accfa0c89998ee0c7248fa0260f3f0606cb"
        },
        "date": 1747358242755,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11656,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101030 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11656,
            "unit": "ns/op",
            "extra": "101030 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101030 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101030 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37853,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37853,
            "unit": "ns/op",
            "extra": "31378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31378 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69679,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69679,
            "unit": "ns/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28710,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "41696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28710,
            "unit": "ns/op",
            "extra": "41696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "41696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41696 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287685,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287685,
            "unit": "ns/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 314077,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 314077,
            "unit": "ns/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93127,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93127,
            "unit": "ns/op",
            "extra": "12907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12907 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42411,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42411,
            "unit": "ns/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28093 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199135,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6422 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199135,
            "unit": "ns/op",
            "extra": "6422 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6422 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6422 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5686,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "203788 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5686,
            "unit": "ns/op",
            "extra": "203788 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "203788 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "203788 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146001,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146001,
            "unit": "ns/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505170116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505170116A094101Federal",
            "value": 231380104,
            "unit": "1210428822505170116A094101Federal",
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
            "value": 1059,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1059,
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
            "extra": "11624125 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.7,
            "unit": "ns/op",
            "extra": "11624125 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11624125 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11624125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.91,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18931735 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.91,
            "unit": "ns/op",
            "extra": "18931735 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18931735 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18931735 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41115582 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.13,
            "unit": "ns/op",
            "extra": "41115582 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41115582 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41115582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87609606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.92,
            "unit": "ns/op",
            "extra": "87609606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87609606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87609606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.274,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192845494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.274,
            "unit": "ns/op",
            "extra": "192845494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192845494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192845494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297366,
            "unit": "ns/op\t   57040 B/op\t     637 allocs/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297366,
            "unit": "ns/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57040,
            "unit": "B/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295667,
            "unit": "ns/op\t   57037 B/op\t     637 allocs/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295667,
            "unit": "ns/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57037,
            "unit": "B/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176300,
            "unit": "ns/op\t   57242 B/op\t     640 allocs/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176300,
            "unit": "ns/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57242,
            "unit": "B/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169227,
            "unit": "ns/op\t   57262 B/op\t     640 allocs/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169227,
            "unit": "ns/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57262,
            "unit": "B/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358664,
            "unit": "ns/op\t   62756 B/op\t     697 allocs/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358664,
            "unit": "ns/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 365031,
            "unit": "ns/op\t   62764 B/op\t     697 allocs/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 365031,
            "unit": "ns/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350754,
            "unit": "ns/op\t   62811 B/op\t     697 allocs/op",
            "extra": "3252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350754,
            "unit": "ns/op",
            "extra": "3252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62811,
            "unit": "B/op",
            "extra": "3252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348919,
            "unit": "ns/op\t   62792 B/op\t     697 allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348919,
            "unit": "ns/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62792,
            "unit": "B/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45314331 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.4,
            "unit": "ns/op",
            "extra": "45314331 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45314331 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45314331 times\n4 procs"
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
          "id": "009de4b7702dee4433775a98d8beaa2abfca0740",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1930599806c1b398d17c0a8d1117130e9efc1e72",
          "timestamp": "2025-05-16T03:10:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/009de4b7702dee4433775a98d8beaa2abfca0740"
        },
        "date": 1747444534633,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11649,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101796 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11649,
            "unit": "ns/op",
            "extra": "101796 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101796 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101796 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40110,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40110,
            "unit": "ns/op",
            "extra": "31696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31696 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69482,
            "unit": "ns/op\t   25500 B/op\t     136 allocs/op",
            "extra": "17263 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69482,
            "unit": "ns/op",
            "extra": "17263 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25500,
            "unit": "B/op",
            "extra": "17263 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17263 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28554,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "42019 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28554,
            "unit": "ns/op",
            "extra": "42019 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "42019 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "42019 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 286684,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 286684,
            "unit": "ns/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4063 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287441,
            "unit": "ns/op\t   57012 B/op\t     743 allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287441,
            "unit": "ns/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92828,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92828,
            "unit": "ns/op",
            "extra": "12862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12862 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43910,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43910,
            "unit": "ns/op",
            "extra": "28130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28130 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 194653,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6187 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 194653,
            "unit": "ns/op",
            "extra": "6187 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6187 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6187 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5677,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "203926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5677,
            "unit": "ns/op",
            "extra": "203926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "203926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "203926 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145914,
            "unit": "ns/op\t   57779 B/op\t     610 allocs/op",
            "extra": "7651 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145914,
            "unit": "ns/op",
            "extra": "7651 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7651 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7651 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505180114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505180114A094101Federal",
            "value": 231380104,
            "unit": "1210428822505180114A094101Federal",
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
            "value": 1055,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1055,
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
            "value": 102.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11591734 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.6,
            "unit": "ns/op",
            "extra": "11591734 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11591734 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11591734 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.63,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18857428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.63,
            "unit": "ns/op",
            "extra": "18857428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18857428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18857428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40419309 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.14,
            "unit": "ns/op",
            "extra": "40419309 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40419309 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40419309 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86738744 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.99,
            "unit": "ns/op",
            "extra": "86738744 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86738744 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86738744 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.595,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "182180572 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.595,
            "unit": "ns/op",
            "extra": "182180572 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "182180572 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "182180572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 290328,
            "unit": "ns/op\t   57029 B/op\t     637 allocs/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 290328,
            "unit": "ns/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302487,
            "unit": "ns/op\t   57052 B/op\t     637 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302487,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171712,
            "unit": "ns/op\t   57256 B/op\t     640 allocs/op",
            "extra": "6774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171712,
            "unit": "ns/op",
            "extra": "6774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57256,
            "unit": "B/op",
            "extra": "6774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6774 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 165621,
            "unit": "ns/op\t   57265 B/op\t     640 allocs/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 165621,
            "unit": "ns/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57265,
            "unit": "B/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356610,
            "unit": "ns/op\t   62784 B/op\t     697 allocs/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356610,
            "unit": "ns/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62784,
            "unit": "B/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351935,
            "unit": "ns/op\t   62750 B/op\t     697 allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351935,
            "unit": "ns/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346585,
            "unit": "ns/op\t   62759 B/op\t     697 allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346585,
            "unit": "ns/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343572,
            "unit": "ns/op\t   62742 B/op\t     697 allocs/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343572,
            "unit": "ns/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62742,
            "unit": "B/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45872334 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.46,
            "unit": "ns/op",
            "extra": "45872334 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45872334 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45872334 times\n4 procs"
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
          "id": "93991e3f3161dd2c7ddff39dddd707bdea4d4cf5",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6769b17fcc9890eefd803c2ab93239bfc59e6db6",
          "timestamp": "2025-05-17T03:05:09Z",
          "url": "https://github.com/moov-io/benchmarks/commit/93991e3f3161dd2c7ddff39dddd707bdea4d4cf5"
        },
        "date": 1747531313463,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11678,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101457 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11678,
            "unit": "ns/op",
            "extra": "101457 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101457 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101457 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39091,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39091,
            "unit": "ns/op",
            "extra": "31522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31522 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69935,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17226 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69935,
            "unit": "ns/op",
            "extra": "17226 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17226 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17226 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28598,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "41833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28598,
            "unit": "ns/op",
            "extra": "41833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "41833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41833 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298979,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298979,
            "unit": "ns/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292107,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292107,
            "unit": "ns/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93662,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12224 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93662,
            "unit": "ns/op",
            "extra": "12224 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12224 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12224 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44659,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28312 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44659,
            "unit": "ns/op",
            "extra": "28312 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28312 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28312 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197751,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5844 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197751,
            "unit": "ns/op",
            "extra": "5844 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5844 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5844 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5675,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "210672 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5675,
            "unit": "ns/op",
            "extra": "210672 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "210672 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "210672 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146646,
            "unit": "ns/op\t   57779 B/op\t     610 allocs/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146646,
            "unit": "ns/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505190121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505190121A094101Federal",
            "value": 231380104,
            "unit": "1210428822505190121A094101Federal",
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
            "value": 1056,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1056,
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
            "value": 103.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11610783 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.1,
            "unit": "ns/op",
            "extra": "11610783 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11610783 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11610783 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.05,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18809932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.05,
            "unit": "ns/op",
            "extra": "18809932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18809932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18809932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.36,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40451424 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.36,
            "unit": "ns/op",
            "extra": "40451424 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40451424 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40451424 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87303648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.74,
            "unit": "ns/op",
            "extra": "87303648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87303648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87303648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183756327 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.49,
            "unit": "ns/op",
            "extra": "183756327 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183756327 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183756327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296728,
            "unit": "ns/op\t   57030 B/op\t     637 allocs/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296728,
            "unit": "ns/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57030,
            "unit": "B/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298240,
            "unit": "ns/op\t   57053 B/op\t     637 allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298240,
            "unit": "ns/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170218,
            "unit": "ns/op\t   57238 B/op\t     640 allocs/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170218,
            "unit": "ns/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57238,
            "unit": "B/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168149,
            "unit": "ns/op\t   57271 B/op\t     640 allocs/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168149,
            "unit": "ns/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57271,
            "unit": "B/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6938 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360619,
            "unit": "ns/op\t   62775 B/op\t     697 allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360619,
            "unit": "ns/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62775,
            "unit": "B/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351634,
            "unit": "ns/op\t   62740 B/op\t     697 allocs/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351634,
            "unit": "ns/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62740,
            "unit": "B/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353537,
            "unit": "ns/op\t   62718 B/op\t     697 allocs/op",
            "extra": "3595 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353537,
            "unit": "ns/op",
            "extra": "3595 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62718,
            "unit": "B/op",
            "extra": "3595 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3595 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 339662,
            "unit": "ns/op\t   62707 B/op\t     697 allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 339662,
            "unit": "ns/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62707,
            "unit": "B/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42509341 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "42509341 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42509341 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42509341 times\n4 procs"
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
          "id": "425e44927f9afa6862849ca8a5ccd88d5daf6eac",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ed88d7b0de97829165ffbe23217e8341add60ad8",
          "timestamp": "2025-05-18T03:15:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/425e44927f9afa6862849ca8a5ccd88d5daf6eac"
        },
        "date": 1747617626232,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11676,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101605 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11676,
            "unit": "ns/op",
            "extra": "101605 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101605 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101605 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37782,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37782,
            "unit": "ns/op",
            "extra": "31980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31980 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70550,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "16396 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70550,
            "unit": "ns/op",
            "extra": "16396 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "16396 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28736,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "41935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28736,
            "unit": "ns/op",
            "extra": "41935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "41935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41935 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293485,
            "unit": "ns/op\t   57008 B/op\t     743 allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293485,
            "unit": "ns/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 286169,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 286169,
            "unit": "ns/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93679,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12770 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93679,
            "unit": "ns/op",
            "extra": "12770 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12770 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12770 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42510,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42510,
            "unit": "ns/op",
            "extra": "28304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28304 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203315,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203315,
            "unit": "ns/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6169 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5727,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "209006 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5727,
            "unit": "ns/op",
            "extra": "209006 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "209006 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209006 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145797,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145797,
            "unit": "ns/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505200119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505200119A094101Federal",
            "value": 231380104,
            "unit": "1210428822505200119A094101Federal",
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
            "value": 102.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11540727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "11540727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11540727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11540727 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.74,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18939434 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.74,
            "unit": "ns/op",
            "extra": "18939434 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18939434 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18939434 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.49,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40897070 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.49,
            "unit": "ns/op",
            "extra": "40897070 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40897070 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40897070 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87800160 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.02,
            "unit": "ns/op",
            "extra": "87800160 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87800160 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87800160 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.466,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "186207717 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.466,
            "unit": "ns/op",
            "extra": "186207717 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "186207717 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "186207717 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293211,
            "unit": "ns/op\t   57037 B/op\t     637 allocs/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293211,
            "unit": "ns/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57037,
            "unit": "B/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291917,
            "unit": "ns/op\t   57056 B/op\t     637 allocs/op",
            "extra": "4269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291917,
            "unit": "ns/op",
            "extra": "4269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57056,
            "unit": "B/op",
            "extra": "4269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169671,
            "unit": "ns/op\t   57244 B/op\t     640 allocs/op",
            "extra": "6880 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169671,
            "unit": "ns/op",
            "extra": "6880 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57244,
            "unit": "B/op",
            "extra": "6880 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6880 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171080,
            "unit": "ns/op\t   57255 B/op\t     640 allocs/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171080,
            "unit": "ns/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57255,
            "unit": "B/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 367988,
            "unit": "ns/op\t   62758 B/op\t     697 allocs/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 367988,
            "unit": "ns/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 349232,
            "unit": "ns/op\t   62738 B/op\t     697 allocs/op",
            "extra": "3566 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 349232,
            "unit": "ns/op",
            "extra": "3566 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3566 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3566 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350674,
            "unit": "ns/op\t   62708 B/op\t     697 allocs/op",
            "extra": "3711 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350674,
            "unit": "ns/op",
            "extra": "3711 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62708,
            "unit": "B/op",
            "extra": "3711 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3711 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341459,
            "unit": "ns/op\t   62654 B/op\t     697 allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341459,
            "unit": "ns/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62654,
            "unit": "B/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45473316 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.51,
            "unit": "ns/op",
            "extra": "45473316 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45473316 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45473316 times\n4 procs"
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
          "id": "7de3da86fc1c71b9c1afc3908b832a37e4c58871",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c4a1044d9db6d2950982436fa0397b8e60c7a41c",
          "timestamp": "2025-05-19T03:15:48Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7de3da86fc1c71b9c1afc3908b832a37e4c58871"
        },
        "date": 1747703900595,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11478,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100784 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11478,
            "unit": "ns/op",
            "extra": "100784 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100784 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100784 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37651,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37651,
            "unit": "ns/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31946 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73188,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17329 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73188,
            "unit": "ns/op",
            "extra": "17329 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17329 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17329 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28717,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "41515 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28717,
            "unit": "ns/op",
            "extra": "41515 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "41515 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41515 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 286305,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 286305,
            "unit": "ns/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287621,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287621,
            "unit": "ns/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93913,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93913,
            "unit": "ns/op",
            "extra": "12884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12884 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42148,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28428 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42148,
            "unit": "ns/op",
            "extra": "28428 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28428 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28428 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199720,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199720,
            "unit": "ns/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5424,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "219249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5424,
            "unit": "ns/op",
            "extra": "219249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "219249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "219249 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145374,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7699 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145374,
            "unit": "ns/op",
            "extra": "7699 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7699 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505210117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505210117A094101Federal",
            "value": 231380104,
            "unit": "1210428822505210117A094101Federal",
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
            "value": 102.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11604184 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.3,
            "unit": "ns/op",
            "extra": "11604184 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11604184 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11604184 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.02,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18944962 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.02,
            "unit": "ns/op",
            "extra": "18944962 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18944962 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18944962 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.8,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40704093 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.8,
            "unit": "ns/op",
            "extra": "40704093 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40704093 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40704093 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85126420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.56,
            "unit": "ns/op",
            "extra": "85126420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85126420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85126420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "175482963 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.151,
            "unit": "ns/op",
            "extra": "175482963 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "175482963 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "175482963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 289625,
            "unit": "ns/op\t   57038 B/op\t     637 allocs/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 289625,
            "unit": "ns/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57038,
            "unit": "B/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300087,
            "unit": "ns/op\t   57050 B/op\t     637 allocs/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300087,
            "unit": "ns/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179061,
            "unit": "ns/op\t   57225 B/op\t     640 allocs/op",
            "extra": "6460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179061,
            "unit": "ns/op",
            "extra": "6460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57225,
            "unit": "B/op",
            "extra": "6460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167320,
            "unit": "ns/op\t   57256 B/op\t     640 allocs/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167320,
            "unit": "ns/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57256,
            "unit": "B/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 353564,
            "unit": "ns/op\t   62750 B/op\t     697 allocs/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 353564,
            "unit": "ns/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353480,
            "unit": "ns/op\t   62739 B/op\t     697 allocs/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353480,
            "unit": "ns/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62739,
            "unit": "B/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3454 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 344968,
            "unit": "ns/op\t   62740 B/op\t     697 allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344968,
            "unit": "ns/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62740,
            "unit": "B/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341982,
            "unit": "ns/op\t   62757 B/op\t     697 allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341982,
            "unit": "ns/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42770119 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.38,
            "unit": "ns/op",
            "extra": "42770119 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42770119 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42770119 times\n4 procs"
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
          "id": "ac4ec936ceef0b819d2a05b6f7f18747bbad5844",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9ea95ee85050e7d855320473279eb12f68803d48",
          "timestamp": "2025-05-20T03:10:20Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ac4ec936ceef0b819d2a05b6f7f18747bbad5844"
        },
        "date": 1747790257589,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11531,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102028 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11531,
            "unit": "ns/op",
            "extra": "102028 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102028 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102028 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37557,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37557,
            "unit": "ns/op",
            "extra": "31738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69612,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17163 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69612,
            "unit": "ns/op",
            "extra": "17163 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17163 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17163 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28810,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "42046 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28810,
            "unit": "ns/op",
            "extra": "42046 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "42046 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "42046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 286127,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 286127,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287822,
            "unit": "ns/op\t   57008 B/op\t     743 allocs/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287822,
            "unit": "ns/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4026 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92767,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92767,
            "unit": "ns/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12914 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42412,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42412,
            "unit": "ns/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197096,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197096,
            "unit": "ns/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5454,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "210591 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5454,
            "unit": "ns/op",
            "extra": "210591 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "210591 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "210591 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145848,
            "unit": "ns/op\t   57781 B/op\t     610 allocs/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145848,
            "unit": "ns/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8156 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505220117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505220117A094101Federal",
            "value": 231380104,
            "unit": "1210428822505220117A094101Federal",
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
            "value": 104.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11421411 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.2,
            "unit": "ns/op",
            "extra": "11421411 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11421411 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11421411 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.84,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19041649 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.84,
            "unit": "ns/op",
            "extra": "19041649 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19041649 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19041649 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.23,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40699234 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.23,
            "unit": "ns/op",
            "extra": "40699234 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40699234 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40699234 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85459512 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.53,
            "unit": "ns/op",
            "extra": "85459512 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85459512 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85459512 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167691178 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.154,
            "unit": "ns/op",
            "extra": "167691178 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167691178 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167691178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302595,
            "unit": "ns/op\t   57040 B/op\t     637 allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302595,
            "unit": "ns/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57040,
            "unit": "B/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297325,
            "unit": "ns/op\t   57045 B/op\t     637 allocs/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297325,
            "unit": "ns/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168407,
            "unit": "ns/op\t   57241 B/op\t     640 allocs/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168407,
            "unit": "ns/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173512,
            "unit": "ns/op\t   57273 B/op\t     640 allocs/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173512,
            "unit": "ns/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57273,
            "unit": "B/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363519,
            "unit": "ns/op\t   62784 B/op\t     697 allocs/op",
            "extra": "3171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363519,
            "unit": "ns/op",
            "extra": "3171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62784,
            "unit": "B/op",
            "extra": "3171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352514,
            "unit": "ns/op\t   62758 B/op\t     697 allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352514,
            "unit": "ns/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349280,
            "unit": "ns/op\t   62728 B/op\t     697 allocs/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349280,
            "unit": "ns/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62728,
            "unit": "B/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346904,
            "unit": "ns/op\t   62704 B/op\t     697 allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346904,
            "unit": "ns/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62704,
            "unit": "B/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41679283 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.02,
            "unit": "ns/op",
            "extra": "41679283 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41679283 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41679283 times\n4 procs"
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
          "id": "b6f793dd686cddf08557c1074f61d74dfdfeeff9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e151bb5c57b6221b47ef15c5f17f7daa1a275c7a",
          "timestamp": "2025-05-21T03:09:50Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b6f793dd686cddf08557c1074f61d74dfdfeeff9"
        },
        "date": 1747876623784,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11507,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11507,
            "unit": "ns/op",
            "extra": "101958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101958 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37570,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37570,
            "unit": "ns/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71524,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17281 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71524,
            "unit": "ns/op",
            "extra": "17281 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17281 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17281 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28854,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "38748 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28854,
            "unit": "ns/op",
            "extra": "38748 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "38748 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "38748 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288477,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288477,
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
            "value": 743,
            "unit": "allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287258,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287258,
            "unit": "ns/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93219,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93219,
            "unit": "ns/op",
            "extra": "12850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12850 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43265,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43265,
            "unit": "ns/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28191 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200817,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5998 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200817,
            "unit": "ns/op",
            "extra": "5998 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5998 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5998 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5514,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "216498 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5514,
            "unit": "ns/op",
            "extra": "216498 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "216498 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216498 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145968,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145968,
            "unit": "ns/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505230116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505230116A094101Federal",
            "value": 231380104,
            "unit": "1210428822505230116A094101Federal",
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
            "value": 1043,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1043,
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
            "value": 102.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11528760 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.6,
            "unit": "ns/op",
            "extra": "11528760 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11528760 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11528760 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18778891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.92,
            "unit": "ns/op",
            "extra": "18778891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18778891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18778891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.22,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40326788 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.22,
            "unit": "ns/op",
            "extra": "40326788 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40326788 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40326788 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85556542 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.48,
            "unit": "ns/op",
            "extra": "85556542 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85556542 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85556542 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.842,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168120040 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.842,
            "unit": "ns/op",
            "extra": "168120040 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168120040 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168120040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293215,
            "unit": "ns/op\t   57038 B/op\t     637 allocs/op",
            "extra": "4297 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293215,
            "unit": "ns/op",
            "extra": "4297 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57038,
            "unit": "B/op",
            "extra": "4297 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4297 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 288910,
            "unit": "ns/op\t   57046 B/op\t     637 allocs/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 288910,
            "unit": "ns/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 184182,
            "unit": "ns/op\t   57235 B/op\t     640 allocs/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 184182,
            "unit": "ns/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57235,
            "unit": "B/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173681,
            "unit": "ns/op\t   57255 B/op\t     640 allocs/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173681,
            "unit": "ns/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57255,
            "unit": "B/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355980,
            "unit": "ns/op\t   62781 B/op\t     697 allocs/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355980,
            "unit": "ns/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62781,
            "unit": "B/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 347374,
            "unit": "ns/op\t   62733 B/op\t     697 allocs/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 347374,
            "unit": "ns/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62733,
            "unit": "B/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349114,
            "unit": "ns/op\t   62760 B/op\t     697 allocs/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349114,
            "unit": "ns/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340717,
            "unit": "ns/op\t   62704 B/op\t     697 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340717,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62704,
            "unit": "B/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42565779 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.66,
            "unit": "ns/op",
            "extra": "42565779 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42565779 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42565779 times\n4 procs"
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
          "id": "a3009929ca55f44c4fc22ba549607ab49ab1ce66",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d8566157ed52c775530adf40e4d1c9e709a66c92",
          "timestamp": "2025-05-22T03:09:54Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a3009929ca55f44c4fc22ba549607ab49ab1ce66"
        },
        "date": 1747963020489,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11391,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103555 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11391,
            "unit": "ns/op",
            "extra": "103555 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103555 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103555 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38605,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31555 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38605,
            "unit": "ns/op",
            "extra": "31555 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31555 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31555 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70543,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70543,
            "unit": "ns/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29791,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "41806 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29791,
            "unit": "ns/op",
            "extra": "41806 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "41806 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41806 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288377,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288377,
            "unit": "ns/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 307671,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 307671,
            "unit": "ns/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94349,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94349,
            "unit": "ns/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12703 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42690,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42690,
            "unit": "ns/op",
            "extra": "28086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28086 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 196574,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5570 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 196574,
            "unit": "ns/op",
            "extra": "5570 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5570 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5570 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5584,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213914 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5584,
            "unit": "ns/op",
            "extra": "213914 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213914 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213914 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148891,
            "unit": "ns/op\t   57778 B/op\t     610 allocs/op",
            "extra": "7586 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148891,
            "unit": "ns/op",
            "extra": "7586 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57778,
            "unit": "B/op",
            "extra": "7586 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7586 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505240116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505240116A094101Federal",
            "value": 231380104,
            "unit": "1210428822505240116A094101Federal",
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
            "value": 1040,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1040,
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
            "extra": "11649118 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.9,
            "unit": "ns/op",
            "extra": "11649118 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11649118 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11649118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.01,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18919585 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.01,
            "unit": "ns/op",
            "extra": "18919585 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18919585 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18919585 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.15,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41057053 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.15,
            "unit": "ns/op",
            "extra": "41057053 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41057053 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41057053 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84880509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.41,
            "unit": "ns/op",
            "extra": "84880509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84880509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84880509 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.038,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167492432 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.038,
            "unit": "ns/op",
            "extra": "167492432 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167492432 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167492432 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295191,
            "unit": "ns/op\t   57030 B/op\t     637 allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295191,
            "unit": "ns/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57030,
            "unit": "B/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 294592,
            "unit": "ns/op\t   57045 B/op\t     637 allocs/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 294592,
            "unit": "ns/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4245 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172466,
            "unit": "ns/op\t   57239 B/op\t     640 allocs/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172466,
            "unit": "ns/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57239,
            "unit": "B/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173221,
            "unit": "ns/op\t   57263 B/op\t     640 allocs/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173221,
            "unit": "ns/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57263,
            "unit": "B/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356989,
            "unit": "ns/op\t   62787 B/op\t     697 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356989,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62787,
            "unit": "B/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 349695,
            "unit": "ns/op\t   62742 B/op\t     697 allocs/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 349695,
            "unit": "ns/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62742,
            "unit": "B/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346062,
            "unit": "ns/op\t   62747 B/op\t     697 allocs/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346062,
            "unit": "ns/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62747,
            "unit": "B/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340254,
            "unit": "ns/op\t   62744 B/op\t     697 allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340254,
            "unit": "ns/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62744,
            "unit": "B/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42350606 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.04,
            "unit": "ns/op",
            "extra": "42350606 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42350606 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42350606 times\n4 procs"
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
          "id": "0a78f9760b4e49f8de2e3c9bea5562ea0c089eb3",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 316a5c3c57032bf612d84f4d58ad6a620bb7032c",
          "timestamp": "2025-05-23T03:09:25Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0a78f9760b4e49f8de2e3c9bea5562ea0c089eb3"
        },
        "date": 1748049259027,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11537,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103854 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11537,
            "unit": "ns/op",
            "extra": "103854 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103854 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103854 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37441,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "32080 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37441,
            "unit": "ns/op",
            "extra": "32080 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "32080 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "32080 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72155,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17396 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72155,
            "unit": "ns/op",
            "extra": "17396 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17396 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28179,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "42298 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28179,
            "unit": "ns/op",
            "extra": "42298 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "42298 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "42298 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 284215,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 284215,
            "unit": "ns/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 284371,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 284371,
            "unit": "ns/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92172,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "13072 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92172,
            "unit": "ns/op",
            "extra": "13072 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "13072 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "13072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42112,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28524 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42112,
            "unit": "ns/op",
            "extra": "28524 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28524 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28524 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 196919,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6130 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 196919,
            "unit": "ns/op",
            "extra": "6130 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6130 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6130 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5420,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "212178 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5420,
            "unit": "ns/op",
            "extra": "212178 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "212178 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212178 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 143845,
            "unit": "ns/op\t   57781 B/op\t     610 allocs/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 143845,
            "unit": "ns/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505250113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505250113A094101Federal",
            "value": 231380104,
            "unit": "1210428822505250113A094101Federal",
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
            "value": 1005,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1005,
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
            "extra": "11405076 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.8,
            "unit": "ns/op",
            "extra": "11405076 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11405076 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11405076 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.56,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18967923 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.56,
            "unit": "ns/op",
            "extra": "18967923 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18967923 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18967923 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.58,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38705863 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.58,
            "unit": "ns/op",
            "extra": "38705863 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38705863 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38705863 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87251462 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.81,
            "unit": "ns/op",
            "extra": "87251462 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87251462 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87251462 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167469062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.122,
            "unit": "ns/op",
            "extra": "167469062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167469062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167469062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294573,
            "unit": "ns/op\t   57045 B/op\t     637 allocs/op",
            "extra": "4362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294573,
            "unit": "ns/op",
            "extra": "4362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 290350,
            "unit": "ns/op\t   57045 B/op\t     637 allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 290350,
            "unit": "ns/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177960,
            "unit": "ns/op\t   57242 B/op\t     640 allocs/op",
            "extra": "7347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177960,
            "unit": "ns/op",
            "extra": "7347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57242,
            "unit": "B/op",
            "extra": "7347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173457,
            "unit": "ns/op\t   57257 B/op\t     640 allocs/op",
            "extra": "6520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173457,
            "unit": "ns/op",
            "extra": "6520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57257,
            "unit": "B/op",
            "extra": "6520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358098,
            "unit": "ns/op\t   62767 B/op\t     697 allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358098,
            "unit": "ns/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 348053,
            "unit": "ns/op\t   62767 B/op\t     697 allocs/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348053,
            "unit": "ns/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 344755,
            "unit": "ns/op\t   62745 B/op\t     697 allocs/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344755,
            "unit": "ns/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62745,
            "unit": "B/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 335674,
            "unit": "ns/op\t   62657 B/op\t     697 allocs/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 335674,
            "unit": "ns/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62657,
            "unit": "B/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42916342 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.04,
            "unit": "ns/op",
            "extra": "42916342 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42916342 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42916342 times\n4 procs"
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
          "id": "36f9b03655639a0b7ac9ede54662d4c91369f4e1",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 30e9b53e6f6da9b7c381f7fcb853a62b686490a3",
          "timestamp": "2025-05-24T03:03:32Z",
          "url": "https://github.com/moov-io/benchmarks/commit/36f9b03655639a0b7ac9ede54662d4c91369f4e1"
        },
        "date": 1748136226138,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11436,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103581 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11436,
            "unit": "ns/op",
            "extra": "103581 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103581 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103581 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37281,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "32264 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37281,
            "unit": "ns/op",
            "extra": "32264 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "32264 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "32264 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69705,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17494 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69705,
            "unit": "ns/op",
            "extra": "17494 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17494 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17494 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28311,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "39471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28311,
            "unit": "ns/op",
            "extra": "39471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "39471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "39471 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 284235,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 284235,
            "unit": "ns/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 284974,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 284974,
            "unit": "ns/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92119,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "13047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92119,
            "unit": "ns/op",
            "extra": "13047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "13047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "13047 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42284,
            "unit": "ns/op\t   31777 B/op\t     129 allocs/op",
            "extra": "28470 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42284,
            "unit": "ns/op",
            "extra": "28470 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31777,
            "unit": "B/op",
            "extra": "28470 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28470 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 196440,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 196440,
            "unit": "ns/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5433,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "190179 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5433,
            "unit": "ns/op",
            "extra": "190179 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "190179 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "190179 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 143756,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "8252 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 143756,
            "unit": "ns/op",
            "extra": "8252 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "8252 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505260123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505260123A094101Federal",
            "value": 231380104,
            "unit": "1210428822505260123A094101Federal",
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
            "value": 102.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11584159 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "11584159 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11584159 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11584159 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.78,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19074195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.78,
            "unit": "ns/op",
            "extra": "19074195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19074195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19074195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40788804 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.26,
            "unit": "ns/op",
            "extra": "40788804 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40788804 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40788804 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86165144 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.89,
            "unit": "ns/op",
            "extra": "86165144 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86165144 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86165144 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "175342503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.12,
            "unit": "ns/op",
            "extra": "175342503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "175342503 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "175342503 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 288335,
            "unit": "ns/op\t   57033 B/op\t     637 allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 288335,
            "unit": "ns/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57033,
            "unit": "B/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 285660,
            "unit": "ns/op\t   57054 B/op\t     637 allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 285660,
            "unit": "ns/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174665,
            "unit": "ns/op\t   57236 B/op\t     640 allocs/op",
            "extra": "7012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174665,
            "unit": "ns/op",
            "extra": "7012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57236,
            "unit": "B/op",
            "extra": "7012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7012 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169450,
            "unit": "ns/op\t   57285 B/op\t     640 allocs/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169450,
            "unit": "ns/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57285,
            "unit": "B/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6736 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 350916,
            "unit": "ns/op\t   62755 B/op\t     697 allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 350916,
            "unit": "ns/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 346957,
            "unit": "ns/op\t   62749 B/op\t     697 allocs/op",
            "extra": "3656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 346957,
            "unit": "ns/op",
            "extra": "3656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 339179,
            "unit": "ns/op\t   62727 B/op\t     697 allocs/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 339179,
            "unit": "ns/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62727,
            "unit": "B/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342470,
            "unit": "ns/op\t   62785 B/op\t     697 allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342470,
            "unit": "ns/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62785,
            "unit": "B/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42327338 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.37,
            "unit": "ns/op",
            "extra": "42327338 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42327338 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42327338 times\n4 procs"
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
          "id": "26ab0eb36af3a2e47bf70083ac5f60b71cff3d73",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for efe23168fcce9c26de4a2a414620f3841c019ee8",
          "timestamp": "2025-05-25T03:17:52Z",
          "url": "https://github.com/moov-io/benchmarks/commit/26ab0eb36af3a2e47bf70083ac5f60b71cff3d73"
        },
        "date": 1748222353758,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11461,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103656 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11461,
            "unit": "ns/op",
            "extra": "103656 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103656 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103656 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38450,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38450,
            "unit": "ns/op",
            "extra": "31729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31729 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69526,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "15633 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69526,
            "unit": "ns/op",
            "extra": "15633 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "15633 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "15633 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28783,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "41714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28783,
            "unit": "ns/op",
            "extra": "41714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "41714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41714 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287642,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287642,
            "unit": "ns/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287717,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287717,
            "unit": "ns/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94571,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12810 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94571,
            "unit": "ns/op",
            "extra": "12810 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12810 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12810 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42300,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28333 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42300,
            "unit": "ns/op",
            "extra": "28333 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28333 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28333 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199824,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5876 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199824,
            "unit": "ns/op",
            "extra": "5876 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5876 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5876 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5469,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "215218 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5469,
            "unit": "ns/op",
            "extra": "215218 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "215218 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "215218 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145137,
            "unit": "ns/op\t   57779 B/op\t     610 allocs/op",
            "extra": "7569 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145137,
            "unit": "ns/op",
            "extra": "7569 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7569 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7569 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505270118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505270118A094101Federal",
            "value": 231380104,
            "unit": "1210428822505270118A094101Federal",
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
            "value": 1015,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1015,
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
            "extra": "11672044 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.8,
            "unit": "ns/op",
            "extra": "11672044 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11672044 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11672044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.91,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19042549 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.91,
            "unit": "ns/op",
            "extra": "19042549 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19042549 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19042549 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.52,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40166202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.52,
            "unit": "ns/op",
            "extra": "40166202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40166202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40166202 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87364875 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14,
            "unit": "ns/op",
            "extra": "87364875 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87364875 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87364875 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "174430626 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.127,
            "unit": "ns/op",
            "extra": "174430626 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "174430626 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "174430626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292130,
            "unit": "ns/op\t   57033 B/op\t     637 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292130,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57033,
            "unit": "B/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291505,
            "unit": "ns/op\t   57048 B/op\t     637 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291505,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171687,
            "unit": "ns/op\t   57246 B/op\t     640 allocs/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171687,
            "unit": "ns/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57246,
            "unit": "B/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 165875,
            "unit": "ns/op\t   57256 B/op\t     640 allocs/op",
            "extra": "6241 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 165875,
            "unit": "ns/op",
            "extra": "6241 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57256,
            "unit": "B/op",
            "extra": "6241 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6241 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357360,
            "unit": "ns/op\t   62776 B/op\t     697 allocs/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357360,
            "unit": "ns/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354227,
            "unit": "ns/op\t   62738 B/op\t     697 allocs/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354227,
            "unit": "ns/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345349,
            "unit": "ns/op\t   62739 B/op\t     697 allocs/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345349,
            "unit": "ns/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62739,
            "unit": "B/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 335328,
            "unit": "ns/op\t   62704 B/op\t     697 allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 335328,
            "unit": "ns/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62704,
            "unit": "B/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42828904 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.04,
            "unit": "ns/op",
            "extra": "42828904 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42828904 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42828904 times\n4 procs"
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
          "id": "c8f17ac28f2ae62e21e21360fb1ca1ec8c607888",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 233c81cd3954ec959c74c2ac9a138246bf765e66",
          "timestamp": "2025-05-26T03:14:22Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c8f17ac28f2ae62e21e21360fb1ca1ec8c607888"
        },
        "date": 1748308589862,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11496,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103402 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11496,
            "unit": "ns/op",
            "extra": "103402 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103402 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37872,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37872,
            "unit": "ns/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74436,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17227 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74436,
            "unit": "ns/op",
            "extra": "17227 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17227 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17227 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28688,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "41727 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28688,
            "unit": "ns/op",
            "extra": "41727 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "41727 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41727 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287718,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287718,
            "unit": "ns/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 285691,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 285691,
            "unit": "ns/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92653,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12309 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92653,
            "unit": "ns/op",
            "extra": "12309 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12309 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42168,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "27994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42168,
            "unit": "ns/op",
            "extra": "27994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "27994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27994 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200186,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6356 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200186,
            "unit": "ns/op",
            "extra": "6356 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6356 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6356 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5456,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "215478 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5456,
            "unit": "ns/op",
            "extra": "215478 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "215478 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "215478 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144366,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144366,
            "unit": "ns/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505280115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505280115A094101Federal",
            "value": 231380104,
            "unit": "1210428822505280115A094101Federal",
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
            "value": 108.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11679022 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 108.8,
            "unit": "ns/op",
            "extra": "11679022 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11679022 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11679022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18817904 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.92,
            "unit": "ns/op",
            "extra": "18817904 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18817904 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18817904 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.7,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41089664 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.7,
            "unit": "ns/op",
            "extra": "41089664 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41089664 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41089664 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87474414 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.99,
            "unit": "ns/op",
            "extra": "87474414 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87474414 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87474414 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.245,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "172705281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.245,
            "unit": "ns/op",
            "extra": "172705281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "172705281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "172705281 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 287328,
            "unit": "ns/op\t   57029 B/op\t     637 allocs/op",
            "extra": "4426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 287328,
            "unit": "ns/op",
            "extra": "4426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "4426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 287540,
            "unit": "ns/op\t   57047 B/op\t     637 allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 287540,
            "unit": "ns/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181680,
            "unit": "ns/op\t   57246 B/op\t     640 allocs/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181680,
            "unit": "ns/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57246,
            "unit": "B/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170581,
            "unit": "ns/op\t   57251 B/op\t     640 allocs/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170581,
            "unit": "ns/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57251,
            "unit": "B/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 349835,
            "unit": "ns/op\t   62777 B/op\t     697 allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 349835,
            "unit": "ns/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62777,
            "unit": "B/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 345736,
            "unit": "ns/op\t   62738 B/op\t     697 allocs/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 345736,
            "unit": "ns/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 342825,
            "unit": "ns/op\t   62740 B/op\t     697 allocs/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 342825,
            "unit": "ns/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62740,
            "unit": "B/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338060,
            "unit": "ns/op\t   62743 B/op\t     697 allocs/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338060,
            "unit": "ns/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62743,
            "unit": "B/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42420703 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.32,
            "unit": "ns/op",
            "extra": "42420703 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42420703 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42420703 times\n4 procs"
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
          "id": "3b18e9708e2b41796e1da94e787bdc36ef3d1061",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 092d2db28aec8eb206899e8e7b0219b87dcf6446",
          "timestamp": "2025-05-27T03:08:52Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3b18e9708e2b41796e1da94e787bdc36ef3d1061"
        },
        "date": 1748395084672,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11473,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "104341 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11473,
            "unit": "ns/op",
            "extra": "104341 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "104341 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104341 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37444,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37444,
            "unit": "ns/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31700 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70017,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "16165 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70017,
            "unit": "ns/op",
            "extra": "16165 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "16165 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16165 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28686,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28686,
            "unit": "ns/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "39608 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291052,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291052,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299829,
            "unit": "ns/op\t   57012 B/op\t     743 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299829,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93148,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93148,
            "unit": "ns/op",
            "extra": "12834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12834 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42326,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28292 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42326,
            "unit": "ns/op",
            "extra": "28292 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28292 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28292 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 196991,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 196991,
            "unit": "ns/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5429,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213313 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5429,
            "unit": "ns/op",
            "extra": "213313 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213313 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213313 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144235,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144235,
            "unit": "ns/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505290117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505290117A094101Federal",
            "value": 231380104,
            "unit": "1210428822505290117A094101Federal",
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
            "value": 1020,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1020,
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
            "value": 104.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11540950 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.7,
            "unit": "ns/op",
            "extra": "11540950 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11540950 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11540950 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.03,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18922965 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.03,
            "unit": "ns/op",
            "extra": "18922965 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18922965 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18922965 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.48,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40666970 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.48,
            "unit": "ns/op",
            "extra": "40666970 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40666970 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40666970 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85900044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.03,
            "unit": "ns/op",
            "extra": "85900044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85900044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85900044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171305986 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.102,
            "unit": "ns/op",
            "extra": "171305986 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "171305986 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "171305986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292794,
            "unit": "ns/op\t   57029 B/op\t     637 allocs/op",
            "extra": "4347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292794,
            "unit": "ns/op",
            "extra": "4347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "4347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297105,
            "unit": "ns/op\t   57050 B/op\t     637 allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297105,
            "unit": "ns/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168442,
            "unit": "ns/op\t   57221 B/op\t     640 allocs/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168442,
            "unit": "ns/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57221,
            "unit": "B/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6655 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173404,
            "unit": "ns/op\t   57260 B/op\t     640 allocs/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173404,
            "unit": "ns/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57260,
            "unit": "B/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 352969,
            "unit": "ns/op\t   62768 B/op\t     697 allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 352969,
            "unit": "ns/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359174,
            "unit": "ns/op\t   62747 B/op\t     697 allocs/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359174,
            "unit": "ns/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62747,
            "unit": "B/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348827,
            "unit": "ns/op\t   62732 B/op\t     697 allocs/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348827,
            "unit": "ns/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62732,
            "unit": "B/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341406,
            "unit": "ns/op\t   62703 B/op\t     697 allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341406,
            "unit": "ns/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62703,
            "unit": "B/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42755817 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.22,
            "unit": "ns/op",
            "extra": "42755817 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42755817 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42755817 times\n4 procs"
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
          "id": "4def1e00e892849e4fc86d5fb5e3bb5fd4489be5",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 56f41baccf3b6a8e1a3745ecec95decf53d68181",
          "timestamp": "2025-05-28T03:11:21Z",
          "url": "https://github.com/moov-io/benchmarks/commit/4def1e00e892849e4fc86d5fb5e3bb5fd4489be5"
        },
        "date": 1748481464678,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11459,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102998 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11459,
            "unit": "ns/op",
            "extra": "102998 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102998 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102998 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37822,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37822,
            "unit": "ns/op",
            "extra": "31478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31478 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69447,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "16020 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69447,
            "unit": "ns/op",
            "extra": "16020 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "16020 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16020 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28719,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "41798 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28719,
            "unit": "ns/op",
            "extra": "41798 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "41798 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41798 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 285009,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 285009,
            "unit": "ns/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 284291,
            "unit": "ns/op\t   57008 B/op\t     743 allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 284291,
            "unit": "ns/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93936,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93936,
            "unit": "ns/op",
            "extra": "12856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12856 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42290,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42290,
            "unit": "ns/op",
            "extra": "28270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28270 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200998,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200998,
            "unit": "ns/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5465,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213846 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5465,
            "unit": "ns/op",
            "extra": "213846 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213846 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213846 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144999,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "8144 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144999,
            "unit": "ns/op",
            "extra": "8144 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "8144 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8144 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505300117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505300117A094101Federal",
            "value": 231380104,
            "unit": "1210428822505300117A094101Federal",
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
            "value": 1010,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1010,
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
            "value": 102.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11259876 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.3,
            "unit": "ns/op",
            "extra": "11259876 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11259876 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11259876 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.02,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18844831 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.02,
            "unit": "ns/op",
            "extra": "18844831 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18844831 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18844831 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.69,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40297404 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.69,
            "unit": "ns/op",
            "extra": "40297404 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40297404 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40297404 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87528411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.2,
            "unit": "ns/op",
            "extra": "87528411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87528411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87528411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "165101350 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.082,
            "unit": "ns/op",
            "extra": "165101350 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "165101350 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "165101350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294856,
            "unit": "ns/op\t   57030 B/op\t     637 allocs/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294856,
            "unit": "ns/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57030,
            "unit": "B/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295885,
            "unit": "ns/op\t   57052 B/op\t     637 allocs/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295885,
            "unit": "ns/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173545,
            "unit": "ns/op\t   57242 B/op\t     640 allocs/op",
            "extra": "7214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173545,
            "unit": "ns/op",
            "extra": "7214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57242,
            "unit": "B/op",
            "extra": "7214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171706,
            "unit": "ns/op\t   57275 B/op\t     640 allocs/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171706,
            "unit": "ns/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57275,
            "unit": "B/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6678 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 353997,
            "unit": "ns/op\t   62809 B/op\t     697 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 353997,
            "unit": "ns/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62809,
            "unit": "B/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 347423,
            "unit": "ns/op\t   62744 B/op\t     697 allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 347423,
            "unit": "ns/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62744,
            "unit": "B/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 344391,
            "unit": "ns/op\t   62720 B/op\t     697 allocs/op",
            "extra": "3669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344391,
            "unit": "ns/op",
            "extra": "3669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62720,
            "unit": "B/op",
            "extra": "3669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341171,
            "unit": "ns/op\t   62696 B/op\t     697 allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341171,
            "unit": "ns/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62696,
            "unit": "B/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42324512 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.04,
            "unit": "ns/op",
            "extra": "42324512 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42324512 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42324512 times\n4 procs"
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
          "id": "391baf3f919107fc187ea513c265b8aff8d8cf65",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8dad1f66f0299d07de1688532335ab8ae5bc11cb",
          "timestamp": "2025-05-29T03:11:46Z",
          "url": "https://github.com/moov-io/benchmarks/commit/391baf3f919107fc187ea513c265b8aff8d8cf65"
        },
        "date": 1748567757398,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11460,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103831 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11460,
            "unit": "ns/op",
            "extra": "103831 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103831 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103831 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38766,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38766,
            "unit": "ns/op",
            "extra": "31824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31824 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69265,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69265,
            "unit": "ns/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28518,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "42117 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28518,
            "unit": "ns/op",
            "extra": "42117 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "42117 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "42117 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 285192,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 285192,
            "unit": "ns/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 284586,
            "unit": "ns/op\t   57008 B/op\t     743 allocs/op",
            "extra": "4081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 284586,
            "unit": "ns/op",
            "extra": "4081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "4081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92803,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "13045 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92803,
            "unit": "ns/op",
            "extra": "13045 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "13045 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "13045 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43626,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28653 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43626,
            "unit": "ns/op",
            "extra": "28653 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28653 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28653 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195677,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6199 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195677,
            "unit": "ns/op",
            "extra": "6199 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6199 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6199 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5463,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "217597 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5463,
            "unit": "ns/op",
            "extra": "217597 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "217597 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "217597 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144428,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144428,
            "unit": "ns/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822505310115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822505310115A094101Federal",
            "value": 231380104,
            "unit": "1210428822505310115A094101Federal",
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
            "value": 101.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11668777 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.5,
            "unit": "ns/op",
            "extra": "11668777 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11668777 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11668777 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.95,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18925365 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.95,
            "unit": "ns/op",
            "extra": "18925365 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18925365 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18925365 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40838886 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.46,
            "unit": "ns/op",
            "extra": "40838886 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40838886 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40838886 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87269706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.3,
            "unit": "ns/op",
            "extra": "87269706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87269706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87269706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168730480 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.159,
            "unit": "ns/op",
            "extra": "168730480 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168730480 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168730480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295203,
            "unit": "ns/op\t   57029 B/op\t     637 allocs/op",
            "extra": "4428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295203,
            "unit": "ns/op",
            "extra": "4428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "4428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 289254,
            "unit": "ns/op\t   57045 B/op\t     637 allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 289254,
            "unit": "ns/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170018,
            "unit": "ns/op\t   57240 B/op\t     640 allocs/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170018,
            "unit": "ns/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57240,
            "unit": "B/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7228 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170286,
            "unit": "ns/op\t   57271 B/op\t     640 allocs/op",
            "extra": "6819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170286,
            "unit": "ns/op",
            "extra": "6819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57271,
            "unit": "B/op",
            "extra": "6819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354390,
            "unit": "ns/op\t   62769 B/op\t     697 allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354390,
            "unit": "ns/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62769,
            "unit": "B/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 348458,
            "unit": "ns/op\t   62753 B/op\t     697 allocs/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348458,
            "unit": "ns/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62753,
            "unit": "B/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 342417,
            "unit": "ns/op\t   62725 B/op\t     697 allocs/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 342417,
            "unit": "ns/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62725,
            "unit": "B/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 334611,
            "unit": "ns/op\t   62663 B/op\t     697 allocs/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 334611,
            "unit": "ns/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62663,
            "unit": "B/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42273542 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.02,
            "unit": "ns/op",
            "extra": "42273542 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42273542 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42273542 times\n4 procs"
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
          "id": "de5262c6891799083358ba01090ffef3f5431ad5",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f620a3853f37daacad8d94a32b90372ae5d37cb2",
          "timestamp": "2025-05-30T03:09:29Z",
          "url": "https://github.com/moov-io/benchmarks/commit/de5262c6891799083358ba01090ffef3f5431ad5"
        },
        "date": 1748654157430,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11556,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100082 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11556,
            "unit": "ns/op",
            "extra": "100082 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100082 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100082 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37433,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37433,
            "unit": "ns/op",
            "extra": "31417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31417 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72751,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17104 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72751,
            "unit": "ns/op",
            "extra": "17104 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17104 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28690,
            "unit": "ns/op\t   21012 B/op\t      54 allocs/op",
            "extra": "41508 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28690,
            "unit": "ns/op",
            "extra": "41508 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21012,
            "unit": "B/op",
            "extra": "41508 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41508 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289313,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289313,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 284700,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 284700,
            "unit": "ns/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95626,
            "unit": "ns/op\t   27749 B/op\t     199 allocs/op",
            "extra": "12945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95626,
            "unit": "ns/op",
            "extra": "12945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12945 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42741,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42741,
            "unit": "ns/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28195 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206225,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5964 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206225,
            "unit": "ns/op",
            "extra": "5964 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5964 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5964 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5528,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "208525 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5528,
            "unit": "ns/op",
            "extra": "208525 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "208525 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "208525 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146672,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7500 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146672,
            "unit": "ns/op",
            "extra": "7500 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7500 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7500 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822506010115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822506010115A094101Federal",
            "value": 231380104,
            "unit": "1210428822506010115A094101Federal",
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
            "value": 1023,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1023,
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
            "extra": "11618241 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.8,
            "unit": "ns/op",
            "extra": "11618241 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11618241 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11618241 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.44,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18964380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.44,
            "unit": "ns/op",
            "extra": "18964380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18964380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18964380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40482039 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.54,
            "unit": "ns/op",
            "extra": "40482039 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40482039 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40482039 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87338169 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.02,
            "unit": "ns/op",
            "extra": "87338169 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87338169 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87338169 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.965,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167903031 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.965,
            "unit": "ns/op",
            "extra": "167903031 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167903031 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167903031 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 290834,
            "unit": "ns/op\t   57032 B/op\t     637 allocs/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 290834,
            "unit": "ns/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57032,
            "unit": "B/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300580,
            "unit": "ns/op\t   57059 B/op\t     637 allocs/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300580,
            "unit": "ns/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57059,
            "unit": "B/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179646,
            "unit": "ns/op\t   57234 B/op\t     640 allocs/op",
            "extra": "7369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179646,
            "unit": "ns/op",
            "extra": "7369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57234,
            "unit": "B/op",
            "extra": "7369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168722,
            "unit": "ns/op\t   57277 B/op\t     640 allocs/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168722,
            "unit": "ns/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 346168,
            "unit": "ns/op\t   62725 B/op\t     697 allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 346168,
            "unit": "ns/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62725,
            "unit": "B/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 348356,
            "unit": "ns/op\t   62778 B/op\t     697 allocs/op",
            "extra": "3721 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348356,
            "unit": "ns/op",
            "extra": "3721 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62778,
            "unit": "B/op",
            "extra": "3721 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3721 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357117,
            "unit": "ns/op\t   62715 B/op\t     697 allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357117,
            "unit": "ns/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62715,
            "unit": "B/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 332235,
            "unit": "ns/op\t   62663 B/op\t     697 allocs/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 332235,
            "unit": "ns/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62663,
            "unit": "B/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4202 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42184381 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.02,
            "unit": "ns/op",
            "extra": "42184381 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42184381 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42184381 times\n4 procs"
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
          "id": "21404dacd74ec68afd416d178cbd1bc0c86c14b9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 248b30911d1a1056da3ac9a7e11c916eb573caec",
          "timestamp": "2025-05-31T03:08:24Z",
          "url": "https://github.com/moov-io/benchmarks/commit/21404dacd74ec68afd416d178cbd1bc0c86c14b9"
        },
        "date": 1748741990125,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11588,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "104140 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11588,
            "unit": "ns/op",
            "extra": "104140 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "104140 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38281,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "32121 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38281,
            "unit": "ns/op",
            "extra": "32121 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "32121 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "32121 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74159,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "17406 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74159,
            "unit": "ns/op",
            "extra": "17406 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "17406 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17406 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28890,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "41040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28890,
            "unit": "ns/op",
            "extra": "41040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "41040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41040 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289629,
            "unit": "ns/op\t   57011 B/op\t     743 allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289629,
            "unit": "ns/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287674,
            "unit": "ns/op\t   57009 B/op\t     743 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287674,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92413,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12758 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92413,
            "unit": "ns/op",
            "extra": "12758 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12758 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 41771,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 41771,
            "unit": "ns/op",
            "extra": "28699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28699 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200580,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200580,
            "unit": "ns/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6207 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5502,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "218173 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5502,
            "unit": "ns/op",
            "extra": "218173 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "218173 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "218173 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 143786,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7986 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 143786,
            "unit": "ns/op",
            "extra": "7986 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7986 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7986 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822506020139A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822506020139A094101Federal",
            "value": 231380104,
            "unit": "1210428822506020139A094101Federal",
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
            "value": 1010,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1010,
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
            "value": 102.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11641224 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "11641224 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11641224 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11641224 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.95,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18797592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.95,
            "unit": "ns/op",
            "extra": "18797592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18797592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18797592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.04,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40431202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.04,
            "unit": "ns/op",
            "extra": "40431202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40431202 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40431202 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87272974 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.21,
            "unit": "ns/op",
            "extra": "87272974 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87272974 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87272974 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "175484648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.991,
            "unit": "ns/op",
            "extra": "175484648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "175484648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "175484648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293394,
            "unit": "ns/op\t   57040 B/op\t     637 allocs/op",
            "extra": "4372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293394,
            "unit": "ns/op",
            "extra": "4372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57040,
            "unit": "B/op",
            "extra": "4372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 289314,
            "unit": "ns/op\t   57041 B/op\t     637 allocs/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 289314,
            "unit": "ns/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168179,
            "unit": "ns/op\t   57243 B/op\t     640 allocs/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168179,
            "unit": "ns/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57243,
            "unit": "B/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169728,
            "unit": "ns/op\t   57285 B/op\t     640 allocs/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169728,
            "unit": "ns/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57285,
            "unit": "B/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 348643,
            "unit": "ns/op\t   62773 B/op\t     697 allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 348643,
            "unit": "ns/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62773,
            "unit": "B/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351703,
            "unit": "ns/op\t   62750 B/op\t     697 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351703,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 342866,
            "unit": "ns/op\t   62721 B/op\t     697 allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 342866,
            "unit": "ns/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62721,
            "unit": "B/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337588,
            "unit": "ns/op\t   62708 B/op\t     697 allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337588,
            "unit": "ns/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62708,
            "unit": "B/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42884942 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.03,
            "unit": "ns/op",
            "extra": "42884942 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42884942 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42884942 times\n4 procs"
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
          "id": "4b7e05f19f464ac2822cc66ff422e049cb1ec7ff",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for dbdc454253d630a1f70f11f0f9cbeede54a64373",
          "timestamp": "2025-06-01T03:38:25Z",
          "url": "https://github.com/moov-io/benchmarks/commit/4b7e05f19f464ac2822cc66ff422e049cb1ec7ff"
        },
        "date": 1748827257343,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11783,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102496 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11783,
            "unit": "ns/op",
            "extra": "102496 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102496 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102496 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37626,
            "unit": "ns/op\t   21604 B/op\t      61 allocs/op",
            "extra": "31820 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37626,
            "unit": "ns/op",
            "extra": "31820 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "31820 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31820 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72200,
            "unit": "ns/op\t   25501 B/op\t     136 allocs/op",
            "extra": "16635 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72200,
            "unit": "ns/op",
            "extra": "16635 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25501,
            "unit": "B/op",
            "extra": "16635 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16635 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29936,
            "unit": "ns/op\t   21011 B/op\t      54 allocs/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29936,
            "unit": "ns/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21011,
            "unit": "B/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 284558,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 284558,
            "unit": "ns/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 285859,
            "unit": "ns/op\t   57010 B/op\t     743 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 285859,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 92949,
            "unit": "ns/op\t   27748 B/op\t     199 allocs/op",
            "extra": "12363 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 92949,
            "unit": "ns/op",
            "extra": "12363 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12363 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12363 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 41896,
            "unit": "ns/op\t   31778 B/op\t     129 allocs/op",
            "extra": "28341 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 41896,
            "unit": "ns/op",
            "extra": "28341 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31778,
            "unit": "B/op",
            "extra": "28341 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28341 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 193206,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 193206,
            "unit": "ns/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5614,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213208 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5614,
            "unit": "ns/op",
            "extra": "213208 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213208 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213208 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 144136,
            "unit": "ns/op\t   57780 B/op\t     610 allocs/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 144136,
            "unit": "ns/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822506030120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822506030120A094101Federal",
            "value": 231380104,
            "unit": "1210428822506030120A094101Federal",
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
            "value": 1034,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1034,
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
            "value": 102.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11592588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "11592588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11592588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11592588 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.89,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19035620 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.89,
            "unit": "ns/op",
            "extra": "19035620 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19035620 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19035620 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40800592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.43,
            "unit": "ns/op",
            "extra": "40800592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40800592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40800592 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87190812 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.07,
            "unit": "ns/op",
            "extra": "87190812 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87190812 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87190812 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "169778828 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.144,
            "unit": "ns/op",
            "extra": "169778828 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "169778828 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "169778828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 289233,
            "unit": "ns/op\t   57030 B/op\t     637 allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 289233,
            "unit": "ns/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57030,
            "unit": "B/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4257 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 286913,
            "unit": "ns/op\t   57043 B/op\t     637 allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 286913,
            "unit": "ns/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57043,
            "unit": "B/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 164085,
            "unit": "ns/op\t   57219 B/op\t     640 allocs/op",
            "extra": "6417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 164085,
            "unit": "ns/op",
            "extra": "6417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57219,
            "unit": "B/op",
            "extra": "6417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174430,
            "unit": "ns/op\t   57263 B/op\t     640 allocs/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174430,
            "unit": "ns/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57263,
            "unit": "B/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 351203,
            "unit": "ns/op\t   62778 B/op\t     697 allocs/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 351203,
            "unit": "ns/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62778,
            "unit": "B/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360083,
            "unit": "ns/op\t   62743 B/op\t     697 allocs/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360083,
            "unit": "ns/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62743,
            "unit": "B/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 339147,
            "unit": "ns/op\t   62755 B/op\t     697 allocs/op",
            "extra": "3523 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 339147,
            "unit": "ns/op",
            "extra": "3523 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "3523 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3523 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 339284,
            "unit": "ns/op\t   62626 B/op\t     697 allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 339284,
            "unit": "ns/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62626,
            "unit": "B/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42349321 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.67,
            "unit": "ns/op",
            "extra": "42349321 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42349321 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42349321 times\n4 procs"
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