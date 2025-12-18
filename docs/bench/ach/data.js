window.BENCHMARK_DATA = {
  "lastUpdate": 1766020685865,
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
          "id": "e530733bcc3ec8f3f45863aa736b921eeff60737",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8b28ba95a54b5b4aff086446f722966d14462d2e",
          "timestamp": "2025-11-23T03:24:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e530733bcc3ec8f3f45863aa736b921eeff60737"
        },
        "date": 1763947315469,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13947,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86778 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13947,
            "unit": "ns/op",
            "extra": "86778 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86778 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86778 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42857,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28158 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42857,
            "unit": "ns/op",
            "extra": "28158 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28158 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28158 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75080,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15922 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75080,
            "unit": "ns/op",
            "extra": "15922 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15922 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15922 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31266,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38613 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31266,
            "unit": "ns/op",
            "extra": "38613 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38613 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38613 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297049,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297049,
            "unit": "ns/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297260,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297260,
            "unit": "ns/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 106718,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 106718,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49062,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49062,
            "unit": "ns/op",
            "extra": "24262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24262 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206836,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206836,
            "unit": "ns/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8091,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146335 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8091,
            "unit": "ns/op",
            "extra": "146335 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146335 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146335 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154967,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7730 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154967,
            "unit": "ns/op",
            "extra": "7730 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7730 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7730 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511250121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511250121A094101Federal",
            "value": 231380104,
            "unit": "1210428822511250121A094101Federal",
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
            "value": 982.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1209820 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.2,
            "unit": "ns/op",
            "extra": "1209820 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1209820 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1209820 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11638988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102,
            "unit": "ns/op",
            "extra": "11638988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11638988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11638988 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.24,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18860020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.24,
            "unit": "ns/op",
            "extra": "18860020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18860020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18860020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40291332 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.87,
            "unit": "ns/op",
            "extra": "40291332 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40291332 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40291332 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91620181 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.41,
            "unit": "ns/op",
            "extra": "91620181 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91620181 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91620181 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202715936 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "202715936 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202715936 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202715936 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307667,
            "unit": "ns/op\t   57877 B/op\t     666 allocs/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307667,
            "unit": "ns/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57877,
            "unit": "B/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298657,
            "unit": "ns/op\t   57886 B/op\t     666 allocs/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298657,
            "unit": "ns/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57886,
            "unit": "B/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174490,
            "unit": "ns/op\t   58069 B/op\t     669 allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174490,
            "unit": "ns/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58069,
            "unit": "B/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176392,
            "unit": "ns/op\t   58104 B/op\t     669 allocs/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176392,
            "unit": "ns/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58104,
            "unit": "B/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 377926,
            "unit": "ns/op\t   63620 B/op\t     726 allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 377926,
            "unit": "ns/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63620,
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
            "value": 357723,
            "unit": "ns/op\t   63600 B/op\t     726 allocs/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357723,
            "unit": "ns/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63600,
            "unit": "B/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348787,
            "unit": "ns/op\t   63581 B/op\t     726 allocs/op",
            "extra": "3490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348787,
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
            "value": 349053,
            "unit": "ns/op\t   63569 B/op\t     727 allocs/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349053,
            "unit": "ns/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63569,
            "unit": "B/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4107 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47911134 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.96,
            "unit": "ns/op",
            "extra": "47911134 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47911134 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47911134 times\n4 procs"
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
          "id": "c45290319659771c8c2b6643aa808ddebce46a98",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 47903e83169d6715e027c43e6bea64731447fffd",
          "timestamp": "2025-11-24T03:21:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c45290319659771c8c2b6643aa808ddebce46a98"
        },
        "date": 1764033434410,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13587,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13587,
            "unit": "ns/op",
            "extra": "87976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87976 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87976 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41693,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28321 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41693,
            "unit": "ns/op",
            "extra": "28321 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28321 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28321 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74866,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16040 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74866,
            "unit": "ns/op",
            "extra": "16040 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16040 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30911,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30911,
            "unit": "ns/op",
            "extra": "38688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
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
            "value": 300420,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300420,
            "unit": "ns/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 300691,
            "unit": "ns/op\t   58801 B/op\t     800 allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 300691,
            "unit": "ns/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58801,
            "unit": "B/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100064,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100064,
            "unit": "ns/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12027 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49190,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24183 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49190,
            "unit": "ns/op",
            "extra": "24183 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24183 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24183 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201074,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201074,
            "unit": "ns/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8124,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "147415 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8124,
            "unit": "ns/op",
            "extra": "147415 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "147415 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147415 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154202,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154202,
            "unit": "ns/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511260116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511260116A094101Federal",
            "value": 231380104,
            "unit": "1210428822511260116A094101Federal",
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1255233 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1255233 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1255233 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1255233 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.98,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11987378 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.98,
            "unit": "ns/op",
            "extra": "11987378 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11987378 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11987378 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.56,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18856544 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.56,
            "unit": "ns/op",
            "extra": "18856544 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18856544 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18856544 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.77,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40271541 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.77,
            "unit": "ns/op",
            "extra": "40271541 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40271541 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40271541 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91746267 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.36,
            "unit": "ns/op",
            "extra": "91746267 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91746267 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91746267 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202862613 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "202862613 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202862613 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202862613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306935,
            "unit": "ns/op\t   57880 B/op\t     666 allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306935,
            "unit": "ns/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57880,
            "unit": "B/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297517,
            "unit": "ns/op\t   57901 B/op\t     666 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297517,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57901,
            "unit": "B/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171091,
            "unit": "ns/op\t   58070 B/op\t     669 allocs/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171091,
            "unit": "ns/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58070,
            "unit": "B/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170964,
            "unit": "ns/op\t   58107 B/op\t     669 allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170964,
            "unit": "ns/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58107,
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
            "value": 360909,
            "unit": "ns/op\t   63593 B/op\t     726 allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360909,
            "unit": "ns/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63593,
            "unit": "B/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359243,
            "unit": "ns/op\t   63605 B/op\t     726 allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359243,
            "unit": "ns/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63605,
            "unit": "B/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353920,
            "unit": "ns/op\t   63604 B/op\t     726 allocs/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353920,
            "unit": "ns/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63604,
            "unit": "B/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345047,
            "unit": "ns/op\t   63617 B/op\t     727 allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345047,
            "unit": "ns/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63617,
            "unit": "B/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43393755 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.01,
            "unit": "ns/op",
            "extra": "43393755 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43393755 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43393755 times\n4 procs"
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
          "id": "7e9e430912873d5f77db5915122595b15012114f",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 49c1a41df2389737469efd983c9eca50ca2af39e",
          "timestamp": "2025-11-25T03:12:36Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7e9e430912873d5f77db5915122595b15012114f"
        },
        "date": 1764119847420,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13565,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86580 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13565,
            "unit": "ns/op",
            "extra": "86580 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86580 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42048,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42048,
            "unit": "ns/op",
            "extra": "28417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28417 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75308,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "16023 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75308,
            "unit": "ns/op",
            "extra": "16023 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "16023 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16023 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31043,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31043,
            "unit": "ns/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296580,
            "unit": "ns/op\t   58801 B/op\t     800 allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296580,
            "unit": "ns/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58801,
            "unit": "B/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298051,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298051,
            "unit": "ns/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 106156,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 106156,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49338,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24194 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49338,
            "unit": "ns/op",
            "extra": "24194 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24194 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24194 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200484,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200484,
            "unit": "ns/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
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
            "value": 8060,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145329 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8060,
            "unit": "ns/op",
            "extra": "145329 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145329 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145329 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155418,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155418,
            "unit": "ns/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511270116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511270116A094101Federal",
            "value": 231380104,
            "unit": "1210428822511270116A094101Federal",
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
            "value": 958,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1217932 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 958,
            "unit": "ns/op",
            "extra": "1217932 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1217932 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1217932 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.12,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12080026 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.12,
            "unit": "ns/op",
            "extra": "12080026 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12080026 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12080026 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.34,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18825747 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.34,
            "unit": "ns/op",
            "extra": "18825747 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18825747 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18825747 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40370438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.91,
            "unit": "ns/op",
            "extra": "40370438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40370438 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40370438 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91519602 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "91519602 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91519602 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91519602 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.959,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202353042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.959,
            "unit": "ns/op",
            "extra": "202353042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202353042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202353042 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294898,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294898,
            "unit": "ns/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
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
            "value": 298887,
            "unit": "ns/op\t   57897 B/op\t     666 allocs/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298887,
            "unit": "ns/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57897,
            "unit": "B/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171521,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171521,
            "unit": "ns/op",
            "extra": "6196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171200,
            "unit": "ns/op\t   58103 B/op\t     669 allocs/op",
            "extra": "6524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171200,
            "unit": "ns/op",
            "extra": "6524 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58103,
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
            "value": 362589,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362589,
            "unit": "ns/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63585,
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
            "value": 360351,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360351,
            "unit": "ns/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346772,
            "unit": "ns/op\t   63604 B/op\t     726 allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346772,
            "unit": "ns/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63604,
            "unit": "B/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342040,
            "unit": "ns/op\t   63663 B/op\t     727 allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342040,
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
            "value": 25.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45432148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.39,
            "unit": "ns/op",
            "extra": "45432148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45432148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45432148 times\n4 procs"
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
          "id": "c34d56f15284a7c7c368c1f7593a3d2398469cb6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fee27da611d65187fc57ec6a6f7d03df7f9e0ac0",
          "timestamp": "2025-11-26T03:12:31Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c34d56f15284a7c7c368c1f7593a3d2398469cb6"
        },
        "date": 1764206186275,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13521,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87697 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13521,
            "unit": "ns/op",
            "extra": "87697 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87697 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87697 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41885,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28539 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41885,
            "unit": "ns/op",
            "extra": "28539 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28539 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28539 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75315,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15986 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75315,
            "unit": "ns/op",
            "extra": "15986 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
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
            "value": 31018,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31018,
            "unit": "ns/op",
            "extra": "38446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38446 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 301019,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 301019,
            "unit": "ns/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299106,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3837 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299106,
            "unit": "ns/op",
            "extra": "3837 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3837 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3837 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 107196,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 107196,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49200,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24232 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49200,
            "unit": "ns/op",
            "extra": "24232 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24232 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24232 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203675,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5878 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203675,
            "unit": "ns/op",
            "extra": "5878 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5878 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5878 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8096,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146038 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8096,
            "unit": "ns/op",
            "extra": "146038 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146038 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146038 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154619,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7282 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154619,
            "unit": "ns/op",
            "extra": "7282 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7282 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7282 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511280115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511280115A094101Federal",
            "value": 231380104,
            "unit": "1210428822511280115A094101Federal",
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
            "value": 972.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1252378 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 972.6,
            "unit": "ns/op",
            "extra": "1252378 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1252378 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1252378 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.46,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12101169 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.46,
            "unit": "ns/op",
            "extra": "12101169 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12101169 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12101169 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.55,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18795348 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.55,
            "unit": "ns/op",
            "extra": "18795348 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18795348 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18795348 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.89,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40080393 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.89,
            "unit": "ns/op",
            "extra": "40080393 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40080393 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40080393 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91837371 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.49,
            "unit": "ns/op",
            "extra": "91837371 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91837371 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91837371 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.926,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202351806 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.926,
            "unit": "ns/op",
            "extra": "202351806 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202351806 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202351806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299559,
            "unit": "ns/op\t   57871 B/op\t     666 allocs/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299559,
            "unit": "ns/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57871,
            "unit": "B/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299124,
            "unit": "ns/op\t   57898 B/op\t     666 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299124,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57898,
            "unit": "B/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170585,
            "unit": "ns/op\t   58092 B/op\t     669 allocs/op",
            "extra": "6687 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170585,
            "unit": "ns/op",
            "extra": "6687 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58092,
            "unit": "B/op",
            "extra": "6687 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6687 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174272,
            "unit": "ns/op\t   58114 B/op\t     669 allocs/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174272,
            "unit": "ns/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58114,
            "unit": "B/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359693,
            "unit": "ns/op\t   63602 B/op\t     726 allocs/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359693,
            "unit": "ns/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63602,
            "unit": "B/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362414,
            "unit": "ns/op\t   63617 B/op\t     726 allocs/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362414,
            "unit": "ns/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63617,
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
            "value": 355320,
            "unit": "ns/op\t   63614 B/op\t     726 allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355320,
            "unit": "ns/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63614,
            "unit": "B/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346638,
            "unit": "ns/op\t   63565 B/op\t     727 allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346638,
            "unit": "ns/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63565,
            "unit": "B/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40175181 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.89,
            "unit": "ns/op",
            "extra": "40175181 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40175181 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40175181 times\n4 procs"
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
          "id": "0b49bcf0cc2e4e359dcabe3c264f7e5879243128",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3020da5a56dd14aa8e5f1bcf7f5524641873963d",
          "timestamp": "2025-11-27T03:08:59Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0b49bcf0cc2e4e359dcabe3c264f7e5879243128"
        },
        "date": 1764292530418,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13564,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "84336 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13564,
            "unit": "ns/op",
            "extra": "84336 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "84336 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "84336 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41980,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28347 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41980,
            "unit": "ns/op",
            "extra": "28347 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28347 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28347 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 80661,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15114 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 80661,
            "unit": "ns/op",
            "extra": "15114 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15114 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30683,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38916 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30683,
            "unit": "ns/op",
            "extra": "38916 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38916 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298267,
            "unit": "ns/op\t   58801 B/op\t     800 allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298267,
            "unit": "ns/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58801,
            "unit": "B/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298191,
            "unit": "ns/op\t   58802 B/op\t     800 allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298191,
            "unit": "ns/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58802,
            "unit": "B/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99315,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12085 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99315,
            "unit": "ns/op",
            "extra": "12085 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12085 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12085 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49107,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24495 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49107,
            "unit": "ns/op",
            "extra": "24495 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24495 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24495 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207734,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "6145 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207734,
            "unit": "ns/op",
            "extra": "6145 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "6145 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6145 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8168,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145670 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8168,
            "unit": "ns/op",
            "extra": "145670 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145670 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145670 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154139,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7707 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154139,
            "unit": "ns/op",
            "extra": "7707 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7707 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7707 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511290114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511290114A094101Federal",
            "value": 231380104,
            "unit": "1210428822511290114A094101Federal",
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
            "value": 959.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1251158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 959.1,
            "unit": "ns/op",
            "extra": "1251158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1251158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1251158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12202268 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.5,
            "unit": "ns/op",
            "extra": "12202268 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12202268 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12202268 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.37,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18796944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.37,
            "unit": "ns/op",
            "extra": "18796944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18796944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18796944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40601092 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.86,
            "unit": "ns/op",
            "extra": "40601092 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40601092 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40601092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91227411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91227411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91227411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91227411 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.004,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202660675 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.004,
            "unit": "ns/op",
            "extra": "202660675 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202660675 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202660675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299557,
            "unit": "ns/op\t   57878 B/op\t     666 allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299557,
            "unit": "ns/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57878,
            "unit": "B/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304504,
            "unit": "ns/op\t   57887 B/op\t     666 allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304504,
            "unit": "ns/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57887,
            "unit": "B/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174898,
            "unit": "ns/op\t   58086 B/op\t     669 allocs/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174898,
            "unit": "ns/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58086,
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
            "value": 174248,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174248,
            "unit": "ns/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6284 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362364,
            "unit": "ns/op\t   63582 B/op\t     726 allocs/op",
            "extra": "3410 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362364,
            "unit": "ns/op",
            "extra": "3410 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63582,
            "unit": "B/op",
            "extra": "3410 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3410 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361520,
            "unit": "ns/op\t   63604 B/op\t     726 allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361520,
            "unit": "ns/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63604,
            "unit": "B/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352307,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352307,
            "unit": "ns/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346852,
            "unit": "ns/op\t   63660 B/op\t     727 allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346852,
            "unit": "ns/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63660,
            "unit": "B/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48215544 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.9,
            "unit": "ns/op",
            "extra": "48215544 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48215544 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48215544 times\n4 procs"
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
          "id": "57d78b735bee1e20f311ed027e9650f61832e40c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 72e8f00f6900902c94974ca0d1b8ae1294487c19",
          "timestamp": "2025-11-28T03:08:44Z",
          "url": "https://github.com/moov-io/benchmarks/commit/57d78b735bee1e20f311ed027e9650f61832e40c"
        },
        "date": 1764378943278,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14060,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "74944 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14060,
            "unit": "ns/op",
            "extra": "74944 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "74944 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "74944 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42310,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42310,
            "unit": "ns/op",
            "extra": "28389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28389 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74723,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15786 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74723,
            "unit": "ns/op",
            "extra": "15786 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
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
            "value": 31196,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31196,
            "unit": "ns/op",
            "extra": "38592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38592 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295962,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295962,
            "unit": "ns/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296284,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296284,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100791,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100791,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49071,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24357 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49071,
            "unit": "ns/op",
            "extra": "24357 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24357 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24357 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202417,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6256 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202417,
            "unit": "ns/op",
            "extra": "6256 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6256 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6256 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8094,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "147014 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8094,
            "unit": "ns/op",
            "extra": "147014 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "147014 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147014 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154431,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7027 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154431,
            "unit": "ns/op",
            "extra": "7027 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7027 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7027 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511300115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511300115A094101Federal",
            "value": 231380104,
            "unit": "1210428822511300115A094101Federal",
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
            "value": 977.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1233632 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 977.4,
            "unit": "ns/op",
            "extra": "1233632 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1233632 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1233632 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11977132 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.8,
            "unit": "ns/op",
            "extra": "11977132 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11977132 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11977132 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.2,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18780312 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.2,
            "unit": "ns/op",
            "extra": "18780312 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18780312 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18780312 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.76,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40126154 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.76,
            "unit": "ns/op",
            "extra": "40126154 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40126154 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40126154 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91163062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.49,
            "unit": "ns/op",
            "extra": "91163062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91163062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91163062 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.912,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203003196 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.912,
            "unit": "ns/op",
            "extra": "203003196 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203003196 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203003196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303641,
            "unit": "ns/op\t   57882 B/op\t     666 allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303641,
            "unit": "ns/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57882,
            "unit": "B/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302682,
            "unit": "ns/op\t   57897 B/op\t     666 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302682,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57897,
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
            "value": 177876,
            "unit": "ns/op\t   58073 B/op\t     669 allocs/op",
            "extra": "6378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177876,
            "unit": "ns/op",
            "extra": "6378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58073,
            "unit": "B/op",
            "extra": "6378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174221,
            "unit": "ns/op\t   58097 B/op\t     669 allocs/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174221,
            "unit": "ns/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58097,
            "unit": "B/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358883,
            "unit": "ns/op\t   63619 B/op\t     726 allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358883,
            "unit": "ns/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63619,
            "unit": "B/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354438,
            "unit": "ns/op\t   63589 B/op\t     726 allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354438,
            "unit": "ns/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63589,
            "unit": "B/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349604,
            "unit": "ns/op\t   63615 B/op\t     726 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349604,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63615,
            "unit": "B/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347813,
            "unit": "ns/op\t   63065 B/op\t     727 allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347813,
            "unit": "ns/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63065,
            "unit": "B/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47510176 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.25,
            "unit": "ns/op",
            "extra": "47510176 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47510176 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47510176 times\n4 procs"
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
          "id": "a03336b4bbcaf5415dfd6924dae1f3401211e906",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 88ba389d46fdc1c67957bec11017ba0c5631d925",
          "timestamp": "2025-11-29T03:09:36Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a03336b4bbcaf5415dfd6924dae1f3401211e906"
        },
        "date": 1764465981674,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13547,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88495 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13547,
            "unit": "ns/op",
            "extra": "88495 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88495 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88495 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42396,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28546 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42396,
            "unit": "ns/op",
            "extra": "28546 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28546 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28546 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74901,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "16075 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74901,
            "unit": "ns/op",
            "extra": "16075 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "16075 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16075 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31052,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38953 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31052,
            "unit": "ns/op",
            "extra": "38953 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38953 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38953 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 310942,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 310942,
            "unit": "ns/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296858,
            "unit": "ns/op\t   58801 B/op\t     800 allocs/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296858,
            "unit": "ns/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58801,
            "unit": "B/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99573,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99573,
            "unit": "ns/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49323,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49323,
            "unit": "ns/op",
            "extra": "24382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24382 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200337,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5744 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200337,
            "unit": "ns/op",
            "extra": "5744 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5744 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5744 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8121,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146275 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8121,
            "unit": "ns/op",
            "extra": "146275 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146275 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146275 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 165236,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7201 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 165236,
            "unit": "ns/op",
            "extra": "7201 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7201 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7201 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512010125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512010125A094101Federal",
            "value": 231380104,
            "unit": "1210428822512010125A094101Federal",
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
            "value": 949.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1253218 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 949.7,
            "unit": "ns/op",
            "extra": "1253218 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1253218 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1253218 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12145465 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.4,
            "unit": "ns/op",
            "extra": "12145465 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12145465 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12145465 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19077920 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.1,
            "unit": "ns/op",
            "extra": "19077920 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19077920 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19077920 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.77,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39915369 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.77,
            "unit": "ns/op",
            "extra": "39915369 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39915369 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39915369 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91741884 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "91741884 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91741884 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91741884 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.932,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198747607 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.932,
            "unit": "ns/op",
            "extra": "198747607 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "198747607 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "198747607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298463,
            "unit": "ns/op\t   57877 B/op\t     666 allocs/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298463,
            "unit": "ns/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57877,
            "unit": "B/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297099,
            "unit": "ns/op\t   57906 B/op\t     666 allocs/op",
            "extra": "4190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297099,
            "unit": "ns/op",
            "extra": "4190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57906,
            "unit": "B/op",
            "extra": "4190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173119,
            "unit": "ns/op\t   58073 B/op\t     669 allocs/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173119,
            "unit": "ns/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58073,
            "unit": "B/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6331 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171224,
            "unit": "ns/op\t   58103 B/op\t     669 allocs/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171224,
            "unit": "ns/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58103,
            "unit": "B/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355568,
            "unit": "ns/op\t   63643 B/op\t     726 allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355568,
            "unit": "ns/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63643,
            "unit": "B/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353327,
            "unit": "ns/op\t   63607 B/op\t     726 allocs/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353327,
            "unit": "ns/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350619,
            "unit": "ns/op\t   63587 B/op\t     726 allocs/op",
            "extra": "3469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350619,
            "unit": "ns/op",
            "extra": "3469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63587,
            "unit": "B/op",
            "extra": "3469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343303,
            "unit": "ns/op\t   63073 B/op\t     727 allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343303,
            "unit": "ns/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63073,
            "unit": "B/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3817 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47995318 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.01,
            "unit": "ns/op",
            "extra": "47995318 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47995318 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47995318 times\n4 procs"
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
          "id": "bff7528fee51ecb6d0aa91f18de2086fb2e8012e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6bd53c5278f22c8f502ebeba17fdbb82d723a035",
          "timestamp": "2025-11-30T03:24:11Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bff7528fee51ecb6d0aa91f18de2086fb2e8012e"
        },
        "date": 1764553255188,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13694,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87411 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13694,
            "unit": "ns/op",
            "extra": "87411 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87411 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87411 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44436,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44436,
            "unit": "ns/op",
            "extra": "28392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28392 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75249,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15928 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75249,
            "unit": "ns/op",
            "extra": "15928 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15928 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15928 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30816,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38844 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30816,
            "unit": "ns/op",
            "extra": "38844 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38844 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297368,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297368,
            "unit": "ns/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297415,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297415,
            "unit": "ns/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100104,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100104,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49444,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49444,
            "unit": "ns/op",
            "extra": "24300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24300 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 211509,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 211509,
            "unit": "ns/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8139,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144830 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8139,
            "unit": "ns/op",
            "extra": "144830 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144830 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144830 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155196,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7084 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155196,
            "unit": "ns/op",
            "extra": "7084 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7084 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512020140A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512020140A094101Federal",
            "value": 231380104,
            "unit": "1210428822512020140A094101Federal",
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
            "value": 967,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1249536 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 967,
            "unit": "ns/op",
            "extra": "1249536 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1249536 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1249536 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.16,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12249088 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.16,
            "unit": "ns/op",
            "extra": "12249088 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12249088 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12249088 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.24,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18909246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.24,
            "unit": "ns/op",
            "extra": "18909246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18909246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18909246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40188056 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.02,
            "unit": "ns/op",
            "extra": "40188056 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40188056 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40188056 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91791499 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.24,
            "unit": "ns/op",
            "extra": "91791499 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91791499 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91791499 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202922136 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.913,
            "unit": "ns/op",
            "extra": "202922136 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202922136 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202922136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298619,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298619,
            "unit": "ns/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
            "unit": "B/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 305278,
            "unit": "ns/op\t   57897 B/op\t     666 allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305278,
            "unit": "ns/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57897,
            "unit": "B/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179695,
            "unit": "ns/op\t   58080 B/op\t     669 allocs/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179695,
            "unit": "ns/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58080,
            "unit": "B/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172935,
            "unit": "ns/op\t   58097 B/op\t     669 allocs/op",
            "extra": "6183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172935,
            "unit": "ns/op",
            "extra": "6183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58097,
            "unit": "B/op",
            "extra": "6183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357842,
            "unit": "ns/op\t   63580 B/op\t     726 allocs/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357842,
            "unit": "ns/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63580,
            "unit": "B/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356940,
            "unit": "ns/op\t   63624 B/op\t     726 allocs/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356940,
            "unit": "ns/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63624,
            "unit": "B/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3344 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352740,
            "unit": "ns/op\t   63591 B/op\t     726 allocs/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352740,
            "unit": "ns/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63591,
            "unit": "B/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344391,
            "unit": "ns/op\t   63579 B/op\t     727 allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344391,
            "unit": "ns/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63579,
            "unit": "B/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4123 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43813172 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.09,
            "unit": "ns/op",
            "extra": "43813172 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43813172 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43813172 times\n4 procs"
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
          "id": "e92e5591d60ecb9d504165fc42739645d1b99643",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 561ecafbdd2e0d88097fef367fdbd7984ed4bd7e",
          "timestamp": "2025-12-01T15:59:23Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e92e5591d60ecb9d504165fc42739645d1b99643"
        },
        "date": 1764638336837,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13753,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86319 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13753,
            "unit": "ns/op",
            "extra": "86319 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86319 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86319 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42523,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28172 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42523,
            "unit": "ns/op",
            "extra": "28172 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28172 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28172 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75533,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15885 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75533,
            "unit": "ns/op",
            "extra": "15885 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15885 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15885 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31172,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31172,
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
            "value": 308018,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 308018,
            "unit": "ns/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298117,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298117,
            "unit": "ns/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100013,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100013,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49457,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24285 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49457,
            "unit": "ns/op",
            "extra": "24285 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24285 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24285 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203270,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5893 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203270,
            "unit": "ns/op",
            "extra": "5893 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
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
            "value": 8142,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144315 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8142,
            "unit": "ns/op",
            "extra": "144315 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144315 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144315 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155653,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155653,
            "unit": "ns/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512030118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512030118A094101Federal",
            "value": 231380104,
            "unit": "1210428822512030118A094101Federal",
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
            "value": 956.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1245264 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 956.2,
            "unit": "ns/op",
            "extra": "1245264 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1245264 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1245264 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12154353 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.3,
            "unit": "ns/op",
            "extra": "12154353 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12154353 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12154353 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.51,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18821774 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.51,
            "unit": "ns/op",
            "extra": "18821774 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18821774 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18821774 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40076949 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.02,
            "unit": "ns/op",
            "extra": "40076949 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40076949 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40076949 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91211823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "91211823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91211823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91211823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.925,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202601803 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.925,
            "unit": "ns/op",
            "extra": "202601803 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202601803 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202601803 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310331,
            "unit": "ns/op\t   57873 B/op\t     666 allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310331,
            "unit": "ns/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57873,
            "unit": "B/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300868,
            "unit": "ns/op\t   57891 B/op\t     666 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300868,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57891,
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
            "value": 177404,
            "unit": "ns/op\t   58075 B/op\t     669 allocs/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177404,
            "unit": "ns/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58075,
            "unit": "B/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 196625,
            "unit": "ns/op\t   58105 B/op\t     669 allocs/op",
            "extra": "6493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 196625,
            "unit": "ns/op",
            "extra": "6493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58105,
            "unit": "B/op",
            "extra": "6493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6493 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357747,
            "unit": "ns/op\t   63651 B/op\t     726 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357747,
            "unit": "ns/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63651,
            "unit": "B/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361889,
            "unit": "ns/op\t   63643 B/op\t     726 allocs/op",
            "extra": "3286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361889,
            "unit": "ns/op",
            "extra": "3286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63643,
            "unit": "B/op",
            "extra": "3286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356525,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356525,
            "unit": "ns/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 353261,
            "unit": "ns/op\t   63662 B/op\t     727 allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 353261,
            "unit": "ns/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63662,
            "unit": "B/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44630806 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.33,
            "unit": "ns/op",
            "extra": "44630806 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44630806 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44630806 times\n4 procs"
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
          "id": "9f64c482b2ee962aa6db9c6e95eb3afd70785f7a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5c393f55e5ad549668e87c198b7052f1d9f6f1b0",
          "timestamp": "2025-12-02T03:15:52Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9f64c482b2ee962aa6db9c6e95eb3afd70785f7a"
        },
        "date": 1764724752546,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13322,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88519 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13322,
            "unit": "ns/op",
            "extra": "88519 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88519 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36296,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "32740 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36296,
            "unit": "ns/op",
            "extra": "32740 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "32740 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32740 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72814,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "18120 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72814,
            "unit": "ns/op",
            "extra": "18120 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "18120 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "18120 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 26464,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "45325 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 26464,
            "unit": "ns/op",
            "extra": "45325 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "45325 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "45325 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 266811,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "4312 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 266811,
            "unit": "ns/op",
            "extra": "4312 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "4312 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4312 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 266493,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "4399 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 266493,
            "unit": "ns/op",
            "extra": "4399 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "4399 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4399 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 87256,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "13816 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 87256,
            "unit": "ns/op",
            "extra": "13816 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "13816 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "13816 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47024,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "25630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47024,
            "unit": "ns/op",
            "extra": "25630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "25630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25630 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198352,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198352,
            "unit": "ns/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6290 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8030,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "149107 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8030,
            "unit": "ns/op",
            "extra": "149107 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "149107 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "149107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145300,
            "unit": "ns/op\t   60919 B/op\t     717 allocs/op",
            "extra": "8212 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145300,
            "unit": "ns/op",
            "extra": "8212 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60919,
            "unit": "B/op",
            "extra": "8212 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "8212 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512040118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512040118A094101Federal",
            "value": 231380104,
            "unit": "1210428822512040118A094101Federal",
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
            "value": 973.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1230078 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 973.2,
            "unit": "ns/op",
            "extra": "1230078 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1230078 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1230078 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 84.93,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13970652 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 84.93,
            "unit": "ns/op",
            "extra": "13970652 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13970652 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13970652 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 54.87,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21168240 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 54.87,
            "unit": "ns/op",
            "extra": "21168240 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21168240 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21168240 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46038865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27,
            "unit": "ns/op",
            "extra": "46038865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "46038865 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "46038865 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98543655 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.3,
            "unit": "ns/op",
            "extra": "98543655 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "98543655 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "98543655 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230814554 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.213,
            "unit": "ns/op",
            "extra": "230814554 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230814554 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230814554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 272097,
            "unit": "ns/op\t   57882 B/op\t     666 allocs/op",
            "extra": "4468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 272097,
            "unit": "ns/op",
            "extra": "4468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57882,
            "unit": "B/op",
            "extra": "4468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 268388,
            "unit": "ns/op\t   57888 B/op\t     666 allocs/op",
            "extra": "4490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 268388,
            "unit": "ns/op",
            "extra": "4490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57888,
            "unit": "B/op",
            "extra": "4490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 198616,
            "unit": "ns/op\t   58069 B/op\t     669 allocs/op",
            "extra": "6182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 198616,
            "unit": "ns/op",
            "extra": "6182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58069,
            "unit": "B/op",
            "extra": "6182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6182 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 180763,
            "unit": "ns/op\t   58108 B/op\t     669 allocs/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 180763,
            "unit": "ns/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58108,
            "unit": "B/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 321282,
            "unit": "ns/op\t   63607 B/op\t     726 allocs/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 321282,
            "unit": "ns/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 318955,
            "unit": "ns/op\t   63621 B/op\t     726 allocs/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 318955,
            "unit": "ns/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63621,
            "unit": "B/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 317733,
            "unit": "ns/op\t   63583 B/op\t     726 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 317733,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63583,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 315574,
            "unit": "ns/op\t   63571 B/op\t     727 allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 315574,
            "unit": "ns/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63571,
            "unit": "B/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52009068 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.78,
            "unit": "ns/op",
            "extra": "52009068 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52009068 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52009068 times\n4 procs"
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
          "id": "9677fa8ec3323d092896c9fc095304655ce5ad29",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fb26fdf9601a61fc734cff991b798364d0473a00",
          "timestamp": "2025-12-03T03:14:48Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9677fa8ec3323d092896c9fc095304655ce5ad29"
        },
        "date": 1764811149585,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13428,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88104 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13428,
            "unit": "ns/op",
            "extra": "88104 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88104 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42224,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42224,
            "unit": "ns/op",
            "extra": "28641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28641 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28641 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75623,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "14638 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75623,
            "unit": "ns/op",
            "extra": "14638 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "14638 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "14638 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30704,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38887 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30704,
            "unit": "ns/op",
            "extra": "38887 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38887 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38887 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296535,
            "unit": "ns/op\t   58808 B/op\t     800 allocs/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296535,
            "unit": "ns/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58808,
            "unit": "B/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298546,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298546,
            "unit": "ns/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99154,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12142 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99154,
            "unit": "ns/op",
            "extra": "12142 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12142 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12142 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48844,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24568 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48844,
            "unit": "ns/op",
            "extra": "24568 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24568 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24568 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 211800,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 211800,
            "unit": "ns/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5690 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8151,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146751 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8151,
            "unit": "ns/op",
            "extra": "146751 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146751 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146751 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154238,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "6974 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154238,
            "unit": "ns/op",
            "extra": "6974 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "6974 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "6974 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512050118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512050118A094101Federal",
            "value": 231380104,
            "unit": "1210428822512050118A094101Federal",
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
            "value": 952.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1237154 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 952.5,
            "unit": "ns/op",
            "extra": "1237154 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1237154 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1237154 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.55,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12126534 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.55,
            "unit": "ns/op",
            "extra": "12126534 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12126534 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12126534 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.3,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18885126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.3,
            "unit": "ns/op",
            "extra": "18885126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18885126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18885126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.18,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39416529 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.18,
            "unit": "ns/op",
            "extra": "39416529 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39416529 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39416529 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91827511 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.54,
            "unit": "ns/op",
            "extra": "91827511 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91827511 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91827511 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.911,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202975192 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.911,
            "unit": "ns/op",
            "extra": "202975192 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202975192 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202975192 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303132,
            "unit": "ns/op\t   57885 B/op\t     666 allocs/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303132,
            "unit": "ns/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57885,
            "unit": "B/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297450,
            "unit": "ns/op\t   57899 B/op\t     666 allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297450,
            "unit": "ns/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57899,
            "unit": "B/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171181,
            "unit": "ns/op\t   58067 B/op\t     669 allocs/op",
            "extra": "6582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171181,
            "unit": "ns/op",
            "extra": "6582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58067,
            "unit": "B/op",
            "extra": "6582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174050,
            "unit": "ns/op\t   58108 B/op\t     669 allocs/op",
            "extra": "6154 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174050,
            "unit": "ns/op",
            "extra": "6154 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58108,
            "unit": "B/op",
            "extra": "6154 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6154 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354243,
            "unit": "ns/op\t   63627 B/op\t     726 allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354243,
            "unit": "ns/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63627,
            "unit": "B/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355769,
            "unit": "ns/op\t   63634 B/op\t     726 allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355769,
            "unit": "ns/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63634,
            "unit": "B/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353350,
            "unit": "ns/op\t   63565 B/op\t     726 allocs/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353350,
            "unit": "ns/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63565,
            "unit": "B/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341031,
            "unit": "ns/op\t   63572 B/op\t     727 allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341031,
            "unit": "ns/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63572,
            "unit": "B/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44705983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.02,
            "unit": "ns/op",
            "extra": "44705983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44705983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44705983 times\n4 procs"
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
          "id": "01104394fda979fad1c6682090a54e075e3d91cb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8327f7086ffa1b4d1eb7f529f01b8f0bc91497d4",
          "timestamp": "2025-12-04T03:16:47Z",
          "url": "https://github.com/moov-io/benchmarks/commit/01104394fda979fad1c6682090a54e075e3d91cb"
        },
        "date": 1764897581863,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13940,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87558 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13940,
            "unit": "ns/op",
            "extra": "87558 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87558 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87558 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38556,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "31496 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38556,
            "unit": "ns/op",
            "extra": "31496 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "31496 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "31496 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 68502,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16214 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 68502,
            "unit": "ns/op",
            "extra": "16214 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16214 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 26678,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "44792 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 26678,
            "unit": "ns/op",
            "extra": "44792 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "44792 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44792 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 272191,
            "unit": "ns/op\t   58806 B/op\t     800 allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 272191,
            "unit": "ns/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58806,
            "unit": "B/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 274384,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 274384,
            "unit": "ns/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 91929,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12612 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 91929,
            "unit": "ns/op",
            "extra": "12612 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12612 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49405,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24556 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49405,
            "unit": "ns/op",
            "extra": "24556 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24556 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24556 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201213,
            "unit": "ns/op\t   54710 B/op\t    2069 allocs/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201213,
            "unit": "ns/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54710,
            "unit": "B/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8349,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "126307 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8349,
            "unit": "ns/op",
            "extra": "126307 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "126307 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "126307 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153398,
            "unit": "ns/op\t   60923 B/op\t     717 allocs/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153398,
            "unit": "ns/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60923,
            "unit": "B/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512060119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512060119A094101Federal",
            "value": 231380104,
            "unit": "1210428822512060119A094101Federal",
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
            "value": 990.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1223178 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 990.9,
            "unit": "ns/op",
            "extra": "1223178 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1223178 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1223178 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 86.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13855606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 86.47,
            "unit": "ns/op",
            "extra": "13855606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13855606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13855606 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 57.49,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20614897 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 57.49,
            "unit": "ns/op",
            "extra": "20614897 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20614897 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20614897 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.94,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44099504 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.94,
            "unit": "ns/op",
            "extra": "44099504 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44099504 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44099504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96510276 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.21,
            "unit": "ns/op",
            "extra": "96510276 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "96510276 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "96510276 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.235,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "228107671 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.235,
            "unit": "ns/op",
            "extra": "228107671 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "228107671 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "228107671 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 290990,
            "unit": "ns/op\t   57880 B/op\t     666 allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 290990,
            "unit": "ns/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57880,
            "unit": "B/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 279089,
            "unit": "ns/op\t   57887 B/op\t     666 allocs/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 279089,
            "unit": "ns/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57887,
            "unit": "B/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 190024,
            "unit": "ns/op\t   58069 B/op\t     669 allocs/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 190024,
            "unit": "ns/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58069,
            "unit": "B/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 185601,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "5887 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 185601,
            "unit": "ns/op",
            "extra": "5887 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "5887 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5887 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 331732,
            "unit": "ns/op\t   63597 B/op\t     726 allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 331732,
            "unit": "ns/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63597,
            "unit": "B/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 325772,
            "unit": "ns/op\t   63591 B/op\t     726 allocs/op",
            "extra": "3496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 325772,
            "unit": "ns/op",
            "extra": "3496 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63591,
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
            "value": 326279,
            "unit": "ns/op\t   63607 B/op\t     726 allocs/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 326279,
            "unit": "ns/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 323204,
            "unit": "ns/op\t   63624 B/op\t     727 allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 323204,
            "unit": "ns/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63624,
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
            "value": 22.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52515868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.82,
            "unit": "ns/op",
            "extra": "52515868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52515868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52515868 times\n4 procs"
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
          "id": "be859ef813d7b260c6889a19dd203d09431e3a73",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2781a529ae90ff5661a7be4376719ba7e35a2985",
          "timestamp": "2025-12-05T03:16:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/be859ef813d7b260c6889a19dd203d09431e3a73"
        },
        "date": 1764983740521,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13836,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87570 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13836,
            "unit": "ns/op",
            "extra": "87570 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87570 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36765,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "32605 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36765,
            "unit": "ns/op",
            "extra": "32605 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "32605 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32605 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 66501,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "17923 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 66501,
            "unit": "ns/op",
            "extra": "17923 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "17923 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "17923 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 27379,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "44824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 27379,
            "unit": "ns/op",
            "extra": "44824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "44824 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 269790,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 269790,
            "unit": "ns/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 268692,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 268692,
            "unit": "ns/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 88356,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12608 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 88356,
            "unit": "ns/op",
            "extra": "12608 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12608 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12608 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47588,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "25274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47588,
            "unit": "ns/op",
            "extra": "25274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "25274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25274 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 192796,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 192796,
            "unit": "ns/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6159 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8117,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144741 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8117,
            "unit": "ns/op",
            "extra": "144741 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144741 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144741 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147604,
            "unit": "ns/op\t   60923 B/op\t     717 allocs/op",
            "extra": "7828 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147604,
            "unit": "ns/op",
            "extra": "7828 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60923,
            "unit": "B/op",
            "extra": "7828 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7828 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512070115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512070115A094101Federal",
            "value": 231380104,
            "unit": "1210428822512070115A094101Federal",
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1217053 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 986.8,
            "unit": "ns/op",
            "extra": "1217053 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1217053 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1217053 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 85.48,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13927197 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 85.48,
            "unit": "ns/op",
            "extra": "13927197 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13927197 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13927197 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 55.43,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21641169 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 55.43,
            "unit": "ns/op",
            "extra": "21641169 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21641169 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21641169 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.58,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45794078 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.58,
            "unit": "ns/op",
            "extra": "45794078 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "45794078 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45794078 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98724715 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.3,
            "unit": "ns/op",
            "extra": "98724715 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "98724715 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "98724715 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "231030939 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.214,
            "unit": "ns/op",
            "extra": "231030939 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "231030939 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "231030939 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 270469,
            "unit": "ns/op\t   57881 B/op\t     666 allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 270469,
            "unit": "ns/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57881,
            "unit": "B/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 272539,
            "unit": "ns/op\t   57892 B/op\t     666 allocs/op",
            "extra": "4340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 272539,
            "unit": "ns/op",
            "extra": "4340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57892,
            "unit": "B/op",
            "extra": "4340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178879,
            "unit": "ns/op\t   58082 B/op\t     669 allocs/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178879,
            "unit": "ns/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58082,
            "unit": "B/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 185117,
            "unit": "ns/op\t   58109 B/op\t     669 allocs/op",
            "extra": "6225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 185117,
            "unit": "ns/op",
            "extra": "6225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58109,
            "unit": "B/op",
            "extra": "6225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 336986,
            "unit": "ns/op\t   63604 B/op\t     726 allocs/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 336986,
            "unit": "ns/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63604,
            "unit": "B/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 323868,
            "unit": "ns/op\t   63603 B/op\t     726 allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 323868,
            "unit": "ns/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63603,
            "unit": "B/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 321207,
            "unit": "ns/op\t   63593 B/op\t     726 allocs/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 321207,
            "unit": "ns/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63593,
            "unit": "B/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 311196,
            "unit": "ns/op\t   63408 B/op\t     727 allocs/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 311196,
            "unit": "ns/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63408,
            "unit": "B/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4549 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52501971 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.78,
            "unit": "ns/op",
            "extra": "52501971 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52501971 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52501971 times\n4 procs"
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
          "id": "ce8d1066e7ec57dd0930ef6c0adfceca21cad5d0",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9314f120014cc49d525dcaa8d8691268f3896e98",
          "timestamp": "2025-12-06T03:07:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ce8d1066e7ec57dd0930ef6c0adfceca21cad5d0"
        },
        "date": 1765070783133,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13605,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86874 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13605,
            "unit": "ns/op",
            "extra": "86874 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86874 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86874 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41893,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41893,
            "unit": "ns/op",
            "extra": "28718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28718 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 79475,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16101 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 79475,
            "unit": "ns/op",
            "extra": "16101 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16101 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30903,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30903,
            "unit": "ns/op",
            "extra": "38660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38660 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296919,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296919,
            "unit": "ns/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298294,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298294,
            "unit": "ns/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3856 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99157,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12102 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99157,
            "unit": "ns/op",
            "extra": "12102 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12102 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12102 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49519,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24254 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49519,
            "unit": "ns/op",
            "extra": "24254 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24254 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24254 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207182,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5790 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207182,
            "unit": "ns/op",
            "extra": "5790 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5790 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5790 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8177,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "147277 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8177,
            "unit": "ns/op",
            "extra": "147277 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "147277 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147277 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156145,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7562 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156145,
            "unit": "ns/op",
            "extra": "7562 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7562 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7562 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512080125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512080125A094101Federal",
            "value": 231380104,
            "unit": "1210428822512080125A094101Federal",
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
            "value": 956.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1252135 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 956.9,
            "unit": "ns/op",
            "extra": "1252135 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1252135 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1252135 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.84,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12135681 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.84,
            "unit": "ns/op",
            "extra": "12135681 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12135681 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12135681 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.25,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18628440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.25,
            "unit": "ns/op",
            "extra": "18628440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18628440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18628440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.01,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40118937 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.01,
            "unit": "ns/op",
            "extra": "40118937 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40118937 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40118937 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 15.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91450832 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 15.11,
            "unit": "ns/op",
            "extra": "91450832 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91450832 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91450832 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.997,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202887808 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.997,
            "unit": "ns/op",
            "extra": "202887808 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202887808 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202887808 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299453,
            "unit": "ns/op\t   57887 B/op\t     666 allocs/op",
            "extra": "4125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299453,
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
            "value": 303566,
            "unit": "ns/op\t   57894 B/op\t     666 allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 303566,
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
            "value": 173835,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173835,
            "unit": "ns/op",
            "extra": "6457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177511,
            "unit": "ns/op\t   58113 B/op\t     669 allocs/op",
            "extra": "6405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177511,
            "unit": "ns/op",
            "extra": "6405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58113,
            "unit": "B/op",
            "extra": "6405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355884,
            "unit": "ns/op\t   63615 B/op\t     726 allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355884,
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
            "value": 351972,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351972,
            "unit": "ns/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355496,
            "unit": "ns/op\t   63613 B/op\t     726 allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355496,
            "unit": "ns/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63613,
            "unit": "B/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350397,
            "unit": "ns/op\t   63616 B/op\t     727 allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350397,
            "unit": "ns/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63616,
            "unit": "B/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48148527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.38,
            "unit": "ns/op",
            "extra": "48148527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48148527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48148527 times\n4 procs"
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
          "id": "6784e1befa59cf0cff682ac2f6939d2d49d5c8f9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f592c76911c832a875417f76af6d8ede0d7ccd55",
          "timestamp": "2025-12-07T03:24:51Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6784e1befa59cf0cff682ac2f6939d2d49d5c8f9"
        },
        "date": 1765156791014,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14058,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86025 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14058,
            "unit": "ns/op",
            "extra": "86025 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86025 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41915,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28566 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41915,
            "unit": "ns/op",
            "extra": "28566 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28566 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28566 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74676,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74676,
            "unit": "ns/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31091,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "37070 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31091,
            "unit": "ns/op",
            "extra": "37070 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "37070 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "37070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298537,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298537,
            "unit": "ns/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299234,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299234,
            "unit": "ns/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3878 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102187,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102187,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49657,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24050 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49657,
            "unit": "ns/op",
            "extra": "24050 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24050 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24050 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209681,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5641 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209681,
            "unit": "ns/op",
            "extra": "5641 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5641 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5641 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8162,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145522 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8162,
            "unit": "ns/op",
            "extra": "145522 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145522 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145522 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155954,
            "unit": "ns/op\t   60919 B/op\t     717 allocs/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155954,
            "unit": "ns/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60919,
            "unit": "B/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512090119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512090119A094101Federal",
            "value": 231380104,
            "unit": "1210428822512090119A094101Federal",
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
            "value": 957.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1247750 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 957.7,
            "unit": "ns/op",
            "extra": "1247750 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1247750 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1247750 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.35,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12176742 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.35,
            "unit": "ns/op",
            "extra": "12176742 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12176742 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12176742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.34,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18813114 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.34,
            "unit": "ns/op",
            "extra": "18813114 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18813114 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18813114 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40590308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.96,
            "unit": "ns/op",
            "extra": "40590308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40590308 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40590308 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91366858 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.52,
            "unit": "ns/op",
            "extra": "91366858 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91366858 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91366858 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.933,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203017591 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.933,
            "unit": "ns/op",
            "extra": "203017591 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203017591 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203017591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298058,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298058,
            "unit": "ns/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
            "unit": "B/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299669,
            "unit": "ns/op\t   57892 B/op\t     666 allocs/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299669,
            "unit": "ns/op",
            "extra": "4087 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57892,
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
            "value": 182035,
            "unit": "ns/op\t   58069 B/op\t     669 allocs/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 182035,
            "unit": "ns/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58069,
            "unit": "B/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177378,
            "unit": "ns/op\t   58113 B/op\t     669 allocs/op",
            "extra": "6054 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177378,
            "unit": "ns/op",
            "extra": "6054 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58113,
            "unit": "B/op",
            "extra": "6054 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6054 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364523,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364523,
            "unit": "ns/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 363540,
            "unit": "ns/op\t   63602 B/op\t     726 allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363540,
            "unit": "ns/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63602,
            "unit": "B/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 364166,
            "unit": "ns/op\t   63606 B/op\t     726 allocs/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 364166,
            "unit": "ns/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63606,
            "unit": "B/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350655,
            "unit": "ns/op\t   63609 B/op\t     727 allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350655,
            "unit": "ns/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63609,
            "unit": "B/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43496080 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.88,
            "unit": "ns/op",
            "extra": "43496080 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43496080 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43496080 times\n4 procs"
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
          "id": "14c169677516400a2ac813192c58cfa18861ef4c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3e65a0b4f6f2fa336a5ec8409149246449cce3bf",
          "timestamp": "2025-12-08T03:19:10Z",
          "url": "https://github.com/moov-io/benchmarks/commit/14c169677516400a2ac813192c58cfa18861ef4c"
        },
        "date": 1765243159527,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13632,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87420 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13632,
            "unit": "ns/op",
            "extra": "87420 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87420 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87420 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42245,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28503 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42245,
            "unit": "ns/op",
            "extra": "28503 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28503 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28503 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75042,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "14389 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75042,
            "unit": "ns/op",
            "extra": "14389 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "14389 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "14389 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31087,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38672 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31087,
            "unit": "ns/op",
            "extra": "38672 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38672 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38672 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 301010,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 301010,
            "unit": "ns/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 301461,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 301461,
            "unit": "ns/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102840,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102840,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49401,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24181 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49401,
            "unit": "ns/op",
            "extra": "24181 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24181 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24181 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210013,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210013,
            "unit": "ns/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5941 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8169,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145027 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8169,
            "unit": "ns/op",
            "extra": "145027 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145027 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145027 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157292,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157292,
            "unit": "ns/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512100118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512100118A094101Federal",
            "value": 231380104,
            "unit": "1210428822512100118A094101Federal",
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
            "value": 957.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1252183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 957.5,
            "unit": "ns/op",
            "extra": "1252183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1252183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1252183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12151954 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.1,
            "unit": "ns/op",
            "extra": "12151954 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12151954 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12151954 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.62,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18582051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.62,
            "unit": "ns/op",
            "extra": "18582051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18582051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18582051 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.93,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39652666 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.93,
            "unit": "ns/op",
            "extra": "39652666 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39652666 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39652666 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91393302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "91393302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91393302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91393302 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.911,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202780922 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.911,
            "unit": "ns/op",
            "extra": "202780922 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202780922 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202780922 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 308233,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 308233,
            "unit": "ns/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
            "unit": "B/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309894,
            "unit": "ns/op\t   57894 B/op\t     666 allocs/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309894,
            "unit": "ns/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57894,
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
            "value": 178444,
            "unit": "ns/op\t   58070 B/op\t     669 allocs/op",
            "extra": "6632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178444,
            "unit": "ns/op",
            "extra": "6632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58070,
            "unit": "B/op",
            "extra": "6632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175848,
            "unit": "ns/op\t   58099 B/op\t     669 allocs/op",
            "extra": "6248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175848,
            "unit": "ns/op",
            "extra": "6248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58099,
            "unit": "B/op",
            "extra": "6248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365619,
            "unit": "ns/op\t   63627 B/op\t     726 allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365619,
            "unit": "ns/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63627,
            "unit": "B/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 363393,
            "unit": "ns/op\t   63590 B/op\t     726 allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363393,
            "unit": "ns/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63590,
            "unit": "B/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354029,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354029,
            "unit": "ns/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63585,
            "unit": "B/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 359959,
            "unit": "ns/op\t   63661 B/op\t     727 allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 359959,
            "unit": "ns/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63661,
            "unit": "B/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44843908 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.9,
            "unit": "ns/op",
            "extra": "44843908 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44843908 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44843908 times\n4 procs"
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
          "id": "be4933c1a66d22ed7103135d677ffa9b2baffab2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 054a481797d42c3513d56d947937c8ce9094f372",
          "timestamp": "2025-12-09T03:16:31Z",
          "url": "https://github.com/moov-io/benchmarks/commit/be4933c1a66d22ed7103135d677ffa9b2baffab2"
        },
        "date": 1765329659730,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13618,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87002 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13618,
            "unit": "ns/op",
            "extra": "87002 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87002 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87002 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43539,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28410 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43539,
            "unit": "ns/op",
            "extra": "28410 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28410 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28410 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76572,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "14120 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76572,
            "unit": "ns/op",
            "extra": "14120 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "14120 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "14120 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31123,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38386 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31123,
            "unit": "ns/op",
            "extra": "38386 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38386 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38386 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297701,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297701,
            "unit": "ns/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 308382,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 308382,
            "unit": "ns/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3326 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99874,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99874,
            "unit": "ns/op",
            "extra": "12020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12020 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49012,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49012,
            "unit": "ns/op",
            "extra": "24244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24244 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 214731,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 214731,
            "unit": "ns/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5703 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8108,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146252 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8108,
            "unit": "ns/op",
            "extra": "146252 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146252 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146252 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154627,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7082 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154627,
            "unit": "ns/op",
            "extra": "7082 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7082 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7082 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512110120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512110120A094101Federal",
            "value": 231380104,
            "unit": "1210428822512110120A094101Federal",
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
            "value": 959.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1251024 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 959.9,
            "unit": "ns/op",
            "extra": "1251024 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1251024 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1251024 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12191142 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.7,
            "unit": "ns/op",
            "extra": "12191142 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12191142 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12191142 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.3,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18778336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.3,
            "unit": "ns/op",
            "extra": "18778336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18778336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18778336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39955022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.86,
            "unit": "ns/op",
            "extra": "39955022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39955022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39955022 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91421584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "91421584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91421584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91421584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.918,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202946594 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.918,
            "unit": "ns/op",
            "extra": "202946594 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202946594 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202946594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297502,
            "unit": "ns/op\t   57877 B/op\t     666 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297502,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57877,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309039,
            "unit": "ns/op\t   57901 B/op\t     666 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309039,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57901,
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
            "value": 171558,
            "unit": "ns/op\t   58070 B/op\t     669 allocs/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171558,
            "unit": "ns/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58070,
            "unit": "B/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170948,
            "unit": "ns/op\t   58106 B/op\t     669 allocs/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170948,
            "unit": "ns/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58106,
            "unit": "B/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356982,
            "unit": "ns/op\t   63606 B/op\t     726 allocs/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356982,
            "unit": "ns/op",
            "extra": "3367 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63606,
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
            "value": 352867,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352867,
            "unit": "ns/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348947,
            "unit": "ns/op\t   63594 B/op\t     726 allocs/op",
            "extra": "3428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348947,
            "unit": "ns/op",
            "extra": "3428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63594,
            "unit": "B/op",
            "extra": "3428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346056,
            "unit": "ns/op\t   63622 B/op\t     727 allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346056,
            "unit": "ns/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63622,
            "unit": "B/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44957288 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.98,
            "unit": "ns/op",
            "extra": "44957288 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44957288 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44957288 times\n4 procs"
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
          "id": "3b15abef74120a15f35ac9442f5c54f050104647",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for cee2f105f0dc37390683b6de9017e3dba638c9e2",
          "timestamp": "2025-12-10T03:20:06Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3b15abef74120a15f35ac9442f5c54f050104647"
        },
        "date": 1765416110696,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13592,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13592,
            "unit": "ns/op",
            "extra": "88096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41526,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28815 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41526,
            "unit": "ns/op",
            "extra": "28815 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28815 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28815 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78932,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16178 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78932,
            "unit": "ns/op",
            "extra": "16178 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16178 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16178 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30992,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "39196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30992,
            "unit": "ns/op",
            "extra": "39196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "39196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "39196 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296158,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296158,
            "unit": "ns/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3861 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296652,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296652,
            "unit": "ns/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100029,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100029,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49580,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "24100 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49580,
            "unit": "ns/op",
            "extra": "24100 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "24100 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24100 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206928,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206928,
            "unit": "ns/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6230 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8196,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "125287 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8196,
            "unit": "ns/op",
            "extra": "125287 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "125287 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "125287 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156169,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7588 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156169,
            "unit": "ns/op",
            "extra": "7588 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7588 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7588 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512120121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512120121A094101Federal",
            "value": 231380104,
            "unit": "1210428822512120121A094101Federal",
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
            "value": 956.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1260409 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 956.6,
            "unit": "ns/op",
            "extra": "1260409 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1260409 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1260409 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.92,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12106000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.92,
            "unit": "ns/op",
            "extra": "12106000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12106000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12106000 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.01,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18956044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.01,
            "unit": "ns/op",
            "extra": "18956044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18956044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18956044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.36,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40420314 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.36,
            "unit": "ns/op",
            "extra": "40420314 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40420314 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40420314 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91722768 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.43,
            "unit": "ns/op",
            "extra": "91722768 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91722768 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91722768 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202942416 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.92,
            "unit": "ns/op",
            "extra": "202942416 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202942416 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202942416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299671,
            "unit": "ns/op\t   57885 B/op\t     666 allocs/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299671,
            "unit": "ns/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57885,
            "unit": "B/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295663,
            "unit": "ns/op\t   57901 B/op\t     666 allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295663,
            "unit": "ns/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57901,
            "unit": "B/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 196688,
            "unit": "ns/op\t   58080 B/op\t     669 allocs/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 196688,
            "unit": "ns/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58080,
            "unit": "B/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171223,
            "unit": "ns/op\t   58101 B/op\t     669 allocs/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171223,
            "unit": "ns/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58101,
            "unit": "B/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359355,
            "unit": "ns/op\t   63636 B/op\t     726 allocs/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359355,
            "unit": "ns/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63636,
            "unit": "B/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353832,
            "unit": "ns/op\t   63587 B/op\t     726 allocs/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353832,
            "unit": "ns/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63587,
            "unit": "B/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359770,
            "unit": "ns/op\t   63610 B/op\t     726 allocs/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359770,
            "unit": "ns/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63610,
            "unit": "B/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3625 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343020,
            "unit": "ns/op\t   63562 B/op\t     727 allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343020,
            "unit": "ns/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63562,
            "unit": "B/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47647359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.99,
            "unit": "ns/op",
            "extra": "47647359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47647359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47647359 times\n4 procs"
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
          "id": "76849cefe43823baf42a844d6b0754107aab7bda",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 83481f934bf6dfca266b433ca638c403621e5e37",
          "timestamp": "2025-12-11T03:22:21Z",
          "url": "https://github.com/moov-io/benchmarks/commit/76849cefe43823baf42a844d6b0754107aab7bda"
        },
        "date": 1765502495108,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13665,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88162 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13665,
            "unit": "ns/op",
            "extra": "88162 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88162 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88162 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37471,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "31725 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37471,
            "unit": "ns/op",
            "extra": "31725 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "31725 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "31725 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 68087,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15715 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 68087,
            "unit": "ns/op",
            "extra": "15715 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15715 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15715 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 27022,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "44842 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 27022,
            "unit": "ns/op",
            "extra": "44842 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "44842 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44842 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 272298,
            "unit": "ns/op\t   58806 B/op\t     800 allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 272298,
            "unit": "ns/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58806,
            "unit": "B/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 275224,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 275224,
            "unit": "ns/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4327 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 89518,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "13182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 89518,
            "unit": "ns/op",
            "extra": "13182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "13182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "13182 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47902,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24938 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47902,
            "unit": "ns/op",
            "extra": "24938 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24938 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24938 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198807,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198807,
            "unit": "ns/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6253 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8103,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "148921 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8103,
            "unit": "ns/op",
            "extra": "148921 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "148921 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148921 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149207,
            "unit": "ns/op\t   60922 B/op\t     717 allocs/op",
            "extra": "7612 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149207,
            "unit": "ns/op",
            "extra": "7612 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60922,
            "unit": "B/op",
            "extra": "7612 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512130120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512130120A094101Federal",
            "value": 231380104,
            "unit": "1210428822512130120A094101Federal",
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
            "value": 989.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1209447 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 989.5,
            "unit": "ns/op",
            "extra": "1209447 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1209447 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1209447 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 85.84,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13915754 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 85.84,
            "unit": "ns/op",
            "extra": "13915754 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13915754 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13915754 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 55.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20518052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 55.5,
            "unit": "ns/op",
            "extra": "20518052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20518052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20518052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.79,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45831262 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.79,
            "unit": "ns/op",
            "extra": "45831262 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "45831262 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45831262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98337102 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.39,
            "unit": "ns/op",
            "extra": "98337102 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "98337102 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "98337102 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "228128631 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.217,
            "unit": "ns/op",
            "extra": "228128631 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "228128631 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "228128631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 275982,
            "unit": "ns/op\t   57871 B/op\t     666 allocs/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 275982,
            "unit": "ns/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57871,
            "unit": "B/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296875,
            "unit": "ns/op\t   57894 B/op\t     666 allocs/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296875,
            "unit": "ns/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57894,
            "unit": "B/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 186558,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 186558,
            "unit": "ns/op",
            "extra": "6292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 186854,
            "unit": "ns/op\t   58105 B/op\t     669 allocs/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 186854,
            "unit": "ns/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58105,
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
            "value": 328311,
            "unit": "ns/op\t   63603 B/op\t     726 allocs/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 328311,
            "unit": "ns/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63603,
            "unit": "B/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 327130,
            "unit": "ns/op\t   63641 B/op\t     726 allocs/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 327130,
            "unit": "ns/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63641,
            "unit": "B/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 327952,
            "unit": "ns/op\t   63604 B/op\t     726 allocs/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 327952,
            "unit": "ns/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63604,
            "unit": "B/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3753 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 319561,
            "unit": "ns/op\t   63607 B/op\t     727 allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 319561,
            "unit": "ns/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51302797 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.81,
            "unit": "ns/op",
            "extra": "51302797 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51302797 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51302797 times\n4 procs"
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
          "id": "e409deab2013cf407c1fa8df4fedc20516923f58",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 872ac22ed941b6985c194bc88eae74f35c076f3b",
          "timestamp": "2025-12-12T03:21:06Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e409deab2013cf407c1fa8df4fedc20516923f58"
        },
        "date": 1765588611498,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13568,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87256 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13568,
            "unit": "ns/op",
            "extra": "87256 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87256 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42927,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42927,
            "unit": "ns/op",
            "extra": "28603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28603 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75234,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "14575 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75234,
            "unit": "ns/op",
            "extra": "14575 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "14575 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "14575 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30810,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38137 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30810,
            "unit": "ns/op",
            "extra": "38137 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38137 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38137 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297034,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297034,
            "unit": "ns/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296620,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296620,
            "unit": "ns/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3846 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98822,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12141 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98822,
            "unit": "ns/op",
            "extra": "12141 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12141 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12141 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49223,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49223,
            "unit": "ns/op",
            "extra": "24154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24154 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206580,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206580,
            "unit": "ns/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8209,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146470 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8209,
            "unit": "ns/op",
            "extra": "146470 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146470 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146470 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154384,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154384,
            "unit": "ns/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7052 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512140116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512140116A094101Federal",
            "value": 231380104,
            "unit": "1210428822512140116A094101Federal",
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
            "value": 959.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1256449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 959.2,
            "unit": "ns/op",
            "extra": "1256449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1256449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1256449 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.13,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12146811 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.13,
            "unit": "ns/op",
            "extra": "12146811 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12146811 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12146811 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.28,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18918336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.28,
            "unit": "ns/op",
            "extra": "18918336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18918336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18918336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.89,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40356997 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.89,
            "unit": "ns/op",
            "extra": "40356997 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40356997 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40356997 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91018588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "91018588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91018588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91018588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.922,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202030683 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.922,
            "unit": "ns/op",
            "extra": "202030683 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202030683 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202030683 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300260,
            "unit": "ns/op\t   57876 B/op\t     666 allocs/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300260,
            "unit": "ns/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57876,
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
            "value": 303916,
            "unit": "ns/op\t   57889 B/op\t     666 allocs/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 303916,
            "unit": "ns/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57889,
            "unit": "B/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170964,
            "unit": "ns/op\t   58064 B/op\t     669 allocs/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170964,
            "unit": "ns/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58064,
            "unit": "B/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177365,
            "unit": "ns/op\t   58116 B/op\t     669 allocs/op",
            "extra": "6270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177365,
            "unit": "ns/op",
            "extra": "6270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58116,
            "unit": "B/op",
            "extra": "6270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355989,
            "unit": "ns/op\t   63653 B/op\t     726 allocs/op",
            "extra": "3423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355989,
            "unit": "ns/op",
            "extra": "3423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63653,
            "unit": "B/op",
            "extra": "3423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352279,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352279,
            "unit": "ns/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356969,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3543 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356969,
            "unit": "ns/op",
            "extra": "3543 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3543 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3543 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345076,
            "unit": "ns/op\t   63111 B/op\t     727 allocs/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345076,
            "unit": "ns/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63111,
            "unit": "B/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48227139 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.91,
            "unit": "ns/op",
            "extra": "48227139 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48227139 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48227139 times\n4 procs"
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
          "id": "43783cb94a8d80acfe1207e704f59f97b2762d9b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6c7254cafe2023c2286a8aaa990c5ea46375157d",
          "timestamp": "2025-12-13T03:13:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/43783cb94a8d80acfe1207e704f59f97b2762d9b"
        },
        "date": 1765675601159,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13721,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86602 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13721,
            "unit": "ns/op",
            "extra": "86602 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86602 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86602 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38607,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "32204 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38607,
            "unit": "ns/op",
            "extra": "32204 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "32204 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32204 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69538,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "17590 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69538,
            "unit": "ns/op",
            "extra": "17590 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "17590 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "17590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28242,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "43243 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28242,
            "unit": "ns/op",
            "extra": "43243 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "43243 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "43243 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 271766,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 271766,
            "unit": "ns/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4171 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 270896,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 270896,
            "unit": "ns/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58805,
            "unit": "B/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 90822,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12349 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 90822,
            "unit": "ns/op",
            "extra": "12349 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12349 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12349 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 51118,
            "unit": "ns/op\t   34783 B/op\t     234 allocs/op",
            "extra": "23738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51118,
            "unit": "ns/op",
            "extra": "23738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34783,
            "unit": "B/op",
            "extra": "23738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23738 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195827,
            "unit": "ns/op\t   54710 B/op\t    2069 allocs/op",
            "extra": "6014 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195827,
            "unit": "ns/op",
            "extra": "6014 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54710,
            "unit": "B/op",
            "extra": "6014 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6014 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8177,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144788 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8177,
            "unit": "ns/op",
            "extra": "144788 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144788 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144788 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148585,
            "unit": "ns/op\t   60924 B/op\t     717 allocs/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148585,
            "unit": "ns/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60924,
            "unit": "B/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7952 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512150126A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512150126A094101Federal",
            "value": 231380104,
            "unit": "1210428822512150126A094101Federal",
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
            "value": 85.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13928754 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 85.4,
            "unit": "ns/op",
            "extra": "13928754 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13928754 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13928754 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 55.72,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21108174 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 55.72,
            "unit": "ns/op",
            "extra": "21108174 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21108174 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21108174 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.75,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45251418 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.75,
            "unit": "ns/op",
            "extra": "45251418 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "45251418 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45251418 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98155582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.16,
            "unit": "ns/op",
            "extra": "98155582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "98155582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "98155582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.226,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230187745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.226,
            "unit": "ns/op",
            "extra": "230187745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230187745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230187745 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 280348,
            "unit": "ns/op\t   57883 B/op\t     666 allocs/op",
            "extra": "4472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 280348,
            "unit": "ns/op",
            "extra": "4472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57883,
            "unit": "B/op",
            "extra": "4472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 274725,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "4305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 274725,
            "unit": "ns/op",
            "extra": "4305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "4305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4305 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 189377,
            "unit": "ns/op\t   58080 B/op\t     669 allocs/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 189377,
            "unit": "ns/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58080,
            "unit": "B/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5917 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 193851,
            "unit": "ns/op\t   58115 B/op\t     669 allocs/op",
            "extra": "6003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 193851,
            "unit": "ns/op",
            "extra": "6003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58115,
            "unit": "B/op",
            "extra": "6003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 335944,
            "unit": "ns/op\t   63597 B/op\t     726 allocs/op",
            "extra": "3634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 335944,
            "unit": "ns/op",
            "extra": "3634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63597,
            "unit": "B/op",
            "extra": "3634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 333130,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 333130,
            "unit": "ns/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63585,
            "unit": "B/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 330582,
            "unit": "ns/op\t   63595 B/op\t     726 allocs/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 330582,
            "unit": "ns/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63595,
            "unit": "B/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 328664,
            "unit": "ns/op\t   63521 B/op\t     727 allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 328664,
            "unit": "ns/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63521,
            "unit": "B/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52272006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.9,
            "unit": "ns/op",
            "extra": "52272006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52272006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52272006 times\n4 procs"
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
          "id": "1afde07fddec6aeeba6dc2c09ebf92d1636f3c48",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 099b02328955b9427727ccb61d46b1a2ab4e82cd",
          "timestamp": "2025-12-14T03:26:29Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1afde07fddec6aeeba6dc2c09ebf92d1636f3c48"
        },
        "date": 1765761829851,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13580,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87717 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13580,
            "unit": "ns/op",
            "extra": "87717 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87717 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87717 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42092,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28386 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42092,
            "unit": "ns/op",
            "extra": "28386 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28386 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28386 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75002,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15972 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75002,
            "unit": "ns/op",
            "extra": "15972 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15972 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15972 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31034,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31034,
            "unit": "ns/op",
            "extra": "38829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296839,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296839,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 314298,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 314298,
            "unit": "ns/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102427,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102427,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49206,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "23416 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49206,
            "unit": "ns/op",
            "extra": "23416 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "23416 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "23416 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204899,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5616 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204899,
            "unit": "ns/op",
            "extra": "5616 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5616 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5616 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8061,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146198 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8061,
            "unit": "ns/op",
            "extra": "146198 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146198 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146198 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155277,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7036 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155277,
            "unit": "ns/op",
            "extra": "7036 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7036 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7036 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512160123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512160123A094101Federal",
            "value": 231380104,
            "unit": "1210428822512160123A094101Federal",
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
            "value": 954.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1219345 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 954.1,
            "unit": "ns/op",
            "extra": "1219345 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1219345 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1219345 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.91,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11406789 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.91,
            "unit": "ns/op",
            "extra": "11406789 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11406789 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11406789 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.64,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18641775 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.64,
            "unit": "ns/op",
            "extra": "18641775 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18641775 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18641775 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39425664 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.03,
            "unit": "ns/op",
            "extra": "39425664 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39425664 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39425664 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90165044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "90165044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90165044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90165044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202796424 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202796424 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202796424 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202796424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 311505,
            "unit": "ns/op\t   57873 B/op\t     666 allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 311505,
            "unit": "ns/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57873,
            "unit": "B/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297654,
            "unit": "ns/op\t   57903 B/op\t     666 allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297654,
            "unit": "ns/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57903,
            "unit": "B/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171922,
            "unit": "ns/op\t   58091 B/op\t     669 allocs/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171922,
            "unit": "ns/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58091,
            "unit": "B/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 183113,
            "unit": "ns/op\t   58110 B/op\t     669 allocs/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 183113,
            "unit": "ns/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58110,
            "unit": "B/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360133,
            "unit": "ns/op\t   63607 B/op\t     726 allocs/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360133,
            "unit": "ns/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63607,
            "unit": "B/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 390103,
            "unit": "ns/op\t   63640 B/op\t     726 allocs/op",
            "extra": "2874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 390103,
            "unit": "ns/op",
            "extra": "2874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63640,
            "unit": "B/op",
            "extra": "2874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "2874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353827,
            "unit": "ns/op\t   63571 B/op\t     726 allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353827,
            "unit": "ns/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63571,
            "unit": "B/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350774,
            "unit": "ns/op\t   63617 B/op\t     727 allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350774,
            "unit": "ns/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63617,
            "unit": "B/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48108591 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.92,
            "unit": "ns/op",
            "extra": "48108591 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48108591 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48108591 times\n4 procs"
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
          "id": "06455622833553d50d09cbe648d332dbc8bbfed8",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ee6bc25fdf85eb6ef07f7f11377a0ce13c7fb1c4",
          "timestamp": "2025-12-15T03:27:41Z",
          "url": "https://github.com/moov-io/benchmarks/commit/06455622833553d50d09cbe648d332dbc8bbfed8"
        },
        "date": 1765848147919,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13530,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88087 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13530,
            "unit": "ns/op",
            "extra": "88087 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88087 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88087 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43015,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43015,
            "unit": "ns/op",
            "extra": "28196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28196 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74805,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15974 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74805,
            "unit": "ns/op",
            "extra": "15974 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15974 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15974 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32686,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38314 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32686,
            "unit": "ns/op",
            "extra": "38314 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38314 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38314 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 299961,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 299961,
            "unit": "ns/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299071,
            "unit": "ns/op\t   59061 B/op\t     810 allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299071,
            "unit": "ns/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59061,
            "unit": "B/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101063,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101063,
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
            "value": 49726,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24142 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49726,
            "unit": "ns/op",
            "extra": "24142 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24142 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24142 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199545,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199545,
            "unit": "ns/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
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
            "value": 8237,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145309 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8237,
            "unit": "ns/op",
            "extra": "145309 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145309 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145309 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 171537,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 171537,
            "unit": "ns/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512170121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512170121A094101Federal",
            "value": 231380104,
            "unit": "1210428822512170121A094101Federal",
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
            "value": 981.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1230344 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 981.5,
            "unit": "ns/op",
            "extra": "1230344 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1230344 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1230344 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.11,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12065575 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.11,
            "unit": "ns/op",
            "extra": "12065575 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12065575 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12065575 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.67,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18818744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.67,
            "unit": "ns/op",
            "extra": "18818744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18818744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18818744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.29,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39867166 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.29,
            "unit": "ns/op",
            "extra": "39867166 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39867166 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39867166 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91478307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.49,
            "unit": "ns/op",
            "extra": "91478307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91478307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91478307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.934,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202458590 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.934,
            "unit": "ns/op",
            "extra": "202458590 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202458590 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202458590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299480,
            "unit": "ns/op\t   57882 B/op\t     666 allocs/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299480,
            "unit": "ns/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57882,
            "unit": "B/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304196,
            "unit": "ns/op\t   57888 B/op\t     666 allocs/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304196,
            "unit": "ns/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57888,
            "unit": "B/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3807 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175405,
            "unit": "ns/op\t   58074 B/op\t     669 allocs/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175405,
            "unit": "ns/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58074,
            "unit": "B/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 182497,
            "unit": "ns/op\t   58100 B/op\t     669 allocs/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 182497,
            "unit": "ns/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58100,
            "unit": "B/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365587,
            "unit": "ns/op\t   63617 B/op\t     726 allocs/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365587,
            "unit": "ns/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63617,
            "unit": "B/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358162,
            "unit": "ns/op\t   63609 B/op\t     726 allocs/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358162,
            "unit": "ns/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63609,
            "unit": "B/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359139,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359139,
            "unit": "ns/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63608,
            "unit": "B/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356877,
            "unit": "ns/op\t   63110 B/op\t     727 allocs/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356877,
            "unit": "ns/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63110,
            "unit": "B/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47735058 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.27,
            "unit": "ns/op",
            "extra": "47735058 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47735058 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47735058 times\n4 procs"
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
          "id": "2bd3b67504dc79ad82daa0c0c16c64eb8678bcab",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 95dec838c3f779857c655238a0b0e0dcc90fed47",
          "timestamp": "2025-12-16T03:21:51Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2bd3b67504dc79ad82daa0c0c16c64eb8678bcab"
        },
        "date": 1765934246867,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13468,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87949 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13468,
            "unit": "ns/op",
            "extra": "87949 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87949 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87949 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42131,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28557 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42131,
            "unit": "ns/op",
            "extra": "28557 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28557 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28557 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74585,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16095 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74585,
            "unit": "ns/op",
            "extra": "16095 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16095 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30951,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38743 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30951,
            "unit": "ns/op",
            "extra": "38743 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38743 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38743 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298112,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298112,
            "unit": "ns/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303706,
            "unit": "ns/op\t   59058 B/op\t     810 allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303706,
            "unit": "ns/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59058,
            "unit": "B/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99276,
            "unit": "ns/op\t   29718 B/op\t     264 allocs/op",
            "extra": "11336 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99276,
            "unit": "ns/op",
            "extra": "11336 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29718,
            "unit": "B/op",
            "extra": "11336 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "11336 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49009,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24286 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49009,
            "unit": "ns/op",
            "extra": "24286 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24286 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24286 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199659,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6058 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199659,
            "unit": "ns/op",
            "extra": "6058 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6058 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6058 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8052,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144930 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8052,
            "unit": "ns/op",
            "extra": "144930 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144930 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144930 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154512,
            "unit": "ns/op\t   61097 B/op\t     721 allocs/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154512,
            "unit": "ns/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61097,
            "unit": "B/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512180116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512180116A094101Federal",
            "value": 231380104,
            "unit": "1210428822512180116A094101Federal",
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
            "value": 974.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1236183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 974.4,
            "unit": "ns/op",
            "extra": "1236183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1236183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1236183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.94,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12090039 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.94,
            "unit": "ns/op",
            "extra": "12090039 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12090039 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12090039 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.11,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18732144 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.11,
            "unit": "ns/op",
            "extra": "18732144 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18732144 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18732144 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.74,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40711702 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.74,
            "unit": "ns/op",
            "extra": "40711702 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40711702 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40711702 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91440477 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91440477 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91440477 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91440477 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.927,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200039180 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.927,
            "unit": "ns/op",
            "extra": "200039180 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "200039180 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "200039180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298966,
            "unit": "ns/op\t   57870 B/op\t     666 allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298966,
            "unit": "ns/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57870,
            "unit": "B/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300087,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300087,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173926,
            "unit": "ns/op\t   58080 B/op\t     669 allocs/op",
            "extra": "5834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173926,
            "unit": "ns/op",
            "extra": "5834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58080,
            "unit": "B/op",
            "extra": "5834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174111,
            "unit": "ns/op\t   58101 B/op\t     669 allocs/op",
            "extra": "6408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174111,
            "unit": "ns/op",
            "extra": "6408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58101,
            "unit": "B/op",
            "extra": "6408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361129,
            "unit": "ns/op\t   63589 B/op\t     726 allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361129,
            "unit": "ns/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63589,
            "unit": "B/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361175,
            "unit": "ns/op\t   63612 B/op\t     726 allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361175,
            "unit": "ns/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63612,
            "unit": "B/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355107,
            "unit": "ns/op\t   63599 B/op\t     726 allocs/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355107,
            "unit": "ns/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63599,
            "unit": "B/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3477 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342767,
            "unit": "ns/op\t   63578 B/op\t     727 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342767,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63578,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45077270 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.9,
            "unit": "ns/op",
            "extra": "45077270 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45077270 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45077270 times\n4 procs"
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
          "id": "3da6c3ee5037e5b5686e81c2e80b72ebe6c7ba1b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 09902edd7838b38cd9d0b95ae6e0310825c65e02",
          "timestamp": "2025-12-17T03:17:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3da6c3ee5037e5b5686e81c2e80b72ebe6c7ba1b"
        },
        "date": 1766020685848,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13610,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87542 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13610,
            "unit": "ns/op",
            "extra": "87542 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87542 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44744,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28276 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44744,
            "unit": "ns/op",
            "extra": "28276 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28276 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28276 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75302,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15763 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75302,
            "unit": "ns/op",
            "extra": "15763 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15763 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15763 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31631,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31631,
            "unit": "ns/op",
            "extra": "38392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38392 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 302476,
            "unit": "ns/op\t   59059 B/op\t     810 allocs/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 302476,
            "unit": "ns/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 59059,
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
            "value": 301738,
            "unit": "ns/op\t   59060 B/op\t     810 allocs/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 301738,
            "unit": "ns/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 59060,
            "unit": "B/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 810,
            "unit": "allocs/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 107032,
            "unit": "ns/op\t   29719 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 107032,
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
            "value": 49696,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49696,
            "unit": "ns/op",
            "extra": "24049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24049 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205001,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5842 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205001,
            "unit": "ns/op",
            "extra": "5842 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5842 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5842 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8126,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "145821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8126,
            "unit": "ns/op",
            "extra": "145821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "145821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145821 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155412,
            "unit": "ns/op\t   61096 B/op\t     721 allocs/op",
            "extra": "7413 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155412,
            "unit": "ns/op",
            "extra": "7413 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61096,
            "unit": "B/op",
            "extra": "7413 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7413 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822512190117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822512190117A094101Federal",
            "value": 231380104,
            "unit": "1210428822512190117A094101Federal",
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
            "value": 972.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1234656 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 972.5,
            "unit": "ns/op",
            "extra": "1234656 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1234656 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1234656 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.25,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12206448 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.25,
            "unit": "ns/op",
            "extra": "12206448 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12206448 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12206448 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.6,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16310851 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.6,
            "unit": "ns/op",
            "extra": "16310851 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16310851 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16310851 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "37331709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.87,
            "unit": "ns/op",
            "extra": "37331709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "37331709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "37331709 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90885907 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "90885907 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90885907 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90885907 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202661937 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "202661937 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202661937 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202661937 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305713,
            "unit": "ns/op\t   57875 B/op\t     666 allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305713,
            "unit": "ns/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57875,
            "unit": "B/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 307431,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 307431,
            "unit": "ns/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176282,
            "unit": "ns/op\t   58077 B/op\t     669 allocs/op",
            "extra": "6204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176282,
            "unit": "ns/op",
            "extra": "6204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58077,
            "unit": "B/op",
            "extra": "6204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177454,
            "unit": "ns/op\t   58107 B/op\t     669 allocs/op",
            "extra": "6210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177454,
            "unit": "ns/op",
            "extra": "6210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58107,
            "unit": "B/op",
            "extra": "6210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6210 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 369802,
            "unit": "ns/op\t   63654 B/op\t     726 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 369802,
            "unit": "ns/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63654,
            "unit": "B/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 363738,
            "unit": "ns/op\t   63606 B/op\t     726 allocs/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363738,
            "unit": "ns/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63606,
            "unit": "B/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357410,
            "unit": "ns/op\t   63639 B/op\t     726 allocs/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357410,
            "unit": "ns/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63639,
            "unit": "B/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3303 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348274,
            "unit": "ns/op\t   63658 B/op\t     727 allocs/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348274,
            "unit": "ns/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63658,
            "unit": "B/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48173307 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.15,
            "unit": "ns/op",
            "extra": "48173307 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48173307 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48173307 times\n4 procs"
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