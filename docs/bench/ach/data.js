window.BENCHMARK_DATA = {
  "lastUpdate": 1758071413932,
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
          "id": "2b253f2d5b510a705141ecb5566a62c05e391cd3",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7307783a615afdbabe6dae9529150aa33b1f1804",
          "timestamp": "2025-08-23T03:00:16Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2b253f2d5b510a705141ecb5566a62c05e391cd3"
        },
        "date": 1755998580400,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12117,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98815 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12117,
            "unit": "ns/op",
            "extra": "98815 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98815 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98815 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38436,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38436,
            "unit": "ns/op",
            "extra": "31004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74110,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16077 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74110,
            "unit": "ns/op",
            "extra": "16077 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16077 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16077 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29005,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41258 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29005,
            "unit": "ns/op",
            "extra": "41258 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41258 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41258 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291691,
            "unit": "ns/op\t   56978 B/op\t     742 allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291691,
            "unit": "ns/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56978,
            "unit": "B/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 310080,
            "unit": "ns/op\t   56980 B/op\t     742 allocs/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 310080,
            "unit": "ns/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56980,
            "unit": "B/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3784 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94720,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12763 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94720,
            "unit": "ns/op",
            "extra": "12763 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12763 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12763 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44065,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44065,
            "unit": "ns/op",
            "extra": "27025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27025 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 216053,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5766 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 216053,
            "unit": "ns/op",
            "extra": "5766 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5766 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5766 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5799,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "203578 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5799,
            "unit": "ns/op",
            "extra": "203578 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "203578 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "203578 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148502,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7288 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148502,
            "unit": "ns/op",
            "extra": "7288 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7288 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508250122A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508250122A094101Federal",
            "value": 231380104,
            "unit": "1210428822508250122A094101Federal",
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
            "value": 975,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1222474 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975,
            "unit": "ns/op",
            "extra": "1222474 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1222474 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1222474 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11848497 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.9,
            "unit": "ns/op",
            "extra": "11848497 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11848497 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11848497 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.18,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18654969 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.18,
            "unit": "ns/op",
            "extra": "18654969 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18654969 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18654969 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.06,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39545371 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.06,
            "unit": "ns/op",
            "extra": "39545371 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39545371 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39545371 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83569242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.22,
            "unit": "ns/op",
            "extra": "83569242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "83569242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "83569242 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.538,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183594868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.538,
            "unit": "ns/op",
            "extra": "183594868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183594868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183594868 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300635,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300635,
            "unit": "ns/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298807,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298807,
            "unit": "ns/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175970,
            "unit": "ns/op\t   57258 B/op\t     641 allocs/op",
            "extra": "6900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175970,
            "unit": "ns/op",
            "extra": "6900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57258,
            "unit": "B/op",
            "extra": "6900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6900 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173783,
            "unit": "ns/op\t   57302 B/op\t     641 allocs/op",
            "extra": "6777 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173783,
            "unit": "ns/op",
            "extra": "6777 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57302,
            "unit": "B/op",
            "extra": "6777 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6777 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368326,
            "unit": "ns/op\t   62814 B/op\t     698 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368326,
            "unit": "ns/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62814,
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
            "value": 362268,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362268,
            "unit": "ns/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356460,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356460,
            "unit": "ns/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344109,
            "unit": "ns/op\t   62806 B/op\t     698 allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344109,
            "unit": "ns/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62806,
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
            "value": 25.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47193448 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.64,
            "unit": "ns/op",
            "extra": "47193448 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47193448 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47193448 times\n4 procs"
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
          "id": "cde77853c22157789dfeb53a99b0947b765527ca",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fc53ba7bb15d6d6294eb6fb1aecb1ca467af27ef",
          "timestamp": "2025-08-24T03:16:56Z",
          "url": "https://github.com/moov-io/benchmarks/commit/cde77853c22157789dfeb53a99b0947b765527ca"
        },
        "date": 1756084684259,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12303,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97720 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12303,
            "unit": "ns/op",
            "extra": "97720 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97720 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97720 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38743,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30985 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38743,
            "unit": "ns/op",
            "extra": "30985 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30985 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30985 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74918,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16872 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74918,
            "unit": "ns/op",
            "extra": "16872 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16872 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16872 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30876,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30876,
            "unit": "ns/op",
            "extra": "41419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41419 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291671,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291671,
            "unit": "ns/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292257,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292257,
            "unit": "ns/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95347,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12690 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95347,
            "unit": "ns/op",
            "extra": "12690 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12690 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12690 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43801,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43801,
            "unit": "ns/op",
            "extra": "27300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27300 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208679,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208679,
            "unit": "ns/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6030 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6111,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "201057 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6111,
            "unit": "ns/op",
            "extra": "201057 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "201057 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "201057 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149277,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7336 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149277,
            "unit": "ns/op",
            "extra": "7336 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7336 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7336 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508260117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508260117A094101Federal",
            "value": 231380104,
            "unit": "1210428822508260117A094101Federal",
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
            "value": 981.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1214328 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 981.3,
            "unit": "ns/op",
            "extra": "1214328 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1214328 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1214328 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11771629 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.9,
            "unit": "ns/op",
            "extra": "11771629 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11771629 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11771629 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18638977 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.7,
            "unit": "ns/op",
            "extra": "18638977 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18638977 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18638977 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38483475 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.54,
            "unit": "ns/op",
            "extra": "38483475 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38483475 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38483475 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86399469 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.71,
            "unit": "ns/op",
            "extra": "86399469 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86399469 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86399469 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.533,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183316110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.533,
            "unit": "ns/op",
            "extra": "183316110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183316110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183316110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304877,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304877,
            "unit": "ns/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297723,
            "unit": "ns/op\t   57066 B/op\t     638 allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297723,
            "unit": "ns/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57066,
            "unit": "B/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 188901,
            "unit": "ns/op\t   57241 B/op\t     641 allocs/op",
            "extra": "6550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 188901,
            "unit": "ns/op",
            "extra": "6550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178971,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "6674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178971,
            "unit": "ns/op",
            "extra": "6674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57292,
            "unit": "B/op",
            "extra": "6674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6674 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 373350,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 373350,
            "unit": "ns/op",
            "extra": "3285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3285 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357069,
            "unit": "ns/op\t   62785 B/op\t     698 allocs/op",
            "extra": "3618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357069,
            "unit": "ns/op",
            "extra": "3618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62785,
            "unit": "B/op",
            "extra": "3618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359517,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359517,
            "unit": "ns/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345170,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "4002 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345170,
            "unit": "ns/op",
            "extra": "4002 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "4002 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4002 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47419180 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.52,
            "unit": "ns/op",
            "extra": "47419180 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47419180 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47419180 times\n4 procs"
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
          "id": "15aaccb95b60278854f52717af8944d35bbd44e9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1cd6c443f58703ddc7cefee8954f74648326ed38",
          "timestamp": "2025-08-25T03:13:09Z",
          "url": "https://github.com/moov-io/benchmarks/commit/15aaccb95b60278854f52717af8944d35bbd44e9"
        },
        "date": 1756170977841,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11849,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99660 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11849,
            "unit": "ns/op",
            "extra": "99660 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99660 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38113,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "30980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38113,
            "unit": "ns/op",
            "extra": "30980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "30980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30980 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72269,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72269,
            "unit": "ns/op",
            "extra": "17004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28716,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41810 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28716,
            "unit": "ns/op",
            "extra": "41810 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41810 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41810 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 305745,
            "unit": "ns/op\t   56980 B/op\t     742 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 305745,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56980,
            "unit": "B/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289788,
            "unit": "ns/op\t   56977 B/op\t     742 allocs/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289788,
            "unit": "ns/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56977,
            "unit": "B/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "4065 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94895,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12588 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94895,
            "unit": "ns/op",
            "extra": "12588 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12588 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12588 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43453,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27607 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43453,
            "unit": "ns/op",
            "extra": "27607 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27607 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27607 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208808,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208808,
            "unit": "ns/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5551,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "204601 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5551,
            "unit": "ns/op",
            "extra": "204601 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "204601 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "204601 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157440,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157440,
            "unit": "ns/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508270115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508270115A094101Federal",
            "value": 231380104,
            "unit": "1210428822508270115A094101Federal",
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 100.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11970070 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11970070 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11970070 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11970070 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.72,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19010463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.72,
            "unit": "ns/op",
            "extra": "19010463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19010463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19010463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.38,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39558632 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.38,
            "unit": "ns/op",
            "extra": "39558632 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39558632 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39558632 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91282074 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "91282074 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91282074 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91282074 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202192872 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.915,
            "unit": "ns/op",
            "extra": "202192872 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202192872 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202192872 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300092,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300092,
            "unit": "ns/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293350,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293350,
            "unit": "ns/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 166181,
            "unit": "ns/op\t   57264 B/op\t     641 allocs/op",
            "extra": "6990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 166181,
            "unit": "ns/op",
            "extra": "6990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57264,
            "unit": "B/op",
            "extra": "6990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6990 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 187211,
            "unit": "ns/op\t   57279 B/op\t     641 allocs/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 187211,
            "unit": "ns/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57279,
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
            "value": 351427,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 351427,
            "unit": "ns/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62752,
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
            "value": 348839,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348839,
            "unit": "ns/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348426,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348426,
            "unit": "ns/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3651 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 334738,
            "unit": "ns/op\t   62730 B/op\t     698 allocs/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 334738,
            "unit": "ns/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62730,
            "unit": "B/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46546447 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.39,
            "unit": "ns/op",
            "extra": "46546447 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46546447 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46546447 times\n4 procs"
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
          "id": "9109030377f5b2e27bf1f19232cbcdd3793eeb38",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e98ce3e2376e60891b9113b528a1c57dccb95446",
          "timestamp": "2025-08-26T03:07:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9109030377f5b2e27bf1f19232cbcdd3793eeb38"
        },
        "date": 1756257227254,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11851,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100016 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11851,
            "unit": "ns/op",
            "extra": "100016 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100016 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37986,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37986,
            "unit": "ns/op",
            "extra": "31354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31354 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70127,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17055 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70127,
            "unit": "ns/op",
            "extra": "17055 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17055 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17055 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30336,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30336,
            "unit": "ns/op",
            "extra": "41565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41565 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287277,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287277,
            "unit": "ns/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4062 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287449,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287449,
            "unit": "ns/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94286,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94286,
            "unit": "ns/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43397,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43397,
            "unit": "ns/op",
            "extra": "27777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27777 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27777 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209955,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5824 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209955,
            "unit": "ns/op",
            "extra": "5824 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5824 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5824 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5834,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "212656 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5834,
            "unit": "ns/op",
            "extra": "212656 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "212656 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212656 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147573,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147573,
            "unit": "ns/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7366 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508280113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508280113A094101Federal",
            "value": 231380104,
            "unit": "1210428822508280113A094101Federal",
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 101.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11590800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.9,
            "unit": "ns/op",
            "extra": "11590800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11590800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11590800 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.24,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18795327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.24,
            "unit": "ns/op",
            "extra": "18795327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18795327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18795327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39124390 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.3,
            "unit": "ns/op",
            "extra": "39124390 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39124390 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39124390 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91286706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.43,
            "unit": "ns/op",
            "extra": "91286706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91286706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91286706 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201754561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "201754561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201754561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201754561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 291045,
            "unit": "ns/op\t   57051 B/op\t     638 allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 291045,
            "unit": "ns/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 290717,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 290717,
            "unit": "ns/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 167849,
            "unit": "ns/op\t   57241 B/op\t     641 allocs/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 167849,
            "unit": "ns/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6309 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175828,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175828,
            "unit": "ns/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6393 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356980,
            "unit": "ns/op\t   62823 B/op\t     698 allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356980,
            "unit": "ns/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62823,
            "unit": "B/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 348182,
            "unit": "ns/op\t   62777 B/op\t     698 allocs/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348182,
            "unit": "ns/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62777,
            "unit": "B/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 344238,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344238,
            "unit": "ns/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337426,
            "unit": "ns/op\t   62668 B/op\t     698 allocs/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337426,
            "unit": "ns/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62668,
            "unit": "B/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4238 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45244056 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.79,
            "unit": "ns/op",
            "extra": "45244056 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45244056 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45244056 times\n4 procs"
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
          "id": "b8f4fc324b8ba57576b8a0b6354cede3410dc67a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c8c4a630e9b9abbffadd9c7c8a9e2a2d798a875a",
          "timestamp": "2025-08-27T03:00:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b8f4fc324b8ba57576b8a0b6354cede3410dc67a"
        },
        "date": 1756343589259,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11910,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100592 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11910,
            "unit": "ns/op",
            "extra": "100592 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100592 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38905,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31387 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38905,
            "unit": "ns/op",
            "extra": "31387 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31387 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31387 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71666,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71666,
            "unit": "ns/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28923,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28923,
            "unit": "ns/op",
            "extra": "41378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41378 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41378 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288700,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288700,
            "unit": "ns/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292162,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292162,
            "unit": "ns/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96722,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12340 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96722,
            "unit": "ns/op",
            "extra": "12340 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12340 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12340 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43367,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43367,
            "unit": "ns/op",
            "extra": "27476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27476 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 217727,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5752 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 217727,
            "unit": "ns/op",
            "extra": "5752 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5752 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5752 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5527,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213561 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5527,
            "unit": "ns/op",
            "extra": "213561 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213561 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213561 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147360,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7484 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147360,
            "unit": "ns/op",
            "extra": "7484 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7484 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7484 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508290112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508290112A094101Federal",
            "value": 231380104,
            "unit": "1210428822508290112A094101Federal",
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
            "value": 967.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1220860 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 967.8,
            "unit": "ns/op",
            "extra": "1220860 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1220860 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1220860 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11648100 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11648100 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11648100 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11648100 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18247880 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.9,
            "unit": "ns/op",
            "extra": "18247880 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18247880 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18247880 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.41,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39786868 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.41,
            "unit": "ns/op",
            "extra": "39786868 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39786868 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39786868 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91753353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91753353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91753353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91753353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.912,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202724751 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.912,
            "unit": "ns/op",
            "extra": "202724751 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202724751 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202724751 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297769,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297769,
            "unit": "ns/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299152,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299152,
            "unit": "ns/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57060,
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
            "value": 168873,
            "unit": "ns/op\t   57243 B/op\t     641 allocs/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168873,
            "unit": "ns/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57243,
            "unit": "B/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173417,
            "unit": "ns/op\t   57297 B/op\t     641 allocs/op",
            "extra": "6691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173417,
            "unit": "ns/op",
            "extra": "6691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57297,
            "unit": "B/op",
            "extra": "6691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 372400,
            "unit": "ns/op\t   62810 B/op\t     698 allocs/op",
            "extra": "3338 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 372400,
            "unit": "ns/op",
            "extra": "3338 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62810,
            "unit": "B/op",
            "extra": "3338 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3338 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 353850,
            "unit": "ns/op\t   62757 B/op\t     698 allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 353850,
            "unit": "ns/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350455,
            "unit": "ns/op\t   62739 B/op\t     698 allocs/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350455,
            "unit": "ns/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62739,
            "unit": "B/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350943,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350943,
            "unit": "ns/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4088 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45764416 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.17,
            "unit": "ns/op",
            "extra": "45764416 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45764416 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45764416 times\n4 procs"
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
          "id": "b16335254607e27f234657e8d048ef40a5fb6877",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 44cacd1f2f8c30bd07ad8260fa7e5a27648f1a63",
          "timestamp": "2025-08-28T03:00:04Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b16335254607e27f234657e8d048ef40a5fb6877"
        },
        "date": 1756429994669,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11824,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100939 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11824,
            "unit": "ns/op",
            "extra": "100939 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100939 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100939 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38229,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38229,
            "unit": "ns/op",
            "extra": "31214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31214 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70106,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70106,
            "unit": "ns/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31051,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41908 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31051,
            "unit": "ns/op",
            "extra": "41908 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41908 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41908 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288482,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288482,
            "unit": "ns/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287711,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287711,
            "unit": "ns/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94767,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12746 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94767,
            "unit": "ns/op",
            "extra": "12746 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12746 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12746 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42973,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27885 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42973,
            "unit": "ns/op",
            "extra": "27885 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27885 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27885 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210589,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210589,
            "unit": "ns/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5730 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5821,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "211728 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5821,
            "unit": "ns/op",
            "extra": "211728 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "211728 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211728 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148336,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7383 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148336,
            "unit": "ns/op",
            "extra": "7383 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7383 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7383 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508300112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508300112A094101Federal",
            "value": 231380104,
            "unit": "1210428822508300112A094101Federal",
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
            "value": 971.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1237170 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 971.3,
            "unit": "ns/op",
            "extra": "1237170 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1237170 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1237170 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.62,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11935755 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.62,
            "unit": "ns/op",
            "extra": "11935755 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11935755 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11935755 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.84,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18857991 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.84,
            "unit": "ns/op",
            "extra": "18857991 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18857991 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18857991 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.28,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39143797 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.28,
            "unit": "ns/op",
            "extra": "39143797 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39143797 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39143797 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84876175 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.51,
            "unit": "ns/op",
            "extra": "84876175 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84876175 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84876175 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "194912184 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.14,
            "unit": "ns/op",
            "extra": "194912184 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "194912184 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "194912184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298728,
            "unit": "ns/op\t   57046 B/op\t     638 allocs/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298728,
            "unit": "ns/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4225 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292221,
            "unit": "ns/op\t   57059 B/op\t     638 allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292221,
            "unit": "ns/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57059,
            "unit": "B/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178950,
            "unit": "ns/op\t   57240 B/op\t     641 allocs/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178950,
            "unit": "ns/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57240,
            "unit": "B/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172849,
            "unit": "ns/op\t   57290 B/op\t     641 allocs/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172849,
            "unit": "ns/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57290,
            "unit": "B/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361357,
            "unit": "ns/op\t   62809 B/op\t     698 allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361357,
            "unit": "ns/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62809,
            "unit": "B/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 348860,
            "unit": "ns/op\t   62774 B/op\t     698 allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348860,
            "unit": "ns/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62774,
            "unit": "B/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 347603,
            "unit": "ns/op\t   62775 B/op\t     698 allocs/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 347603,
            "unit": "ns/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62775,
            "unit": "B/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3607 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341053,
            "unit": "ns/op\t   62718 B/op\t     698 allocs/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341053,
            "unit": "ns/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62718,
            "unit": "B/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45917860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.25,
            "unit": "ns/op",
            "extra": "45917860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45917860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45917860 times\n4 procs"
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
          "id": "a9a085a4882de811ac668984cd9fb2123e5c3a7f",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ed5a2f30d14eac9a59ae998db87af355c8713c40",
          "timestamp": "2025-08-29T20:39:45Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a9a085a4882de811ac668984cd9fb2123e5c3a7f"
        },
        "date": 1756516181619,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11877,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99997 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11877,
            "unit": "ns/op",
            "extra": "99997 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99997 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99997 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39115,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31442 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39115,
            "unit": "ns/op",
            "extra": "31442 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31442 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31442 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70389,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16888 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70389,
            "unit": "ns/op",
            "extra": "16888 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16888 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16888 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29675,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41606 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29675,
            "unit": "ns/op",
            "extra": "41606 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41606 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41606 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 305468,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 305468,
            "unit": "ns/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289885,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289885,
            "unit": "ns/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4051 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94649,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12700 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94649,
            "unit": "ns/op",
            "extra": "12700 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12700 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12700 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43632,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43632,
            "unit": "ns/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205435,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205435,
            "unit": "ns/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5925 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5850,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "215305 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5850,
            "unit": "ns/op",
            "extra": "215305 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "215305 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "215305 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147055,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7708 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147055,
            "unit": "ns/op",
            "extra": "7708 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7708 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7708 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508310109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508310109A094101Federal",
            "value": 231380104,
            "unit": "1210428822508310109A094101Federal",
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
            "value": 962.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1239874 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 962.3,
            "unit": "ns/op",
            "extra": "1239874 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1239874 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1239874 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10099285 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.3,
            "unit": "ns/op",
            "extra": "10099285 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10099285 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10099285 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.57,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18801908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.57,
            "unit": "ns/op",
            "extra": "18801908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18801908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18801908 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.37,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39695006 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.37,
            "unit": "ns/op",
            "extra": "39695006 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39695006 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39695006 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91685338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91685338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91685338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91685338 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.924,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202757024 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.924,
            "unit": "ns/op",
            "extra": "202757024 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202757024 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202757024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293794,
            "unit": "ns/op\t   57055 B/op\t     638 allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293794,
            "unit": "ns/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291375,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291375,
            "unit": "ns/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 182285,
            "unit": "ns/op\t   57254 B/op\t     641 allocs/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 182285,
            "unit": "ns/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57254,
            "unit": "B/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174283,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6549 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174283,
            "unit": "ns/op",
            "extra": "6549 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6549 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6549 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362905,
            "unit": "ns/op\t   62743 B/op\t     698 allocs/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362905,
            "unit": "ns/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62743,
            "unit": "B/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351047,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351047,
            "unit": "ns/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 342458,
            "unit": "ns/op\t   62736 B/op\t     698 allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 342458,
            "unit": "ns/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62736,
            "unit": "B/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344825,
            "unit": "ns/op\t   62717 B/op\t     698 allocs/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344825,
            "unit": "ns/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62717,
            "unit": "B/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45958659 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.95,
            "unit": "ns/op",
            "extra": "45958659 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45958659 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45958659 times\n4 procs"
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
          "id": "8ec14a260b7b280d20b21dfd58a4273c4b787750",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 28a9c1f2405f1723760a0dd5e969b2810f48d241",
          "timestamp": "2025-08-30T02:54:16Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8ec14a260b7b280d20b21dfd58a4273c4b787750"
        },
        "date": 1756603069508,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11766,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101218 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11766,
            "unit": "ns/op",
            "extra": "101218 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101218 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101218 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38016,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38016,
            "unit": "ns/op",
            "extra": "31489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31489 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72624,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17072 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72624,
            "unit": "ns/op",
            "extra": "17072 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17072 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28585,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41673 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28585,
            "unit": "ns/op",
            "extra": "41673 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41673 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41673 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288303,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288303,
            "unit": "ns/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289168,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289168,
            "unit": "ns/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3990 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94398,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94398,
            "unit": "ns/op",
            "extra": "12230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12230 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43252,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43252,
            "unit": "ns/op",
            "extra": "27660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27660 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 213876,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5954 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 213876,
            "unit": "ns/op",
            "extra": "5954 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5954 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5954 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5508,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "211203 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5508,
            "unit": "ns/op",
            "extra": "211203 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "211203 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211203 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147724,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7446 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147724,
            "unit": "ns/op",
            "extra": "7446 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7446 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509010117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509010117A094101Federal",
            "value": 231380104,
            "unit": "1210428822509010117A094101Federal",
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
            "extra": "1244601 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 958,
            "unit": "ns/op",
            "extra": "1244601 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1244601 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1244601 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "9843214 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.7,
            "unit": "ns/op",
            "extra": "9843214 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "9843214 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9843214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.02,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18677301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.02,
            "unit": "ns/op",
            "extra": "18677301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18677301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18677301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.5,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39457885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.5,
            "unit": "ns/op",
            "extra": "39457885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39457885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39457885 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91422949 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "91422949 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91422949 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91422949 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.028,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202453552 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.028,
            "unit": "ns/op",
            "extra": "202453552 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202453552 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202453552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299728,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299728,
            "unit": "ns/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295357,
            "unit": "ns/op\t   57064 B/op\t     638 allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295357,
            "unit": "ns/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57064,
            "unit": "B/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169076,
            "unit": "ns/op\t   57264 B/op\t     641 allocs/op",
            "extra": "7146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169076,
            "unit": "ns/op",
            "extra": "7146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57264,
            "unit": "B/op",
            "extra": "7146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168821,
            "unit": "ns/op\t   57291 B/op\t     641 allocs/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168821,
            "unit": "ns/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57291,
            "unit": "B/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359079,
            "unit": "ns/op\t   62763 B/op\t     698 allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359079,
            "unit": "ns/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62763,
            "unit": "B/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360703,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360703,
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
            "value": 352905,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352905,
            "unit": "ns/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338984,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338984,
            "unit": "ns/op",
            "extra": "4092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62758,
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
            "value": 26.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45131271 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.85,
            "unit": "ns/op",
            "extra": "45131271 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45131271 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45131271 times\n4 procs"
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
          "id": "6d02e2b2d32a64ccd2d9a2f93c4ad2d70cf9b6fa",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5abec7cab65d5ecc642077e0eb5d99593cff8ba3",
          "timestamp": "2025-08-31T03:04:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6d02e2b2d32a64ccd2d9a2f93c4ad2d70cf9b6fa"
        },
        "date": 1756689872210,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12426,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100100 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12426,
            "unit": "ns/op",
            "extra": "100100 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100100 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100100 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38103,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38103,
            "unit": "ns/op",
            "extra": "31434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31434 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70461,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17084 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70461,
            "unit": "ns/op",
            "extra": "17084 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17084 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28918,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41604 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28918,
            "unit": "ns/op",
            "extra": "41604 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41604 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41604 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 306500,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 306500,
            "unit": "ns/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 291963,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291963,
            "unit": "ns/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
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
            "value": 98651,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12610 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98651,
            "unit": "ns/op",
            "extra": "12610 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12610 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12610 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43402,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27372 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43402,
            "unit": "ns/op",
            "extra": "27372 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27372 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27372 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210371,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5980 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210371,
            "unit": "ns/op",
            "extra": "5980 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5980 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5980 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5602,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213694 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5602,
            "unit": "ns/op",
            "extra": "213694 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213694 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213694 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149208,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149208,
            "unit": "ns/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7502 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509020123A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509020123A094101Federal",
            "value": 231380104,
            "unit": "1210428822509020123A094101Federal",
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
            "value": 985.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1241680 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 985.4,
            "unit": "ns/op",
            "extra": "1241680 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1241680 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1241680 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 103,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11910844 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103,
            "unit": "ns/op",
            "extra": "11910844 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11910844 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11910844 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.06,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19048423 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.06,
            "unit": "ns/op",
            "extra": "19048423 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19048423 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19048423 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39256244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.3,
            "unit": "ns/op",
            "extra": "39256244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39256244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39256244 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91784751 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.52,
            "unit": "ns/op",
            "extra": "91784751 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91784751 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91784751 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202849173 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.915,
            "unit": "ns/op",
            "extra": "202849173 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202849173 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202849173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 287663,
            "unit": "ns/op\t   57049 B/op\t     638 allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 287663,
            "unit": "ns/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296653,
            "unit": "ns/op\t   57064 B/op\t     638 allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296653,
            "unit": "ns/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57064,
            "unit": "B/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170422,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "6752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170422,
            "unit": "ns/op",
            "extra": "6752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "6752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6752 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173428,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173428,
            "unit": "ns/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 367299,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 367299,
            "unit": "ns/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351926,
            "unit": "ns/op\t   62749 B/op\t     698 allocs/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351926,
            "unit": "ns/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346588,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346588,
            "unit": "ns/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 349497,
            "unit": "ns/op\t   62763 B/op\t     698 allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349497,
            "unit": "ns/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62763,
            "unit": "B/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46112244 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.46,
            "unit": "ns/op",
            "extra": "46112244 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46112244 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46112244 times\n4 procs"
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
          "id": "140ab31d12cb8dbba063c17b89e03d5b7acb9343",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4d4f1ddb577de47736af23d7516cbd888c5a1c5f",
          "timestamp": "2025-09-01T03:18:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/140ab31d12cb8dbba063c17b89e03d5b7acb9343"
        },
        "date": 1756775667409,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12493,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100076 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12493,
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
            "value": 38154,
            "unit": "ns/op\t   21619 B/op\t      62 allocs/op",
            "extra": "31323 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38154,
            "unit": "ns/op",
            "extra": "31323 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21619,
            "unit": "B/op",
            "extra": "31323 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31323 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71827,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16827 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71827,
            "unit": "ns/op",
            "extra": "16827 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16827 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16827 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28726,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41768 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28726,
            "unit": "ns/op",
            "extra": "41768 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41768 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41768 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 286873,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 286873,
            "unit": "ns/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
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
            "value": 297909,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297909,
            "unit": "ns/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4009 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98506,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12482 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98506,
            "unit": "ns/op",
            "extra": "12482 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12482 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12482 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42800,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27895 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42800,
            "unit": "ns/op",
            "extra": "27895 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27895 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27895 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207902,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5905 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207902,
            "unit": "ns/op",
            "extra": "5905 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
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
            "value": 5433,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "214629 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5433,
            "unit": "ns/op",
            "extra": "214629 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "214629 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214629 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146722,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146722,
            "unit": "ns/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509030113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509030113A094101Federal",
            "value": 231380104,
            "unit": "1210428822509030113A094101Federal",
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
            "value": 982.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1249322 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.4,
            "unit": "ns/op",
            "extra": "1249322 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1249322 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1249322 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11785456 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11785456 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11785456 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11785456 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.07,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18904827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.07,
            "unit": "ns/op",
            "extra": "18904827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18904827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18904827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.24,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38804839 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.24,
            "unit": "ns/op",
            "extra": "38804839 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38804839 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38804839 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91903654 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.6,
            "unit": "ns/op",
            "extra": "91903654 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91903654 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91903654 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.932,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202851778 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.932,
            "unit": "ns/op",
            "extra": "202851778 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202851778 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202851778 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 290320,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 290320,
            "unit": "ns/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4418 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 290229,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 290229,
            "unit": "ns/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174516,
            "unit": "ns/op\t   57260 B/op\t     641 allocs/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174516,
            "unit": "ns/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57260,
            "unit": "B/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6961 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 164480,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 164480,
            "unit": "ns/op",
            "extra": "6414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356048,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "3114 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356048,
            "unit": "ns/op",
            "extra": "3114 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3114 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3114 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 346935,
            "unit": "ns/op\t   62766 B/op\t     698 allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 346935,
            "unit": "ns/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62766,
            "unit": "B/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 342221,
            "unit": "ns/op\t   62751 B/op\t     698 allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 342221,
            "unit": "ns/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62751,
            "unit": "B/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338889,
            "unit": "ns/op\t   62761 B/op\t     698 allocs/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338889,
            "unit": "ns/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62761,
            "unit": "B/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45951866 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.47,
            "unit": "ns/op",
            "extra": "45951866 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45951866 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45951866 times\n4 procs"
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
          "id": "0eec5e076717d3a54c2b6fcfee06547d822f6ea6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 76da873eb765f455430ee6d21d9e29be7681fddd",
          "timestamp": "2025-09-02T03:04:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0eec5e076717d3a54c2b6fcfee06547d822f6ea6"
        },
        "date": 1756861821147,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11785,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100354 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11785,
            "unit": "ns/op",
            "extra": "100354 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100354 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39177,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39177,
            "unit": "ns/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73850,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17056 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73850,
            "unit": "ns/op",
            "extra": "17056 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17056 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17056 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28882,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28882,
            "unit": "ns/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41497 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295283,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295283,
            "unit": "ns/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57136,
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
            "value": 288920,
            "unit": "ns/op\t   57141 B/op\t     744 allocs/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288920,
            "unit": "ns/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57141,
            "unit": "B/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94287,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12714 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94287,
            "unit": "ns/op",
            "extra": "12714 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12714 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42960,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27836 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42960,
            "unit": "ns/op",
            "extra": "27836 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27836 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27836 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 212119,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5868 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 212119,
            "unit": "ns/op",
            "extra": "5868 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5868 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5868 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5480,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "214468 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5480,
            "unit": "ns/op",
            "extra": "214468 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "214468 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214468 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147470,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7750 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147470,
            "unit": "ns/op",
            "extra": "7750 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7750 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7750 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509040109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509040109A094101Federal",
            "value": 231380104,
            "unit": "1210428822509040109A094101Federal",
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
            "extra": "1234173 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 971,
            "unit": "ns/op",
            "extra": "1234173 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1234173 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1234173 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11758671 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.1,
            "unit": "ns/op",
            "extra": "11758671 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11758671 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11758671 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.66,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18797636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.66,
            "unit": "ns/op",
            "extra": "18797636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18797636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18797636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.38,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39400036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.38,
            "unit": "ns/op",
            "extra": "39400036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39400036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39400036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91956530 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "91956530 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91956530 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91956530 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.909,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202838095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.909,
            "unit": "ns/op",
            "extra": "202838095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202838095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202838095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293036,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293036,
            "unit": "ns/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4208 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296496,
            "unit": "ns/op\t   57069 B/op\t     638 allocs/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296496,
            "unit": "ns/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57069,
            "unit": "B/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4218 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171520,
            "unit": "ns/op\t   57244 B/op\t     641 allocs/op",
            "extra": "6620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171520,
            "unit": "ns/op",
            "extra": "6620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57244,
            "unit": "B/op",
            "extra": "6620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171984,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "6615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171984,
            "unit": "ns/op",
            "extra": "6615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "6615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6615 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358855,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358855,
            "unit": "ns/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355711,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355711,
            "unit": "ns/op",
            "extra": "3555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345807,
            "unit": "ns/op\t   62739 B/op\t     698 allocs/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345807,
            "unit": "ns/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62739,
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
            "value": 338065,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338065,
            "unit": "ns/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45392734 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "45392734 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45392734 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45392734 times\n4 procs"
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
          "id": "db15768fe3df3f1b6cff8c4814efdaf107618877",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f1c88016916129058cc3230652d1e3c93d874a6c",
          "timestamp": "2025-09-03T02:52:57Z",
          "url": "https://github.com/moov-io/benchmarks/commit/db15768fe3df3f1b6cff8c4814efdaf107618877"
        },
        "date": 1756948197692,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11894,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100716 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11894,
            "unit": "ns/op",
            "extra": "100716 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100716 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100716 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38620,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38620,
            "unit": "ns/op",
            "extra": "31471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 77139,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 77139,
            "unit": "ns/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28755,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41713 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28755,
            "unit": "ns/op",
            "extra": "41713 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41713 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41713 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287532,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287532,
            "unit": "ns/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57136,
            "unit": "B/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299726,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299726,
            "unit": "ns/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94403,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12726 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94403,
            "unit": "ns/op",
            "extra": "12726 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12726 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12726 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43261,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27676 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43261,
            "unit": "ns/op",
            "extra": "27676 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27676 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27676 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 215407,
            "unit": "ns/op\t   53864 B/op\t    2040 allocs/op",
            "extra": "5482 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 215407,
            "unit": "ns/op",
            "extra": "5482 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53864,
            "unit": "B/op",
            "extra": "5482 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5482 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5518,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "214627 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5518,
            "unit": "ns/op",
            "extra": "214627 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "214627 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214627 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147284,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147284,
            "unit": "ns/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7513 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509050109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509050109A094101Federal",
            "value": 231380104,
            "unit": "1210428822509050109A094101Federal",
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
            "value": 966.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1240843 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 966.4,
            "unit": "ns/op",
            "extra": "1240843 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1240843 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1240843 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11669092 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.7,
            "unit": "ns/op",
            "extra": "11669092 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11669092 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11669092 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.35,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18616602 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.35,
            "unit": "ns/op",
            "extra": "18616602 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18616602 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18616602 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40648280 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29,
            "unit": "ns/op",
            "extra": "40648280 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40648280 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40648280 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91619635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.44,
            "unit": "ns/op",
            "extra": "91619635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91619635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91619635 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202935740 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.919,
            "unit": "ns/op",
            "extra": "202935740 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202935740 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202935740 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 290310,
            "unit": "ns/op\t   57046 B/op\t     638 allocs/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 290310,
            "unit": "ns/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298112,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298112,
            "unit": "ns/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 163919,
            "unit": "ns/op\t   57250 B/op\t     641 allocs/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 163919,
            "unit": "ns/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57250,
            "unit": "B/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169978,
            "unit": "ns/op\t   57265 B/op\t     641 allocs/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169978,
            "unit": "ns/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57265,
            "unit": "B/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359676,
            "unit": "ns/op\t   62775 B/op\t     698 allocs/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359676,
            "unit": "ns/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62775,
            "unit": "B/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356080,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356080,
            "unit": "ns/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354969,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354969,
            "unit": "ns/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 336122,
            "unit": "ns/op\t   62763 B/op\t     698 allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 336122,
            "unit": "ns/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62763,
            "unit": "B/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4046 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44938736 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "44938736 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44938736 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44938736 times\n4 procs"
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
          "id": "959d66f1bfc6705e5fe6670f974678f9db927594",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 02663906125a363f88a93899727fe78f18841603",
          "timestamp": "2025-09-04T02:53:23Z",
          "url": "https://github.com/moov-io/benchmarks/commit/959d66f1bfc6705e5fe6670f974678f9db927594"
        },
        "date": 1757034692028,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11690,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102598 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11690,
            "unit": "ns/op",
            "extra": "102598 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102598 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38498,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38498,
            "unit": "ns/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72200,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16264 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72200,
            "unit": "ns/op",
            "extra": "16264 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16264 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16264 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28998,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40998 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28998,
            "unit": "ns/op",
            "extra": "40998 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40998 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290640,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290640,
            "unit": "ns/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3957 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293815,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293815,
            "unit": "ns/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
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
            "value": 95621,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12542 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95621,
            "unit": "ns/op",
            "extra": "12542 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12542 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12542 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43735,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43735,
            "unit": "ns/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27427 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208127,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208127,
            "unit": "ns/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5553,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "215424 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5553,
            "unit": "ns/op",
            "extra": "215424 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "215424 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "215424 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148640,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7486 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148640,
            "unit": "ns/op",
            "extra": "7486 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7486 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7486 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509060110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509060110A094101Federal",
            "value": 231380104,
            "unit": "1210428822509060110A094101Federal",
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
            "extra": "1224591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.2,
            "unit": "ns/op",
            "extra": "1224591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1224591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1224591 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.72,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12163603 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.72,
            "unit": "ns/op",
            "extra": "12163603 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12163603 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12163603 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.15,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19052972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.15,
            "unit": "ns/op",
            "extra": "19052972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19052972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19052972 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.12,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39017932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.12,
            "unit": "ns/op",
            "extra": "39017932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39017932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39017932 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91338825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.48,
            "unit": "ns/op",
            "extra": "91338825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91338825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91338825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202857763 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.92,
            "unit": "ns/op",
            "extra": "202857763 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202857763 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202857763 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299588,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299588,
            "unit": "ns/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4168 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304890,
            "unit": "ns/op\t   57068 B/op\t     638 allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304890,
            "unit": "ns/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57068,
            "unit": "B/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175157,
            "unit": "ns/op\t   57253 B/op\t     641 allocs/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175157,
            "unit": "ns/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57253,
            "unit": "B/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168512,
            "unit": "ns/op\t   57273 B/op\t     641 allocs/op",
            "extra": "6382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168512,
            "unit": "ns/op",
            "extra": "6382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57273,
            "unit": "B/op",
            "extra": "6382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6382 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364136,
            "unit": "ns/op\t   62803 B/op\t     698 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364136,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62803,
            "unit": "B/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352724,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352724,
            "unit": "ns/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350233,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350233,
            "unit": "ns/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3417 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338235,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338235,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46085620 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "46085620 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46085620 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46085620 times\n4 procs"
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
          "id": "3e9c9f2168da6db25d0e4d8b0205bf21a7246766",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 431be57b1b08a7e7932e1cfb11d9fd4e25c21e2b",
          "timestamp": "2025-09-05T02:56:24Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3e9c9f2168da6db25d0e4d8b0205bf21a7246766"
        },
        "date": 1757120973151,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11650,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103050 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11650,
            "unit": "ns/op",
            "extra": "103050 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103050 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103050 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37996,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37996,
            "unit": "ns/op",
            "extra": "31382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31382 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71365,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16880 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71365,
            "unit": "ns/op",
            "extra": "16880 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
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
            "value": 28962,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "36901 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28962,
            "unit": "ns/op",
            "extra": "36901 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "36901 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "36901 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290495,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "3800 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290495,
            "unit": "ns/op",
            "extra": "3800 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57136,
            "unit": "B/op",
            "extra": "3800 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3800 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290377,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290377,
            "unit": "ns/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100164,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100164,
            "unit": "ns/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43299,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "28016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43299,
            "unit": "ns/op",
            "extra": "28016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "28016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28016 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206381,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5436 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206381,
            "unit": "ns/op",
            "extra": "5436 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5436 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5436 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5478,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207948 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5478,
            "unit": "ns/op",
            "extra": "207948 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207948 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207948 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147039,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147039,
            "unit": "ns/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509070108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509070108A094101Federal",
            "value": 231380104,
            "unit": "1210428822509070108A094101Federal",
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
            "value": 998.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1208022 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 998.9,
            "unit": "ns/op",
            "extra": "1208022 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1208022 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1208022 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12138811 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.58,
            "unit": "ns/op",
            "extra": "12138811 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12138811 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12138811 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.99,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18922557 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.99,
            "unit": "ns/op",
            "extra": "18922557 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18922557 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18922557 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.09,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "35905003 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.09,
            "unit": "ns/op",
            "extra": "35905003 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "35905003 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "35905003 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91188687 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.34,
            "unit": "ns/op",
            "extra": "91188687 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91188687 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91188687 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.911,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202815540 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.911,
            "unit": "ns/op",
            "extra": "202815540 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202815540 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202815540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298863,
            "unit": "ns/op\t   57056 B/op\t     638 allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298863,
            "unit": "ns/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57056,
            "unit": "B/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292007,
            "unit": "ns/op\t   57069 B/op\t     638 allocs/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292007,
            "unit": "ns/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57069,
            "unit": "B/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171154,
            "unit": "ns/op\t   57264 B/op\t     641 allocs/op",
            "extra": "6913 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171154,
            "unit": "ns/op",
            "extra": "6913 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57264,
            "unit": "B/op",
            "extra": "6913 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6913 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170158,
            "unit": "ns/op\t   57287 B/op\t     641 allocs/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170158,
            "unit": "ns/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57287,
            "unit": "B/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 360748,
            "unit": "ns/op\t   62749 B/op\t     698 allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360748,
            "unit": "ns/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358811,
            "unit": "ns/op\t   62773 B/op\t     698 allocs/op",
            "extra": "3486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358811,
            "unit": "ns/op",
            "extra": "3486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62773,
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
            "value": 358291,
            "unit": "ns/op\t   62776 B/op\t     698 allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358291,
            "unit": "ns/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344226,
            "unit": "ns/op\t   62732 B/op\t     698 allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344226,
            "unit": "ns/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62732,
            "unit": "B/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4194 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45488721 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45488721 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45488721 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45488721 times\n4 procs"
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
          "id": "1cffb0cd0e81c6c9d4731c66b9741fe5af564a52",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e86f69c87c1b2e31646cf8a69516eb3d867a043d",
          "timestamp": "2025-09-06T02:51:50Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1cffb0cd0e81c6c9d4731c66b9741fe5af564a52"
        },
        "date": 1757207796763,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12285,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100380 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12285,
            "unit": "ns/op",
            "extra": "100380 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100380 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100380 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38352,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31062 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38352,
            "unit": "ns/op",
            "extra": "31062 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31062 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31062 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76819,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76819,
            "unit": "ns/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29389,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29389,
            "unit": "ns/op",
            "extra": "40572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40572 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 299277,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 299277,
            "unit": "ns/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295957,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295957,
            "unit": "ns/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100636,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12195 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100636,
            "unit": "ns/op",
            "extra": "12195 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12195 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43447,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27662 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43447,
            "unit": "ns/op",
            "extra": "27662 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27662 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27662 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205942,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5774 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205942,
            "unit": "ns/op",
            "extra": "5774 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
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
            "value": 5466,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "214248 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5466,
            "unit": "ns/op",
            "extra": "214248 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "214248 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214248 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149420,
            "unit": "ns/op\t   57943 B/op\t     613 allocs/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149420,
            "unit": "ns/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57943,
            "unit": "B/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509080115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509080115A094101Federal",
            "value": 231380104,
            "unit": "1210428822509080115A094101Federal",
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
            "extra": "1221253 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.5,
            "unit": "ns/op",
            "extra": "1221253 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1221253 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1221253 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10321058 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.27,
            "unit": "ns/op",
            "extra": "10321058 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10321058 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10321058 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.96,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18803499 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.96,
            "unit": "ns/op",
            "extra": "18803499 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18803499 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18803499 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.06,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40275385 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.06,
            "unit": "ns/op",
            "extra": "40275385 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40275385 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40275385 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91824630 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.41,
            "unit": "ns/op",
            "extra": "91824630 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91824630 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91824630 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202673784 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202673784 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202673784 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202673784 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297846,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297846,
            "unit": "ns/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302161,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302161,
            "unit": "ns/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173037,
            "unit": "ns/op\t   57258 B/op\t     641 allocs/op",
            "extra": "6891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173037,
            "unit": "ns/op",
            "extra": "6891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57258,
            "unit": "B/op",
            "extra": "6891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6891 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184632,
            "unit": "ns/op\t   57286 B/op\t     641 allocs/op",
            "extra": "7032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184632,
            "unit": "ns/op",
            "extra": "7032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57286,
            "unit": "B/op",
            "extra": "7032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358653,
            "unit": "ns/op\t   62808 B/op\t     698 allocs/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358653,
            "unit": "ns/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62808,
            "unit": "B/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351489,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351489,
            "unit": "ns/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353651,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353651,
            "unit": "ns/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3444 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344030,
            "unit": "ns/op\t   62807 B/op\t     698 allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344030,
            "unit": "ns/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62807,
            "unit": "B/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45866835 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.48,
            "unit": "ns/op",
            "extra": "45866835 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45866835 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45866835 times\n4 procs"
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
          "id": "c1f34910b57196448bf6e76dde6a5edbff903d60",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d589d30e3b77b98154ca7865a4fae5f6cc1dc065",
          "timestamp": "2025-09-07T03:00:20Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c1f34910b57196448bf6e76dde6a5edbff903d60"
        },
        "date": 1757294127955,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11902,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11902,
            "unit": "ns/op",
            "extra": "100958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100958 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100958 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39240,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30655 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39240,
            "unit": "ns/op",
            "extra": "30655 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30655 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30655 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71474,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16740 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71474,
            "unit": "ns/op",
            "extra": "16740 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16740 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16740 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29530,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40868 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29530,
            "unit": "ns/op",
            "extra": "40868 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40868 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295266,
            "unit": "ns/op\t   57141 B/op\t     744 allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295266,
            "unit": "ns/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57141,
            "unit": "B/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4003 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294656,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294656,
            "unit": "ns/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97507,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12476 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97507,
            "unit": "ns/op",
            "extra": "12476 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12476 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44202,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26800 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44202,
            "unit": "ns/op",
            "extra": "26800 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26800 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26800 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206198,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5988 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206198,
            "unit": "ns/op",
            "extra": "5988 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5988 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5988 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5550,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "206847 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5550,
            "unit": "ns/op",
            "extra": "206847 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "206847 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "206847 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151464,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151464,
            "unit": "ns/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509090114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509090114A094101Federal",
            "value": 231380104,
            "unit": "1210428822509090114A094101Federal",
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
            "value": 982.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1217640 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.1,
            "unit": "ns/op",
            "extra": "1217640 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1217640 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1217640 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.71,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12043677 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.71,
            "unit": "ns/op",
            "extra": "12043677 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12043677 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12043677 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18730010 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.9,
            "unit": "ns/op",
            "extra": "18730010 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18730010 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18730010 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.98,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39606885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.98,
            "unit": "ns/op",
            "extra": "39606885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39606885 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39606885 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91667262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.52,
            "unit": "ns/op",
            "extra": "91667262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91667262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91667262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.928,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202899184 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.928,
            "unit": "ns/op",
            "extra": "202899184 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202899184 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202899184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298097,
            "unit": "ns/op\t   57046 B/op\t     638 allocs/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298097,
            "unit": "ns/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304545,
            "unit": "ns/op\t   57070 B/op\t     638 allocs/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304545,
            "unit": "ns/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57070,
            "unit": "B/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3818 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172365,
            "unit": "ns/op\t   57255 B/op\t     641 allocs/op",
            "extra": "6901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172365,
            "unit": "ns/op",
            "extra": "6901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57255,
            "unit": "B/op",
            "extra": "6901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173424,
            "unit": "ns/op\t   57271 B/op\t     641 allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173424,
            "unit": "ns/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57271,
            "unit": "B/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 372810,
            "unit": "ns/op\t   62769 B/op\t     698 allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 372810,
            "unit": "ns/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62769,
            "unit": "B/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360600,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360600,
            "unit": "ns/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62754,
            "unit": "B/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357998,
            "unit": "ns/op\t   62747 B/op\t     698 allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357998,
            "unit": "ns/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62747,
            "unit": "B/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 354825,
            "unit": "ns/op\t   62773 B/op\t     698 allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 354825,
            "unit": "ns/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62773,
            "unit": "B/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45730826 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.69,
            "unit": "ns/op",
            "extra": "45730826 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45730826 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45730826 times\n4 procs"
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
          "id": "b8f181e09d439132aae9d2ffd318bbe3925c3e61",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 79b2606e51b1c8850dbd8a1b2c455dcc5132d82e",
          "timestamp": "2025-09-08T03:04:01Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b8f181e09d439132aae9d2ffd318bbe3925c3e61"
        },
        "date": 1757380358479,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11664,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102228 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11664,
            "unit": "ns/op",
            "extra": "102228 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102228 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102228 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38448,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38448,
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
            "value": 70681,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "15807 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70681,
            "unit": "ns/op",
            "extra": "15807 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "15807 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15807 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30519,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41474 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30519,
            "unit": "ns/op",
            "extra": "41474 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41474 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41474 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294768,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294768,
            "unit": "ns/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292845,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292845,
            "unit": "ns/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95809,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95809,
            "unit": "ns/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42988,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26480 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42988,
            "unit": "ns/op",
            "extra": "26480 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26480 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26480 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 212523,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5785 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 212523,
            "unit": "ns/op",
            "extra": "5785 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5785 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5785 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5427,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "216436 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5427,
            "unit": "ns/op",
            "extra": "216436 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "216436 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216436 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148829,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7548 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148829,
            "unit": "ns/op",
            "extra": "7548 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7548 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509100112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509100112A094101Federal",
            "value": 231380104,
            "unit": "1210428822509100112A094101Federal",
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
            "value": 975.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1225993 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975.4,
            "unit": "ns/op",
            "extra": "1225993 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1225993 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1225993 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12087457 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.9,
            "unit": "ns/op",
            "extra": "12087457 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12087457 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12087457 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.71,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19074543 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.71,
            "unit": "ns/op",
            "extra": "19074543 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19074543 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19074543 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.01,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39127165 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.01,
            "unit": "ns/op",
            "extra": "39127165 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39127165 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39127165 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91595836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.51,
            "unit": "ns/op",
            "extra": "91595836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91595836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91595836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.922,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202926307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.922,
            "unit": "ns/op",
            "extra": "202926307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202926307 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202926307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294879,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294879,
            "unit": "ns/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306545,
            "unit": "ns/op\t   57069 B/op\t     638 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306545,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57069,
            "unit": "B/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175392,
            "unit": "ns/op\t   57260 B/op\t     641 allocs/op",
            "extra": "7063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175392,
            "unit": "ns/op",
            "extra": "7063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57260,
            "unit": "B/op",
            "extra": "7063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169226,
            "unit": "ns/op\t   57300 B/op\t     641 allocs/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169226,
            "unit": "ns/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57300,
            "unit": "B/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363847,
            "unit": "ns/op\t   62814 B/op\t     698 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363847,
            "unit": "ns/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62814,
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
            "value": 357200,
            "unit": "ns/op\t   62773 B/op\t     698 allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357200,
            "unit": "ns/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62773,
            "unit": "B/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3536 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349994,
            "unit": "ns/op\t   62763 B/op\t     698 allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349994,
            "unit": "ns/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62763,
            "unit": "B/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344134,
            "unit": "ns/op\t   62811 B/op\t     698 allocs/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344134,
            "unit": "ns/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62811,
            "unit": "B/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45856741 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.24,
            "unit": "ns/op",
            "extra": "45856741 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45856741 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45856741 times\n4 procs"
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
          "id": "3a3de21f8c87f716f09496805cb98aa900b1eaae",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d12e23a2f4529db5d99084aadfca83cb3a68eabc",
          "timestamp": "2025-09-09T02:59:03Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3a3de21f8c87f716f09496805cb98aa900b1eaae"
        },
        "date": 1757466638162,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11572,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103117 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11572,
            "unit": "ns/op",
            "extra": "103117 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103117 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103117 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40803,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40803,
            "unit": "ns/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31309 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70277,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70277,
            "unit": "ns/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28854,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41715 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28854,
            "unit": "ns/op",
            "extra": "41715 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41715 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41715 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289364,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289364,
            "unit": "ns/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289439,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289439,
            "unit": "ns/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94315,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12765 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94315,
            "unit": "ns/op",
            "extra": "12765 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12765 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12765 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44968,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "28095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44968,
            "unit": "ns/op",
            "extra": "28095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "28095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28095 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204065,
            "unit": "ns/op\t   53865 B/op\t    2040 allocs/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204065,
            "unit": "ns/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53865,
            "unit": "B/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5477,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "215023 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5477,
            "unit": "ns/op",
            "extra": "215023 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "215023 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "215023 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147472,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147472,
            "unit": "ns/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509110110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509110110A094101Federal",
            "value": 231380104,
            "unit": "1210428822509110110A094101Federal",
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
            "value": 982.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1221511 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.6,
            "unit": "ns/op",
            "extra": "1221511 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1221511 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1221511 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11987586 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.4,
            "unit": "ns/op",
            "extra": "11987586 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11987586 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11987586 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.13,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18865195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.13,
            "unit": "ns/op",
            "extra": "18865195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18865195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18865195 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.9,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40164691 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.9,
            "unit": "ns/op",
            "extra": "40164691 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40164691 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40164691 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91731561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91731561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91731561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91731561 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.923,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202708749 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.923,
            "unit": "ns/op",
            "extra": "202708749 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202708749 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202708749 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299862,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299862,
            "unit": "ns/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298352,
            "unit": "ns/op\t   57057 B/op\t     638 allocs/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298352,
            "unit": "ns/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 167044,
            "unit": "ns/op\t   57253 B/op\t     641 allocs/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 167044,
            "unit": "ns/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57253,
            "unit": "B/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171918,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171918,
            "unit": "ns/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354016,
            "unit": "ns/op\t   62753 B/op\t     698 allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354016,
            "unit": "ns/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62753,
            "unit": "B/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359564,
            "unit": "ns/op\t   62802 B/op\t     698 allocs/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359564,
            "unit": "ns/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62802,
            "unit": "B/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3704 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353371,
            "unit": "ns/op\t   62751 B/op\t     698 allocs/op",
            "extra": "3640 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353371,
            "unit": "ns/op",
            "extra": "3640 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62751,
            "unit": "B/op",
            "extra": "3640 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3640 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337413,
            "unit": "ns/op\t   62680 B/op\t     698 allocs/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337413,
            "unit": "ns/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62680,
            "unit": "B/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45063048 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.15,
            "unit": "ns/op",
            "extra": "45063048 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45063048 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45063048 times\n4 procs"
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
          "id": "2a90cd297fda3ab57761462cc719ce4a2e023884",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fd420ddfdf7c73ae701919f1626afe0844add66b",
          "timestamp": "2025-09-10T02:53:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2a90cd297fda3ab57761462cc719ce4a2e023884"
        },
        "date": 1757553127232,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11766,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101232 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11766,
            "unit": "ns/op",
            "extra": "101232 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101232 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101232 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37979,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37979,
            "unit": "ns/op",
            "extra": "31195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31195 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74963,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74963,
            "unit": "ns/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29015,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29015,
            "unit": "ns/op",
            "extra": "41505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41505 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291633,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291633,
            "unit": "ns/op",
            "extra": "3958 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
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
            "value": 290003,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290003,
            "unit": "ns/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95253,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12543 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95253,
            "unit": "ns/op",
            "extra": "12543 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12543 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12543 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43648,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27261 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43648,
            "unit": "ns/op",
            "extra": "27261 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27261 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27261 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208085,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208085,
            "unit": "ns/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5740 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5498,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "208351 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5498,
            "unit": "ns/op",
            "extra": "208351 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "208351 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "208351 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149299,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149299,
            "unit": "ns/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7189 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509120111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509120111A094101Federal",
            "value": 231380104,
            "unit": "1210428822509120111A094101Federal",
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
            "value": 995.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1224904 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 995.4,
            "unit": "ns/op",
            "extra": "1224904 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1224904 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1224904 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.33,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12202755 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.33,
            "unit": "ns/op",
            "extra": "12202755 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12202755 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12202755 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.69,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19088136 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.69,
            "unit": "ns/op",
            "extra": "19088136 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19088136 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19088136 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.99,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39668691 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.99,
            "unit": "ns/op",
            "extra": "39668691 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39668691 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39668691 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91902156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.34,
            "unit": "ns/op",
            "extra": "91902156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91902156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91902156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203963386 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "203963386 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203963386 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203963386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295533,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295533,
            "unit": "ns/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4275 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296704,
            "unit": "ns/op\t   57057 B/op\t     638 allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296704,
            "unit": "ns/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168995,
            "unit": "ns/op\t   57258 B/op\t     641 allocs/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168995,
            "unit": "ns/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57258,
            "unit": "B/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172827,
            "unit": "ns/op\t   57271 B/op\t     641 allocs/op",
            "extra": "6469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172827,
            "unit": "ns/op",
            "extra": "6469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57271,
            "unit": "B/op",
            "extra": "6469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 366813,
            "unit": "ns/op\t   62805 B/op\t     698 allocs/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 366813,
            "unit": "ns/op",
            "extra": "3436 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62805,
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
            "value": 361314,
            "unit": "ns/op\t   62825 B/op\t     698 allocs/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361314,
            "unit": "ns/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62825,
            "unit": "B/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352295,
            "unit": "ns/op\t   62733 B/op\t     698 allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352295,
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
            "value": 343527,
            "unit": "ns/op\t   62720 B/op\t     698 allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343527,
            "unit": "ns/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62720,
            "unit": "B/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46032126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.88,
            "unit": "ns/op",
            "extra": "46032126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46032126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46032126 times\n4 procs"
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
          "id": "117acb0970007dc0a1dc022d5e9fec4c27dc1178",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c30891851ae8ac7960e68c4d94d61d30e55abb10",
          "timestamp": "2025-09-11T02:57:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/117acb0970007dc0a1dc022d5e9fec4c27dc1178"
        },
        "date": 1757639358419,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11676,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101504 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11676,
            "unit": "ns/op",
            "extra": "101504 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101504 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101504 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37964,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37964,
            "unit": "ns/op",
            "extra": "31476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31476 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76585,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17016 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76585,
            "unit": "ns/op",
            "extra": "17016 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17016 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28784,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41581 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28784,
            "unit": "ns/op",
            "extra": "41581 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41581 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41581 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293009,
            "unit": "ns/op\t   57142 B/op\t     744 allocs/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293009,
            "unit": "ns/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57142,
            "unit": "B/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3890 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289016,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289016,
            "unit": "ns/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4059 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97170,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12520 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97170,
            "unit": "ns/op",
            "extra": "12520 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12520 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43025,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43025,
            "unit": "ns/op",
            "extra": "27648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27648 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206924,
            "unit": "ns/op\t   53864 B/op\t    2040 allocs/op",
            "extra": "5728 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206924,
            "unit": "ns/op",
            "extra": "5728 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53864,
            "unit": "B/op",
            "extra": "5728 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5728 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5446,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "216883 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5446,
            "unit": "ns/op",
            "extra": "216883 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "216883 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216883 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147904,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7963 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147904,
            "unit": "ns/op",
            "extra": "7963 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7963 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7963 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509130108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509130108A094101Federal",
            "value": 231380104,
            "unit": "1210428822509130108A094101Federal",
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
            "value": 975.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1215104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975.5,
            "unit": "ns/op",
            "extra": "1215104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1215104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1215104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.93,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12355393 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.93,
            "unit": "ns/op",
            "extra": "12355393 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12355393 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12355393 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.38,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18717980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.38,
            "unit": "ns/op",
            "extra": "18717980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18717980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18717980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.81,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39820419 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.81,
            "unit": "ns/op",
            "extra": "39820419 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39820419 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39820419 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90970012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.49,
            "unit": "ns/op",
            "extra": "90970012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90970012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90970012 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.946,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202897336 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.946,
            "unit": "ns/op",
            "extra": "202897336 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202897336 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202897336 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306317,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306317,
            "unit": "ns/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 290871,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 290871,
            "unit": "ns/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176055,
            "unit": "ns/op\t   57258 B/op\t     641 allocs/op",
            "extra": "7242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176055,
            "unit": "ns/op",
            "extra": "7242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57258,
            "unit": "B/op",
            "extra": "7242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 185423,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 185423,
            "unit": "ns/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370475,
            "unit": "ns/op\t   62787 B/op\t     698 allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370475,
            "unit": "ns/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62787,
            "unit": "B/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360044,
            "unit": "ns/op\t   62766 B/op\t     698 allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360044,
            "unit": "ns/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62766,
            "unit": "B/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357517,
            "unit": "ns/op\t   62761 B/op\t     698 allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357517,
            "unit": "ns/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62761,
            "unit": "B/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347422,
            "unit": "ns/op\t   62803 B/op\t     698 allocs/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347422,
            "unit": "ns/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62803,
            "unit": "B/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45363070 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45363070 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45363070 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45363070 times\n4 procs"
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
          "id": "9f52b9dd3575372c632fc6aefbb80a08085eea7c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3f0cf5599edf10162bb8ceede52a5f21a605a459",
          "timestamp": "2025-09-12T02:52:35Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9f52b9dd3575372c632fc6aefbb80a08085eea7c"
        },
        "date": 1757725584926,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11621,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102864 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11621,
            "unit": "ns/op",
            "extra": "102864 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102864 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102864 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37673,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31653 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37673,
            "unit": "ns/op",
            "extra": "31653 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31653 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31653 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78756,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "17184 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78756,
            "unit": "ns/op",
            "extra": "17184 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
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
            "value": 28588,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28588,
            "unit": "ns/op",
            "extra": "41742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41742 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 287708,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 287708,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288767,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288767,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93580,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93580,
            "unit": "ns/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42682,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27896 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42682,
            "unit": "ns/op",
            "extra": "27896 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27896 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27896 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210448,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210448,
            "unit": "ns/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5910 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5428,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213376 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5428,
            "unit": "ns/op",
            "extra": "213376 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213376 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213376 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146775,
            "unit": "ns/op\t   57943 B/op\t     613 allocs/op",
            "extra": "7459 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146775,
            "unit": "ns/op",
            "extra": "7459 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57943,
            "unit": "B/op",
            "extra": "7459 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7459 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509140105A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509140105A094101Federal",
            "value": 231380104,
            "unit": "1210428822509140105A094101Federal",
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
            "value": 987.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1202751 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 987.2,
            "unit": "ns/op",
            "extra": "1202751 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1202751 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1202751 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12166398 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.86,
            "unit": "ns/op",
            "extra": "12166398 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12166398 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12166398 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.67,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19147753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.67,
            "unit": "ns/op",
            "extra": "19147753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19147753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19147753 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.37,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39637428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.37,
            "unit": "ns/op",
            "extra": "39637428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39637428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39637428 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91704291 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.67,
            "unit": "ns/op",
            "extra": "91704291 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91704291 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91704291 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.947,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202836327 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.947,
            "unit": "ns/op",
            "extra": "202836327 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202836327 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202836327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297160,
            "unit": "ns/op\t   57041 B/op\t     638 allocs/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297160,
            "unit": "ns/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292433,
            "unit": "ns/op\t   57069 B/op\t     638 allocs/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292433,
            "unit": "ns/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57069,
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
            "value": 166246,
            "unit": "ns/op\t   57270 B/op\t     641 allocs/op",
            "extra": "7106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 166246,
            "unit": "ns/op",
            "extra": "7106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57270,
            "unit": "B/op",
            "extra": "7106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167270,
            "unit": "ns/op\t   57279 B/op\t     641 allocs/op",
            "extra": "6392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167270,
            "unit": "ns/op",
            "extra": "6392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57279,
            "unit": "B/op",
            "extra": "6392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357210,
            "unit": "ns/op\t   62748 B/op\t     698 allocs/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357210,
            "unit": "ns/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62748,
            "unit": "B/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 346215,
            "unit": "ns/op\t   62770 B/op\t     698 allocs/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 346215,
            "unit": "ns/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62770,
            "unit": "B/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 348999,
            "unit": "ns/op\t   62749 B/op\t     698 allocs/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348999,
            "unit": "ns/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62749,
            "unit": "B/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337752,
            "unit": "ns/op\t   62677 B/op\t     698 allocs/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337752,
            "unit": "ns/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62677,
            "unit": "B/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45947905 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.64,
            "unit": "ns/op",
            "extra": "45947905 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45947905 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45947905 times\n4 procs"
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
          "id": "1a091ab6c1be7753a2e03f7d5b747ca7faed937a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 560bb46b1b36fabbc006ae2d4934527407875a53",
          "timestamp": "2025-09-13T02:43:25Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1a091ab6c1be7753a2e03f7d5b747ca7faed937a"
        },
        "date": 1757812569964,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11672,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102087 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11672,
            "unit": "ns/op",
            "extra": "102087 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102087 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102087 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38284,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38284,
            "unit": "ns/op",
            "extra": "30530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30530 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71297,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16908 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71297,
            "unit": "ns/op",
            "extra": "16908 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16908 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16908 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29356,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29356,
            "unit": "ns/op",
            "extra": "41096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41096 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 306982,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 306982,
            "unit": "ns/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293261,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293261,
            "unit": "ns/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101400,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12495 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101400,
            "unit": "ns/op",
            "extra": "12495 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12495 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12495 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43441,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43441,
            "unit": "ns/op",
            "extra": "27570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27570 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207282,
            "unit": "ns/op\t   53866 B/op\t    2040 allocs/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207282,
            "unit": "ns/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53866,
            "unit": "B/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5794 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5422,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "217617 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5422,
            "unit": "ns/op",
            "extra": "217617 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "217617 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "217617 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148084,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7332 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148084,
            "unit": "ns/op",
            "extra": "7332 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7332 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7332 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509150115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509150115A094101Federal",
            "value": 231380104,
            "unit": "1210428822509150115A094101Federal",
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
            "extra": "1225167 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1225167 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1225167 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1225167 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.06,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12203569 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.06,
            "unit": "ns/op",
            "extra": "12203569 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12203569 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12203569 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.17,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18404761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.17,
            "unit": "ns/op",
            "extra": "18404761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18404761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18404761 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.84,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40540321 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.84,
            "unit": "ns/op",
            "extra": "40540321 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40540321 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40540321 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91801645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91801645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91801645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91801645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202967355 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.92,
            "unit": "ns/op",
            "extra": "202967355 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202967355 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202967355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300533,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300533,
            "unit": "ns/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296486,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296486,
            "unit": "ns/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173659,
            "unit": "ns/op\t   57240 B/op\t     641 allocs/op",
            "extra": "6546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173659,
            "unit": "ns/op",
            "extra": "6546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57240,
            "unit": "B/op",
            "extra": "6546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169090,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169090,
            "unit": "ns/op",
            "extra": "6478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358967,
            "unit": "ns/op\t   62769 B/op\t     698 allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358967,
            "unit": "ns/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62769,
            "unit": "B/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361296,
            "unit": "ns/op\t   62745 B/op\t     698 allocs/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361296,
            "unit": "ns/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62745,
            "unit": "B/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346261,
            "unit": "ns/op\t   62745 B/op\t     698 allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346261,
            "unit": "ns/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62745,
            "unit": "B/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343324,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343324,
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
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45670305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45670305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45670305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45670305 times\n4 procs"
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
          "id": "f645ee67a1fe690299a1b7b3a1089b911d101b0c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7803ff01b7e76afc5e368e57197b1da977cc7f1c",
          "timestamp": "2025-09-14T03:00:01Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f645ee67a1fe690299a1b7b3a1089b911d101b0c"
        },
        "date": 1757898981902,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11743,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100600 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11743,
            "unit": "ns/op",
            "extra": "100600 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100600 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100600 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38960,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38960,
            "unit": "ns/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31126 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76466,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76466,
            "unit": "ns/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30428,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "38926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30428,
            "unit": "ns/op",
            "extra": "38926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "38926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "38926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297821,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297821,
            "unit": "ns/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295965,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295965,
            "unit": "ns/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96561,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12240 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96561,
            "unit": "ns/op",
            "extra": "12240 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12240 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12240 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43580,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43580,
            "unit": "ns/op",
            "extra": "27565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27565 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207950,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207950,
            "unit": "ns/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5751,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213572 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5751,
            "unit": "ns/op",
            "extra": "213572 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213572 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213572 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149023,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149023,
            "unit": "ns/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7452 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509160115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509160115A094101Federal",
            "value": 231380104,
            "unit": "1210428822509160115A094101Federal",
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
            "value": 983.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1226776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 983.1,
            "unit": "ns/op",
            "extra": "1226776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1226776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1226776 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.81,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11679338 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.81,
            "unit": "ns/op",
            "extra": "11679338 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11679338 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11679338 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.28,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18881020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.28,
            "unit": "ns/op",
            "extra": "18881020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18881020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18881020 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40483228 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.96,
            "unit": "ns/op",
            "extra": "40483228 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40483228 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40483228 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91590097 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.37,
            "unit": "ns/op",
            "extra": "91590097 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91590097 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91590097 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.943,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202647853 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.943,
            "unit": "ns/op",
            "extra": "202647853 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202647853 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202647853 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297052,
            "unit": "ns/op\t   57049 B/op\t     638 allocs/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297052,
            "unit": "ns/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4117 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 305077,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305077,
            "unit": "ns/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 194415,
            "unit": "ns/op\t   57255 B/op\t     641 allocs/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 194415,
            "unit": "ns/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57255,
            "unit": "B/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175586,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "6661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175586,
            "unit": "ns/op",
            "extra": "6661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57292,
            "unit": "B/op",
            "extra": "6661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365238,
            "unit": "ns/op\t   62777 B/op\t     698 allocs/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365238,
            "unit": "ns/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62777,
            "unit": "B/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358779,
            "unit": "ns/op\t   62789 B/op\t     698 allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358779,
            "unit": "ns/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62789,
            "unit": "B/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362138,
            "unit": "ns/op\t   62787 B/op\t     698 allocs/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362138,
            "unit": "ns/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62787,
            "unit": "B/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3348 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346173,
            "unit": "ns/op\t   62774 B/op\t     698 allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346173,
            "unit": "ns/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62774,
            "unit": "B/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4020 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42755043 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.48,
            "unit": "ns/op",
            "extra": "42755043 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42755043 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42755043 times\n4 procs"
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
          "id": "dfe054f3eec6537bce52843d7acb53e2af29b7a9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3646ffa509414dfa71bf4d3c7d20a917455e14cb",
          "timestamp": "2025-09-15T03:04:56Z",
          "url": "https://github.com/moov-io/benchmarks/commit/dfe054f3eec6537bce52843d7acb53e2af29b7a9"
        },
        "date": 1757985030647,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11618,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101319 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11618,
            "unit": "ns/op",
            "extra": "101319 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101319 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101319 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38009,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31374 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38009,
            "unit": "ns/op",
            "extra": "31374 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31374 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31374 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70077,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17155 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70077,
            "unit": "ns/op",
            "extra": "17155 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17155 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17155 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30258,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "42016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30258,
            "unit": "ns/op",
            "extra": "42016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "42016 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "42016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298211,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298211,
            "unit": "ns/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290747,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290747,
            "unit": "ns/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3657 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94264,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12715 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94264,
            "unit": "ns/op",
            "extra": "12715 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12715 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12715 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42784,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "28052 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42784,
            "unit": "ns/op",
            "extra": "28052 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "28052 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28052 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201960,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201960,
            "unit": "ns/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5447,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "211687 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5447,
            "unit": "ns/op",
            "extra": "211687 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "211687 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154363,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "8178 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154363,
            "unit": "ns/op",
            "extra": "8178 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "8178 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "8178 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509170109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509170109A094101Federal",
            "value": 231380104,
            "unit": "1210428822509170109A094101Federal",
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
            "value": 974.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1223745 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 974.2,
            "unit": "ns/op",
            "extra": "1223745 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1223745 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1223745 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.29,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12239709 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.29,
            "unit": "ns/op",
            "extra": "12239709 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12239709 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12239709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.55,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19133529 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.55,
            "unit": "ns/op",
            "extra": "19133529 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19133529 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19133529 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40006016 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.97,
            "unit": "ns/op",
            "extra": "40006016 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40006016 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40006016 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91821328 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "91821328 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91821328 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91821328 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.921,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203125630 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.921,
            "unit": "ns/op",
            "extra": "203125630 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203125630 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203125630 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294807,
            "unit": "ns/op\t   57051 B/op\t     638 allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294807,
            "unit": "ns/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4200 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291048,
            "unit": "ns/op\t   57075 B/op\t     638 allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291048,
            "unit": "ns/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57075,
            "unit": "B/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 167014,
            "unit": "ns/op\t   57254 B/op\t     641 allocs/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 167014,
            "unit": "ns/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57254,
            "unit": "B/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176558,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "7053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176558,
            "unit": "ns/op",
            "extra": "7053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57292,
            "unit": "B/op",
            "extra": "7053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7053 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358752,
            "unit": "ns/op\t   62790 B/op\t     698 allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358752,
            "unit": "ns/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62790,
            "unit": "B/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3513 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351474,
            "unit": "ns/op\t   62793 B/op\t     698 allocs/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351474,
            "unit": "ns/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62793,
            "unit": "B/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351898,
            "unit": "ns/op\t   62741 B/op\t     698 allocs/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351898,
            "unit": "ns/op",
            "extra": "3572 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62741,
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
            "value": 345825,
            "unit": "ns/op\t   62726 B/op\t     698 allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345825,
            "unit": "ns/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62726,
            "unit": "B/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4165 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45952962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.81,
            "unit": "ns/op",
            "extra": "45952962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45952962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45952962 times\n4 procs"
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
          "id": "1e983acbbf6cfc7c965bb78a8a5d521798379dcb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for de78d8bdaab920935b29762b3451d939adad2105",
          "timestamp": "2025-09-16T02:54:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1e983acbbf6cfc7c965bb78a8a5d521798379dcb"
        },
        "date": 1758071413916,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11590,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "103246 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11590,
            "unit": "ns/op",
            "extra": "103246 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "103246 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103246 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37834,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37834,
            "unit": "ns/op",
            "extra": "31570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31570 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 69883,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "15630 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 69883,
            "unit": "ns/op",
            "extra": "15630 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "15630 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28803,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28803,
            "unit": "ns/op",
            "extra": "41751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41751 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289069,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289069,
            "unit": "ns/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288307,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288307,
            "unit": "ns/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3969 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94324,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94324,
            "unit": "ns/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42871,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42871,
            "unit": "ns/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206429,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206429,
            "unit": "ns/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5989 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5463,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "216338 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5463,
            "unit": "ns/op",
            "extra": "216338 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "216338 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216338 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146237,
            "unit": "ns/op\t   57943 B/op\t     613 allocs/op",
            "extra": "7656 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146237,
            "unit": "ns/op",
            "extra": "7656 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57943,
            "unit": "B/op",
            "extra": "7656 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7656 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509180109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509180109A094101Federal",
            "value": 231380104,
            "unit": "1210428822509180109A094101Federal",
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
            "value": 973.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1231321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 973.4,
            "unit": "ns/op",
            "extra": "1231321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1231321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1231321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.63,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12251840 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.63,
            "unit": "ns/op",
            "extra": "12251840 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12251840 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12251840 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.22,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19060318 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.22,
            "unit": "ns/op",
            "extra": "19060318 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19060318 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19060318 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.75,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "35930522 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.75,
            "unit": "ns/op",
            "extra": "35930522 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "35930522 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "35930522 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91392118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "91392118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91392118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91392118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202582849 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.94,
            "unit": "ns/op",
            "extra": "202582849 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202582849 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202582849 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297514,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297514,
            "unit": "ns/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295246,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295246,
            "unit": "ns/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170084,
            "unit": "ns/op\t   57267 B/op\t     641 allocs/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170084,
            "unit": "ns/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57267,
            "unit": "B/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169162,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169162,
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
            "value": 360017,
            "unit": "ns/op\t   62810 B/op\t     698 allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 360017,
            "unit": "ns/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62810,
            "unit": "B/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 347462,
            "unit": "ns/op\t   62776 B/op\t     698 allocs/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 347462,
            "unit": "ns/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350526,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350526,
            "unit": "ns/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337746,
            "unit": "ns/op\t   62671 B/op\t     698 allocs/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337746,
            "unit": "ns/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62671,
            "unit": "B/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45857235 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.17,
            "unit": "ns/op",
            "extra": "45857235 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45857235 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45857235 times\n4 procs"
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