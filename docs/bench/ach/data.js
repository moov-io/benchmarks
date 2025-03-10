window.BENCHMARK_DATA = {
  "lastUpdate": 1741568380217,
  "repoUrl": "https://github.com/moov-io/benchmarks",
  "entries": {
    "moov-io/ach Benchmarks": [
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
          "id": "e80ea2f2a0a962389afb4bdddedc10c306112b76",
          "message": "docs: slightly more readme",
          "timestamp": "2025-02-13T17:39:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e80ea2f2a0a962389afb4bdddedc10c306112b76"
        },
        "date": 1739495204643,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11505,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103814 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11505,
            "unit": "ns/op",
            "extra": "103814 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103814 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103814 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38666,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30846 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38666,
            "unit": "ns/op",
            "extra": "30846 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30846 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30846 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75158,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "17050 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75158,
            "unit": "ns/op",
            "extra": "17050 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "17050 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17050 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29248,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40978 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29248,
            "unit": "ns/op",
            "extra": "40978 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40978 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40978 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287548,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287548,
            "unit": "ns/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
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
            "value": 297966,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297966,
            "unit": "ns/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97128,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12699 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97128,
            "unit": "ns/op",
            "extra": "12699 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12699 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12699 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43409,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43409,
            "unit": "ns/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195810,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5912 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195810,
            "unit": "ns/op",
            "extra": "5912 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5912 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5912 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5743,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "207333 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5743,
            "unit": "ns/op",
            "extra": "207333 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "207333 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207333 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149548,
            "unit": "ns/op\t   57105 B/op\t     610 allocs/op",
            "extra": "8176 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149548,
            "unit": "ns/op",
            "extra": "8176 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57105,
            "unit": "B/op",
            "extra": "8176 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8176 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502150106A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502150106A094101Federal",
            "value": 231380104,
            "unit": "1210428822502150106A094101Federal",
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
            "value": 102.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11633515 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "11633515 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11633515 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11633515 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.69,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18956146 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.69,
            "unit": "ns/op",
            "extra": "18956146 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18956146 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18956146 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.48,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39175304 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.48,
            "unit": "ns/op",
            "extra": "39175304 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39175304 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39175304 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89576952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.52,
            "unit": "ns/op",
            "extra": "89576952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89576952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89576952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.689,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192583359 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.689,
            "unit": "ns/op",
            "extra": "192583359 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192583359 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192583359 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295385,
            "unit": "ns/op\t   56828 B/op\t     637 allocs/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295385,
            "unit": "ns/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56828,
            "unit": "B/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4299 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292298,
            "unit": "ns/op\t   56834 B/op\t     637 allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292298,
            "unit": "ns/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56834,
            "unit": "B/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170649,
            "unit": "ns/op\t   57033 B/op\t     640 allocs/op",
            "extra": "7215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170649,
            "unit": "ns/op",
            "extra": "7215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57033,
            "unit": "B/op",
            "extra": "7215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172408,
            "unit": "ns/op\t   57051 B/op\t     640 allocs/op",
            "extra": "6342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172408,
            "unit": "ns/op",
            "extra": "6342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "6342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364497,
            "unit": "ns/op\t   62588 B/op\t     697 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364497,
            "unit": "ns/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62588,
            "unit": "B/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 364406,
            "unit": "ns/op\t   62537 B/op\t     697 allocs/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364406,
            "unit": "ns/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62537,
            "unit": "B/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354160,
            "unit": "ns/op\t   62558 B/op\t     697 allocs/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354160,
            "unit": "ns/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62558,
            "unit": "B/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342431,
            "unit": "ns/op\t   62534 B/op\t     697 allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342431,
            "unit": "ns/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62534,
            "unit": "B/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46277745 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46277745 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46277745 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46277745 times\n4 procs"
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
          "id": "eeff45df0a4892f274b31afd7a30c866613e051b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3309b750613ea605524c4c99788c40f0adbb5b58",
          "timestamp": "2025-02-14T02:44:04Z",
          "url": "https://github.com/moov-io/benchmarks/commit/eeff45df0a4892f274b31afd7a30c866613e051b"
        },
        "date": 1739581553708,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11691,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101382 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11691,
            "unit": "ns/op",
            "extra": "101382 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101382 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40533,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "29758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40533,
            "unit": "ns/op",
            "extra": "29758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "29758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "29758 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72117,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16585 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72117,
            "unit": "ns/op",
            "extra": "16585 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16585 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16585 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30120,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "40010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30120,
            "unit": "ns/op",
            "extra": "40010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "40010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40010 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 320243,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 320243,
            "unit": "ns/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297716,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297716,
            "unit": "ns/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96242,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96242,
            "unit": "ns/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43546,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27513 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43546,
            "unit": "ns/op",
            "extra": "27513 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27513 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27513 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195510,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195510,
            "unit": "ns/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5701,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "209242 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5701,
            "unit": "ns/op",
            "extra": "209242 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "209242 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209242 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155809,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7933 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155809,
            "unit": "ns/op",
            "extra": "7933 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7933 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7933 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502160105A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502160105A094101Federal",
            "value": 231380104,
            "unit": "1210428822502160105A094101Federal",
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
            "value": 102.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11524261 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.7,
            "unit": "ns/op",
            "extra": "11524261 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11524261 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11524261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.91,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17364280 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.91,
            "unit": "ns/op",
            "extra": "17364280 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17364280 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17364280 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.44,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38331832 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.44,
            "unit": "ns/op",
            "extra": "38331832 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38331832 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38331832 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62376756 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.56,
            "unit": "ns/op",
            "extra": "62376756 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62376756 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62376756 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.916,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200475346 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.916,
            "unit": "ns/op",
            "extra": "200475346 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "200475346 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "200475346 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300359,
            "unit": "ns/op\t   56819 B/op\t     637 allocs/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300359,
            "unit": "ns/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56819,
            "unit": "B/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301460,
            "unit": "ns/op\t   56846 B/op\t     637 allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301460,
            "unit": "ns/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56846,
            "unit": "B/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174201,
            "unit": "ns/op\t   57044 B/op\t     640 allocs/op",
            "extra": "7138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174201,
            "unit": "ns/op",
            "extra": "7138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "7138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 197429,
            "unit": "ns/op\t   57061 B/op\t     640 allocs/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 197429,
            "unit": "ns/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57061,
            "unit": "B/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "5677 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362843,
            "unit": "ns/op\t   62528 B/op\t     697 allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362843,
            "unit": "ns/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62528,
            "unit": "B/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 367374,
            "unit": "ns/op\t   62537 B/op\t     697 allocs/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 367374,
            "unit": "ns/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62537,
            "unit": "B/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354068,
            "unit": "ns/op\t   62546 B/op\t     697 allocs/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354068,
            "unit": "ns/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62546,
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
            "value": 350158,
            "unit": "ns/op\t   62483 B/op\t     697 allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350158,
            "unit": "ns/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62483,
            "unit": "B/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4138 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46562359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46562359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46562359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46562359 times\n4 procs"
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
          "id": "af9c908a224df80801acdc7289e0c20113128439",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a518dc56855c8da9663af7108e86e1f1eba4ce73",
          "timestamp": "2025-02-15T02:42:48Z",
          "url": "https://github.com/moov-io/benchmarks/commit/af9c908a224df80801acdc7289e0c20113128439"
        },
        "date": 1739668332491,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11810,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101582 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11810,
            "unit": "ns/op",
            "extra": "101582 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101582 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101582 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39009,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30801 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39009,
            "unit": "ns/op",
            "extra": "30801 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30801 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30801 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71419,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16519 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71419,
            "unit": "ns/op",
            "extra": "16519 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16519 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29543,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "40830 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29543,
            "unit": "ns/op",
            "extra": "40830 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "40830 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293086,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293086,
            "unit": "ns/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 304863,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 304863,
            "unit": "ns/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100251,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12516 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100251,
            "unit": "ns/op",
            "extra": "12516 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12516 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12516 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43132,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43132,
            "unit": "ns/op",
            "extra": "27832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27832 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195444,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195444,
            "unit": "ns/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6112 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5516,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "208519 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5516,
            "unit": "ns/op",
            "extra": "208519 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "208519 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "208519 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146817,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7330 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146817,
            "unit": "ns/op",
            "extra": "7330 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7330 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7330 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502170111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502170111A094101Federal",
            "value": 231380104,
            "unit": "1210428822502170111A094101Federal",
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
            "value": 101.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11646340 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.8,
            "unit": "ns/op",
            "extra": "11646340 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11646340 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11646340 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.31,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17579600 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.31,
            "unit": "ns/op",
            "extra": "17579600 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17579600 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17579600 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38958506 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.54,
            "unit": "ns/op",
            "extra": "38958506 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38958506 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38958506 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72188583 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.37,
            "unit": "ns/op",
            "extra": "72188583 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "72188583 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "72188583 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.923,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202819418 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.923,
            "unit": "ns/op",
            "extra": "202819418 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202819418 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202819418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296201,
            "unit": "ns/op\t   56829 B/op\t     637 allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296201,
            "unit": "ns/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56829,
            "unit": "B/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298276,
            "unit": "ns/op\t   56837 B/op\t     637 allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298276,
            "unit": "ns/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56837,
            "unit": "B/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173815,
            "unit": "ns/op\t   57036 B/op\t     640 allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173815,
            "unit": "ns/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57036,
            "unit": "B/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169007,
            "unit": "ns/op\t   57048 B/op\t     640 allocs/op",
            "extra": "6481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169007,
            "unit": "ns/op",
            "extra": "6481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "6481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357015,
            "unit": "ns/op\t   62519 B/op\t     697 allocs/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357015,
            "unit": "ns/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62519,
            "unit": "B/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353107,
            "unit": "ns/op\t   62541 B/op\t     697 allocs/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353107,
            "unit": "ns/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62541,
            "unit": "B/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362199,
            "unit": "ns/op\t   62528 B/op\t     697 allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362199,
            "unit": "ns/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62528,
            "unit": "B/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344556,
            "unit": "ns/op\t   62451 B/op\t     697 allocs/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344556,
            "unit": "ns/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62451,
            "unit": "B/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4201 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46474186 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.29,
            "unit": "ns/op",
            "extra": "46474186 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46474186 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46474186 times\n4 procs"
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
          "id": "60f90044d184ca95247c4c534a6de05bcdd0d30d",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9b2cc271dada8092736cf4f679a719ec7ae3cc77",
          "timestamp": "2025-02-16T02:50:42Z",
          "url": "https://github.com/moov-io/benchmarks/commit/60f90044d184ca95247c4c534a6de05bcdd0d30d"
        },
        "date": 1739754574010,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11633,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "102844 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11633,
            "unit": "ns/op",
            "extra": "102844 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "102844 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102844 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39322,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30526 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39322,
            "unit": "ns/op",
            "extra": "30526 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30526 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30526 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 77451,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "15523 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 77451,
            "unit": "ns/op",
            "extra": "15523 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "15523 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "15523 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29579,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29579,
            "unit": "ns/op",
            "extra": "40452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40452 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293962,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293962,
            "unit": "ns/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292294,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292294,
            "unit": "ns/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95789,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12567 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95789,
            "unit": "ns/op",
            "extra": "12567 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12567 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12567 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43174,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43174,
            "unit": "ns/op",
            "extra": "27729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27729 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204545,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204545,
            "unit": "ns/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5541,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "213897 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5541,
            "unit": "ns/op",
            "extra": "213897 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "213897 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213897 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149438,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149438,
            "unit": "ns/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502180108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502180108A094101Federal",
            "value": 231380104,
            "unit": "1210428822502180108A094101Federal",
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
            "value": 103.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11703487 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.4,
            "unit": "ns/op",
            "extra": "11703487 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11703487 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11703487 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 68.19,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17173552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 68.19,
            "unit": "ns/op",
            "extra": "17173552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17173552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17173552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.61,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39847371 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.61,
            "unit": "ns/op",
            "extra": "39847371 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39847371 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39847371 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 21.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58864737 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 21.22,
            "unit": "ns/op",
            "extra": "58864737 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58864737 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58864737 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.011,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202794554 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.011,
            "unit": "ns/op",
            "extra": "202794554 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202794554 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202794554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296406,
            "unit": "ns/op\t   56825 B/op\t     637 allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296406,
            "unit": "ns/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56825,
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
            "value": 294467,
            "unit": "ns/op\t   56842 B/op\t     637 allocs/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 294467,
            "unit": "ns/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56842,
            "unit": "B/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173339,
            "unit": "ns/op\t   57019 B/op\t     640 allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173339,
            "unit": "ns/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57019,
            "unit": "B/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172860,
            "unit": "ns/op\t   57051 B/op\t     640 allocs/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172860,
            "unit": "ns/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365192,
            "unit": "ns/op\t   62575 B/op\t     697 allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365192,
            "unit": "ns/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62575,
            "unit": "B/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355809,
            "unit": "ns/op\t   62536 B/op\t     697 allocs/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355809,
            "unit": "ns/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62536,
            "unit": "B/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349060,
            "unit": "ns/op\t   62536 B/op\t     697 allocs/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349060,
            "unit": "ns/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62536,
            "unit": "B/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 354603,
            "unit": "ns/op\t   62496 B/op\t     697 allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 354603,
            "unit": "ns/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62496,
            "unit": "B/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46567580 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46567580 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46567580 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46567580 times\n4 procs"
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
          "id": "1c014234478db5860031fbb94fa9b1a757541f96",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0cb0b5b51fb402a271c1123d6a94532a62dcb4df",
          "timestamp": "2025-02-17T02:48:59Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1c014234478db5860031fbb94fa9b1a757541f96"
        },
        "date": 1739840808724,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12919,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "96477 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12919,
            "unit": "ns/op",
            "extra": "96477 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "96477 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "96477 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41220,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "28833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41220,
            "unit": "ns/op",
            "extra": "28833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "28833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "28833 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 77411,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "16116 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 77411,
            "unit": "ns/op",
            "extra": "16116 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "16116 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16116 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31971,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "34534 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31971,
            "unit": "ns/op",
            "extra": "34534 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "34534 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "34534 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 302776,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 302776,
            "unit": "ns/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3814 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303780,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303780,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 106446,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12087 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 106446,
            "unit": "ns/op",
            "extra": "12087 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12087 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12087 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45972,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "26072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45972,
            "unit": "ns/op",
            "extra": "26072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "26072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "26072 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201952,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201952,
            "unit": "ns/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6034,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "198556 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6034,
            "unit": "ns/op",
            "extra": "198556 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "198556 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "198556 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155103,
            "unit": "ns/op\t   57109 B/op\t     610 allocs/op",
            "extra": "7192 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155103,
            "unit": "ns/op",
            "extra": "7192 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57109,
            "unit": "B/op",
            "extra": "7192 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7192 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502190106A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502190106A094101Federal",
            "value": 231380104,
            "unit": "1210428822502190106A094101Federal",
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
            "value": 104.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "9746126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.5,
            "unit": "ns/op",
            "extra": "9746126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "9746126 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9746126 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.34,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17314950 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.34,
            "unit": "ns/op",
            "extra": "17314950 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17314950 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17314950 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.8,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38470305 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.8,
            "unit": "ns/op",
            "extra": "38470305 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38470305 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38470305 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61873141 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.46,
            "unit": "ns/op",
            "extra": "61873141 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "61873141 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "61873141 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.923,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201906326 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.923,
            "unit": "ns/op",
            "extra": "201906326 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201906326 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201906326 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 314721,
            "unit": "ns/op\t   56828 B/op\t     637 allocs/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 314721,
            "unit": "ns/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56828,
            "unit": "B/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 311669,
            "unit": "ns/op\t   56853 B/op\t     637 allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 311669,
            "unit": "ns/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56853,
            "unit": "B/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3854 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 184217,
            "unit": "ns/op\t   57024 B/op\t     640 allocs/op",
            "extra": "6282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 184217,
            "unit": "ns/op",
            "extra": "6282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57024,
            "unit": "B/op",
            "extra": "6282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 180373,
            "unit": "ns/op\t   57048 B/op\t     640 allocs/op",
            "extra": "6400 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 180373,
            "unit": "ns/op",
            "extra": "6400 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "6400 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6400 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 376510,
            "unit": "ns/op\t   62550 B/op\t     697 allocs/op",
            "extra": "3256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 376510,
            "unit": "ns/op",
            "extra": "3256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62550,
            "unit": "B/op",
            "extra": "3256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 373369,
            "unit": "ns/op\t   62553 B/op\t     697 allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 373369,
            "unit": "ns/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62553,
            "unit": "B/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 365936,
            "unit": "ns/op\t   62604 B/op\t     697 allocs/op",
            "extra": "3243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 365936,
            "unit": "ns/op",
            "extra": "3243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62604,
            "unit": "B/op",
            "extra": "3243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356188,
            "unit": "ns/op\t   61993 B/op\t     697 allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356188,
            "unit": "ns/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 61993,
            "unit": "B/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46410628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.01,
            "unit": "ns/op",
            "extra": "46410628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46410628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46410628 times\n4 procs"
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
          "id": "097333d7c9db058533d367957cbf407712fedfe9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f2f54813a4ab997379a02b1738d2666734b9967f",
          "timestamp": "2025-02-18T02:43:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/097333d7c9db058533d367957cbf407712fedfe9"
        },
        "date": 1739927225443,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11582,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "102702 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11582,
            "unit": "ns/op",
            "extra": "102702 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "102702 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102702 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39262,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39262,
            "unit": "ns/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71465,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16748 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71465,
            "unit": "ns/op",
            "extra": "16748 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16748 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16748 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29523,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "40280 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29523,
            "unit": "ns/op",
            "extra": "40280 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "40280 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40280 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 314915,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "4089 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 314915,
            "unit": "ns/op",
            "extra": "4089 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "4089 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4089 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293470,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293470,
            "unit": "ns/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95659,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95659,
            "unit": "ns/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12586 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44235,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44235,
            "unit": "ns/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195728,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195728,
            "unit": "ns/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
            "unit": "B/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6411 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5776,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "211404 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5776,
            "unit": "ns/op",
            "extra": "211404 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "211404 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211404 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148026,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7516 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148026,
            "unit": "ns/op",
            "extra": "7516 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7516 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7516 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502200106A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502200106A094101Federal",
            "value": 231380104,
            "unit": "1210428822502200106A094101Federal",
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
            "value": 1021,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1021,
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
            "extra": "11678656 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.7,
            "unit": "ns/op",
            "extra": "11678656 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11678656 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11678656 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.75,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17577940 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.75,
            "unit": "ns/op",
            "extra": "17577940 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17577940 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17577940 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39322988 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.27,
            "unit": "ns/op",
            "extra": "39322988 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39322988 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39322988 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 21.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68018607 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 21.51,
            "unit": "ns/op",
            "extra": "68018607 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68018607 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68018607 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202403010 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "202403010 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202403010 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202403010 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299378,
            "unit": "ns/op\t   56826 B/op\t     637 allocs/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299378,
            "unit": "ns/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56826,
            "unit": "B/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299538,
            "unit": "ns/op\t   56846 B/op\t     637 allocs/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299538,
            "unit": "ns/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56846,
            "unit": "B/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181701,
            "unit": "ns/op\t   57030 B/op\t     640 allocs/op",
            "extra": "6912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181701,
            "unit": "ns/op",
            "extra": "6912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57030,
            "unit": "B/op",
            "extra": "6912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168430,
            "unit": "ns/op\t   57051 B/op\t     640 allocs/op",
            "extra": "6321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168430,
            "unit": "ns/op",
            "extra": "6321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "6321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365143,
            "unit": "ns/op\t   62583 B/op\t     697 allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365143,
            "unit": "ns/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62583,
            "unit": "B/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 363172,
            "unit": "ns/op\t   62527 B/op\t     697 allocs/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363172,
            "unit": "ns/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62527,
            "unit": "B/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362283,
            "unit": "ns/op\t   62548 B/op\t     697 allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362283,
            "unit": "ns/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62548,
            "unit": "B/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351959,
            "unit": "ns/op\t   62491 B/op\t     697 allocs/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351959,
            "unit": "ns/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62491,
            "unit": "B/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46463950 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46463950 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46463950 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46463950 times\n4 procs"
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
          "id": "3709736d1b3795c1206c28960d8a2516bcac7bd0",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 55d0931ef901213366694f3fdd5b297c61006ec4",
          "timestamp": "2025-02-19T02:44:38Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3709736d1b3795c1206c28960d8a2516bcac7bd0"
        },
        "date": 1740013643486,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11628,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101323 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11628,
            "unit": "ns/op",
            "extra": "101323 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101323 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101323 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39008,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30894 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39008,
            "unit": "ns/op",
            "extra": "30894 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30894 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30894 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71763,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16605 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71763,
            "unit": "ns/op",
            "extra": "16605 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16605 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16605 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30702,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "40603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30702,
            "unit": "ns/op",
            "extra": "40603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "40603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40603 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293198,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293198,
            "unit": "ns/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 313113,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 313113,
            "unit": "ns/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95261,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95261,
            "unit": "ns/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44533,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27892 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44533,
            "unit": "ns/op",
            "extra": "27892 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27892 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27892 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197246,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197246,
            "unit": "ns/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6060 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5915,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "211729 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5915,
            "unit": "ns/op",
            "extra": "211729 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "211729 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211729 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148481,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148481,
            "unit": "ns/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502210106A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502210106A094101Federal",
            "value": 231380104,
            "unit": "1210428822502210106A094101Federal",
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
            "value": 1035,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1035,
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
            "value": 102,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11604417 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102,
            "unit": "ns/op",
            "extra": "11604417 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11604417 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11604417 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.59,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17646198 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.59,
            "unit": "ns/op",
            "extra": "17646198 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17646198 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17646198 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38669811 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.6,
            "unit": "ns/op",
            "extra": "38669811 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38669811 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38669811 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 19.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63049075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 19.86,
            "unit": "ns/op",
            "extra": "63049075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "63049075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "63049075 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201915033 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "201915033 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201915033 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201915033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 324472,
            "unit": "ns/op\t   56831 B/op\t     637 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 324472,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56831,
            "unit": "B/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 312339,
            "unit": "ns/op\t   56835 B/op\t     637 allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 312339,
            "unit": "ns/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56835,
            "unit": "B/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174952,
            "unit": "ns/op\t   57023 B/op\t     640 allocs/op",
            "extra": "6444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174952,
            "unit": "ns/op",
            "extra": "6444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57023,
            "unit": "B/op",
            "extra": "6444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173091,
            "unit": "ns/op\t   57053 B/op\t     640 allocs/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173091,
            "unit": "ns/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 374097,
            "unit": "ns/op\t   62525 B/op\t     697 allocs/op",
            "extra": "3290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 374097,
            "unit": "ns/op",
            "extra": "3290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62525,
            "unit": "B/op",
            "extra": "3290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 377003,
            "unit": "ns/op\t   62543 B/op\t     697 allocs/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 377003,
            "unit": "ns/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62543,
            "unit": "B/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 369426,
            "unit": "ns/op\t   62542 B/op\t     697 allocs/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 369426,
            "unit": "ns/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62542,
            "unit": "B/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 367635,
            "unit": "ns/op\t   62001 B/op\t     697 allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 367635,
            "unit": "ns/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62001,
            "unit": "B/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46383038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46383038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46383038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46383038 times\n4 procs"
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
          "id": "38e996aa49c1542bf31fd2ca03877de6e556d3cb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b9a250411f415f08230b13c8745bc20f1059cf3c",
          "timestamp": "2025-02-20T02:45:24Z",
          "url": "https://github.com/moov-io/benchmarks/commit/38e996aa49c1542bf31fd2ca03877de6e556d3cb"
        },
        "date": 1740100058235,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11847,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "102790 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11847,
            "unit": "ns/op",
            "extra": "102790 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "102790 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102790 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39900,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "29718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39900,
            "unit": "ns/op",
            "extra": "29718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "29718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "29718 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72895,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16411 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72895,
            "unit": "ns/op",
            "extra": "16411 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16411 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16411 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30065,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30065,
            "unit": "ns/op",
            "extra": "40140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40140 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296416,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296416,
            "unit": "ns/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3830 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 323355,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 323355,
            "unit": "ns/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3774 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96833,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12302 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96833,
            "unit": "ns/op",
            "extra": "12302 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
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
            "value": 43691,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27454 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43691,
            "unit": "ns/op",
            "extra": "27454 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27454 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27454 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201744,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201744,
            "unit": "ns/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5583,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "213241 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5583,
            "unit": "ns/op",
            "extra": "213241 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "213241 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213241 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149310,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "8317 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149310,
            "unit": "ns/op",
            "extra": "8317 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "8317 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8317 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502220107A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502220107A094101Federal",
            "value": 231380104,
            "unit": "1210428822502220107A094101Federal",
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
            "value": 104.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11569892 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.2,
            "unit": "ns/op",
            "extra": "11569892 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11569892 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11569892 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.72,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17221324 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.72,
            "unit": "ns/op",
            "extra": "17221324 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17221324 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17221324 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.88,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40161900 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.88,
            "unit": "ns/op",
            "extra": "40161900 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40161900 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40161900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 21.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52451157 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 21.46,
            "unit": "ns/op",
            "extra": "52451157 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52451157 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52451157 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202365082 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.96,
            "unit": "ns/op",
            "extra": "202365082 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202365082 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202365082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303262,
            "unit": "ns/op\t   56819 B/op\t     637 allocs/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303262,
            "unit": "ns/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56819,
            "unit": "B/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4153 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 307915,
            "unit": "ns/op\t   56842 B/op\t     637 allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 307915,
            "unit": "ns/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56842,
            "unit": "B/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172884,
            "unit": "ns/op\t   57029 B/op\t     640 allocs/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172884,
            "unit": "ns/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 188637,
            "unit": "ns/op\t   57046 B/op\t     640 allocs/op",
            "extra": "6178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 188637,
            "unit": "ns/op",
            "extra": "6178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "6178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362649,
            "unit": "ns/op\t   62524 B/op\t     697 allocs/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362649,
            "unit": "ns/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62524,
            "unit": "B/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360951,
            "unit": "ns/op\t   62543 B/op\t     697 allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360951,
            "unit": "ns/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62543,
            "unit": "B/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351831,
            "unit": "ns/op\t   62540 B/op\t     697 allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351831,
            "unit": "ns/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62540,
            "unit": "B/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347472,
            "unit": "ns/op\t   62490 B/op\t     697 allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347472,
            "unit": "ns/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62490,
            "unit": "B/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46460043 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.9,
            "unit": "ns/op",
            "extra": "46460043 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46460043 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46460043 times\n4 procs"
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
          "id": "897779e5aa7dd6c759b1f029c348e108f81ec844",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0216789332b3206436d9c9be965c7e690e6f1e2b",
          "timestamp": "2025-02-21T02:46:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/897779e5aa7dd6c759b1f029c348e108f81ec844"
        },
        "date": 1740186327971,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11634,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "100719 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11634,
            "unit": "ns/op",
            "extra": "100719 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "100719 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100719 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39180,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39180,
            "unit": "ns/op",
            "extra": "30471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73211,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73211,
            "unit": "ns/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31288,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40514 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31288,
            "unit": "ns/op",
            "extra": "40514 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40514 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40514 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293893,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293893,
            "unit": "ns/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292866,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292866,
            "unit": "ns/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96025,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96025,
            "unit": "ns/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43220,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27925 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43220,
            "unit": "ns/op",
            "extra": "27925 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27925 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27925 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201999,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201999,
            "unit": "ns/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6033 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5538,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212530 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5538,
            "unit": "ns/op",
            "extra": "212530 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212530 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212530 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147158,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "8289 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147158,
            "unit": "ns/op",
            "extra": "8289 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "8289 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8289 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502230104A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502230104A094101Federal",
            "value": 231380104,
            "unit": "1210428822502230104A094101Federal",
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
            "value": 1025,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1025,
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
            "extra": "11318010 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.9,
            "unit": "ns/op",
            "extra": "11318010 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11318010 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11318010 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.48,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17880674 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.48,
            "unit": "ns/op",
            "extra": "17880674 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17880674 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17880674 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.57,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39693284 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.57,
            "unit": "ns/op",
            "extra": "39693284 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39693284 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39693284 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72912412 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.59,
            "unit": "ns/op",
            "extra": "72912412 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "72912412 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "72912412 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.924,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202584462 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.924,
            "unit": "ns/op",
            "extra": "202584462 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202584462 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202584462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302096,
            "unit": "ns/op\t   56822 B/op\t     637 allocs/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302096,
            "unit": "ns/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56822,
            "unit": "B/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300251,
            "unit": "ns/op\t   56830 B/op\t     637 allocs/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300251,
            "unit": "ns/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56830,
            "unit": "B/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181310,
            "unit": "ns/op\t   57032 B/op\t     640 allocs/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181310,
            "unit": "ns/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57032,
            "unit": "B/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173396,
            "unit": "ns/op\t   57068 B/op\t     640 allocs/op",
            "extra": "7148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173396,
            "unit": "ns/op",
            "extra": "7148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57068,
            "unit": "B/op",
            "extra": "7148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364734,
            "unit": "ns/op\t   62583 B/op\t     697 allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364734,
            "unit": "ns/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62583,
            "unit": "B/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362005,
            "unit": "ns/op\t   62546 B/op\t     697 allocs/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362005,
            "unit": "ns/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62546,
            "unit": "B/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349819,
            "unit": "ns/op\t   62515 B/op\t     697 allocs/op",
            "extra": "3670 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349819,
            "unit": "ns/op",
            "extra": "3670 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62515,
            "unit": "B/op",
            "extra": "3670 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3670 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340170,
            "unit": "ns/op\t   62533 B/op\t     697 allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340170,
            "unit": "ns/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62533,
            "unit": "B/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46512438 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.38,
            "unit": "ns/op",
            "extra": "46512438 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46512438 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46512438 times\n4 procs"
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
          "id": "288748e3b4d56675ed234d221983f3eb9f659477",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 808c90fbb29f6337006e043fb16952cd211e2610",
          "timestamp": "2025-02-22T02:41:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/288748e3b4d56675ed234d221983f3eb9f659477"
        },
        "date": 1740273132061,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11568,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101856 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11568,
            "unit": "ns/op",
            "extra": "101856 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101856 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101856 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39731,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "30200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39731,
            "unit": "ns/op",
            "extra": "30200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "30200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30200 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75836,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16666 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75836,
            "unit": "ns/op",
            "extra": "16666 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16666 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16666 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29884,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40099 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29884,
            "unit": "ns/op",
            "extra": "40099 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40099 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40099 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 315949,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 315949,
            "unit": "ns/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297552,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297552,
            "unit": "ns/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96251,
            "unit": "ns/op\t   27427 B/op\t     199 allocs/op",
            "extra": "12402 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96251,
            "unit": "ns/op",
            "extra": "12402 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27427,
            "unit": "B/op",
            "extra": "12402 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44259,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27552 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44259,
            "unit": "ns/op",
            "extra": "27552 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27552 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27552 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199373,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199373,
            "unit": "ns/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6148 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5513,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "206415 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5513,
            "unit": "ns/op",
            "extra": "206415 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "206415 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "206415 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148902,
            "unit": "ns/op\t   57105 B/op\t     610 allocs/op",
            "extra": "7554 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148902,
            "unit": "ns/op",
            "extra": "7554 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57105,
            "unit": "B/op",
            "extra": "7554 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7554 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502240111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502240111A094101Federal",
            "value": 231380104,
            "unit": "1210428822502240111A094101Federal",
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
            "value": 1028,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1028,
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
            "extra": "11569514 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.9,
            "unit": "ns/op",
            "extra": "11569514 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11569514 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11569514 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17595295 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.92,
            "unit": "ns/op",
            "extra": "17595295 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17595295 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17595295 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39227583 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.46,
            "unit": "ns/op",
            "extra": "39227583 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39227583 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39227583 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61028988 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.2,
            "unit": "ns/op",
            "extra": "61028988 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "61028988 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "61028988 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.942,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202960239 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.942,
            "unit": "ns/op",
            "extra": "202960239 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202960239 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202960239 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 308362,
            "unit": "ns/op\t   56825 B/op\t     637 allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 308362,
            "unit": "ns/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56825,
            "unit": "B/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 308891,
            "unit": "ns/op\t   56842 B/op\t     637 allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 308891,
            "unit": "ns/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56842,
            "unit": "B/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173011,
            "unit": "ns/op\t   57031 B/op\t     640 allocs/op",
            "extra": "7212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173011,
            "unit": "ns/op",
            "extra": "7212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57031,
            "unit": "B/op",
            "extra": "7212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 179196,
            "unit": "ns/op\t   57052 B/op\t     640 allocs/op",
            "extra": "6562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 179196,
            "unit": "ns/op",
            "extra": "6562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "6562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370768,
            "unit": "ns/op\t   62536 B/op\t     697 allocs/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370768,
            "unit": "ns/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62536,
            "unit": "B/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 367182,
            "unit": "ns/op\t   62529 B/op\t     697 allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 367182,
            "unit": "ns/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62529,
            "unit": "B/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357574,
            "unit": "ns/op\t   62555 B/op\t     697 allocs/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357574,
            "unit": "ns/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62555,
            "unit": "B/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350899,
            "unit": "ns/op\t   62579 B/op\t     697 allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350899,
            "unit": "ns/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62579,
            "unit": "B/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46348478 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "46348478 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46348478 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46348478 times\n4 procs"
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
          "id": "bcd119c8afdff2253d03c9096a2e30de02ecd7f8",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f71c972e781890f5f5dfe672091cf28840bf4e9a",
          "timestamp": "2025-02-23T02:50:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bcd119c8afdff2253d03c9096a2e30de02ecd7f8"
        },
        "date": 1740359371815,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11700,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101844 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11700,
            "unit": "ns/op",
            "extra": "101844 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101844 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101844 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40199,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "29688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40199,
            "unit": "ns/op",
            "extra": "29688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "29688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "29688 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72348,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16449 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72348,
            "unit": "ns/op",
            "extra": "16449 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16449 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16449 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30239,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40060 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30239,
            "unit": "ns/op",
            "extra": "40060 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40060 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40060 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 316495,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 316495,
            "unit": "ns/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3840 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 301633,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 301633,
            "unit": "ns/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98840,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12434 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98840,
            "unit": "ns/op",
            "extra": "12434 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12434 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44926,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27078 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44926,
            "unit": "ns/op",
            "extra": "27078 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27078 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27078 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200335,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200335,
            "unit": "ns/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5590,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "209703 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5590,
            "unit": "ns/op",
            "extra": "209703 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "209703 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209703 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 160214,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7506 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 160214,
            "unit": "ns/op",
            "extra": "7506 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7506 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7506 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502250108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502250108A094101Federal",
            "value": 231380104,
            "unit": "1210428822502250108A094101Federal",
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
            "value": 102.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11586993 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.7,
            "unit": "ns/op",
            "extra": "11586993 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11586993 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11586993 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 68.58,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "15923138 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 68.58,
            "unit": "ns/op",
            "extra": "15923138 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "15923138 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "15923138 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38090563 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30,
            "unit": "ns/op",
            "extra": "38090563 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38090563 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38090563 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 21.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60196402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 21.61,
            "unit": "ns/op",
            "extra": "60196402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "60196402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "60196402 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.934,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200339264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.934,
            "unit": "ns/op",
            "extra": "200339264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "200339264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "200339264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 317315,
            "unit": "ns/op\t   56828 B/op\t     637 allocs/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 317315,
            "unit": "ns/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56828,
            "unit": "B/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4203 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301809,
            "unit": "ns/op\t   56841 B/op\t     637 allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301809,
            "unit": "ns/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56841,
            "unit": "B/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170322,
            "unit": "ns/op\t   57033 B/op\t     640 allocs/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170322,
            "unit": "ns/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57033,
            "unit": "B/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6877 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 190258,
            "unit": "ns/op\t   57049 B/op\t     640 allocs/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 190258,
            "unit": "ns/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57049,
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
            "value": 364735,
            "unit": "ns/op\t   62544 B/op\t     697 allocs/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364735,
            "unit": "ns/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62544,
            "unit": "B/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3273 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357656,
            "unit": "ns/op\t   62543 B/op\t     697 allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357656,
            "unit": "ns/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62543,
            "unit": "B/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 358054,
            "unit": "ns/op\t   62522 B/op\t     697 allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358054,
            "unit": "ns/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62522,
            "unit": "B/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 355543,
            "unit": "ns/op\t   62485 B/op\t     697 allocs/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 355543,
            "unit": "ns/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62485,
            "unit": "B/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4180 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46054726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.2,
            "unit": "ns/op",
            "extra": "46054726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46054726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46054726 times\n4 procs"
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
          "id": "c4b89da73b78d7ae82b8c1c71dbdd4d12ff8f7b6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b9d6cff54697bfb4982c2cb28bd95b71b2dd17ce",
          "timestamp": "2025-02-24T02:51:30Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c4b89da73b78d7ae82b8c1c71dbdd4d12ff8f7b6"
        },
        "date": 1740445729266,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11518,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101815 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11518,
            "unit": "ns/op",
            "extra": "101815 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101815 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101815 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39221,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30444 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39221,
            "unit": "ns/op",
            "extra": "30444 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30444 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30444 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72802,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16508 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72802,
            "unit": "ns/op",
            "extra": "16508 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16508 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16508 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29575,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "34396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29575,
            "unit": "ns/op",
            "extra": "34396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "34396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "34396 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293835,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293835,
            "unit": "ns/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 312792,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 312792,
            "unit": "ns/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95589,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95589,
            "unit": "ns/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43204,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27914 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43204,
            "unit": "ns/op",
            "extra": "27914 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27914 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27914 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201443,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6010 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201443,
            "unit": "ns/op",
            "extra": "6010 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6010 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6010 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5560,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "200606 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5560,
            "unit": "ns/op",
            "extra": "200606 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "200606 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "200606 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149159,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149159,
            "unit": "ns/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502260108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502260108A094101Federal",
            "value": 231380104,
            "unit": "1210428822502260108A094101Federal",
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
            "value": 1026,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1026,
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
            "extra": "11678680 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "11678680 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11678680 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11678680 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.94,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17625178 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.94,
            "unit": "ns/op",
            "extra": "17625178 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17625178 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17625178 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.41,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38833365 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.41,
            "unit": "ns/op",
            "extra": "38833365 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38833365 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38833365 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67839106 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.86,
            "unit": "ns/op",
            "extra": "67839106 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67839106 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67839106 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.922,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203025790 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.922,
            "unit": "ns/op",
            "extra": "203025790 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203025790 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203025790 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307418,
            "unit": "ns/op\t   56825 B/op\t     637 allocs/op",
            "extra": "4239 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307418,
            "unit": "ns/op",
            "extra": "4239 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56825,
            "unit": "B/op",
            "extra": "4239 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4239 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 307342,
            "unit": "ns/op\t   56844 B/op\t     637 allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 307342,
            "unit": "ns/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56844,
            "unit": "B/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 185108,
            "unit": "ns/op\t   57031 B/op\t     640 allocs/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 185108,
            "unit": "ns/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57031,
            "unit": "B/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6760 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178453,
            "unit": "ns/op\t   57054 B/op\t     640 allocs/op",
            "extra": "6340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178453,
            "unit": "ns/op",
            "extra": "6340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "6340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370214,
            "unit": "ns/op\t   62518 B/op\t     697 allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370214,
            "unit": "ns/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62518,
            "unit": "B/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362445,
            "unit": "ns/op\t   62531 B/op\t     697 allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362445,
            "unit": "ns/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62531,
            "unit": "B/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351959,
            "unit": "ns/op\t   62554 B/op\t     697 allocs/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351959,
            "unit": "ns/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62554,
            "unit": "B/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351451,
            "unit": "ns/op\t   62592 B/op\t     697 allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351451,
            "unit": "ns/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62592,
            "unit": "B/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46572241 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46572241 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46572241 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46572241 times\n4 procs"
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
          "id": "2ae4c1b5071785941fad9a7e0ab50a570f2d0ad8",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5c3ebc78caef45b0d1c456b942a3150116f7e6ca",
          "timestamp": "2025-02-25T02:50:15Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2ae4c1b5071785941fad9a7e0ab50a570f2d0ad8"
        },
        "date": 1740532117754,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11867,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "100798 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11867,
            "unit": "ns/op",
            "extra": "100798 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "100798 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100798 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39781,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "29659 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39781,
            "unit": "ns/op",
            "extra": "29659 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "29659 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "29659 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74993,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "16550 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74993,
            "unit": "ns/op",
            "extra": "16550 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "16550 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16550 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31209,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "34339 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31209,
            "unit": "ns/op",
            "extra": "34339 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "34339 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "34339 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296301,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296301,
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
            "value": 299664,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "3915 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299664,
            "unit": "ns/op",
            "extra": "3915 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "3915 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3915 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98062,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12366 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98062,
            "unit": "ns/op",
            "extra": "12366 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12366 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12366 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43501,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27223 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43501,
            "unit": "ns/op",
            "extra": "27223 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27223 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27223 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200127,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6224 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200127,
            "unit": "ns/op",
            "extra": "6224 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6224 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6224 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5587,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "211940 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5587,
            "unit": "ns/op",
            "extra": "211940 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "211940 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211940 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147384,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7515 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147384,
            "unit": "ns/op",
            "extra": "7515 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7515 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7515 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502270108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502270108A094101Federal",
            "value": 231380104,
            "unit": "1210428822502270108A094101Federal",
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
            "value": 102.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11674851 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.1,
            "unit": "ns/op",
            "extra": "11674851 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11674851 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11674851 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.69,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17643211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.69,
            "unit": "ns/op",
            "extra": "17643211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17643211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17643211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39167055 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.9,
            "unit": "ns/op",
            "extra": "39167055 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39167055 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39167055 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57084264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.4,
            "unit": "ns/op",
            "extra": "57084264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57084264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57084264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202041900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.919,
            "unit": "ns/op",
            "extra": "202041900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202041900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202041900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297100,
            "unit": "ns/op\t   56820 B/op\t     637 allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297100,
            "unit": "ns/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56820,
            "unit": "B/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304016,
            "unit": "ns/op\t   56833 B/op\t     637 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304016,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56833,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 187208,
            "unit": "ns/op\t   57032 B/op\t     640 allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 187208,
            "unit": "ns/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57032,
            "unit": "B/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175886,
            "unit": "ns/op\t   57069 B/op\t     640 allocs/op",
            "extra": "6794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175886,
            "unit": "ns/op",
            "extra": "6794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57069,
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
            "value": 369230,
            "unit": "ns/op\t   62548 B/op\t     697 allocs/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 369230,
            "unit": "ns/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62548,
            "unit": "B/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362058,
            "unit": "ns/op\t   62544 B/op\t     697 allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362058,
            "unit": "ns/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62544,
            "unit": "B/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357340,
            "unit": "ns/op\t   62563 B/op\t     697 allocs/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357340,
            "unit": "ns/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62563,
            "unit": "B/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346999,
            "unit": "ns/op\t   62529 B/op\t     697 allocs/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346999,
            "unit": "ns/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62529,
            "unit": "B/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46540764 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.85,
            "unit": "ns/op",
            "extra": "46540764 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46540764 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46540764 times\n4 procs"
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
          "id": "bb23432e7ca247c8cfdaa66239f650bce4f0aa5b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b9673fb5545ae346e4e68f2e2939a4959b7b144f",
          "timestamp": "2025-02-26T02:49:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bb23432e7ca247c8cfdaa66239f650bce4f0aa5b"
        },
        "date": 1740618517909,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11585,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "102654 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11585,
            "unit": "ns/op",
            "extra": "102654 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "102654 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39047,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30680 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39047,
            "unit": "ns/op",
            "extra": "30680 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30680 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30680 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73519,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16712 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73519,
            "unit": "ns/op",
            "extra": "16712 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16712 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16712 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29641,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "39654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29641,
            "unit": "ns/op",
            "extra": "39654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "39654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "39654 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300334,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300334,
            "unit": "ns/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 302247,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 302247,
            "unit": "ns/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97616,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12571 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97616,
            "unit": "ns/op",
            "extra": "12571 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12571 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12571 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43065,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27684 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43065,
            "unit": "ns/op",
            "extra": "27684 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27684 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27684 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197724,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5934 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197724,
            "unit": "ns/op",
            "extra": "5934 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5934 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5934 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5655,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212619 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5655,
            "unit": "ns/op",
            "extra": "212619 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212619 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212619 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147285,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147285,
            "unit": "ns/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822502280108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822502280108A094101Federal",
            "value": 231380104,
            "unit": "1210428822502280108A094101Federal",
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
            "value": 102.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10882748 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "10882748 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10882748 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10882748 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.36,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17441761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.36,
            "unit": "ns/op",
            "extra": "17441761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17441761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17441761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.48,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39116354 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.48,
            "unit": "ns/op",
            "extra": "39116354 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39116354 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39116354 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 21.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62003685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 21.45,
            "unit": "ns/op",
            "extra": "62003685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62003685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62003685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.969,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202274829 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.969,
            "unit": "ns/op",
            "extra": "202274829 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202274829 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202274829 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299612,
            "unit": "ns/op\t   56820 B/op\t     637 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299612,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56820,
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
            "value": 298566,
            "unit": "ns/op\t   56832 B/op\t     637 allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298566,
            "unit": "ns/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56832,
            "unit": "B/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175878,
            "unit": "ns/op\t   57037 B/op\t     640 allocs/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175878,
            "unit": "ns/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57037,
            "unit": "B/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169757,
            "unit": "ns/op\t   57057 B/op\t     640 allocs/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169757,
            "unit": "ns/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359136,
            "unit": "ns/op\t   62590 B/op\t     697 allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359136,
            "unit": "ns/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62590,
            "unit": "B/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361771,
            "unit": "ns/op\t   62545 B/op\t     697 allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361771,
            "unit": "ns/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62545,
            "unit": "B/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355865,
            "unit": "ns/op\t   62521 B/op\t     697 allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355865,
            "unit": "ns/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62521,
            "unit": "B/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351578,
            "unit": "ns/op\t   62455 B/op\t     697 allocs/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351578,
            "unit": "ns/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62455,
            "unit": "B/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4206 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46489154 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46489154 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46489154 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46489154 times\n4 procs"
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
          "id": "f1e3bda6bdbdcefc404cc67c223cd4f749fe46ce",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6520fdcf334ea3840b96b31023ecbc7098664f3f",
          "timestamp": "2025-02-27T02:50:50Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f1e3bda6bdbdcefc404cc67c223cd4f749fe46ce"
        },
        "date": 1740704950612,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11655,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "102568 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11655,
            "unit": "ns/op",
            "extra": "102568 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "102568 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102568 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39228,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30553 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39228,
            "unit": "ns/op",
            "extra": "30553 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30553 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30553 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75373,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75373,
            "unit": "ns/op",
            "extra": "16738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29745,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29745,
            "unit": "ns/op",
            "extra": "40584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40584 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295927,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295927,
            "unit": "ns/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296210,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296210,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
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
            "value": 95492,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12458 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95492,
            "unit": "ns/op",
            "extra": "12458 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12458 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12458 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43319,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27655 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43319,
            "unit": "ns/op",
            "extra": "27655 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27655 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27655 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200625,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6128 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200625,
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
            "value": 5586,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "209607 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5586,
            "unit": "ns/op",
            "extra": "209607 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "209607 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209607 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 150031,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 150031,
            "unit": "ns/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7687 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503010108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503010108A094101Federal",
            "value": 231380104,
            "unit": "1210428822503010108A094101Federal",
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
            "value": 1028,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1028,
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
            "extra": "11645210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.3,
            "unit": "ns/op",
            "extra": "11645210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11645210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11645210 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.82,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17998285 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.82,
            "unit": "ns/op",
            "extra": "17998285 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17998285 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17998285 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.65,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40214756 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.65,
            "unit": "ns/op",
            "extra": "40214756 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40214756 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40214756 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63337014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.99,
            "unit": "ns/op",
            "extra": "63337014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "63337014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "63337014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.924,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202779547 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.924,
            "unit": "ns/op",
            "extra": "202779547 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202779547 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202779547 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296986,
            "unit": "ns/op\t   56821 B/op\t     637 allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296986,
            "unit": "ns/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56821,
            "unit": "B/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309700,
            "unit": "ns/op\t   56843 B/op\t     637 allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309700,
            "unit": "ns/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56843,
            "unit": "B/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171673,
            "unit": "ns/op\t   57019 B/op\t     640 allocs/op",
            "extra": "6306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171673,
            "unit": "ns/op",
            "extra": "6306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57019,
            "unit": "B/op",
            "extra": "6306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169833,
            "unit": "ns/op\t   57049 B/op\t     640 allocs/op",
            "extra": "6574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169833,
            "unit": "ns/op",
            "extra": "6574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "6574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363578,
            "unit": "ns/op\t   62556 B/op\t     697 allocs/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363578,
            "unit": "ns/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62556,
            "unit": "B/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362151,
            "unit": "ns/op\t   62530 B/op\t     697 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362151,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62530,
            "unit": "B/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357955,
            "unit": "ns/op\t   62508 B/op\t     697 allocs/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357955,
            "unit": "ns/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62508,
            "unit": "B/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351124,
            "unit": "ns/op\t   62530 B/op\t     697 allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351124,
            "unit": "ns/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62530,
            "unit": "B/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46516024 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.84,
            "unit": "ns/op",
            "extra": "46516024 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46516024 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46516024 times\n4 procs"
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
          "id": "5b84162e9cb8e73f26f64bf75f13d79ef81c5080",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5c58d7dbcaa2278fd60b9a187897932e8a09c7d2",
          "timestamp": "2025-02-28T02:51:05Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5b84162e9cb8e73f26f64bf75f13d79ef81c5080"
        },
        "date": 1740791617818,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11671,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "100924 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11671,
            "unit": "ns/op",
            "extra": "100924 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "100924 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100924 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39028,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39028,
            "unit": "ns/op",
            "extra": "30742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30742 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71229,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71229,
            "unit": "ns/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16686 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29442,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40860 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29442,
            "unit": "ns/op",
            "extra": "40860 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40860 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40860 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292464,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292464,
            "unit": "ns/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 317219,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 317219,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94367,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12687 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94367,
            "unit": "ns/op",
            "extra": "12687 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12687 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12687 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43033,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27802 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43033,
            "unit": "ns/op",
            "extra": "27802 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27802 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27802 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195023,
            "unit": "ns/op\t   53856 B/op\t    2040 allocs/op",
            "extra": "6144 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195023,
            "unit": "ns/op",
            "extra": "6144 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53856,
            "unit": "B/op",
            "extra": "6144 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6144 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5526,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "215349 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5526,
            "unit": "ns/op",
            "extra": "215349 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "215349 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "215349 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147512,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147512,
            "unit": "ns/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503020113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503020113A094101Federal",
            "value": 231380104,
            "unit": "1210428822503020113A094101Federal",
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
            "value": 101.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11638464 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.3,
            "unit": "ns/op",
            "extra": "11638464 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11638464 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11638464 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.56,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18298460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.56,
            "unit": "ns/op",
            "extra": "18298460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18298460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18298460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.37,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38682978 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.37,
            "unit": "ns/op",
            "extra": "38682978 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38682978 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38682978 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65124217 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.88,
            "unit": "ns/op",
            "extra": "65124217 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "65124217 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "65124217 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.944,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202890883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.944,
            "unit": "ns/op",
            "extra": "202890883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202890883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202890883 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296655,
            "unit": "ns/op\t   56817 B/op\t     637 allocs/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296655,
            "unit": "ns/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56817,
            "unit": "B/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296220,
            "unit": "ns/op\t   56830 B/op\t     637 allocs/op",
            "extra": "3831 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296220,
            "unit": "ns/op",
            "extra": "3831 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56830,
            "unit": "B/op",
            "extra": "3831 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3831 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171961,
            "unit": "ns/op\t   57039 B/op\t     640 allocs/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171961,
            "unit": "ns/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57039,
            "unit": "B/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171590,
            "unit": "ns/op\t   57067 B/op\t     640 allocs/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171590,
            "unit": "ns/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355959,
            "unit": "ns/op\t   62596 B/op\t     697 allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355959,
            "unit": "ns/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62596,
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
            "value": 357355,
            "unit": "ns/op\t   62538 B/op\t     697 allocs/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357355,
            "unit": "ns/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62538,
            "unit": "B/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348086,
            "unit": "ns/op\t   62523 B/op\t     697 allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348086,
            "unit": "ns/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62523,
            "unit": "B/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342352,
            "unit": "ns/op\t   62531 B/op\t     697 allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342352,
            "unit": "ns/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62531,
            "unit": "B/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46590746 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.84,
            "unit": "ns/op",
            "extra": "46590746 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46590746 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46590746 times\n4 procs"
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
          "id": "47963c03ae68f115b2741d8d346c6dd6583f3598",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 19247eaa66cab4f6edcdec144c29fa1e582f5779",
          "timestamp": "2025-03-01T02:54:45Z",
          "url": "https://github.com/moov-io/benchmarks/commit/47963c03ae68f115b2741d8d346c6dd6583f3598"
        },
        "date": 1740877977803,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11645,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103329 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11645,
            "unit": "ns/op",
            "extra": "103329 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103329 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103329 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39584,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39584,
            "unit": "ns/op",
            "extra": "30882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30882 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71353,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16819 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71353,
            "unit": "ns/op",
            "extra": "16819 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16819 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16819 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30123,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40549 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30123,
            "unit": "ns/op",
            "extra": "40549 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40549 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40549 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 301121,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 301121,
            "unit": "ns/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 312327,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 312327,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95255,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12394 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95255,
            "unit": "ns/op",
            "extra": "12394 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12394 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12394 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42790,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27547 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42790,
            "unit": "ns/op",
            "extra": "27547 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27547 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27547 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197604,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197604,
            "unit": "ns/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5894,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "210867 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5894,
            "unit": "ns/op",
            "extra": "210867 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "210867 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "210867 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146754,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7477 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146754,
            "unit": "ns/op",
            "extra": "7477 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7477 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7477 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503030112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503030112A094101Federal",
            "value": 231380104,
            "unit": "1210428822503030112A094101Federal",
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
            "value": 1025,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1025,
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
            "extra": "11652000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.5,
            "unit": "ns/op",
            "extra": "11652000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11652000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11652000 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.85,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17581819 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.85,
            "unit": "ns/op",
            "extra": "17581819 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17581819 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17581819 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.49,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39053635 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.49,
            "unit": "ns/op",
            "extra": "39053635 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39053635 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39053635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 21.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60773648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 21.54,
            "unit": "ns/op",
            "extra": "60773648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "60773648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "60773648 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202628439 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.919,
            "unit": "ns/op",
            "extra": "202628439 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202628439 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202628439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292588,
            "unit": "ns/op\t   56827 B/op\t     637 allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292588,
            "unit": "ns/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56827,
            "unit": "B/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4030 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292798,
            "unit": "ns/op\t   56835 B/op\t     637 allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292798,
            "unit": "ns/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56835,
            "unit": "B/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 184115,
            "unit": "ns/op\t   57027 B/op\t     640 allocs/op",
            "extra": "7046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 184115,
            "unit": "ns/op",
            "extra": "7046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57027,
            "unit": "B/op",
            "extra": "7046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169452,
            "unit": "ns/op\t   57057 B/op\t     640 allocs/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169452,
            "unit": "ns/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356565,
            "unit": "ns/op\t   62531 B/op\t     697 allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356565,
            "unit": "ns/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62531,
            "unit": "B/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353915,
            "unit": "ns/op\t   62540 B/op\t     697 allocs/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353915,
            "unit": "ns/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62540,
            "unit": "B/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349931,
            "unit": "ns/op\t   62548 B/op\t     697 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349931,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62548,
            "unit": "B/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350888,
            "unit": "ns/op\t   62451 B/op\t     697 allocs/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350888,
            "unit": "ns/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62451,
            "unit": "B/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46487702 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46487702 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46487702 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46487702 times\n4 procs"
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
          "id": "816974a1ab30dee800977f852ab9a95720bbc109",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4982e08d3c12b1f5c9e1f18b151c82a671c1364a",
          "timestamp": "2025-03-02T02:53:38Z",
          "url": "https://github.com/moov-io/benchmarks/commit/816974a1ab30dee800977f852ab9a95720bbc109"
        },
        "date": 1740964278687,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11643,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "102108 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11643,
            "unit": "ns/op",
            "extra": "102108 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "102108 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102108 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38813,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "30364 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38813,
            "unit": "ns/op",
            "extra": "30364 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "30364 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30364 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76366,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "15855 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76366,
            "unit": "ns/op",
            "extra": "15855 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "15855 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "15855 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29429,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29429,
            "unit": "ns/op",
            "extra": "40483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40483 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292913,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292913,
            "unit": "ns/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293238,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293238,
            "unit": "ns/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95388,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95388,
            "unit": "ns/op",
            "extra": "12252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43184,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27585 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43184,
            "unit": "ns/op",
            "extra": "27585 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27585 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27585 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202235,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5905 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202235,
            "unit": "ns/op",
            "extra": "5905 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5905 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5905 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5600,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "213297 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5600,
            "unit": "ns/op",
            "extra": "213297 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "213297 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153555,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "8060 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153555,
            "unit": "ns/op",
            "extra": "8060 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "8060 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8060 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503040110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503040110A094101Federal",
            "value": 231380104,
            "unit": "1210428822503040110A094101Federal",
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
            "value": 1028,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1028,
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
            "extra": "11599800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.8,
            "unit": "ns/op",
            "extra": "11599800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11599800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11599800 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 68,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17565298 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 68,
            "unit": "ns/op",
            "extra": "17565298 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17565298 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17565298 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.56,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40783809 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.56,
            "unit": "ns/op",
            "extra": "40783809 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40783809 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40783809 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 21.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65302753 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 21.04,
            "unit": "ns/op",
            "extra": "65302753 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "65302753 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "65302753 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.943,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "182214567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.943,
            "unit": "ns/op",
            "extra": "182214567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "182214567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "182214567 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302810,
            "unit": "ns/op\t   56822 B/op\t     637 allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302810,
            "unit": "ns/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56822,
            "unit": "B/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306406,
            "unit": "ns/op\t   56838 B/op\t     637 allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306406,
            "unit": "ns/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56838,
            "unit": "B/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173290,
            "unit": "ns/op\t   57027 B/op\t     640 allocs/op",
            "extra": "7077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173290,
            "unit": "ns/op",
            "extra": "7077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57027,
            "unit": "B/op",
            "extra": "7077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168310,
            "unit": "ns/op\t   57053 B/op\t     640 allocs/op",
            "extra": "6262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168310,
            "unit": "ns/op",
            "extra": "6262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "6262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359064,
            "unit": "ns/op\t   62575 B/op\t     697 allocs/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359064,
            "unit": "ns/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62575,
            "unit": "B/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358700,
            "unit": "ns/op\t   62552 B/op\t     697 allocs/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358700,
            "unit": "ns/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62552,
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
            "value": 353821,
            "unit": "ns/op\t   62522 B/op\t     697 allocs/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353821,
            "unit": "ns/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62522,
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
            "value": 354880,
            "unit": "ns/op\t   62527 B/op\t     697 allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 354880,
            "unit": "ns/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62527,
            "unit": "B/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46338532 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.85,
            "unit": "ns/op",
            "extra": "46338532 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46338532 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46338532 times\n4 procs"
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
          "id": "1b7cc73e21633b71647a6cedbd718660a14d8f42",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1653612d74fe14946ac5dedaf3361da4d3ea7c7a",
          "timestamp": "2025-03-03T02:53:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1b7cc73e21633b71647a6cedbd718660a14d8f42"
        },
        "date": 1741050592851,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11625,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "102268 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11625,
            "unit": "ns/op",
            "extra": "102268 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "102268 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102268 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39218,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30716 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39218,
            "unit": "ns/op",
            "extra": "30716 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30716 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30716 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78349,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16780 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78349,
            "unit": "ns/op",
            "extra": "16780 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16780 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16780 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29645,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29645,
            "unit": "ns/op",
            "extra": "40322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295515,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295515,
            "unit": "ns/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292409,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292409,
            "unit": "ns/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
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
            "value": 102252,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102252,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43235,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43235,
            "unit": "ns/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 196991,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5862 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 196991,
            "unit": "ns/op",
            "extra": "5862 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5862 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5862 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5951,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "210925 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5951,
            "unit": "ns/op",
            "extra": "210925 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "210925 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "210925 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147950,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7603 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147950,
            "unit": "ns/op",
            "extra": "7603 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7603 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503050109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503050109A094101Federal",
            "value": 231380104,
            "unit": "1210428822503050109A094101Federal",
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
            "value": 102.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11610858 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "11610858 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11610858 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11610858 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.49,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17732708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.49,
            "unit": "ns/op",
            "extra": "17732708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17732708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17732708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.34,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38984125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.34,
            "unit": "ns/op",
            "extra": "38984125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38984125 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38984125 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81690013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.41,
            "unit": "ns/op",
            "extra": "81690013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "81690013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "81690013 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.924,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199772464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.924,
            "unit": "ns/op",
            "extra": "199772464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "199772464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "199772464 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292482,
            "unit": "ns/op\t   56827 B/op\t     637 allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292482,
            "unit": "ns/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56827,
            "unit": "B/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297027,
            "unit": "ns/op\t   56846 B/op\t     637 allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297027,
            "unit": "ns/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56846,
            "unit": "B/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174927,
            "unit": "ns/op\t   57041 B/op\t     640 allocs/op",
            "extra": "7004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174927,
            "unit": "ns/op",
            "extra": "7004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "7004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169873,
            "unit": "ns/op\t   57051 B/op\t     640 allocs/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169873,
            "unit": "ns/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360808,
            "unit": "ns/op\t   62527 B/op\t     697 allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360808,
            "unit": "ns/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62527,
            "unit": "B/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354160,
            "unit": "ns/op\t   62549 B/op\t     697 allocs/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354160,
            "unit": "ns/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62549,
            "unit": "B/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348985,
            "unit": "ns/op\t   62516 B/op\t     697 allocs/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348985,
            "unit": "ns/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62516,
            "unit": "B/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3578 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348233,
            "unit": "ns/op\t   62529 B/op\t     697 allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348233,
            "unit": "ns/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62529,
            "unit": "B/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46566595 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.2,
            "unit": "ns/op",
            "extra": "46566595 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46566595 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46566595 times\n4 procs"
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
          "id": "b7f6ee46974067c8c9a0aac967a6905a29ac5481",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f8255cb1c966da5c89986c3ea3e318249da09d3d",
          "timestamp": "2025-03-04T02:52:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b7f6ee46974067c8c9a0aac967a6905a29ac5481"
        },
        "date": 1741137001639,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11627,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103333 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11627,
            "unit": "ns/op",
            "extra": "103333 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103333 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103333 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38864,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30008 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38864,
            "unit": "ns/op",
            "extra": "30008 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30008 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30008 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71674,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16777 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71674,
            "unit": "ns/op",
            "extra": "16777 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16777 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29630,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29630,
            "unit": "ns/op",
            "extra": "40288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40288 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 317881,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 317881,
            "unit": "ns/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293452,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293452,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95500,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12577 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95500,
            "unit": "ns/op",
            "extra": "12577 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12577 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12577 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43665,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43665,
            "unit": "ns/op",
            "extra": "27488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27488 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197005,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6128 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197005,
            "unit": "ns/op",
            "extra": "6128 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
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
            "value": 5787,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212660 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5787,
            "unit": "ns/op",
            "extra": "212660 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212660 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212660 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148039,
            "unit": "ns/op\t   57105 B/op\t     610 allocs/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148039,
            "unit": "ns/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57105,
            "unit": "B/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7429 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503060109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503060109A094101Federal",
            "value": 231380104,
            "unit": "1210428822503060109A094101Federal",
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
            "value": 1024,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1024,
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
            "extra": "11570191 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104,
            "unit": "ns/op",
            "extra": "11570191 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11570191 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11570191 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.91,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17366118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.91,
            "unit": "ns/op",
            "extra": "17366118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17366118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17366118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39365086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.55,
            "unit": "ns/op",
            "extra": "39365086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39365086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39365086 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 20.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66508309 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 20.19,
            "unit": "ns/op",
            "extra": "66508309 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "66508309 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "66508309 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202439900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.94,
            "unit": "ns/op",
            "extra": "202439900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202439900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202439900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293480,
            "unit": "ns/op\t   56817 B/op\t     637 allocs/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293480,
            "unit": "ns/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56817,
            "unit": "B/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4234 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296031,
            "unit": "ns/op\t   56829 B/op\t     637 allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296031,
            "unit": "ns/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56829,
            "unit": "B/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168966,
            "unit": "ns/op\t   57034 B/op\t     640 allocs/op",
            "extra": "6838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168966,
            "unit": "ns/op",
            "extra": "6838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57034,
            "unit": "B/op",
            "extra": "6838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6838 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167461,
            "unit": "ns/op\t   57045 B/op\t     640 allocs/op",
            "extra": "6639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167461,
            "unit": "ns/op",
            "extra": "6639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "6639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363086,
            "unit": "ns/op\t   62538 B/op\t     697 allocs/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363086,
            "unit": "ns/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62538,
            "unit": "B/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 363044,
            "unit": "ns/op\t   62528 B/op\t     697 allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363044,
            "unit": "ns/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62528,
            "unit": "B/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352687,
            "unit": "ns/op\t   62527 B/op\t     697 allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352687,
            "unit": "ns/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62527,
            "unit": "B/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345528,
            "unit": "ns/op\t   62487 B/op\t     697 allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345528,
            "unit": "ns/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62487,
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
            "value": 25.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47366058 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.67,
            "unit": "ns/op",
            "extra": "47366058 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47366058 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47366058 times\n4 procs"
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
          "id": "02d2d612e4579ee98db3f2c413420fc74a11759a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3a2e64eb58272a409d875f6c5d833483514a8ac6",
          "timestamp": "2025-03-05T02:51:42Z",
          "url": "https://github.com/moov-io/benchmarks/commit/02d2d612e4579ee98db3f2c413420fc74a11759a"
        },
        "date": 1741223385819,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11931,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "98590 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11931,
            "unit": "ns/op",
            "extra": "98590 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "98590 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98590 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39848,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "29934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39848,
            "unit": "ns/op",
            "extra": "29934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "29934 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "29934 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74260,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74260,
            "unit": "ns/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32369,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "38266 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32369,
            "unit": "ns/op",
            "extra": "38266 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "38266 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "38266 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298748,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298748,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 300346,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 300346,
            "unit": "ns/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100609,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12192 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100609,
            "unit": "ns/op",
            "extra": "12192 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12192 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12192 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44960,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "25753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44960,
            "unit": "ns/op",
            "extra": "25753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "25753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "25753 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208382,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6156 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208382,
            "unit": "ns/op",
            "extra": "6156 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6156 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6156 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5691,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "211551 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5691,
            "unit": "ns/op",
            "extra": "211551 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "211551 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211551 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152581,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7552 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152581,
            "unit": "ns/op",
            "extra": "7552 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7552 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7552 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503070109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503070109A094101Federal",
            "value": 231380104,
            "unit": "1210428822503070109A094101Federal",
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
            "value": 105.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10955712 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 105.5,
            "unit": "ns/op",
            "extra": "10955712 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10955712 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10955712 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.53,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17511014 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.53,
            "unit": "ns/op",
            "extra": "17511014 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17511014 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17511014 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39250908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.55,
            "unit": "ns/op",
            "extra": "39250908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39250908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39250908 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89623047 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.44,
            "unit": "ns/op",
            "extra": "89623047 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89623047 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89623047 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.086,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202766850 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.086,
            "unit": "ns/op",
            "extra": "202766850 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202766850 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202766850 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 324316,
            "unit": "ns/op\t   56828 B/op\t     637 allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 324316,
            "unit": "ns/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56828,
            "unit": "B/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 307242,
            "unit": "ns/op\t   56840 B/op\t     637 allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 307242,
            "unit": "ns/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56840,
            "unit": "B/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 189672,
            "unit": "ns/op\t   57033 B/op\t     640 allocs/op",
            "extra": "6806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 189672,
            "unit": "ns/op",
            "extra": "6806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57033,
            "unit": "B/op",
            "extra": "6806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178044,
            "unit": "ns/op\t   57060 B/op\t     640 allocs/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178044,
            "unit": "ns/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365740,
            "unit": "ns/op\t   62559 B/op\t     697 allocs/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365740,
            "unit": "ns/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62559,
            "unit": "B/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3330 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 363473,
            "unit": "ns/op\t   62537 B/op\t     697 allocs/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363473,
            "unit": "ns/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62537,
            "unit": "B/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 364327,
            "unit": "ns/op\t   62524 B/op\t     697 allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 364327,
            "unit": "ns/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62524,
            "unit": "B/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3488 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356153,
            "unit": "ns/op\t   62098 B/op\t     697 allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356153,
            "unit": "ns/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62098,
            "unit": "B/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46169008 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "46169008 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46169008 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46169008 times\n4 procs"
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
          "id": "473bf3c3d78a2b82020a2662b321e308fe233ef8",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e61b4c128a725def257b91afe21970e1219d3789",
          "timestamp": "2025-03-06T02:52:47Z",
          "url": "https://github.com/moov-io/benchmarks/commit/473bf3c3d78a2b82020a2662b321e308fe233ef8"
        },
        "date": 1741309837298,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11569,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103095 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11569,
            "unit": "ns/op",
            "extra": "103095 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103095 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39069,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39069,
            "unit": "ns/op",
            "extra": "30654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30654 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30654 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71833,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16722 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71833,
            "unit": "ns/op",
            "extra": "16722 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16722 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16722 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29628,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40456 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29628,
            "unit": "ns/op",
            "extra": "40456 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40456 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40456 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293793,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293793,
            "unit": "ns/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295590,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295590,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56272,
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
            "value": 95422,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95422,
            "unit": "ns/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43426,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43426,
            "unit": "ns/op",
            "extra": "27596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27596 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203144,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5774 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203144,
            "unit": "ns/op",
            "extra": "5774 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5774 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5774 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5535,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "213644 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5535,
            "unit": "ns/op",
            "extra": "213644 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "213644 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213644 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147981,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7665 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147981,
            "unit": "ns/op",
            "extra": "7665 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7665 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7665 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503080110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503080110A094101Federal",
            "value": 231380104,
            "unit": "1210428822503080110A094101Federal",
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
            "value": 104.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11391075 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.1,
            "unit": "ns/op",
            "extra": "11391075 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11391075 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11391075 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.11,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17423695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.11,
            "unit": "ns/op",
            "extra": "17423695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17423695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17423695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.5,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38998706 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.5,
            "unit": "ns/op",
            "extra": "38998706 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38998706 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38998706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89210859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.86,
            "unit": "ns/op",
            "extra": "89210859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89210859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89210859 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202781782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.99,
            "unit": "ns/op",
            "extra": "202781782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202781782 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202781782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298275,
            "unit": "ns/op\t   56827 B/op\t     637 allocs/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298275,
            "unit": "ns/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56827,
            "unit": "B/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298124,
            "unit": "ns/op\t   56847 B/op\t     637 allocs/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298124,
            "unit": "ns/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56847,
            "unit": "B/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 185472,
            "unit": "ns/op\t   57027 B/op\t     640 allocs/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 185472,
            "unit": "ns/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57027,
            "unit": "B/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176830,
            "unit": "ns/op\t   57055 B/op\t     640 allocs/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176830,
            "unit": "ns/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "5888 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363280,
            "unit": "ns/op\t   62570 B/op\t     697 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363280,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62570,
            "unit": "B/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356025,
            "unit": "ns/op\t   62536 B/op\t     697 allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356025,
            "unit": "ns/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62536,
            "unit": "B/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352451,
            "unit": "ns/op\t   62519 B/op\t     697 allocs/op",
            "extra": "3592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352451,
            "unit": "ns/op",
            "extra": "3592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62519,
            "unit": "B/op",
            "extra": "3592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356864,
            "unit": "ns/op\t   62066 B/op\t     697 allocs/op",
            "extra": "3694 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356864,
            "unit": "ns/op",
            "extra": "3694 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62066,
            "unit": "B/op",
            "extra": "3694 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3694 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46516359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.73,
            "unit": "ns/op",
            "extra": "46516359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46516359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46516359 times\n4 procs"
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
          "id": "b5cdbe2c1ca793f41f8ffa6985666b0f4a782718",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a16c946928af898e18bd92e494f7313aa5994a0f",
          "timestamp": "2025-03-07T02:53:24Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b5cdbe2c1ca793f41f8ffa6985666b0f4a782718"
        },
        "date": 1741395365917,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11545,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103902 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11545,
            "unit": "ns/op",
            "extra": "103902 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103902 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103902 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39165,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39165,
            "unit": "ns/op",
            "extra": "30570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30570 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73160,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16756 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73160,
            "unit": "ns/op",
            "extra": "16756 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16756 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16756 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29562,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40597 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29562,
            "unit": "ns/op",
            "extra": "40597 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40597 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40597 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292769,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292769,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294568,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294568,
            "unit": "ns/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98735,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98735,
            "unit": "ns/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12529 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43230,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27848 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43230,
            "unit": "ns/op",
            "extra": "27848 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27848 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27848 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198791,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6180 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198791,
            "unit": "ns/op",
            "extra": "6180 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6180 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6180 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5520,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "214182 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5520,
            "unit": "ns/op",
            "extra": "214182 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "214182 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214182 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147215,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "8288 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147215,
            "unit": "ns/op",
            "extra": "8288 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "8288 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503090055A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503090055A094101Federal",
            "value": 231380104,
            "unit": "1210428822503090055A094101Federal",
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
            "value": 107.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11408558 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 107.3,
            "unit": "ns/op",
            "extra": "11408558 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11408558 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11408558 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.04,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17655547 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.04,
            "unit": "ns/op",
            "extra": "17655547 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17655547 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17655547 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.32,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39853455 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.32,
            "unit": "ns/op",
            "extra": "39853455 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39853455 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39853455 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86532031 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "86532031 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86532031 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86532031 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.925,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202436998 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.925,
            "unit": "ns/op",
            "extra": "202436998 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202436998 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202436998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299958,
            "unit": "ns/op\t   56825 B/op\t     637 allocs/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299958,
            "unit": "ns/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56825,
            "unit": "B/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4251 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295880,
            "unit": "ns/op\t   56837 B/op\t     637 allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295880,
            "unit": "ns/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56837,
            "unit": "B/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173070,
            "unit": "ns/op\t   57014 B/op\t     640 allocs/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173070,
            "unit": "ns/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57014,
            "unit": "B/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6649 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173071,
            "unit": "ns/op\t   57049 B/op\t     640 allocs/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173071,
            "unit": "ns/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361587,
            "unit": "ns/op\t   62524 B/op\t     697 allocs/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361587,
            "unit": "ns/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62524,
            "unit": "B/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354327,
            "unit": "ns/op\t   62524 B/op\t     697 allocs/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354327,
            "unit": "ns/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62524,
            "unit": "B/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3586 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352260,
            "unit": "ns/op\t   62527 B/op\t     697 allocs/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352260,
            "unit": "ns/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62527,
            "unit": "B/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3483 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344911,
            "unit": "ns/op\t   62538 B/op\t     697 allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344911,
            "unit": "ns/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62538,
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
            "value": 25.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46600257 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.85,
            "unit": "ns/op",
            "extra": "46600257 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46600257 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46600257 times\n4 procs"
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
          "id": "f9d0d3bd4f7c2bbe655a052fdb675e6508ae974a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9e13fec49f8e2f9f9dda99b9d72b59387460c133",
          "timestamp": "2025-03-08T02:27:04Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f9d0d3bd4f7c2bbe655a052fdb675e6508ae974a"
        },
        "date": 1741482073633,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11575,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103491 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11575,
            "unit": "ns/op",
            "extra": "103491 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103491 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103491 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39186,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39186,
            "unit": "ns/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76492,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "16725 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76492,
            "unit": "ns/op",
            "extra": "16725 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "16725 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16725 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30000,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "39994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30000,
            "unit": "ns/op",
            "extra": "39994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "39994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "39994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 299964,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 299964,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293745,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293745,
            "unit": "ns/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95557,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12471 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95557,
            "unit": "ns/op",
            "extra": "12471 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12471 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43072,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43072,
            "unit": "ns/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27645 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202391,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5901 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202391,
            "unit": "ns/op",
            "extra": "5901 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5901 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5901 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5715,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "213552 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5715,
            "unit": "ns/op",
            "extra": "213552 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "213552 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213552 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149248,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149248,
            "unit": "ns/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503100100A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503100100A094101Federal",
            "value": 231380104,
            "unit": "1210428822503100100A094101Federal",
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
            "value": 1017,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1188309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1017,
            "unit": "ns/op",
            "extra": "1188309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "1188309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1188309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 105.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11363832 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 105.2,
            "unit": "ns/op",
            "extra": "11363832 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11363832 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11363832 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.52,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17455335 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.52,
            "unit": "ns/op",
            "extra": "17455335 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17455335 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17455335 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.35,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38565993 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.35,
            "unit": "ns/op",
            "extra": "38565993 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38565993 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38565993 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83324635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.91,
            "unit": "ns/op",
            "extra": "83324635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "83324635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "83324635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.993,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202935225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.993,
            "unit": "ns/op",
            "extra": "202935225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202935225 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202935225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298820,
            "unit": "ns/op\t   56823 B/op\t     637 allocs/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298820,
            "unit": "ns/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56823,
            "unit": "B/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297658,
            "unit": "ns/op\t   56833 B/op\t     637 allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297658,
            "unit": "ns/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56833,
            "unit": "B/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170989,
            "unit": "ns/op\t   57032 B/op\t     640 allocs/op",
            "extra": "6663 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170989,
            "unit": "ns/op",
            "extra": "6663 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57032,
            "unit": "B/op",
            "extra": "6663 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6663 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172686,
            "unit": "ns/op\t   57071 B/op\t     640 allocs/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172686,
            "unit": "ns/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57071,
            "unit": "B/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363340,
            "unit": "ns/op\t   62542 B/op\t     697 allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363340,
            "unit": "ns/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62542,
            "unit": "B/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356046,
            "unit": "ns/op\t   62549 B/op\t     697 allocs/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356046,
            "unit": "ns/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62549,
            "unit": "B/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354525,
            "unit": "ns/op\t   62528 B/op\t     697 allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354525,
            "unit": "ns/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62528,
            "unit": "B/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 349618,
            "unit": "ns/op\t   62533 B/op\t     697 allocs/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349618,
            "unit": "ns/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62533,
            "unit": "B/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46450921 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "46450921 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46450921 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46450921 times\n4 procs"
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
          "id": "747bce33c337acffdb2d5aa6ea84b96de671e07e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 25c932c1dbd78698ea32ba80b8c1a60690a7605c",
          "timestamp": "2025-03-09T02:30:18Z",
          "url": "https://github.com/moov-io/benchmarks/commit/747bce33c337acffdb2d5aa6ea84b96de671e07e"
        },
        "date": 1741568380200,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11697,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "100574 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11697,
            "unit": "ns/op",
            "extra": "100574 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "100574 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100574 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40201,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30260 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40201,
            "unit": "ns/op",
            "extra": "30260 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30260 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30260 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73271,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73271,
            "unit": "ns/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30301,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "39825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30301,
            "unit": "ns/op",
            "extra": "39825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "39825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "39825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 304053,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 304053,
            "unit": "ns/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 314175,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 314175,
            "unit": "ns/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96341,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96341,
            "unit": "ns/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12414 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43426,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43426,
            "unit": "ns/op",
            "extra": "27598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27598 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202520,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202520,
            "unit": "ns/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5858 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5619,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "209118 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5619,
            "unit": "ns/op",
            "extra": "209118 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "209118 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209118 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162280,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7276 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162280,
            "unit": "ns/op",
            "extra": "7276 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7276 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7276 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503110059A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503110059A094101Federal",
            "value": 231380104,
            "unit": "1210428822503110059A094101Federal",
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
            "value": 1029,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1029,
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
            "value": 105.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11352506 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 105.1,
            "unit": "ns/op",
            "extra": "11352506 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11352506 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11352506 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.26,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17482695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.26,
            "unit": "ns/op",
            "extra": "17482695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17482695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17482695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38962796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.46,
            "unit": "ns/op",
            "extra": "38962796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38962796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38962796 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88969824 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.54,
            "unit": "ns/op",
            "extra": "88969824 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88969824 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88969824 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.935,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202136860 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.935,
            "unit": "ns/op",
            "extra": "202136860 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202136860 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202136860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304943,
            "unit": "ns/op\t   56821 B/op\t     637 allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304943,
            "unit": "ns/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56821,
            "unit": "B/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309284,
            "unit": "ns/op\t   56828 B/op\t     637 allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309284,
            "unit": "ns/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56828,
            "unit": "B/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177584,
            "unit": "ns/op\t   57021 B/op\t     640 allocs/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177584,
            "unit": "ns/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57021,
            "unit": "B/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 192300,
            "unit": "ns/op\t   57040 B/op\t     640 allocs/op",
            "extra": "6529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 192300,
            "unit": "ns/op",
            "extra": "6529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57040,
            "unit": "B/op",
            "extra": "6529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371981,
            "unit": "ns/op\t   62530 B/op\t     697 allocs/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371981,
            "unit": "ns/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62530,
            "unit": "B/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3304 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 368088,
            "unit": "ns/op\t   62575 B/op\t     697 allocs/op",
            "extra": "3288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 368088,
            "unit": "ns/op",
            "extra": "3288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62575,
            "unit": "B/op",
            "extra": "3288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 360712,
            "unit": "ns/op\t   62548 B/op\t     697 allocs/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 360712,
            "unit": "ns/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62548,
            "unit": "B/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3446 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 354243,
            "unit": "ns/op\t   61998 B/op\t     697 allocs/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 354243,
            "unit": "ns/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 61998,
            "unit": "B/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3859 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46695666 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46695666 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46695666 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46695666 times\n4 procs"
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