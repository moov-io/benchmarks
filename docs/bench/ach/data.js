window.BENCHMARK_DATA = {
  "lastUpdate": 1759972315672,
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
          "id": "2a830162aba364e75089849897ecb45987f60a12",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0edc038e1f27dd35a56ab934d894cabc7403742e",
          "timestamp": "2025-09-17T02:53:14Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2a830162aba364e75089849897ecb45987f60a12"
        },
        "date": 1758157807379,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11625,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101750 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11625,
            "unit": "ns/op",
            "extra": "101750 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101750 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101750 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37856,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31616 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37856,
            "unit": "ns/op",
            "extra": "31616 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31616 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31616 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73392,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17073 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73392,
            "unit": "ns/op",
            "extra": "17073 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17073 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17073 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28892,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41757 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28892,
            "unit": "ns/op",
            "extra": "41757 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41757 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289756,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289756,
            "unit": "ns/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288187,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288187,
            "unit": "ns/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94809,
            "unit": "ns/op\t   27910 B/op\t     202 allocs/op",
            "extra": "12355 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94809,
            "unit": "ns/op",
            "extra": "12355 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27910,
            "unit": "B/op",
            "extra": "12355 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42896,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27970 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42896,
            "unit": "ns/op",
            "extra": "27970 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27970 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27970 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204409,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204409,
            "unit": "ns/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6085 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5428,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5428,
            "unit": "ns/op",
            "extra": "213852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213852 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147617,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147617,
            "unit": "ns/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509190109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509190109A094101Federal",
            "value": 231380104,
            "unit": "1210428822509190109A094101Federal",
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
            "value": 975.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1230240 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975.3,
            "unit": "ns/op",
            "extra": "1230240 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1230240 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1230240 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12184045 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.6,
            "unit": "ns/op",
            "extra": "12184045 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12184045 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12184045 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 61.79,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19169800 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 61.79,
            "unit": "ns/op",
            "extra": "19169800 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19169800 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19169800 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.82,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40428655 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.82,
            "unit": "ns/op",
            "extra": "40428655 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40428655 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40428655 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90145176 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.38,
            "unit": "ns/op",
            "extra": "90145176 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90145176 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90145176 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202524823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.93,
            "unit": "ns/op",
            "extra": "202524823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202524823 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202524823 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302145,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302145,
            "unit": "ns/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296499,
            "unit": "ns/op\t   57058 B/op\t     638 allocs/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296499,
            "unit": "ns/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57058,
            "unit": "B/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173731,
            "unit": "ns/op\t   57259 B/op\t     641 allocs/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173731,
            "unit": "ns/op",
            "extra": "7219 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57259,
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
            "value": 183354,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 183354,
            "unit": "ns/op",
            "extra": "6508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
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
            "value": 358929,
            "unit": "ns/op\t   62813 B/op\t     698 allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358929,
            "unit": "ns/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62813,
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
            "value": 359854,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359854,
            "unit": "ns/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62760,
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
            "value": 358351,
            "unit": "ns/op\t   62774 B/op\t     698 allocs/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358351,
            "unit": "ns/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62774,
            "unit": "B/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341408,
            "unit": "ns/op\t   62719 B/op\t     698 allocs/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341408,
            "unit": "ns/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62719,
            "unit": "B/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4158 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45809527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.16,
            "unit": "ns/op",
            "extra": "45809527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45809527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45809527 times\n4 procs"
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
          "id": "82468eb0cbc0581face04e8b90499d6beaf2c56c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for dfbf1cf839f5f5c6c5f95fd6cbccbb237d092ae1",
          "timestamp": "2025-09-18T02:55:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/82468eb0cbc0581face04e8b90499d6beaf2c56c"
        },
        "date": 1758244336609,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12028,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97644 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12028,
            "unit": "ns/op",
            "extra": "97644 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97644 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97644 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39493,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39493,
            "unit": "ns/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30664 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76906,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16603 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76906,
            "unit": "ns/op",
            "extra": "16603 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16603 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29447,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29447,
            "unit": "ns/op",
            "extra": "40530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40530 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 318335,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 318335,
            "unit": "ns/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298432,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3816 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298432,
            "unit": "ns/op",
            "extra": "3816 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3816 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3816 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96881,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12387 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96881,
            "unit": "ns/op",
            "extra": "12387 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12387 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12387 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44648,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44648,
            "unit": "ns/op",
            "extra": "27072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27072 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27072 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 212323,
            "unit": "ns/op\t   53865 B/op\t    2040 allocs/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 212323,
            "unit": "ns/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53865,
            "unit": "B/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5782 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5815,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "204033 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5815,
            "unit": "ns/op",
            "extra": "204033 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "204033 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "204033 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151709,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151709,
            "unit": "ns/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
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
            "unit": "1210428822509200111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509200111A094101Federal",
            "value": 231380104,
            "unit": "1210428822509200111A094101Federal",
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
            "value": 980.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1223973 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 980.2,
            "unit": "ns/op",
            "extra": "1223973 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1223973 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1223973 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.54,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12221214 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.54,
            "unit": "ns/op",
            "extra": "12221214 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12221214 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12221214 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 71.34,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16739954 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 71.34,
            "unit": "ns/op",
            "extra": "16739954 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16739954 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16739954 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.95,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39106528 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.95,
            "unit": "ns/op",
            "extra": "39106528 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39106528 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39106528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89198420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.84,
            "unit": "ns/op",
            "extra": "89198420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89198420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89198420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201893049 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.913,
            "unit": "ns/op",
            "extra": "201893049 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201893049 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201893049 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302604,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302604,
            "unit": "ns/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 311490,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 311490,
            "unit": "ns/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178394,
            "unit": "ns/op\t   57260 B/op\t     641 allocs/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178394,
            "unit": "ns/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57260,
            "unit": "B/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175340,
            "unit": "ns/op\t   57282 B/op\t     641 allocs/op",
            "extra": "5973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175340,
            "unit": "ns/op",
            "extra": "5973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57282,
            "unit": "B/op",
            "extra": "5973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 376529,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 376529,
            "unit": "ns/op",
            "extra": "3398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62754,
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
            "value": 357026,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357026,
            "unit": "ns/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362542,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362542,
            "unit": "ns/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352967,
            "unit": "ns/op\t   62723 B/op\t     698 allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352967,
            "unit": "ns/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62723,
            "unit": "B/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46354423 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.53,
            "unit": "ns/op",
            "extra": "46354423 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46354423 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46354423 times\n4 procs"
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
          "id": "2cc406e81f897a77be094e1055bb20bd83e96a0e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7d42a02df6251cc2ffb12021dc8d56690ee910be",
          "timestamp": "2025-09-19T02:58:13Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2cc406e81f897a77be094e1055bb20bd83e96a0e"
        },
        "date": 1758330533534,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11939,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99284 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11939,
            "unit": "ns/op",
            "extra": "99284 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99284 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99284 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38878,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30943 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38878,
            "unit": "ns/op",
            "extra": "30943 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30943 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30943 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72639,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16500 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72639,
            "unit": "ns/op",
            "extra": "16500 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16500 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16500 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30618,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40930 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30618,
            "unit": "ns/op",
            "extra": "40930 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40930 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 301679,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 301679,
            "unit": "ns/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3776 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 300895,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 300895,
            "unit": "ns/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3877 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98082,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12482 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98082,
            "unit": "ns/op",
            "extra": "12482 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
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
            "value": 44218,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44218,
            "unit": "ns/op",
            "extra": "27200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27200 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208333,
            "unit": "ns/op\t   53864 B/op\t    2040 allocs/op",
            "extra": "5479 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208333,
            "unit": "ns/op",
            "extra": "5479 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53864,
            "unit": "B/op",
            "extra": "5479 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5479 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5733,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207432 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5733,
            "unit": "ns/op",
            "extra": "207432 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207432 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207432 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151036,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7202 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151036,
            "unit": "ns/op",
            "extra": "7202 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7202 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7202 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509210108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509210108A094101Federal",
            "value": 231380104,
            "unit": "1210428822509210108A094101Federal",
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
            "extra": "1215112 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1000,
            "unit": "ns/op",
            "extra": "1215112 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1215112 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1215112 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.97,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11376224 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.97,
            "unit": "ns/op",
            "extra": "11376224 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11376224 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11376224 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16722290 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.92,
            "unit": "ns/op",
            "extra": "16722290 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16722290 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16722290 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.04,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39875109 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.04,
            "unit": "ns/op",
            "extra": "39875109 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39875109 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39875109 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89259600 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.06,
            "unit": "ns/op",
            "extra": "89259600 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89259600 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89259600 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.925,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202193080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.925,
            "unit": "ns/op",
            "extra": "202193080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202193080 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202193080 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305540,
            "unit": "ns/op\t   57053 B/op\t     638 allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305540,
            "unit": "ns/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309155,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309155,
            "unit": "ns/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176784,
            "unit": "ns/op\t   57263 B/op\t     641 allocs/op",
            "extra": "6860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176784,
            "unit": "ns/op",
            "extra": "6860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57263,
            "unit": "B/op",
            "extra": "6860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178537,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178537,
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
            "value": 367849,
            "unit": "ns/op\t   62747 B/op\t     698 allocs/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 367849,
            "unit": "ns/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62747,
            "unit": "B/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 364134,
            "unit": "ns/op\t   62785 B/op\t     698 allocs/op",
            "extra": "3319 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364134,
            "unit": "ns/op",
            "extra": "3319 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62785,
            "unit": "B/op",
            "extra": "3319 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3319 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357234,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357234,
            "unit": "ns/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351508,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351508,
            "unit": "ns/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43838121 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.43,
            "unit": "ns/op",
            "extra": "43838121 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43838121 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43838121 times\n4 procs"
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
          "id": "615a17eb1802813c2c4cfc8f606023d4eae28482",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for cc57aa7e23822e620c999922ee2e1d94908022b4",
          "timestamp": "2025-09-20T02:51:54Z",
          "url": "https://github.com/moov-io/benchmarks/commit/615a17eb1802813c2c4cfc8f606023d4eae28482"
        },
        "date": 1758417473593,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12488,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97575 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12488,
            "unit": "ns/op",
            "extra": "97575 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97575 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97575 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39906,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "29946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39906,
            "unit": "ns/op",
            "extra": "29946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "29946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "29946 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73553,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16323 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73553,
            "unit": "ns/op",
            "extra": "16323 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16323 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16323 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29813,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "39783 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29813,
            "unit": "ns/op",
            "extra": "39783 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "39783 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "39783 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 303338,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 303338,
            "unit": "ns/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3788 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 305098,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 305098,
            "unit": "ns/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101345,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101345,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44882,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44882,
            "unit": "ns/op",
            "extra": "26565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26565 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26565 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206146,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206146,
            "unit": "ns/op",
            "extra": "5686 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
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
            "value": 5804,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "200312 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5804,
            "unit": "ns/op",
            "extra": "200312 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "200312 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "200312 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154563,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7213 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154563,
            "unit": "ns/op",
            "extra": "7213 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7213 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7213 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509220117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509220117A094101Federal",
            "value": 231380104,
            "unit": "1210428822509220117A094101Federal",
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
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1000,
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
            "value": 97.78,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11997318 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.78,
            "unit": "ns/op",
            "extra": "11997318 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11997318 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11997318 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.58,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16830118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.58,
            "unit": "ns/op",
            "extra": "16830118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16830118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16830118 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.88,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39785102 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.88,
            "unit": "ns/op",
            "extra": "39785102 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39785102 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39785102 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88736878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "88736878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88736878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88736878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.927,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201577784 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.927,
            "unit": "ns/op",
            "extra": "201577784 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201577784 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201577784 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307196,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307196,
            "unit": "ns/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 305952,
            "unit": "ns/op\t   57068 B/op\t     638 allocs/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305952,
            "unit": "ns/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57068,
            "unit": "B/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 180986,
            "unit": "ns/op\t   57242 B/op\t     641 allocs/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 180986,
            "unit": "ns/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57242,
            "unit": "B/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177915,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "5985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177915,
            "unit": "ns/op",
            "extra": "5985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "5985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 385565,
            "unit": "ns/op\t   62778 B/op\t     698 allocs/op",
            "extra": "3189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 385565,
            "unit": "ns/op",
            "extra": "3189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62778,
            "unit": "B/op",
            "extra": "3189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3189 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 372455,
            "unit": "ns/op\t   62787 B/op\t     698 allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 372455,
            "unit": "ns/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62787,
            "unit": "B/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362540,
            "unit": "ns/op\t   62777 B/op\t     698 allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362540,
            "unit": "ns/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62777,
            "unit": "B/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 356361,
            "unit": "ns/op\t   62812 B/op\t     698 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356361,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62812,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43375174 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.57,
            "unit": "ns/op",
            "extra": "43375174 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43375174 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43375174 times\n4 procs"
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
          "id": "1280ad9b851ea0dd1f6ed8b5d3c6cd571ebbb458",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for bfb69a393fb1b2f79478a4bbce43f89ebe560969",
          "timestamp": "2025-09-21T03:04:41Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1280ad9b851ea0dd1f6ed8b5d3c6cd571ebbb458"
        },
        "date": 1758503827923,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11984,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100404 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11984,
            "unit": "ns/op",
            "extra": "100404 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100404 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100404 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42171,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30757 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42171,
            "unit": "ns/op",
            "extra": "30757 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30757 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30757 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71744,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71744,
            "unit": "ns/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16400 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29263,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29263,
            "unit": "ns/op",
            "extra": "41214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41214 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298937,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298937,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57136,
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
            "value": 299406,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299406,
            "unit": "ns/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57136,
            "unit": "B/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3934 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95684,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95684,
            "unit": "ns/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 46653,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27273 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 46653,
            "unit": "ns/op",
            "extra": "27273 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27273 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27273 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204584,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5682 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204584,
            "unit": "ns/op",
            "extra": "5682 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5682 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5682 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5794,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202602 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5794,
            "unit": "ns/op",
            "extra": "202602 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202602 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202602 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149796,
            "unit": "ns/op\t   57939 B/op\t     613 allocs/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149796,
            "unit": "ns/op",
            "extra": "7297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57939,
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
            "unit": "1210428822509230116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509230116A094101Federal",
            "value": 231380104,
            "unit": "1210428822509230116A094101Federal",
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
            "extra": "1229016 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 977,
            "unit": "ns/op",
            "extra": "1229016 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1229016 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1229016 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.63,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12190560 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.63,
            "unit": "ns/op",
            "extra": "12190560 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12190560 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12190560 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.43,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17123863 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.43,
            "unit": "ns/op",
            "extra": "17123863 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17123863 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17123863 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39858898 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.66,
            "unit": "ns/op",
            "extra": "39858898 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39858898 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39858898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88863901 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.98,
            "unit": "ns/op",
            "extra": "88863901 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88863901 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88863901 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.951,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202577642 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.951,
            "unit": "ns/op",
            "extra": "202577642 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202577642 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202577642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 308619,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 308619,
            "unit": "ns/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 310033,
            "unit": "ns/op\t   57061 B/op\t     638 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 310033,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57061,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171394,
            "unit": "ns/op\t   57241 B/op\t     641 allocs/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171394,
            "unit": "ns/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 182395,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 182395,
            "unit": "ns/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 377229,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 377229,
            "unit": "ns/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 370950,
            "unit": "ns/op\t   62770 B/op\t     698 allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 370950,
            "unit": "ns/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62770,
            "unit": "B/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356470,
            "unit": "ns/op\t   62734 B/op\t     698 allocs/op",
            "extra": "3579 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356470,
            "unit": "ns/op",
            "extra": "3579 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62734,
            "unit": "B/op",
            "extra": "3579 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3579 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352651,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352651,
            "unit": "ns/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46061750 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.82,
            "unit": "ns/op",
            "extra": "46061750 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46061750 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46061750 times\n4 procs"
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
          "id": "3b2e759655ae3bfe7907c379a34ee5484315b92c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 48f828a818337e3d759aa56090b87f6f09b4aa79",
          "timestamp": "2025-09-22T03:05:16Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3b2e759655ae3bfe7907c379a34ee5484315b92c"
        },
        "date": 1758589844982,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11895,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98044 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11895,
            "unit": "ns/op",
            "extra": "98044 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98044 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98044 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38591,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38591,
            "unit": "ns/op",
            "extra": "31130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31130 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71383,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "15294 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71383,
            "unit": "ns/op",
            "extra": "15294 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "15294 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15294 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29176,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41203 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29176,
            "unit": "ns/op",
            "extra": "41203 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41203 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41203 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 299104,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3799 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 299104,
            "unit": "ns/op",
            "extra": "3799 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3799 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3799 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298539,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298539,
            "unit": "ns/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95726,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12530 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95726,
            "unit": "ns/op",
            "extra": "12530 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12530 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44040,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44040,
            "unit": "ns/op",
            "extra": "27252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27252 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210242,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "6094 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210242,
            "unit": "ns/op",
            "extra": "6094 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "6094 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6094 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5735,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202286 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5735,
            "unit": "ns/op",
            "extra": "202286 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202286 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202286 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149290,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7370 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149290,
            "unit": "ns/op",
            "extra": "7370 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7370 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7370 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509240110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509240110A094101Federal",
            "value": 231380104,
            "unit": "1210428822509240110A094101Federal",
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
            "extra": "1217896 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 981.6,
            "unit": "ns/op",
            "extra": "1217896 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1217896 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1217896 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.04,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12213958 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.04,
            "unit": "ns/op",
            "extra": "12213958 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12213958 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12213958 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.22,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17138918 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.22,
            "unit": "ns/op",
            "extra": "17138918 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17138918 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17138918 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.62,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40006682 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.62,
            "unit": "ns/op",
            "extra": "40006682 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40006682 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40006682 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87308883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.76,
            "unit": "ns/op",
            "extra": "87308883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87308883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87308883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202875060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "202875060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202875060 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202875060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303214,
            "unit": "ns/op\t   57043 B/op\t     638 allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303214,
            "unit": "ns/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57043,
            "unit": "B/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 309068,
            "unit": "ns/op\t   57063 B/op\t     638 allocs/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 309068,
            "unit": "ns/op",
            "extra": "3873 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57063,
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
            "value": 170689,
            "unit": "ns/op\t   57251 B/op\t     641 allocs/op",
            "extra": "7083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170689,
            "unit": "ns/op",
            "extra": "7083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57251,
            "unit": "B/op",
            "extra": "7083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177018,
            "unit": "ns/op\t   57275 B/op\t     641 allocs/op",
            "extra": "6322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177018,
            "unit": "ns/op",
            "extra": "6322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57275,
            "unit": "B/op",
            "extra": "6322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370016,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370016,
            "unit": "ns/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3388 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 366058,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 366058,
            "unit": "ns/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62752,
            "unit": "B/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3502 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357255,
            "unit": "ns/op\t   62738 B/op\t     698 allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357255,
            "unit": "ns/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348073,
            "unit": "ns/op\t   62713 B/op\t     698 allocs/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348073,
            "unit": "ns/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62713,
            "unit": "B/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4177 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45858865 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.46,
            "unit": "ns/op",
            "extra": "45858865 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45858865 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45858865 times\n4 procs"
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
          "id": "875bee8ea82f7d6ed010a8040f4f6cc6d4fa0b1a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c0bdea47dcd56583598d9af5a70fc8d057a2df05",
          "timestamp": "2025-09-23T02:55:22Z",
          "url": "https://github.com/moov-io/benchmarks/commit/875bee8ea82f7d6ed010a8040f4f6cc6d4fa0b1a"
        },
        "date": 1758676297018,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11617,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102535 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11617,
            "unit": "ns/op",
            "extra": "102535 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102535 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102535 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 33447,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "35826 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 33447,
            "unit": "ns/op",
            "extra": "35826 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "35826 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "35826 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 62916,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17310 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 62916,
            "unit": "ns/op",
            "extra": "17310 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17310 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17310 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 24594,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "48980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 24594,
            "unit": "ns/op",
            "extra": "48980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "48980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "48980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 266100,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4392 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 266100,
            "unit": "ns/op",
            "extra": "4392 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4392 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4392 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 266127,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 266127,
            "unit": "ns/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 88240,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "14049 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 88240,
            "unit": "ns/op",
            "extra": "14049 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "14049 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "14049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 41523,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "28848 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 41523,
            "unit": "ns/op",
            "extra": "28848 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "28848 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "28848 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201658,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201658,
            "unit": "ns/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5542,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "211718 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5542,
            "unit": "ns/op",
            "extra": "211718 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "211718 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211718 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 139993,
            "unit": "ns/op\t   57944 B/op\t     613 allocs/op",
            "extra": "7951 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 139993,
            "unit": "ns/op",
            "extra": "7951 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57944,
            "unit": "B/op",
            "extra": "7951 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509250111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509250111A094101Federal",
            "value": 231380104,
            "unit": "1210428822509250111A094101Federal",
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
            "value": 984.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1214834 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 984.2,
            "unit": "ns/op",
            "extra": "1214834 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1214834 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1214834 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 87.78,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13632158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 87.78,
            "unit": "ns/op",
            "extra": "13632158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13632158 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13632158 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 57.63,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20571030 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 57.63,
            "unit": "ns/op",
            "extra": "20571030 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20571030 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20571030 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45337527 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.66,
            "unit": "ns/op",
            "extra": "45337527 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "45337527 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45337527 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96136705 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.38,
            "unit": "ns/op",
            "extra": "96136705 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "96136705 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "96136705 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230807978 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.221,
            "unit": "ns/op",
            "extra": "230807978 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230807978 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230807978 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 268980,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 268980,
            "unit": "ns/op",
            "extra": "4405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 276746,
            "unit": "ns/op\t   57077 B/op\t     638 allocs/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 276746,
            "unit": "ns/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57077,
            "unit": "B/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 186619,
            "unit": "ns/op\t   57265 B/op\t     641 allocs/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 186619,
            "unit": "ns/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57265,
            "unit": "B/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6686 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 188223,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 188223,
            "unit": "ns/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 325528,
            "unit": "ns/op\t   62774 B/op\t     698 allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 325528,
            "unit": "ns/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62774,
            "unit": "B/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 329284,
            "unit": "ns/op\t   62744 B/op\t     698 allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 329284,
            "unit": "ns/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62744,
            "unit": "B/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 321118,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 321118,
            "unit": "ns/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 319716,
            "unit": "ns/op\t   62798 B/op\t     698 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 319716,
            "unit": "ns/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62798,
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
            "value": 23.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51765625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 23.11,
            "unit": "ns/op",
            "extra": "51765625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51765625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51765625 times\n4 procs"
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
          "id": "2b037508f82bfb88e860860d2b21150d28731d7b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 379d2801c1aceee839d081f81561fd4bcc12698a",
          "timestamp": "2025-09-24T02:56:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/2b037508f82bfb88e860860d2b21150d28731d7b"
        },
        "date": 1758762739474,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11857,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99757 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11857,
            "unit": "ns/op",
            "extra": "99757 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99757 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99757 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38440,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38440,
            "unit": "ns/op",
            "extra": "30993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30993 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71159,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71159,
            "unit": "ns/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29023,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29023,
            "unit": "ns/op",
            "extra": "41270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41270 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295012,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295012,
            "unit": "ns/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294932,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294932,
            "unit": "ns/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95166,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12547 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95166,
            "unit": "ns/op",
            "extra": "12547 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12547 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12547 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44304,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27553 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44304,
            "unit": "ns/op",
            "extra": "27553 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27553 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27553 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200669,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5739 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200669,
            "unit": "ns/op",
            "extra": "5739 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5739 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5739 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5687,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202344 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5687,
            "unit": "ns/op",
            "extra": "202344 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202344 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202344 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148549,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7372 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148549,
            "unit": "ns/op",
            "extra": "7372 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7372 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7372 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509260111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509260111A094101Federal",
            "value": 231380104,
            "unit": "1210428822509260111A094101Federal",
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
            "value": 988.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1215556 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 988.3,
            "unit": "ns/op",
            "extra": "1215556 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1215556 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1215556 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 102.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10207832 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "10207832 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10207832 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10207832 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.53,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16904684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.53,
            "unit": "ns/op",
            "extra": "16904684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16904684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16904684 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.44,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40554380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.44,
            "unit": "ns/op",
            "extra": "40554380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40554380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40554380 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89333059 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.67,
            "unit": "ns/op",
            "extra": "89333059 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89333059 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89333059 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202844092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.913,
            "unit": "ns/op",
            "extra": "202844092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202844092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202844092 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310296,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310296,
            "unit": "ns/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300067,
            "unit": "ns/op\t   57061 B/op\t     638 allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300067,
            "unit": "ns/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57061,
            "unit": "B/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3895 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170526,
            "unit": "ns/op\t   57249 B/op\t     641 allocs/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170526,
            "unit": "ns/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57249,
            "unit": "B/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173506,
            "unit": "ns/op\t   57283 B/op\t     641 allocs/op",
            "extra": "5871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173506,
            "unit": "ns/op",
            "extra": "5871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57283,
            "unit": "B/op",
            "extra": "5871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5871 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370432,
            "unit": "ns/op\t   62782 B/op\t     698 allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370432,
            "unit": "ns/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62782,
            "unit": "B/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359923,
            "unit": "ns/op\t   62756 B/op\t     698 allocs/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359923,
            "unit": "ns/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62756,
            "unit": "B/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3424 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355652,
            "unit": "ns/op\t   62757 B/op\t     698 allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355652,
            "unit": "ns/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352345,
            "unit": "ns/op\t   62806 B/op\t     698 allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352345,
            "unit": "ns/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62806,
            "unit": "B/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47532358 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.27,
            "unit": "ns/op",
            "extra": "47532358 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47532358 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47532358 times\n4 procs"
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
          "id": "9018e45aadcaf07e9560f7f4c9e529656b2648ee",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 29f8a294e55466f4d1c866833b9e94c30eab22ea",
          "timestamp": "2025-09-25T02:58:56Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9018e45aadcaf07e9560f7f4c9e529656b2648ee"
        },
        "date": 1758849116926,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12224,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100365 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12224,
            "unit": "ns/op",
            "extra": "100365 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100365 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100365 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38881,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30675 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38881,
            "unit": "ns/op",
            "extra": "30675 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30675 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30675 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72327,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72327,
            "unit": "ns/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30830,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41092 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30830,
            "unit": "ns/op",
            "extra": "41092 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41092 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41092 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 299664,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3823 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 299664,
            "unit": "ns/op",
            "extra": "3823 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3823 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3823 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298479,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298479,
            "unit": "ns/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3628 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98000,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98000,
            "unit": "ns/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45005,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "26175 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45005,
            "unit": "ns/op",
            "extra": "26175 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "26175 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26175 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208278,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208278,
            "unit": "ns/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5814 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5720,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "203852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5720,
            "unit": "ns/op",
            "extra": "203852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "203852 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "203852 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153896,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7296 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153896,
            "unit": "ns/op",
            "extra": "7296 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7296 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7296 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509270111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509270111A094101Federal",
            "value": 231380104,
            "unit": "1210428822509270111A094101Federal",
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
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1000,
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
            "value": 101.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11930078 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.3,
            "unit": "ns/op",
            "extra": "11930078 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11930078 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11930078 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.59,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16491921 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.59,
            "unit": "ns/op",
            "extra": "16491921 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16491921 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16491921 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39615574 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.97,
            "unit": "ns/op",
            "extra": "39615574 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39615574 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39615574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88927588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.56,
            "unit": "ns/op",
            "extra": "88927588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88927588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88927588 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201585866 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.913,
            "unit": "ns/op",
            "extra": "201585866 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201585866 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201585866 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307123,
            "unit": "ns/op\t   57041 B/op\t     638 allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307123,
            "unit": "ns/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304666,
            "unit": "ns/op\t   57064 B/op\t     638 allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304666,
            "unit": "ns/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57064,
            "unit": "B/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176738,
            "unit": "ns/op\t   57246 B/op\t     641 allocs/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176738,
            "unit": "ns/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57246,
            "unit": "B/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177706,
            "unit": "ns/op\t   57284 B/op\t     641 allocs/op",
            "extra": "6086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177706,
            "unit": "ns/op",
            "extra": "6086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57284,
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
            "value": 366386,
            "unit": "ns/op\t   62790 B/op\t     698 allocs/op",
            "extra": "2976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 366386,
            "unit": "ns/op",
            "extra": "2976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62790,
            "unit": "B/op",
            "extra": "2976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "2976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362889,
            "unit": "ns/op\t   62757 B/op\t     698 allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362889,
            "unit": "ns/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 360971,
            "unit": "ns/op\t   62753 B/op\t     698 allocs/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 360971,
            "unit": "ns/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62753,
            "unit": "B/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3546 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 355471,
            "unit": "ns/op\t   62712 B/op\t     698 allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 355471,
            "unit": "ns/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62712,
            "unit": "B/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46339305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.22,
            "unit": "ns/op",
            "extra": "46339305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46339305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46339305 times\n4 procs"
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
          "id": "e76887b7816676644e8222c6ad069a0d0155295b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for caaf6c50e79ca4e8ba0fe5050cbf8ae198fea8cc",
          "timestamp": "2025-09-26T02:57:13Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e76887b7816676644e8222c6ad069a0d0155295b"
        },
        "date": 1758935335133,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12089,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99630 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12089,
            "unit": "ns/op",
            "extra": "99630 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99630 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38591,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31009 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38591,
            "unit": "ns/op",
            "extra": "31009 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31009 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31009 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71954,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15205 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71954,
            "unit": "ns/op",
            "extra": "15205 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15205 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15205 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30968,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30968,
            "unit": "ns/op",
            "extra": "41355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41355 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41355 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297141,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3736 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297141,
            "unit": "ns/op",
            "extra": "3736 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3736 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3736 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297158,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297158,
            "unit": "ns/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3862 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95719,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12598 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95719,
            "unit": "ns/op",
            "extra": "12598 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12598 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43788,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43788,
            "unit": "ns/op",
            "extra": "27354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27354 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205641,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6004 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205641,
            "unit": "ns/op",
            "extra": "6004 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6004 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6004 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6129,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202442 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6129,
            "unit": "ns/op",
            "extra": "202442 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202442 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202442 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149380,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7420 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149380,
            "unit": "ns/op",
            "extra": "7420 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7420 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7420 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509280108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509280108A094101Federal",
            "value": 231380104,
            "unit": "1210428822509280108A094101Federal",
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
            "value": 979.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1227609 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 979.5,
            "unit": "ns/op",
            "extra": "1227609 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1227609 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1227609 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.02,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12133077 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.02,
            "unit": "ns/op",
            "extra": "12133077 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12133077 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12133077 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.04,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16799944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.04,
            "unit": "ns/op",
            "extra": "16799944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16799944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16799944 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40346268 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.67,
            "unit": "ns/op",
            "extra": "40346268 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40346268 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40346268 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89073177 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.57,
            "unit": "ns/op",
            "extra": "89073177 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89073177 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89073177 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.938,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202834263 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.938,
            "unit": "ns/op",
            "extra": "202834263 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202834263 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202834263 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299162,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299162,
            "unit": "ns/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302089,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302089,
            "unit": "ns/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173728,
            "unit": "ns/op\t   57243 B/op\t     641 allocs/op",
            "extra": "6075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173728,
            "unit": "ns/op",
            "extra": "6075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57243,
            "unit": "B/op",
            "extra": "6075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177685,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177685,
            "unit": "ns/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57292,
            "unit": "B/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363885,
            "unit": "ns/op\t   62797 B/op\t     698 allocs/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363885,
            "unit": "ns/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62797,
            "unit": "B/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3320 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361079,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361079,
            "unit": "ns/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62754,
            "unit": "B/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 360833,
            "unit": "ns/op\t   62742 B/op\t     698 allocs/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 360833,
            "unit": "ns/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62742,
            "unit": "B/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3494 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351540,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351540,
            "unit": "ns/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47464705 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.02,
            "unit": "ns/op",
            "extra": "47464705 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47464705 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47464705 times\n4 procs"
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
          "id": "1d3943e40ac7e8a3f2d2140480f834ab45038505",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 865686fc7bffccc97fbce7c26b77a8ba79d22296",
          "timestamp": "2025-09-27T02:51:39Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1d3943e40ac7e8a3f2d2140480f834ab45038505"
        },
        "date": 1759022333014,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11984,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99171 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11984,
            "unit": "ns/op",
            "extra": "99171 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99171 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99171 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39252,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30074 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39252,
            "unit": "ns/op",
            "extra": "30074 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30074 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30074 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76636,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16611 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76636,
            "unit": "ns/op",
            "extra": "16611 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16611 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16611 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29595,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29595,
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
            "value": 313809,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3739 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 313809,
            "unit": "ns/op",
            "extra": "3739 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3739 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3739 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 300731,
            "unit": "ns/op\t   57141 B/op\t     744 allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 300731,
            "unit": "ns/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57141,
            "unit": "B/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96994,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96994,
            "unit": "ns/op",
            "extra": "12322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44911,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27102 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44911,
            "unit": "ns/op",
            "extra": "27102 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27102 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27102 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 211974,
            "unit": "ns/op\t   53864 B/op\t    2040 allocs/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 211974,
            "unit": "ns/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53864,
            "unit": "B/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5701 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5822,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202930 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5822,
            "unit": "ns/op",
            "extra": "202930 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202930 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202930 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152206,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152206,
            "unit": "ns/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7147 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509290118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509290118A094101Federal",
            "value": 231380104,
            "unit": "1210428822509290118A094101Federal",
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
            "extra": "1221159 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 981.5,
            "unit": "ns/op",
            "extra": "1221159 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1221159 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1221159 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.55,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11995618 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.55,
            "unit": "ns/op",
            "extra": "11995618 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11995618 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11995618 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 72.04,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16915617 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 72.04,
            "unit": "ns/op",
            "extra": "16915617 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16915617 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16915617 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.66,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40363467 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.66,
            "unit": "ns/op",
            "extra": "40363467 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40363467 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40363467 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88955856 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.79,
            "unit": "ns/op",
            "extra": "88955856 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88955856 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88955856 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202013230 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202013230 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202013230 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202013230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305919,
            "unit": "ns/op\t   57041 B/op\t     638 allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305919,
            "unit": "ns/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302756,
            "unit": "ns/op\t   57058 B/op\t     638 allocs/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302756,
            "unit": "ns/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57058,
            "unit": "B/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178178,
            "unit": "ns/op\t   57259 B/op\t     641 allocs/op",
            "extra": "6716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178178,
            "unit": "ns/op",
            "extra": "6716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57259,
            "unit": "B/op",
            "extra": "6716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172494,
            "unit": "ns/op\t   57279 B/op\t     641 allocs/op",
            "extra": "6447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172494,
            "unit": "ns/op",
            "extra": "6447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57279,
            "unit": "B/op",
            "extra": "6447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368916,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368916,
            "unit": "ns/op",
            "extra": "3262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3262 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 369544,
            "unit": "ns/op\t   62784 B/op\t     698 allocs/op",
            "extra": "3321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 369544,
            "unit": "ns/op",
            "extra": "3321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62784,
            "unit": "B/op",
            "extra": "3321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3321 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356021,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356021,
            "unit": "ns/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62762,
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
            "value": 349572,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349572,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62772,
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
            "value": 25.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43535185 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.23,
            "unit": "ns/op",
            "extra": "43535185 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43535185 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43535185 times\n4 procs"
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
          "id": "b56e23d3329f98cba94262c3becf29b286c4d784",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b78813643cf4d2d584b75ea20a66ee65891e375d",
          "timestamp": "2025-09-28T03:05:47Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b56e23d3329f98cba94262c3becf29b286c4d784"
        },
        "date": 1759108435424,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11889,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100794 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11889,
            "unit": "ns/op",
            "extra": "100794 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100794 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100794 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38687,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38687,
            "unit": "ns/op",
            "extra": "31096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31096 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31096 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74467,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16736 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74467,
            "unit": "ns/op",
            "extra": "16736 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16736 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16736 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30575,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30575,
            "unit": "ns/op",
            "extra": "41154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41154 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296164,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296164,
            "unit": "ns/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296646,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296646,
            "unit": "ns/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95831,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95831,
            "unit": "ns/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12544 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43579,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43579,
            "unit": "ns/op",
            "extra": "27630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27630 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201032,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6211 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201032,
            "unit": "ns/op",
            "extra": "6211 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6211 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6211 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6098,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "206942 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6098,
            "unit": "ns/op",
            "extra": "206942 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "206942 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "206942 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148981,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7767 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148981,
            "unit": "ns/op",
            "extra": "7767 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7767 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7767 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822509300113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822509300113A094101Federal",
            "value": 231380104,
            "unit": "1210428822509300113A094101Federal",
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
            "value": 979.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1216335 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 979.4,
            "unit": "ns/op",
            "extra": "1216335 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1216335 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1216335 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.09,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12199856 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.09,
            "unit": "ns/op",
            "extra": "12199856 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12199856 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12199856 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.32,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17023830 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.32,
            "unit": "ns/op",
            "extra": "17023830 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17023830 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17023830 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40393866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.71,
            "unit": "ns/op",
            "extra": "40393866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40393866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40393866 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89600281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "89600281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89600281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89600281 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202922095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "202922095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202922095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202922095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303045,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303045,
            "unit": "ns/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 301705,
            "unit": "ns/op\t   57071 B/op\t     638 allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 301705,
            "unit": "ns/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57071,
            "unit": "B/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 190655,
            "unit": "ns/op\t   57258 B/op\t     641 allocs/op",
            "extra": "6966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 190655,
            "unit": "ns/op",
            "extra": "6966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57258,
            "unit": "B/op",
            "extra": "6966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6966 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169937,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169937,
            "unit": "ns/op",
            "extra": "6258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6258 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364792,
            "unit": "ns/op\t   62780 B/op\t     698 allocs/op",
            "extra": "3181 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364792,
            "unit": "ns/op",
            "extra": "3181 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62780,
            "unit": "B/op",
            "extra": "3181 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3181 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 364448,
            "unit": "ns/op\t   62769 B/op\t     698 allocs/op",
            "extra": "3505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364448,
            "unit": "ns/op",
            "extra": "3505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62769,
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
            "value": 358918,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358918,
            "unit": "ns/op",
            "extra": "3506 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62760,
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
            "value": 356987,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 356987,
            "unit": "ns/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45466036 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.24,
            "unit": "ns/op",
            "extra": "45466036 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45466036 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45466036 times\n4 procs"
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
          "id": "5dd012b2501f87755ec8cfd510b05daa12ae6501",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 9a6240a35897efed05d678f436cded80ca0a8636",
          "timestamp": "2025-09-29T03:01:54Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5dd012b2501f87755ec8cfd510b05daa12ae6501"
        },
        "date": 1759194774957,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11415,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "104488 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11415,
            "unit": "ns/op",
            "extra": "104488 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "104488 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104488 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 34926,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "36910 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 34926,
            "unit": "ns/op",
            "extra": "36910 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "36910 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "36910 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 61501,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "19540 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 61501,
            "unit": "ns/op",
            "extra": "19540 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "19540 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "19540 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 24071,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "50061 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 24071,
            "unit": "ns/op",
            "extra": "50061 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "50061 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "50061 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 267125,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 267125,
            "unit": "ns/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4321 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 263616,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "4431 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 263616,
            "unit": "ns/op",
            "extra": "4431 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "4431 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4431 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 82804,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "14598 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 82804,
            "unit": "ns/op",
            "extra": "14598 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "14598 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "14598 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44704,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "29185 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44704,
            "unit": "ns/op",
            "extra": "29185 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "29185 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "29185 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 194272,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "6063 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 194272,
            "unit": "ns/op",
            "extra": "6063 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "6063 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6063 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5548,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "213334 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5548,
            "unit": "ns/op",
            "extra": "213334 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "213334 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "213334 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 137123,
            "unit": "ns/op\t   57944 B/op\t     613 allocs/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 137123,
            "unit": "ns/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57944,
            "unit": "B/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "8505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510010112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510010112A094101Federal",
            "value": 231380104,
            "unit": "1210428822510010112A094101Federal",
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
            "value": 981.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1223790 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 981.9,
            "unit": "ns/op",
            "extra": "1223790 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1223790 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1223790 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 91.05,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13735796 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.05,
            "unit": "ns/op",
            "extra": "13735796 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13735796 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13735796 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 57.14,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "20483577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 57.14,
            "unit": "ns/op",
            "extra": "20483577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "20483577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "20483577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.19,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46307068 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.19,
            "unit": "ns/op",
            "extra": "46307068 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "46307068 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "46307068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96468349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.39,
            "unit": "ns/op",
            "extra": "96468349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "96468349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "96468349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.192,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "227063034 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.192,
            "unit": "ns/op",
            "extra": "227063034 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227063034 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227063034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 270006,
            "unit": "ns/op\t   57056 B/op\t     638 allocs/op",
            "extra": "4665 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 270006,
            "unit": "ns/op",
            "extra": "4665 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57056,
            "unit": "B/op",
            "extra": "4665 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4665 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 276734,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 276734,
            "unit": "ns/op",
            "extra": "4550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4550 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 182551,
            "unit": "ns/op\t   57245 B/op\t     641 allocs/op",
            "extra": "6465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 182551,
            "unit": "ns/op",
            "extra": "6465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57245,
            "unit": "B/op",
            "extra": "6465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 182666,
            "unit": "ns/op\t   57275 B/op\t     641 allocs/op",
            "extra": "6289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 182666,
            "unit": "ns/op",
            "extra": "6289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57275,
            "unit": "B/op",
            "extra": "6289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 324818,
            "unit": "ns/op\t   62775 B/op\t     698 allocs/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 324818,
            "unit": "ns/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62775,
            "unit": "B/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 319511,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 319511,
            "unit": "ns/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 327442,
            "unit": "ns/op\t   62742 B/op\t     698 allocs/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 327442,
            "unit": "ns/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62742,
            "unit": "B/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3798 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 316551,
            "unit": "ns/op\t   62626 B/op\t     698 allocs/op",
            "extra": "4351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 316551,
            "unit": "ns/op",
            "extra": "4351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62626,
            "unit": "B/op",
            "extra": "4351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4351 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 23.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50810454 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 23.43,
            "unit": "ns/op",
            "extra": "50810454 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50810454 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50810454 times\n4 procs"
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
          "id": "fcd6082bd2b8a3acb2cac56fdfcf74371dcb9cfa",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 18461acf6d4e63c47e47e22a70729c44d8ed1d84",
          "timestamp": "2025-09-30T02:56:04Z",
          "url": "https://github.com/moov-io/benchmarks/commit/fcd6082bd2b8a3acb2cac56fdfcf74371dcb9cfa"
        },
        "date": 1759281607009,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12680,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99975 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12680,
            "unit": "ns/op",
            "extra": "99975 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99975 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99975 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39207,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31132 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39207,
            "unit": "ns/op",
            "extra": "31132 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31132 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31132 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78601,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16791 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78601,
            "unit": "ns/op",
            "extra": "16791 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16791 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16791 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29290,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29290,
            "unit": "ns/op",
            "extra": "41025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41025 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41025 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296085,
            "unit": "ns/op\t   57135 B/op\t     744 allocs/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296085,
            "unit": "ns/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57135,
            "unit": "B/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295569,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295569,
            "unit": "ns/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57136,
            "unit": "B/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95327,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12603 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95327,
            "unit": "ns/op",
            "extra": "12603 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12603 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12603 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43864,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27258 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43864,
            "unit": "ns/op",
            "extra": "27258 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27258 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27258 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 211996,
            "unit": "ns/op\t   53866 B/op\t    2040 allocs/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 211996,
            "unit": "ns/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53866,
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
            "value": 5700,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205014 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5700,
            "unit": "ns/op",
            "extra": "205014 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205014 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205014 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149450,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7270 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149450,
            "unit": "ns/op",
            "extra": "7270 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7270 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7270 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510020119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510020119A094101Federal",
            "value": 231380104,
            "unit": "1210428822510020119A094101Federal",
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
            "value": 983.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1223274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 983.4,
            "unit": "ns/op",
            "extra": "1223274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1223274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1223274 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11969391 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.47,
            "unit": "ns/op",
            "extra": "11969391 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11969391 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11969391 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.93,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17077366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.93,
            "unit": "ns/op",
            "extra": "17077366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17077366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17077366 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.62,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41145696 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.62,
            "unit": "ns/op",
            "extra": "41145696 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41145696 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41145696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88925618 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.74,
            "unit": "ns/op",
            "extra": "88925618 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88925618 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88925618 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.916,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202889314 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.916,
            "unit": "ns/op",
            "extra": "202889314 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202889314 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202889314 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297968,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297968,
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
            "value": 298416,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "3922 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298416,
            "unit": "ns/op",
            "extra": "3922 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "3922 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3922 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169381,
            "unit": "ns/op\t   57256 B/op\t     641 allocs/op",
            "extra": "7060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169381,
            "unit": "ns/op",
            "extra": "7060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57256,
            "unit": "B/op",
            "extra": "7060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7060 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174122,
            "unit": "ns/op\t   57285 B/op\t     641 allocs/op",
            "extra": "5826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174122,
            "unit": "ns/op",
            "extra": "5826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57285,
            "unit": "B/op",
            "extra": "5826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365927,
            "unit": "ns/op\t   62761 B/op\t     698 allocs/op",
            "extra": "3318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365927,
            "unit": "ns/op",
            "extra": "3318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62761,
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
            "value": 366131,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 366131,
            "unit": "ns/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3411 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354090,
            "unit": "ns/op\t   62738 B/op\t     698 allocs/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354090,
            "unit": "ns/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346643,
            "unit": "ns/op\t   62802 B/op\t     698 allocs/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346643,
            "unit": "ns/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62802,
            "unit": "B/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3982 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46717796 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.24,
            "unit": "ns/op",
            "extra": "46717796 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46717796 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46717796 times\n4 procs"
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
          "id": "fde33281fa68b22abcece9fe907391e727bc0fc6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d91a7d45232d344aabb8ca0d7b6f8ef1bfa4aa99",
          "timestamp": "2025-10-01T03:08:47Z",
          "url": "https://github.com/moov-io/benchmarks/commit/fde33281fa68b22abcece9fe907391e727bc0fc6"
        },
        "date": 1759325244303,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13184,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "96808 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13184,
            "unit": "ns/op",
            "extra": "96808 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "96808 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "96808 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40807,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "29276 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40807,
            "unit": "ns/op",
            "extra": "29276 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "29276 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "29276 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74699,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "14738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74699,
            "unit": "ns/op",
            "extra": "14738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "14738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "14738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31149,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "38664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31149,
            "unit": "ns/op",
            "extra": "38664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "38664 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "38664 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 304242,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 304242,
            "unit": "ns/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3660 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 302177,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 302177,
            "unit": "ns/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 105486,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 105486,
            "unit": "ns/op",
            "extra": "12094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12094 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12094 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45192,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "26211 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45192,
            "unit": "ns/op",
            "extra": "26211 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "26211 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26211 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209991,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5143 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209991,
            "unit": "ns/op",
            "extra": "5143 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5143 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5143 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5822,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "198871 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5822,
            "unit": "ns/op",
            "extra": "198871 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "198871 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "198871 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155198,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7399 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155198,
            "unit": "ns/op",
            "extra": "7399 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7399 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7399 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510021326A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510021326A094101Federal",
            "value": 231380104,
            "unit": "1210428822510021326A094101Federal",
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
            "extra": "1217294 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1217294 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1217294 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1217294 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11974624 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.1,
            "unit": "ns/op",
            "extra": "11974624 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11974624 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11974624 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.29,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16539327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.29,
            "unit": "ns/op",
            "extra": "16539327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16539327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16539327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.04,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40369095 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.04,
            "unit": "ns/op",
            "extra": "40369095 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40369095 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40369095 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89382578 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "89382578 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89382578 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89382578 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.922,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201417631 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.922,
            "unit": "ns/op",
            "extra": "201417631 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201417631 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201417631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 320979,
            "unit": "ns/op\t   57051 B/op\t     638 allocs/op",
            "extra": "4042 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 320979,
            "unit": "ns/op",
            "extra": "4042 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "4042 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4042 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 307937,
            "unit": "ns/op\t   57066 B/op\t     638 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 307937,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57066,
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
            "value": 185291,
            "unit": "ns/op\t   57252 B/op\t     641 allocs/op",
            "extra": "6768 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 185291,
            "unit": "ns/op",
            "extra": "6768 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57252,
            "unit": "B/op",
            "extra": "6768 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6768 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 180172,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 180172,
            "unit": "ns/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 401659,
            "unit": "ns/op\t   62751 B/op\t     698 allocs/op",
            "extra": "3124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 401659,
            "unit": "ns/op",
            "extra": "3124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62751,
            "unit": "B/op",
            "extra": "3124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 379601,
            "unit": "ns/op\t   62779 B/op\t     698 allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 379601,
            "unit": "ns/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62779,
            "unit": "B/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3355 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 367672,
            "unit": "ns/op\t   62825 B/op\t     698 allocs/op",
            "extra": "3268 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 367672,
            "unit": "ns/op",
            "extra": "3268 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62825,
            "unit": "B/op",
            "extra": "3268 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3268 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 361775,
            "unit": "ns/op\t   62807 B/op\t     698 allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 361775,
            "unit": "ns/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62807,
            "unit": "B/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45356828 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.55,
            "unit": "ns/op",
            "extra": "45356828 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45356828 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45356828 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Adam Shannon",
            "username": "adamdecaf",
            "email": "adamkshannon@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3f624b068fd017dd40715d1cacfd3ac0db074989",
          "message": "Merge pull request #6 from moov-io/renovate/major-all\n\nUpdate all (major)",
          "timestamp": "2025-10-01T18:08:36Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3f624b068fd017dd40715d1cacfd3ac0db074989"
        },
        "date": 1759344033164,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11951,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99303 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11951,
            "unit": "ns/op",
            "extra": "99303 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99303 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99303 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38782,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30631 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38782,
            "unit": "ns/op",
            "extra": "30631 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30631 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30631 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74455,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16612 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74455,
            "unit": "ns/op",
            "extra": "16612 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16612 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29455,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29455,
            "unit": "ns/op",
            "extra": "40580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40580 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298756,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298756,
            "unit": "ns/op",
            "extra": "3906 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
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
            "value": 298913,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298913,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95409,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12540 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95409,
            "unit": "ns/op",
            "extra": "12540 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12540 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12540 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44028,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44028,
            "unit": "ns/op",
            "extra": "27238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27238 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27238 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 214564,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5937 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 214564,
            "unit": "ns/op",
            "extra": "5937 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5937 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5937 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5754,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207958 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5754,
            "unit": "ns/op",
            "extra": "207958 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207958 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207958 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151562,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151562,
            "unit": "ns/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7279 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510021839A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510021839A094101Federal",
            "value": 231380104,
            "unit": "1210428822510021839A094101Federal",
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
            "value": 986.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1205895 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 986.7,
            "unit": "ns/op",
            "extra": "1205895 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1205895 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1205895 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.72,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12020439 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.72,
            "unit": "ns/op",
            "extra": "12020439 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12020439 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12020439 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.68,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16950481 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.68,
            "unit": "ns/op",
            "extra": "16950481 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16950481 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16950481 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.94,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40387586 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.94,
            "unit": "ns/op",
            "extra": "40387586 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40387586 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40387586 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89398712 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.71,
            "unit": "ns/op",
            "extra": "89398712 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89398712 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89398712 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.922,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202819063 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.922,
            "unit": "ns/op",
            "extra": "202819063 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202819063 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202819063 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298967,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298967,
            "unit": "ns/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4044 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 310446,
            "unit": "ns/op\t   57061 B/op\t     638 allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 310446,
            "unit": "ns/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57061,
            "unit": "B/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174772,
            "unit": "ns/op\t   57256 B/op\t     641 allocs/op",
            "extra": "6828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174772,
            "unit": "ns/op",
            "extra": "6828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57256,
            "unit": "B/op",
            "extra": "6828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6828 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177797,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177797,
            "unit": "ns/op",
            "extra": "6453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 375682,
            "unit": "ns/op\t   62785 B/op\t     698 allocs/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 375682,
            "unit": "ns/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62785,
            "unit": "B/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3356 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 364483,
            "unit": "ns/op\t   62761 B/op\t     698 allocs/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364483,
            "unit": "ns/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62761,
            "unit": "B/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 366085,
            "unit": "ns/op\t   62752 B/op\t     698 allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 366085,
            "unit": "ns/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62752,
            "unit": "B/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 357228,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 357228,
            "unit": "ns/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62754,
            "unit": "B/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43256112 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.8,
            "unit": "ns/op",
            "extra": "43256112 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43256112 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43256112 times\n4 procs"
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
          "id": "7902bcdd8fb2203f2b3251dde111ae67182423cd",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b568ffb2bd403bec36046b17abd84e78c66964bd",
          "timestamp": "2025-10-01T18:44:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7902bcdd8fb2203f2b3251dde111ae67182423cd"
        },
        "date": 1759367437472,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11898,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97656 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11898,
            "unit": "ns/op",
            "extra": "97656 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97656 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97656 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39138,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30794 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39138,
            "unit": "ns/op",
            "extra": "30794 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30794 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71319,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16776 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71319,
            "unit": "ns/op",
            "extra": "16776 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16776 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16776 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28999,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28999,
            "unit": "ns/op",
            "extra": "41354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41354 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296154,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296154,
            "unit": "ns/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57136,
            "unit": "B/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3825 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 315417,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3889 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 315417,
            "unit": "ns/op",
            "extra": "3889 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3889 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3889 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95474,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12580 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95474,
            "unit": "ns/op",
            "extra": "12580 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12580 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43883,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27164 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43883,
            "unit": "ns/op",
            "extra": "27164 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27164 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27164 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205833,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5972 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205833,
            "unit": "ns/op",
            "extra": "5972 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5972 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5972 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5715,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "201663 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5715,
            "unit": "ns/op",
            "extra": "201663 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "201663 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "201663 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148417,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7357 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148417,
            "unit": "ns/op",
            "extra": "7357 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7357 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7357 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510030110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510030110A094101Federal",
            "value": 231380104,
            "unit": "1210428822510030110A094101Federal",
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
            "extra": "1225645 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 982.4,
            "unit": "ns/op",
            "extra": "1225645 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1225645 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1225645 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12216577 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.4,
            "unit": "ns/op",
            "extra": "12216577 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12216577 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12216577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.23,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17055052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.23,
            "unit": "ns/op",
            "extra": "17055052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17055052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17055052 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.52,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40410226 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.52,
            "unit": "ns/op",
            "extra": "40410226 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40410226 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40410226 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89658182 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "89658182 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89658182 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89658182 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.916,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202162699 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.916,
            "unit": "ns/op",
            "extra": "202162699 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202162699 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202162699 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306153,
            "unit": "ns/op\t   57054 B/op\t     638 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306153,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302103,
            "unit": "ns/op\t   57069 B/op\t     638 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302103,
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
            "value": 179655,
            "unit": "ns/op\t   57257 B/op\t     641 allocs/op",
            "extra": "6849 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179655,
            "unit": "ns/op",
            "extra": "6849 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57257,
            "unit": "B/op",
            "extra": "6849 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6849 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 180305,
            "unit": "ns/op\t   57279 B/op\t     641 allocs/op",
            "extra": "5806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 180305,
            "unit": "ns/op",
            "extra": "5806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57279,
            "unit": "B/op",
            "extra": "5806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5806 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365828,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365828,
            "unit": "ns/op",
            "extra": "3397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62754,
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
            "value": 369984,
            "unit": "ns/op\t   62750 B/op\t     698 allocs/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 369984,
            "unit": "ns/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62750,
            "unit": "B/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3594 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 360759,
            "unit": "ns/op\t   62766 B/op\t     698 allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 360759,
            "unit": "ns/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62766,
            "unit": "B/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352257,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352257,
            "unit": "ns/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47092504 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.53,
            "unit": "ns/op",
            "extra": "47092504 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47092504 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47092504 times\n4 procs"
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
          "id": "3e55b762e8bca454b8150b302b4c03550b8a2d38",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b57a0d16ffeafc7b554c6fe27ede3c80365d330a",
          "timestamp": "2025-10-02T02:54:40Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3e55b762e8bca454b8150b302b4c03550b8a2d38"
        },
        "date": 1759453826763,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11942,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100774 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11942,
            "unit": "ns/op",
            "extra": "100774 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100774 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100774 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39028,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39028,
            "unit": "ns/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30632 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71756,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16695 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71756,
            "unit": "ns/op",
            "extra": "16695 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16695 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16695 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29296,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40624 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29296,
            "unit": "ns/op",
            "extra": "40624 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40624 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40624 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297224,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297224,
            "unit": "ns/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3824 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297940,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297940,
            "unit": "ns/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96431,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96431,
            "unit": "ns/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12451 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44264,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "25953 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44264,
            "unit": "ns/op",
            "extra": "25953 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "25953 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "25953 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 205116,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5922 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205116,
            "unit": "ns/op",
            "extra": "5922 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5922 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5922 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5770,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205998 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5770,
            "unit": "ns/op",
            "extra": "205998 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205998 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205998 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149939,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7376 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149939,
            "unit": "ns/op",
            "extra": "7376 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7376 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7376 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510040109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510040109A094101Federal",
            "value": 231380104,
            "unit": "1210428822510040109A094101Federal",
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
            "value": 998.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1222446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 998.5,
            "unit": "ns/op",
            "extra": "1222446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1222446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1222446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.97,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12230990 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.97,
            "unit": "ns/op",
            "extra": "12230990 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12230990 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12230990 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.76,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16599795 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.76,
            "unit": "ns/op",
            "extra": "16599795 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16599795 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16599795 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.72,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40427638 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.72,
            "unit": "ns/op",
            "extra": "40427638 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40427638 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40427638 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87994932 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "87994932 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87994932 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87994932 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.911,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202900882 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.911,
            "unit": "ns/op",
            "extra": "202900882 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202900882 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202900882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310088,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310088,
            "unit": "ns/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 305876,
            "unit": "ns/op\t   57055 B/op\t     638 allocs/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305876,
            "unit": "ns/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3672 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179031,
            "unit": "ns/op\t   57238 B/op\t     641 allocs/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179031,
            "unit": "ns/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57238,
            "unit": "B/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6250 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175216,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175216,
            "unit": "ns/op",
            "extra": "6350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6350 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 375190,
            "unit": "ns/op\t   62798 B/op\t     698 allocs/op",
            "extra": "3222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 375190,
            "unit": "ns/op",
            "extra": "3222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62798,
            "unit": "B/op",
            "extra": "3222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 367035,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 367035,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 366350,
            "unit": "ns/op\t   62817 B/op\t     698 allocs/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 366350,
            "unit": "ns/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62817,
            "unit": "B/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3276 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 361306,
            "unit": "ns/op\t   62222 B/op\t     698 allocs/op",
            "extra": "3822 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 361306,
            "unit": "ns/op",
            "extra": "3822 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62222,
            "unit": "B/op",
            "extra": "3822 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3822 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44069060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.56,
            "unit": "ns/op",
            "extra": "44069060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44069060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44069060 times\n4 procs"
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
          "id": "6985170c399b7f6f81543818be966fafd6e912da",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3985e690fdf037f922d1ac087688d1d457773941",
          "timestamp": "2025-10-03T02:54:04Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6985170c399b7f6f81543818be966fafd6e912da"
        },
        "date": 1759540063854,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11968,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100050 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11968,
            "unit": "ns/op",
            "extra": "100050 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100050 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100050 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38799,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30231 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38799,
            "unit": "ns/op",
            "extra": "30231 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30231 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30231 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72246,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16600 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72246,
            "unit": "ns/op",
            "extra": "16600 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16600 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16600 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30408,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30408,
            "unit": "ns/op",
            "extra": "40946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40946 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298000,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3805 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298000,
            "unit": "ns/op",
            "extra": "3805 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3805 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3805 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295754,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295754,
            "unit": "ns/op",
            "extra": "3992 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
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
            "value": 95598,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95598,
            "unit": "ns/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12487 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44743,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27308 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44743,
            "unit": "ns/op",
            "extra": "27308 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27308 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27308 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201350,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6310 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201350,
            "unit": "ns/op",
            "extra": "6310 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6310 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6310 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6177,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "206479 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6177,
            "unit": "ns/op",
            "extra": "206479 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "206479 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "206479 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 150900,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 150900,
            "unit": "ns/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510050107A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510050107A094101Federal",
            "value": 231380104,
            "unit": "1210428822510050107A094101Federal",
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
            "value": 981.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1221038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 981.9,
            "unit": "ns/op",
            "extra": "1221038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1221038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1221038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.38,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12155025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.38,
            "unit": "ns/op",
            "extra": "12155025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12155025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12155025 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.25,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17088254 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.25,
            "unit": "ns/op",
            "extra": "17088254 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17088254 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17088254 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40250362 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.6,
            "unit": "ns/op",
            "extra": "40250362 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40250362 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40250362 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88922844 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.81,
            "unit": "ns/op",
            "extra": "88922844 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88922844 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88922844 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.916,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202916875 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.916,
            "unit": "ns/op",
            "extra": "202916875 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202916875 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202916875 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307152,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307152,
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
            "value": 302631,
            "unit": "ns/op\t   57057 B/op\t     638 allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302631,
            "unit": "ns/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4143 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 204859,
            "unit": "ns/op\t   57266 B/op\t     641 allocs/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 204859,
            "unit": "ns/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57266,
            "unit": "B/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172313,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172313,
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
            "value": 376975,
            "unit": "ns/op\t   62757 B/op\t     698 allocs/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 376975,
            "unit": "ns/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 368909,
            "unit": "ns/op\t   62766 B/op\t     698 allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 368909,
            "unit": "ns/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62766,
            "unit": "B/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 367565,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 367565,
            "unit": "ns/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3415 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351325,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351325,
            "unit": "ns/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4076 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47512594 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.22,
            "unit": "ns/op",
            "extra": "47512594 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47512594 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47512594 times\n4 procs"
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
          "id": "0fdcd983493722f7048f6578ab793712b7e181a0",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 295fc0720142e220c0ad425382cfb53e39b4b8ed",
          "timestamp": "2025-10-04T02:47:49Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0fdcd983493722f7048f6578ab793712b7e181a0"
        },
        "date": 1759627079951,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12767,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99601 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12767,
            "unit": "ns/op",
            "extra": "99601 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99601 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99601 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38530,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38530,
            "unit": "ns/op",
            "extra": "30300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30300 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30300 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71648,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71648,
            "unit": "ns/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30737,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40857 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30737,
            "unit": "ns/op",
            "extra": "40857 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40857 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40857 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 301621,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 301621,
            "unit": "ns/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296695,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296695,
            "unit": "ns/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3920 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 103614,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12570 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 103614,
            "unit": "ns/op",
            "extra": "12570 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12570 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12570 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43522,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27613 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43522,
            "unit": "ns/op",
            "extra": "27613 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27613 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27613 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200074,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200074,
            "unit": "ns/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5769,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "204315 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5769,
            "unit": "ns/op",
            "extra": "204315 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "204315 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "204315 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 150321,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 150321,
            "unit": "ns/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7341 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510060117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510060117A094101Federal",
            "value": 231380104,
            "unit": "1210428822510060117A094101Federal",
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 98.75,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10699930 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.75,
            "unit": "ns/op",
            "extra": "10699930 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10699930 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10699930 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.37,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17007854 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.37,
            "unit": "ns/op",
            "extra": "17007854 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17007854 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17007854 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.87,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40090033 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.87,
            "unit": "ns/op",
            "extra": "40090033 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40090033 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40090033 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88621147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "88621147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88621147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88621147 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202864470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202864470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202864470 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202864470 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 312717,
            "unit": "ns/op\t   57046 B/op\t     638 allocs/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 312717,
            "unit": "ns/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 305568,
            "unit": "ns/op\t   57055 B/op\t     638 allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305568,
            "unit": "ns/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172305,
            "unit": "ns/op\t   57239 B/op\t     641 allocs/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172305,
            "unit": "ns/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57239,
            "unit": "B/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6249 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172122,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172122,
            "unit": "ns/op",
            "extra": "6098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365294,
            "unit": "ns/op\t   62787 B/op\t     698 allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365294,
            "unit": "ns/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62787,
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
            "value": 354091,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354091,
            "unit": "ns/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62754,
            "unit": "B/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357620,
            "unit": "ns/op\t   62777 B/op\t     698 allocs/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357620,
            "unit": "ns/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62777,
            "unit": "B/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3609 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348836,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348836,
            "unit": "ns/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47012860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.61,
            "unit": "ns/op",
            "extra": "47012860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47012860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47012860 times\n4 procs"
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
          "id": "e87fc2c83715badf18b1a07800ee6cb0d1e58371",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6cfa0c08d611bbb13293e870bc83b78a24c38dca",
          "timestamp": "2025-10-05T03:05:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e87fc2c83715badf18b1a07800ee6cb0d1e58371"
        },
        "date": 1759713165609,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11994,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99622 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11994,
            "unit": "ns/op",
            "extra": "99622 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99622 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99622 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38661,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31041 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38661,
            "unit": "ns/op",
            "extra": "31041 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31041 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31041 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72571,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16788 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72571,
            "unit": "ns/op",
            "extra": "16788 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16788 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16788 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31322,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40762 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31322,
            "unit": "ns/op",
            "extra": "40762 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40762 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40762 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298775,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298775,
            "unit": "ns/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3843 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296590,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296590,
            "unit": "ns/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102592,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102592,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43926,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43926,
            "unit": "ns/op",
            "extra": "27135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27135 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27135 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204807,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204807,
            "unit": "ns/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5971 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5864,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202791 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5864,
            "unit": "ns/op",
            "extra": "202791 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202791 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202791 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157050,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157050,
            "unit": "ns/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510070112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510070112A094101Federal",
            "value": 231380104,
            "unit": "1210428822510070112A094101Federal",
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
            "value": 995,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1210358 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 995,
            "unit": "ns/op",
            "extra": "1210358 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1210358 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1210358 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.16,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12076023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.16,
            "unit": "ns/op",
            "extra": "12076023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12076023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12076023 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.31,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16918213 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.31,
            "unit": "ns/op",
            "extra": "16918213 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16918213 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16918213 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.79,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39172057 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.79,
            "unit": "ns/op",
            "extra": "39172057 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39172057 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39172057 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89713387 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.84,
            "unit": "ns/op",
            "extra": "89713387 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89713387 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89713387 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.934,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202877746 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.934,
            "unit": "ns/op",
            "extra": "202877746 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202877746 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202877746 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300846,
            "unit": "ns/op\t   57046 B/op\t     638 allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300846,
            "unit": "ns/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57046,
            "unit": "B/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300803,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300803,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176670,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "6705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176670,
            "unit": "ns/op",
            "extra": "6705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "6705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176797,
            "unit": "ns/op\t   57292 B/op\t     641 allocs/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176797,
            "unit": "ns/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57292,
            "unit": "B/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364573,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364573,
            "unit": "ns/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62764,
            "unit": "B/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362416,
            "unit": "ns/op\t   62776 B/op\t     698 allocs/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362416,
            "unit": "ns/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3475 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357507,
            "unit": "ns/op\t   62748 B/op\t     698 allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357507,
            "unit": "ns/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62748,
            "unit": "B/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3552 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 354738,
            "unit": "ns/op\t   62757 B/op\t     698 allocs/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 354738,
            "unit": "ns/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62757,
            "unit": "B/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45169585 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.52,
            "unit": "ns/op",
            "extra": "45169585 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45169585 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45169585 times\n4 procs"
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
          "id": "0989fd17d0d26ab75042053d858260f7c3d9dbdb",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3623f7e3c9e2c59f5c8f410326e6fb48c2aca362",
          "timestamp": "2025-10-06T02:59:30Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0989fd17d0d26ab75042053d858260f7c3d9dbdb"
        },
        "date": 1759799490307,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12126,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97123 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12126,
            "unit": "ns/op",
            "extra": "97123 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97123 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97123 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39832,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "26439 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39832,
            "unit": "ns/op",
            "extra": "26439 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "26439 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "26439 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74125,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16237 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74125,
            "unit": "ns/op",
            "extra": "16237 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16237 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16237 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30122,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40209 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30122,
            "unit": "ns/op",
            "extra": "40209 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40209 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40209 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 310083,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 310083,
            "unit": "ns/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 312958,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 312958,
            "unit": "ns/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102407,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102407,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45577,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26878 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45577,
            "unit": "ns/op",
            "extra": "26878 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26878 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26878 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210243,
            "unit": "ns/op\t   53865 B/op\t    2040 allocs/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210243,
            "unit": "ns/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53865,
            "unit": "B/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5742 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5770,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "199392 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5770,
            "unit": "ns/op",
            "extra": "199392 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "199392 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "199392 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155092,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7438 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155092,
            "unit": "ns/op",
            "extra": "7438 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7438 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7438 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510080110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510080110A094101Federal",
            "value": 231380104,
            "unit": "1210428822510080110A094101Federal",
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 99.81,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12023025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.81,
            "unit": "ns/op",
            "extra": "12023025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12023025 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12023025 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.07,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16752742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.07,
            "unit": "ns/op",
            "extra": "16752742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16752742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16752742 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39538077 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.26,
            "unit": "ns/op",
            "extra": "39538077 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39538077 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39538077 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89082646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.99,
            "unit": "ns/op",
            "extra": "89082646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89082646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89082646 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201395955 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "201395955 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201395955 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201395955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 308438,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 308438,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306968,
            "unit": "ns/op\t   57063 B/op\t     638 allocs/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306968,
            "unit": "ns/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57063,
            "unit": "B/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3793 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175910,
            "unit": "ns/op\t   57241 B/op\t     641 allocs/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175910,
            "unit": "ns/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57241,
            "unit": "B/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174919,
            "unit": "ns/op\t   57278 B/op\t     641 allocs/op",
            "extra": "6307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174919,
            "unit": "ns/op",
            "extra": "6307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57278,
            "unit": "B/op",
            "extra": "6307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6307 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 383923,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 383923,
            "unit": "ns/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62765,
            "unit": "B/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 371320,
            "unit": "ns/op\t   62837 B/op\t     698 allocs/op",
            "extra": "3229 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 371320,
            "unit": "ns/op",
            "extra": "3229 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62837,
            "unit": "B/op",
            "extra": "3229 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3229 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362849,
            "unit": "ns/op\t   62775 B/op\t     698 allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362849,
            "unit": "ns/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62775,
            "unit": "B/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 355382,
            "unit": "ns/op\t   62219 B/op\t     698 allocs/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 355382,
            "unit": "ns/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62219,
            "unit": "B/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47025471 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "47025471 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47025471 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47025471 times\n4 procs"
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
          "id": "c5d0bda22161e7f12292580d52a07c3feb63a5a9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 942c3e17c0747282d83d71999d73806b0112e392",
          "timestamp": "2025-10-07T02:55:23Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c5d0bda22161e7f12292580d52a07c3feb63a5a9"
        },
        "date": 1759885870219,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11850,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99208 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11850,
            "unit": "ns/op",
            "extra": "99208 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99208 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99208 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38293,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31202 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38293,
            "unit": "ns/op",
            "extra": "31202 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31202 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31202 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71178,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16852 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71178,
            "unit": "ns/op",
            "extra": "16852 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16852 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16852 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29094,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29094,
            "unit": "ns/op",
            "extra": "40696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40696 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296808,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296808,
            "unit": "ns/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 298225,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 298225,
            "unit": "ns/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95102,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95102,
            "unit": "ns/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43725,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27364 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43725,
            "unit": "ns/op",
            "extra": "27364 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27364 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27364 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203327,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "6150 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203327,
            "unit": "ns/op",
            "extra": "6150 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "6150 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6150 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5704,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207154 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5704,
            "unit": "ns/op",
            "extra": "207154 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207154 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207154 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148897,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148897,
            "unit": "ns/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510090110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510090110A094101Federal",
            "value": 231380104,
            "unit": "1210428822510090110A094101Federal",
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
            "extra": "1219989 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 986.8,
            "unit": "ns/op",
            "extra": "1219989 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1219989 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1219989 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.53,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11871634 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.53,
            "unit": "ns/op",
            "extra": "11871634 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11871634 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11871634 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.14,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16959440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.14,
            "unit": "ns/op",
            "extra": "16959440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16959440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16959440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.58,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40695685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.58,
            "unit": "ns/op",
            "extra": "40695685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40695685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40695685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89626200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "89626200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89626200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89626200 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202941255 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202941255 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202941255 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202941255 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302356,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302356,
            "unit": "ns/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4108 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 306226,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306226,
            "unit": "ns/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173641,
            "unit": "ns/op\t   57236 B/op\t     641 allocs/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173641,
            "unit": "ns/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57236,
            "unit": "B/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172990,
            "unit": "ns/op\t   57281 B/op\t     641 allocs/op",
            "extra": "5967 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172990,
            "unit": "ns/op",
            "extra": "5967 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57281,
            "unit": "B/op",
            "extra": "5967 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5967 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 375021,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 375021,
            "unit": "ns/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356582,
            "unit": "ns/op\t   62763 B/op\t     698 allocs/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356582,
            "unit": "ns/op",
            "extra": "3427 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62763,
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
            "value": 357763,
            "unit": "ns/op\t   62779 B/op\t     698 allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357763,
            "unit": "ns/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62779,
            "unit": "B/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3390 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348846,
            "unit": "ns/op\t   62804 B/op\t     698 allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348846,
            "unit": "ns/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62804,
            "unit": "B/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3916 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43514276 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.53,
            "unit": "ns/op",
            "extra": "43514276 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43514276 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43514276 times\n4 procs"
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
          "id": "251a18c5064570624cd753889ade5ce5f5b62f59",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a79580719c985961aaec0b6c0cbbe00057c3e844",
          "timestamp": "2025-10-08T02:55:15Z",
          "url": "https://github.com/moov-io/benchmarks/commit/251a18c5064570624cd753889ade5ce5f5b62f59"
        },
        "date": 1759972315656,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11763,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "102884 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11763,
            "unit": "ns/op",
            "extra": "102884 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "102884 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102884 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38506,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38506,
            "unit": "ns/op",
            "extra": "31210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31210 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70280,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17076 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70280,
            "unit": "ns/op",
            "extra": "17076 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17076 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17076 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28652,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41658 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28652,
            "unit": "ns/op",
            "extra": "41658 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41658 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41658 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 312325,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 312325,
            "unit": "ns/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4048 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287563,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287563,
            "unit": "ns/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94310,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12730 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94310,
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
            "value": 43332,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27760 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43332,
            "unit": "ns/op",
            "extra": "27760 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27760 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27760 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201820,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201820,
            "unit": "ns/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5792 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5619,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205747 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5619,
            "unit": "ns/op",
            "extra": "205747 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205747 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205747 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148179,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7448 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148179,
            "unit": "ns/op",
            "extra": "7448 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7448 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7448 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510100111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510100111A094101Federal",
            "value": 231380104,
            "unit": "1210428822510100111A094101Federal",
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
            "value": 993.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1237060 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 993.9,
            "unit": "ns/op",
            "extra": "1237060 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1237060 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1237060 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.36,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12284440 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.36,
            "unit": "ns/op",
            "extra": "12284440 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12284440 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12284440 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.45,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18974724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.45,
            "unit": "ns/op",
            "extra": "18974724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18974724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18974724 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.25,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40108603 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.25,
            "unit": "ns/op",
            "extra": "40108603 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40108603 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40108603 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89587611 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.53,
            "unit": "ns/op",
            "extra": "89587611 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89587611 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89587611 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.533,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183784708 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.533,
            "unit": "ns/op",
            "extra": "183784708 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183784708 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183784708 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302488,
            "unit": "ns/op\t   57053 B/op\t     638 allocs/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302488,
            "unit": "ns/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57053,
            "unit": "B/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4135 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302275,
            "unit": "ns/op\t   57070 B/op\t     638 allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302275,
            "unit": "ns/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57070,
            "unit": "B/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4039 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169035,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "7161 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169035,
            "unit": "ns/op",
            "extra": "7161 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "7161 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7161 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168723,
            "unit": "ns/op\t   57271 B/op\t     641 allocs/op",
            "extra": "6062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168723,
            "unit": "ns/op",
            "extra": "6062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57271,
            "unit": "B/op",
            "extra": "6062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6062 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359532,
            "unit": "ns/op\t   62798 B/op\t     698 allocs/op",
            "extra": "3343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359532,
            "unit": "ns/op",
            "extra": "3343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62798,
            "unit": "B/op",
            "extra": "3343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359774,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359774,
            "unit": "ns/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353918,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353918,
            "unit": "ns/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62759,
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
            "value": 351653,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "4002 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351653,
            "unit": "ns/op",
            "extra": "4002 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62764,
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
            "value": 25.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46418653 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.84,
            "unit": "ns/op",
            "extra": "46418653 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46418653 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46418653 times\n4 procs"
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