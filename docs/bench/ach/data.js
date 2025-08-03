window.BENCHMARK_DATA = {
  "lastUpdate": 1754185305472,
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
          "id": "5524d76c40f3c30567742f41745ef797fa3930f0",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0795b2c1cb350660ab9ea1c02199d78e3dbf6f36",
          "timestamp": "2025-07-09T03:20:10Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5524d76c40f3c30567742f41745ef797fa3930f0"
        },
        "date": 1752110476960,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11789,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99283 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11789,
            "unit": "ns/op",
            "extra": "99283 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99283 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99283 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39505,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "30548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39505,
            "unit": "ns/op",
            "extra": "30548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "30548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30548 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71882,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16653 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71882,
            "unit": "ns/op",
            "extra": "16653 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16653 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16653 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29234,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "40593 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29234,
            "unit": "ns/op",
            "extra": "40593 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "40593 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40593 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291073,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291073,
            "unit": "ns/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290589,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290589,
            "unit": "ns/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3927 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100167,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100167,
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
            "value": 44471,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27345 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44471,
            "unit": "ns/op",
            "extra": "27345 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27345 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27345 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202213,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202213,
            "unit": "ns/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5752,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "204612 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5752,
            "unit": "ns/op",
            "extra": "204612 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "204612 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "204612 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149366,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7566 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149366,
            "unit": "ns/op",
            "extra": "7566 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7566 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7566 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507110120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507110120A094101Federal",
            "value": 231380104,
            "unit": "1210428822507110120A094101Federal",
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
            "value": 1046,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1046,
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
            "extra": "11738883 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "11738883 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11738883 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11738883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.73,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19053724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.73,
            "unit": "ns/op",
            "extra": "19053724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19053724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19053724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.88,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40422823 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.88,
            "unit": "ns/op",
            "extra": "40422823 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40422823 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40422823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87610470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.02,
            "unit": "ns/op",
            "extra": "87610470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87610470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87610470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.471,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183716128 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.471,
            "unit": "ns/op",
            "extra": "183716128 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183716128 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183716128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 291197,
            "unit": "ns/op\t   57051 B/op\t     638 allocs/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 291197,
            "unit": "ns/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292252,
            "unit": "ns/op\t   57074 B/op\t     638 allocs/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292252,
            "unit": "ns/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57074,
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
            "value": 170383,
            "unit": "ns/op\t   57254 B/op\t     641 allocs/op",
            "extra": "6926 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170383,
            "unit": "ns/op",
            "extra": "6926 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57254,
            "unit": "B/op",
            "extra": "6926 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6926 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171886,
            "unit": "ns/op\t   57286 B/op\t     641 allocs/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171886,
            "unit": "ns/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57286,
            "unit": "B/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371530,
            "unit": "ns/op\t   62819 B/op\t     698 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371530,
            "unit": "ns/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62819,
            "unit": "B/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353066,
            "unit": "ns/op\t   62777 B/op\t     698 allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353066,
            "unit": "ns/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62777,
            "unit": "B/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355906,
            "unit": "ns/op\t   62763 B/op\t     698 allocs/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355906,
            "unit": "ns/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62763,
            "unit": "B/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352780,
            "unit": "ns/op\t   62721 B/op\t     698 allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352780,
            "unit": "ns/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62721,
            "unit": "B/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46575672 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "46575672 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46575672 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46575672 times\n4 procs"
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
          "id": "d019a846ead6cbd9ea4258674d7ee70b6dcbf144",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f5ef4b7a51123969cd349f2a03ff04d455caa149",
          "timestamp": "2025-07-10T03:19:55Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d019a846ead6cbd9ea4258674d7ee70b6dcbf144"
        },
        "date": 1752196939927,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11879,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101030 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11879,
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
            "value": 39582,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31081 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39582,
            "unit": "ns/op",
            "extra": "31081 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31081 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31081 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71066,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16683 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71066,
            "unit": "ns/op",
            "extra": "16683 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16683 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16683 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29266,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41118 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29266,
            "unit": "ns/op",
            "extra": "41118 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41118 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41118 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292483,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292483,
            "unit": "ns/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57009,
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
            "value": 291560,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291560,
            "unit": "ns/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57008,
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
            "value": 93840,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12380 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93840,
            "unit": "ns/op",
            "extra": "12380 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12380 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12380 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45975,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27652 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45975,
            "unit": "ns/op",
            "extra": "27652 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27652 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27652 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201888,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6081 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201888,
            "unit": "ns/op",
            "extra": "6081 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6081 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6081 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5718,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205825 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5718,
            "unit": "ns/op",
            "extra": "205825 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205825 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205825 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149555,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149555,
            "unit": "ns/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507120121A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507120121A094101Federal",
            "value": 231380104,
            "unit": "1210428822507120121A094101Federal",
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
            "value": 104,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11532670 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104,
            "unit": "ns/op",
            "extra": "11532670 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11532670 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11532670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.49,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19194319 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.49,
            "unit": "ns/op",
            "extra": "19194319 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19194319 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19194319 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.11,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40015758 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.11,
            "unit": "ns/op",
            "extra": "40015758 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40015758 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40015758 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89083903 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.81,
            "unit": "ns/op",
            "extra": "89083903 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89083903 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89083903 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.646,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "181422192 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.646,
            "unit": "ns/op",
            "extra": "181422192 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "181422192 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "181422192 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301460,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301460,
            "unit": "ns/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293797,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293797,
            "unit": "ns/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171237,
            "unit": "ns/op\t   57236 B/op\t     641 allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171237,
            "unit": "ns/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57236,
            "unit": "B/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173025,
            "unit": "ns/op\t   57279 B/op\t     641 allocs/op",
            "extra": "6121 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173025,
            "unit": "ns/op",
            "extra": "6121 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57279,
            "unit": "B/op",
            "extra": "6121 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6121 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368949,
            "unit": "ns/op\t   62790 B/op\t     698 allocs/op",
            "extra": "2847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368949,
            "unit": "ns/op",
            "extra": "2847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62790,
            "unit": "B/op",
            "extra": "2847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "2847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356890,
            "unit": "ns/op\t   62749 B/op\t     698 allocs/op",
            "extra": "3505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356890,
            "unit": "ns/op",
            "extra": "3505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348073,
            "unit": "ns/op\t   62748 B/op\t     698 allocs/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348073,
            "unit": "ns/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62748,
            "unit": "B/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340508,
            "unit": "ns/op\t   62761 B/op\t     698 allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340508,
            "unit": "ns/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62761,
            "unit": "B/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46365379 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46365379 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46365379 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46365379 times\n4 procs"
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
          "id": "71cb0918fa21ff682edf2750e0ae6461f9db4811",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for cc99c4b2f8736ab1f65d04a87b298fc936263dbc",
          "timestamp": "2025-07-11T03:25:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/71cb0918fa21ff682edf2750e0ae6461f9db4811"
        },
        "date": 1752283413343,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11908,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99866 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11908,
            "unit": "ns/op",
            "extra": "99866 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99866 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99866 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38203,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31468 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38203,
            "unit": "ns/op",
            "extra": "31468 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31468 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31468 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70639,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16950 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70639,
            "unit": "ns/op",
            "extra": "16950 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16950 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16950 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30224,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "38108 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30224,
            "unit": "ns/op",
            "extra": "38108 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "38108 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "38108 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289357,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289357,
            "unit": "ns/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 300775,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 300775,
            "unit": "ns/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94811,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12858 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94811,
            "unit": "ns/op",
            "extra": "12858 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12858 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12858 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43104,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27852 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43104,
            "unit": "ns/op",
            "extra": "27852 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27852 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27852 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197876,
            "unit": "ns/op\t   53854 B/op\t    2040 allocs/op",
            "extra": "6072 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197876,
            "unit": "ns/op",
            "extra": "6072 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53854,
            "unit": "B/op",
            "extra": "6072 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6072 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5864,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "200984 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5864,
            "unit": "ns/op",
            "extra": "200984 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "200984 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "200984 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146361,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7962 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146361,
            "unit": "ns/op",
            "extra": "7962 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7962 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7962 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507130122A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507130122A094101Federal",
            "value": 231380104,
            "unit": "1210428822507130122A094101Federal",
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
            "value": 1048,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1048,
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
            "extra": "11476825 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.1,
            "unit": "ns/op",
            "extra": "11476825 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11476825 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11476825 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.48,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19288086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.48,
            "unit": "ns/op",
            "extra": "19288086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19288086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19288086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.19,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40019563 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.19,
            "unit": "ns/op",
            "extra": "40019563 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40019563 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40019563 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87975210 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.57,
            "unit": "ns/op",
            "extra": "87975210 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87975210 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87975210 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "188147548 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.311,
            "unit": "ns/op",
            "extra": "188147548 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "188147548 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "188147548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304626,
            "unit": "ns/op\t   57059 B/op\t     638 allocs/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304626,
            "unit": "ns/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57059,
            "unit": "B/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4292 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300094,
            "unit": "ns/op\t   57064 B/op\t     638 allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300094,
            "unit": "ns/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57064,
            "unit": "B/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175518,
            "unit": "ns/op\t   57240 B/op\t     641 allocs/op",
            "extra": "6652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175518,
            "unit": "ns/op",
            "extra": "6652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57240,
            "unit": "B/op",
            "extra": "6652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174672,
            "unit": "ns/op\t   57278 B/op\t     641 allocs/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174672,
            "unit": "ns/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57278,
            "unit": "B/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371427,
            "unit": "ns/op\t   62784 B/op\t     698 allocs/op",
            "extra": "3315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371427,
            "unit": "ns/op",
            "extra": "3315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62784,
            "unit": "B/op",
            "extra": "3315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3315 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359618,
            "unit": "ns/op\t   62788 B/op\t     698 allocs/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359618,
            "unit": "ns/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62788,
            "unit": "B/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355770,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355770,
            "unit": "ns/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344511,
            "unit": "ns/op\t   62679 B/op\t     698 allocs/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344511,
            "unit": "ns/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62679,
            "unit": "B/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4214 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46095018 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.19,
            "unit": "ns/op",
            "extra": "46095018 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46095018 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46095018 times\n4 procs"
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
          "id": "a98dfe745046313e2593f777f2fd002b905895f4",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fb31cede07cf23e1c5957f9ae4cd173ed2294b92",
          "timestamp": "2025-07-12T03:23:33Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a98dfe745046313e2593f777f2fd002b905895f4"
        },
        "date": 1752370157859,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11839,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100612 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11839,
            "unit": "ns/op",
            "extra": "100612 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100612 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39034,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "31111 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39034,
            "unit": "ns/op",
            "extra": "31111 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "31111 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31111 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72881,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16436 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72881,
            "unit": "ns/op",
            "extra": "16436 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16436 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28999,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "37838 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28999,
            "unit": "ns/op",
            "extra": "37838 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "37838 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "37838 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289516,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289516,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289765,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289765,
            "unit": "ns/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
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
            "value": 94146,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12852 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94146,
            "unit": "ns/op",
            "extra": "12852 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12852 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12852 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43187,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43187,
            "unit": "ns/op",
            "extra": "27744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27744 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207746,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "5876 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207746,
            "unit": "ns/op",
            "extra": "5876 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
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
            "value": 5860,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "200625 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5860,
            "unit": "ns/op",
            "extra": "200625 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "200625 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "200625 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146463,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "8361 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146463,
            "unit": "ns/op",
            "extra": "8361 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "8361 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "8361 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507140128A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507140128A094101Federal",
            "value": 231380104,
            "unit": "1210428822507140128A094101Federal",
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
            "value": 1060,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1060,
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
            "extra": "10938722 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.1,
            "unit": "ns/op",
            "extra": "10938722 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10938722 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10938722 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.25,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19310474 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.25,
            "unit": "ns/op",
            "extra": "19310474 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19310474 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19310474 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 31.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40093782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 31.13,
            "unit": "ns/op",
            "extra": "40093782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40093782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40093782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85253659 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.73,
            "unit": "ns/op",
            "extra": "85253659 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85253659 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85253659 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183967204 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.65,
            "unit": "ns/op",
            "extra": "183967204 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183967204 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183967204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293820,
            "unit": "ns/op\t   57049 B/op\t     638 allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293820,
            "unit": "ns/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295729,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295729,
            "unit": "ns/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3979 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170813,
            "unit": "ns/op\t   57246 B/op\t     641 allocs/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170813,
            "unit": "ns/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57246,
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
            "value": 176489,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176489,
            "unit": "ns/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360966,
            "unit": "ns/op\t   62761 B/op\t     698 allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360966,
            "unit": "ns/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62761,
            "unit": "B/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360154,
            "unit": "ns/op\t   62746 B/op\t     698 allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360154,
            "unit": "ns/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62746,
            "unit": "B/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349440,
            "unit": "ns/op\t   62750 B/op\t     698 allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349440,
            "unit": "ns/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346570,
            "unit": "ns/op\t   62810 B/op\t     698 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346570,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62810,
            "unit": "B/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45917220 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.22,
            "unit": "ns/op",
            "extra": "45917220 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45917220 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45917220 times\n4 procs"
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
          "id": "93005adc576a78cadfd6491edba7071ed0d2cc32",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 90f709ebd134086c1cf1c6bad3805a3474f757bd",
          "timestamp": "2025-07-13T03:37:54Z",
          "url": "https://github.com/moov-io/benchmarks/commit/93005adc576a78cadfd6491edba7071ed0d2cc32"
        },
        "date": 1752456339655,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11938,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99547 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11938,
            "unit": "ns/op",
            "extra": "99547 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99547 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99547 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39460,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "30981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39460,
            "unit": "ns/op",
            "extra": "30981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "30981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30981 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71241,
            "unit": "ns/op\t   25516 B/op\t     137 allocs/op",
            "extra": "16778 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71241,
            "unit": "ns/op",
            "extra": "16778 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25516,
            "unit": "B/op",
            "extra": "16778 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16778 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31144,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41124 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31144,
            "unit": "ns/op",
            "extra": "41124 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41124 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41124 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291139,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291139,
            "unit": "ns/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3960 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 302230,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 302230,
            "unit": "ns/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96299,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96299,
            "unit": "ns/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43288,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27226 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43288,
            "unit": "ns/op",
            "extra": "27226 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27226 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27226 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199888,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6128 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199888,
            "unit": "ns/op",
            "extra": "6128 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6128 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6128 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5884,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "199467 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5884,
            "unit": "ns/op",
            "extra": "199467 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "199467 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "199467 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148278,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148278,
            "unit": "ns/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507150125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507150125A094101Federal",
            "value": 231380104,
            "unit": "1210428822507150125A094101Federal",
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
            "value": 1038,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1038,
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
            "extra": "11456806 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.6,
            "unit": "ns/op",
            "extra": "11456806 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11456806 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11456806 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.52,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19159917 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.52,
            "unit": "ns/op",
            "extra": "19159917 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19159917 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19159917 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.06,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39855230 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.06,
            "unit": "ns/op",
            "extra": "39855230 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39855230 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39855230 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89268338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.64,
            "unit": "ns/op",
            "extra": "89268338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89268338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89268338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.549,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183476733 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.549,
            "unit": "ns/op",
            "extra": "183476733 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183476733 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183476733 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302398,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302398,
            "unit": "ns/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304813,
            "unit": "ns/op\t   57061 B/op\t     638 allocs/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304813,
            "unit": "ns/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57061,
            "unit": "B/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181993,
            "unit": "ns/op\t   57266 B/op\t     641 allocs/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181993,
            "unit": "ns/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57266,
            "unit": "B/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 181052,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 181052,
            "unit": "ns/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5809 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368714,
            "unit": "ns/op\t   62793 B/op\t     698 allocs/op",
            "extra": "3350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368714,
            "unit": "ns/op",
            "extra": "3350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62793,
            "unit": "B/op",
            "extra": "3350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358254,
            "unit": "ns/op\t   62757 B/op\t     698 allocs/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358254,
            "unit": "ns/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 360754,
            "unit": "ns/op\t   62773 B/op\t     698 allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 360754,
            "unit": "ns/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62773,
            "unit": "B/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 357074,
            "unit": "ns/op\t   62727 B/op\t     698 allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 357074,
            "unit": "ns/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62727,
            "unit": "B/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4129 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46239482 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "46239482 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46239482 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46239482 times\n4 procs"
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
          "id": "f2b9b86bd2133a5bd5ac323ce6e2e1e9a8795204",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 95c38ed665c7ecbd031dd35ad50d22da5bf787a1",
          "timestamp": "2025-07-14T03:38:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f2b9b86bd2133a5bd5ac323ce6e2e1e9a8795204"
        },
        "date": 1752542761766,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11959,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99604 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11959,
            "unit": "ns/op",
            "extra": "99604 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99604 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99604 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38978,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38978,
            "unit": "ns/op",
            "extra": "31016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31016 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72241,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15510 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72241,
            "unit": "ns/op",
            "extra": "15510 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15510 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15510 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29340,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29340,
            "unit": "ns/op",
            "extra": "41512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296475,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296475,
            "unit": "ns/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296400,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296400,
            "unit": "ns/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94427,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12684 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94427,
            "unit": "ns/op",
            "extra": "12684 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12684 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12684 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43400,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "27363 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43400,
            "unit": "ns/op",
            "extra": "27363 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "27363 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27363 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208880,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208880,
            "unit": "ns/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5797 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5918,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "200702 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5918,
            "unit": "ns/op",
            "extra": "200702 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "200702 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "200702 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148530,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148530,
            "unit": "ns/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507160125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507160125A094101Federal",
            "value": 231380104,
            "unit": "1210428822507160125A094101Federal",
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
            "value": 103.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11344290 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.7,
            "unit": "ns/op",
            "extra": "11344290 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11344290 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11344290 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.72,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19153640 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.72,
            "unit": "ns/op",
            "extra": "19153640 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19153640 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19153640 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.18,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39546645 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.18,
            "unit": "ns/op",
            "extra": "39546645 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39546645 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39546645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87350242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.72,
            "unit": "ns/op",
            "extra": "87350242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87350242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87350242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.658,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183289996 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.658,
            "unit": "ns/op",
            "extra": "183289996 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183289996 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183289996 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301189,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301189,
            "unit": "ns/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 307237,
            "unit": "ns/op\t   57074 B/op\t     638 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 307237,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57074,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179391,
            "unit": "ns/op\t   57257 B/op\t     641 allocs/op",
            "extra": "6754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179391,
            "unit": "ns/op",
            "extra": "6754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57257,
            "unit": "B/op",
            "extra": "6754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172774,
            "unit": "ns/op\t   57286 B/op\t     641 allocs/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172774,
            "unit": "ns/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57286,
            "unit": "B/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363533,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363533,
            "unit": "ns/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 373879,
            "unit": "ns/op\t   62766 B/op\t     698 allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 373879,
            "unit": "ns/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62766,
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
            "value": 361517,
            "unit": "ns/op\t   62776 B/op\t     698 allocs/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 361517,
            "unit": "ns/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 358814,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 358814,
            "unit": "ns/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45934100 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.25,
            "unit": "ns/op",
            "extra": "45934100 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45934100 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45934100 times\n4 procs"
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
          "id": "5262802a4bb82695e5e908160f0f7633957bc9e5",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 917fd20edcca5625ff6c6d22039268f6f1acb80b",
          "timestamp": "2025-07-15T03:27:42Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5262802a4bb82695e5e908160f0f7633957bc9e5"
        },
        "date": 1752628994189,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11913,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98683 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11913,
            "unit": "ns/op",
            "extra": "98683 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98683 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98683 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38009,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31406 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38009,
            "unit": "ns/op",
            "extra": "31406 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31406 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31406 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70695,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17133 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70695,
            "unit": "ns/op",
            "extra": "17133 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17133 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17133 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28648,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41457 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28648,
            "unit": "ns/op",
            "extra": "41457 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41457 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41457 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 299160,
            "unit": "ns/op\t   57012 B/op\t     744 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 299160,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288287,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288287,
            "unit": "ns/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100865,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100865,
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
            "value": 43105,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27770 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43105,
            "unit": "ns/op",
            "extra": "27770 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27770 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27770 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198982,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198982,
            "unit": "ns/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5804 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5923,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "199728 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5923,
            "unit": "ns/op",
            "extra": "199728 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "199728 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "199728 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 145065,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7616 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 145065,
            "unit": "ns/op",
            "extra": "7616 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7616 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7616 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507170122A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507170122A094101Federal",
            "value": 231380104,
            "unit": "1210428822507170122A094101Federal",
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
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
            "value": 103.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11513467 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.3,
            "unit": "ns/op",
            "extra": "11513467 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11513467 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11513467 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.31,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19073450 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.31,
            "unit": "ns/op",
            "extra": "19073450 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19073450 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19073450 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.09,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40061073 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.09,
            "unit": "ns/op",
            "extra": "40061073 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40061073 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40061073 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89458060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.59,
            "unit": "ns/op",
            "extra": "89458060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89458060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89458060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.576,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183339674 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.576,
            "unit": "ns/op",
            "extra": "183339674 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183339674 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183339674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296301,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296301,
            "unit": "ns/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296430,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296430,
            "unit": "ns/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168932,
            "unit": "ns/op\t   57247 B/op\t     641 allocs/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168932,
            "unit": "ns/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57247,
            "unit": "B/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170353,
            "unit": "ns/op\t   57279 B/op\t     641 allocs/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170353,
            "unit": "ns/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57279,
            "unit": "B/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6031 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361463,
            "unit": "ns/op\t   62801 B/op\t     698 allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361463,
            "unit": "ns/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62801,
            "unit": "B/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360824,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360824,
            "unit": "ns/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 344938,
            "unit": "ns/op\t   62770 B/op\t     698 allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344938,
            "unit": "ns/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62770,
            "unit": "B/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346727,
            "unit": "ns/op\t   62711 B/op\t     698 allocs/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346727,
            "unit": "ns/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62711,
            "unit": "B/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45880048 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "45880048 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45880048 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45880048 times\n4 procs"
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
          "id": "233995c9fc2be58b860380a96d582f5cb017df04",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c21647d2842dd0a3ea5f0bdf54f47692dd852995",
          "timestamp": "2025-07-16T03:25:39Z",
          "url": "https://github.com/moov-io/benchmarks/commit/233995c9fc2be58b860380a96d582f5cb017df04"
        },
        "date": 1752715459399,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11896,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99907 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11896,
            "unit": "ns/op",
            "extra": "99907 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99907 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99907 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38095,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "31436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38095,
            "unit": "ns/op",
            "extra": "31436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "31436 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31436 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70539,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17038 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70539,
            "unit": "ns/op",
            "extra": "17038 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17038 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17038 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28873,
            "unit": "ns/op\t   21027 B/op\t      55 allocs/op",
            "extra": "41533 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28873,
            "unit": "ns/op",
            "extra": "41533 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21027,
            "unit": "B/op",
            "extra": "41533 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41533 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298975,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298975,
            "unit": "ns/op",
            "extra": "3973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57010,
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
            "value": 298416,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298416,
            "unit": "ns/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
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
            "value": 93077,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12912 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93077,
            "unit": "ns/op",
            "extra": "12912 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12912 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12912 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43167,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27808 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43167,
            "unit": "ns/op",
            "extra": "27808 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27808 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27808 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202262,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5828 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202262,
            "unit": "ns/op",
            "extra": "5828 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5828 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5828 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5793,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202564 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5793,
            "unit": "ns/op",
            "extra": "202564 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202564 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202564 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154011,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7956 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154011,
            "unit": "ns/op",
            "extra": "7956 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7956 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7956 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507180123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507180123A094101Federal",
            "value": 231380104,
            "unit": "1210428822507180123A094101Federal",
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
            "value": 1027,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1027,
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
            "extra": "11506592 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.1,
            "unit": "ns/op",
            "extra": "11506592 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11506592 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11506592 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.95,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19050270 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.95,
            "unit": "ns/op",
            "extra": "19050270 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19050270 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19050270 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39504246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.08,
            "unit": "ns/op",
            "extra": "39504246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39504246 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39504246 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89570961 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.6,
            "unit": "ns/op",
            "extra": "89570961 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89570961 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89570961 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.514,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183630738 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.514,
            "unit": "ns/op",
            "extra": "183630738 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183630738 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183630738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297479,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297479,
            "unit": "ns/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4270 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298478,
            "unit": "ns/op\t   57073 B/op\t     638 allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298478,
            "unit": "ns/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57073,
            "unit": "B/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173226,
            "unit": "ns/op\t   57253 B/op\t     641 allocs/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173226,
            "unit": "ns/op",
            "extra": "6237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57253,
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
            "value": 187031,
            "unit": "ns/op\t   57300 B/op\t     641 allocs/op",
            "extra": "6775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 187031,
            "unit": "ns/op",
            "extra": "6775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57300,
            "unit": "B/op",
            "extra": "6775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358510,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358510,
            "unit": "ns/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355992,
            "unit": "ns/op\t   62748 B/op\t     698 allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355992,
            "unit": "ns/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62748,
            "unit": "B/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353117,
            "unit": "ns/op\t   62751 B/op\t     698 allocs/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353117,
            "unit": "ns/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62751,
            "unit": "B/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3430 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343192,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343192,
            "unit": "ns/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45788090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "45788090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45788090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45788090 times\n4 procs"
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
          "id": "d2fa57cbf4119ba43ad8da3339d3b9286dd0aa41",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 410d0b01ff8bd4862c0e24b1e21ee6c4d12b6dd7",
          "timestamp": "2025-07-17T03:25:22Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d2fa57cbf4119ba43ad8da3339d3b9286dd0aa41"
        },
        "date": 1752801813024,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11893,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11893,
            "unit": "ns/op",
            "extra": "99646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99646 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38361,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31690 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38361,
            "unit": "ns/op",
            "extra": "31690 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31690 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31690 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70701,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15528 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70701,
            "unit": "ns/op",
            "extra": "15528 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15528 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15528 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30249,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "39174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30249,
            "unit": "ns/op",
            "extra": "39174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "39174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "39174 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289834,
            "unit": "ns/op\t   57011 B/op\t     744 allocs/op",
            "extra": "3912 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289834,
            "unit": "ns/op",
            "extra": "3912 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57011,
            "unit": "B/op",
            "extra": "3912 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3912 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303415,
            "unit": "ns/op\t   57010 B/op\t     744 allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303415,
            "unit": "ns/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57010,
            "unit": "B/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94175,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94175,
            "unit": "ns/op",
            "extra": "12830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12830 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43428,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43428,
            "unit": "ns/op",
            "extra": "27688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27688 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207741,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207741,
            "unit": "ns/op",
            "extra": "6039 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
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
            "value": 5919,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "198992 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5919,
            "unit": "ns/op",
            "extra": "198992 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "198992 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "198992 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146717,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7447 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146717,
            "unit": "ns/op",
            "extra": "7447 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7447 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7447 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507190122A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507190122A094101Federal",
            "value": 231380104,
            "unit": "1210428822507190122A094101Federal",
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
            "extra": "11539610 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.6,
            "unit": "ns/op",
            "extra": "11539610 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11539610 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11539610 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.71,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19165684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.71,
            "unit": "ns/op",
            "extra": "19165684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19165684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19165684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39849891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.02,
            "unit": "ns/op",
            "extra": "39849891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39849891 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39849891 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89065257 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "89065257 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89065257 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89065257 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.517,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "186975472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.517,
            "unit": "ns/op",
            "extra": "186975472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "186975472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "186975472 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294511,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294511,
            "unit": "ns/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295596,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "3747 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295596,
            "unit": "ns/op",
            "extra": "3747 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "3747 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3747 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170578,
            "unit": "ns/op\t   57243 B/op\t     641 allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170578,
            "unit": "ns/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57243,
            "unit": "B/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 165972,
            "unit": "ns/op\t   57287 B/op\t     641 allocs/op",
            "extra": "6798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 165972,
            "unit": "ns/op",
            "extra": "6798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57287,
            "unit": "B/op",
            "extra": "6798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358909,
            "unit": "ns/op\t   62794 B/op\t     698 allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358909,
            "unit": "ns/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62794,
            "unit": "B/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360063,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "3500 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360063,
            "unit": "ns/op",
            "extra": "3500 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62754,
            "unit": "B/op",
            "extra": "3500 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3500 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362854,
            "unit": "ns/op\t   62745 B/op\t     698 allocs/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362854,
            "unit": "ns/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62745,
            "unit": "B/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348052,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348052,
            "unit": "ns/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45840826 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45840826 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45840826 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45840826 times\n4 procs"
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
          "id": "524690b2a182ba476205993fb26ce09f955119f8",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c4d7043ce6404b2fc97db6a3e0134cef3874c8ae",
          "timestamp": "2025-07-18T03:27:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/524690b2a182ba476205993fb26ce09f955119f8"
        },
        "date": 1752888075402,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11896,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100014 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11896,
            "unit": "ns/op",
            "extra": "100014 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100014 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100014 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38110,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31426 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38110,
            "unit": "ns/op",
            "extra": "31426 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31426 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31426 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71395,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17002 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71395,
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
            "value": 31799,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41683 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31799,
            "unit": "ns/op",
            "extra": "41683 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41683 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41683 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289972,
            "unit": "ns/op\t   57008 B/op\t     744 allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289972,
            "unit": "ns/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57008,
            "unit": "B/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288579,
            "unit": "ns/op\t   57009 B/op\t     744 allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288579,
            "unit": "ns/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57009,
            "unit": "B/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93066,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93066,
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
            "value": 43679,
            "unit": "ns/op\t   31793 B/op\t     130 allocs/op",
            "extra": "26527 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43679,
            "unit": "ns/op",
            "extra": "26527 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31793,
            "unit": "B/op",
            "extra": "26527 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26527 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201218,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201218,
            "unit": "ns/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6110 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6078,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "201453 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6078,
            "unit": "ns/op",
            "extra": "201453 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "201453 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "201453 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146125,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7694 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146125,
            "unit": "ns/op",
            "extra": "7694 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7694 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7694 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822507200120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822507200120A094101Federal",
            "value": 231380104,
            "unit": "1210428822507200120A094101Federal",
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
            "value": 1027,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1027,
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
            "value": 103.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11445914 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.3,
            "unit": "ns/op",
            "extra": "11445914 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11445914 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11445914 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.19,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19146261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.19,
            "unit": "ns/op",
            "extra": "19146261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19146261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19146261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40133079 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.86,
            "unit": "ns/op",
            "extra": "40133079 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40133079 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40133079 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86091550 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.93,
            "unit": "ns/op",
            "extra": "86091550 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86091550 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86091550 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.548,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "184051428 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.548,
            "unit": "ns/op",
            "extra": "184051428 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "184051428 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "184051428 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298195,
            "unit": "ns/op\t   57057 B/op\t     638 allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298195,
            "unit": "ns/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297601,
            "unit": "ns/op\t   57075 B/op\t     638 allocs/op",
            "extra": "4021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297601,
            "unit": "ns/op",
            "extra": "4021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57075,
            "unit": "B/op",
            "extra": "4021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4021 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170774,
            "unit": "ns/op\t   57243 B/op\t     641 allocs/op",
            "extra": "6073 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170774,
            "unit": "ns/op",
            "extra": "6073 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57243,
            "unit": "B/op",
            "extra": "6073 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6073 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174384,
            "unit": "ns/op\t   57285 B/op\t     641 allocs/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174384,
            "unit": "ns/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57285,
            "unit": "B/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358552,
            "unit": "ns/op\t   62743 B/op\t     698 allocs/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358552,
            "unit": "ns/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62743,
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
            "value": 364180,
            "unit": "ns/op\t   62781 B/op\t     698 allocs/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364180,
            "unit": "ns/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62781,
            "unit": "B/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3349 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352041,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "3375 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352041,
            "unit": "ns/op",
            "extra": "3375 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "3375 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3375 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348078,
            "unit": "ns/op\t   62712 B/op\t     698 allocs/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348078,
            "unit": "ns/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62712,
            "unit": "B/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45922245 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45922245 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45922245 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45922245 times\n4 procs"
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