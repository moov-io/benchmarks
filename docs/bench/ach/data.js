window.BENCHMARK_DATA = {
  "lastUpdate": 1755825309373,
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
          "id": "04590c47850d36deb908c43949be848420df4eac",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 57b7ea4350aae535a9e7160a7f652fe19ec9bbe2",
          "timestamp": "2025-08-13T03:17:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/04590c47850d36deb908c43949be848420df4eac"
        },
        "date": 1755134432063,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12029,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "91611 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12029,
            "unit": "ns/op",
            "extra": "91611 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "91611 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "91611 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38898,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38898,
            "unit": "ns/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70856,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16891 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70856,
            "unit": "ns/op",
            "extra": "16891 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16891 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16891 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28971,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28971,
            "unit": "ns/op",
            "extra": "41200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41200 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290689,
            "unit": "ns/op\t   56976 B/op\t     742 allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290689,
            "unit": "ns/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56976,
            "unit": "B/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 305728,
            "unit": "ns/op\t   56978 B/op\t     742 allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 305728,
            "unit": "ns/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56978,
            "unit": "B/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94846,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94846,
            "unit": "ns/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44272,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44272,
            "unit": "ns/op",
            "extra": "26980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26980 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206500,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206500,
            "unit": "ns/op",
            "extra": "5996 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
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
            "value": 5782,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "203451 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5782,
            "unit": "ns/op",
            "extra": "203451 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "203451 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "203451 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149342,
            "unit": "ns/op\t   57783 B/op\t     611 allocs/op",
            "extra": "7387 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149342,
            "unit": "ns/op",
            "extra": "7387 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57783,
            "unit": "B/op",
            "extra": "7387 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7387 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508150119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508150119A094101Federal",
            "value": 231380104,
            "unit": "1210428822508150119A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1229102 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1229102 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1229102 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1229102 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11532484 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.2,
            "unit": "ns/op",
            "extra": "11532484 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11532484 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11532484 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 65.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18223099 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 65.1,
            "unit": "ns/op",
            "extra": "18223099 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18223099 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18223099 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.14,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40225446 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.14,
            "unit": "ns/op",
            "extra": "40225446 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40225446 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40225446 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85346259 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14,
            "unit": "ns/op",
            "extra": "85346259 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85346259 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85346259 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.954,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199617105 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.954,
            "unit": "ns/op",
            "extra": "199617105 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "199617105 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "199617105 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297006,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297006,
            "unit": "ns/op",
            "extra": "4236 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
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
            "value": 293229,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293229,
            "unit": "ns/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169551,
            "unit": "ns/op\t   57260 B/op\t     641 allocs/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169551,
            "unit": "ns/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57260,
            "unit": "B/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171782,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6621 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171782,
            "unit": "ns/op",
            "extra": "6621 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6621 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6621 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355403,
            "unit": "ns/op\t   62783 B/op\t     698 allocs/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355403,
            "unit": "ns/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62783,
            "unit": "B/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3487 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358819,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358819,
            "unit": "ns/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3565 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349317,
            "unit": "ns/op\t   62751 B/op\t     698 allocs/op",
            "extra": "3723 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349317,
            "unit": "ns/op",
            "extra": "3723 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62751,
            "unit": "B/op",
            "extra": "3723 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3723 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 338394,
            "unit": "ns/op\t   62716 B/op\t     698 allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338394,
            "unit": "ns/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62716,
            "unit": "B/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46494978 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46494978 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46494978 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46494978 times\n4 procs"
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
          "id": "aefc850aa7d4a3dd26faf7719feb13bd0b3d3882",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 3a54500c094106aac52f7a220fc632fa87f71784",
          "timestamp": "2025-08-14T03:18:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/aefc850aa7d4a3dd26faf7719feb13bd0b3d3882"
        },
        "date": 1755220863077,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12057,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98254 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12057,
            "unit": "ns/op",
            "extra": "98254 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98254 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98254 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 40620,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31306 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 40620,
            "unit": "ns/op",
            "extra": "31306 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31306 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31306 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71031,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16935 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71031,
            "unit": "ns/op",
            "extra": "16935 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16935 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29097,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41571 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29097,
            "unit": "ns/op",
            "extra": "41571 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41571 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41571 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293234,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293234,
            "unit": "ns/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 312918,
            "unit": "ns/op\t   56978 B/op\t     742 allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 312918,
            "unit": "ns/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56978,
            "unit": "B/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 93709,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93709,
            "unit": "ns/op",
            "extra": "12786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12786 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45552,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45552,
            "unit": "ns/op",
            "extra": "27256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27256 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207662,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207662,
            "unit": "ns/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6118 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5701,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207782 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5701,
            "unit": "ns/op",
            "extra": "207782 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207782 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207782 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147446,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7647 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147446,
            "unit": "ns/op",
            "extra": "7647 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7647 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7647 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508160120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508160120A094101Federal",
            "value": 231380104,
            "unit": "1210428822508160120A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 973.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1231040 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 973.1,
            "unit": "ns/op",
            "extra": "1231040 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1231040 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1231040 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 103.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11583358 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.3,
            "unit": "ns/op",
            "extra": "11583358 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11583358 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11583358 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 64.87,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17800117 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 64.87,
            "unit": "ns/op",
            "extra": "17800117 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17800117 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17800117 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.79,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39956508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.79,
            "unit": "ns/op",
            "extra": "39956508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39956508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39956508 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 22.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52977759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 22.82,
            "unit": "ns/op",
            "extra": "52977759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52977759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52977759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "201782461 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "201782461 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "201782461 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "201782461 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300667,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300667,
            "unit": "ns/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302046,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302046,
            "unit": "ns/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172490,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172490,
            "unit": "ns/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7124 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169600,
            "unit": "ns/op\t   57282 B/op\t     641 allocs/op",
            "extra": "6406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169600,
            "unit": "ns/op",
            "extra": "6406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57282,
            "unit": "B/op",
            "extra": "6406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6406 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 353078,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 353078,
            "unit": "ns/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354050,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354050,
            "unit": "ns/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351069,
            "unit": "ns/op\t   62746 B/op\t     698 allocs/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351069,
            "unit": "ns/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62746,
            "unit": "B/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3682 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 350542,
            "unit": "ns/op\t   62720 B/op\t     698 allocs/op",
            "extra": "4161 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 350542,
            "unit": "ns/op",
            "extra": "4161 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62720,
            "unit": "B/op",
            "extra": "4161 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46372632 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.85,
            "unit": "ns/op",
            "extra": "46372632 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46372632 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46372632 times\n4 procs"
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
          "id": "f95c2de32f5bb947dd6ac043da87b1fcad2c67d0",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7016fd6143deb8add4937decd517dde1dfd42b5d",
          "timestamp": "2025-08-15T03:19:16Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f95c2de32f5bb947dd6ac043da87b1fcad2c67d0"
        },
        "date": 1755307036345,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12194,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "96260 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12194,
            "unit": "ns/op",
            "extra": "96260 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "96260 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "96260 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39198,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39198,
            "unit": "ns/op",
            "extra": "30572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30572 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71482,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16710 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71482,
            "unit": "ns/op",
            "extra": "16710 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16710 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16710 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31448,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40190 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31448,
            "unit": "ns/op",
            "extra": "40190 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40190 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40190 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290632,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290632,
            "unit": "ns/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3829 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 308361,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 308361,
            "unit": "ns/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94669,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12678 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94669,
            "unit": "ns/op",
            "extra": "12678 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12678 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12678 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43857,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43857,
            "unit": "ns/op",
            "extra": "27434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27434 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27434 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209398,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6012 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209398,
            "unit": "ns/op",
            "extra": "6012 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6012 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6012 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6108,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202338 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6108,
            "unit": "ns/op",
            "extra": "202338 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202338 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202338 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148580,
            "unit": "ns/op\t   57782 B/op\t     611 allocs/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148580,
            "unit": "ns/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57782,
            "unit": "B/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7518 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508170116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508170116A094101Federal",
            "value": 231380104,
            "unit": "1210428822508170116A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 992.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1210728 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 992.1,
            "unit": "ns/op",
            "extra": "1210728 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1210728 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1210728 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.7,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11829231 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.7,
            "unit": "ns/op",
            "extra": "11829231 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11829231 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11829231 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.25,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17563224 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.25,
            "unit": "ns/op",
            "extra": "17563224 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17563224 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17563224 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39336327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.43,
            "unit": "ns/op",
            "extra": "39336327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39336327 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39336327 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83965329 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.26,
            "unit": "ns/op",
            "extra": "83965329 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "83965329 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "83965329 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.534,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183255193 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.534,
            "unit": "ns/op",
            "extra": "183255193 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183255193 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183255193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302846,
            "unit": "ns/op\t   57040 B/op\t     638 allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302846,
            "unit": "ns/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57040,
            "unit": "B/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296684,
            "unit": "ns/op\t   57058 B/op\t     638 allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296684,
            "unit": "ns/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57058,
            "unit": "B/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4116 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 190644,
            "unit": "ns/op\t   57259 B/op\t     641 allocs/op",
            "extra": "6802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 190644,
            "unit": "ns/op",
            "extra": "6802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57259,
            "unit": "B/op",
            "extra": "6802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175384,
            "unit": "ns/op\t   57276 B/op\t     641 allocs/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175384,
            "unit": "ns/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57276,
            "unit": "B/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356217,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356217,
            "unit": "ns/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62760,
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
            "value": 352351,
            "unit": "ns/op\t   62781 B/op\t     698 allocs/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352351,
            "unit": "ns/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62781,
            "unit": "B/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3622 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353487,
            "unit": "ns/op\t   62737 B/op\t     698 allocs/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353487,
            "unit": "ns/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62737,
            "unit": "B/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3583 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341305,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341305,
            "unit": "ns/op",
            "extra": "4072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62760,
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
            "value": 25.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47357451 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.23,
            "unit": "ns/op",
            "extra": "47357451 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47357451 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47357451 times\n4 procs"
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
          "id": "6a3285007fca751a3713b86524d7f86fca8dafe2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1bfe6456b18919697c5b9a13c2430f48fc001fe6",
          "timestamp": "2025-08-16T03:12:38Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6a3285007fca751a3713b86524d7f86fca8dafe2"
        },
        "date": 1755393949788,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12179,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97717 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12179,
            "unit": "ns/op",
            "extra": "97717 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97717 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97717 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38227,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38227,
            "unit": "ns/op",
            "extra": "31114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31114 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78806,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16940 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78806,
            "unit": "ns/op",
            "extra": "16940 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16940 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16940 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29163,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "39752 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29163,
            "unit": "ns/op",
            "extra": "39752 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "39752 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "39752 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290723,
            "unit": "ns/op\t   56977 B/op\t     742 allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290723,
            "unit": "ns/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56977,
            "unit": "B/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290973,
            "unit": "ns/op\t   56978 B/op\t     742 allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290973,
            "unit": "ns/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56978,
            "unit": "B/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94385,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12722 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94385,
            "unit": "ns/op",
            "extra": "12722 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12722 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12722 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43689,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27320 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43689,
            "unit": "ns/op",
            "extra": "27320 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27320 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27320 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 212387,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5662 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 212387,
            "unit": "ns/op",
            "extra": "5662 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5662 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5662 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5837,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "202623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5837,
            "unit": "ns/op",
            "extra": "202623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "202623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "202623 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147676,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147676,
            "unit": "ns/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508180125A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508180125A094101Federal",
            "value": 231380104,
            "unit": "1210428822508180125A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 979.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1208622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 979.2,
            "unit": "ns/op",
            "extra": "1208622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1208622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1208622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11892469 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11892469 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11892469 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11892469 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 64.52,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18860784 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 64.52,
            "unit": "ns/op",
            "extra": "18860784 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18860784 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18860784 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41083296 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.03,
            "unit": "ns/op",
            "extra": "41083296 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41083296 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41083296 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87091645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.81,
            "unit": "ns/op",
            "extra": "87091645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87091645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87091645 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.554,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183557994 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.554,
            "unit": "ns/op",
            "extra": "183557994 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183557994 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183557994 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296275,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296275,
            "unit": "ns/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
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
            "value": 306920,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306920,
            "unit": "ns/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 167674,
            "unit": "ns/op\t   57253 B/op\t     641 allocs/op",
            "extra": "6928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 167674,
            "unit": "ns/op",
            "extra": "6928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57253,
            "unit": "B/op",
            "extra": "6928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176626,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176626,
            "unit": "ns/op",
            "extra": "6412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359591,
            "unit": "ns/op\t   62815 B/op\t     698 allocs/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359591,
            "unit": "ns/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62815,
            "unit": "B/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3439 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355435,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355435,
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
            "value": 350151,
            "unit": "ns/op\t   62788 B/op\t     698 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350151,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62788,
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
            "value": 348764,
            "unit": "ns/op\t   62723 B/op\t     698 allocs/op",
            "extra": "4114 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348764,
            "unit": "ns/op",
            "extra": "4114 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62723,
            "unit": "B/op",
            "extra": "4114 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4114 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43849489 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.55,
            "unit": "ns/op",
            "extra": "43849489 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43849489 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43849489 times\n4 procs"
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
          "id": "3bdc47274344e6becb58ed5c8fb16a8bd3f77eef",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d7c18732925b0b5f67f513539a0688e689753079",
          "timestamp": "2025-08-17T03:23:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3bdc47274344e6becb58ed5c8fb16a8bd3f77eef"
        },
        "date": 1755480303993,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12246,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97142 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12246,
            "unit": "ns/op",
            "extra": "97142 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97142 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97142 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39063,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30858 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39063,
            "unit": "ns/op",
            "extra": "30858 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30858 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30858 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71759,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16866 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71759,
            "unit": "ns/op",
            "extra": "16866 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16866 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16866 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29131,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29131,
            "unit": "ns/op",
            "extra": "40935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40935 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292134,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292134,
            "unit": "ns/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 310263,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 310263,
            "unit": "ns/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3928 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94679,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94679,
            "unit": "ns/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12633 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44052,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44052,
            "unit": "ns/op",
            "extra": "27154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27154 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27154 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 208287,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 208287,
            "unit": "ns/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5864,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "204955 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5864,
            "unit": "ns/op",
            "extra": "204955 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "204955 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "204955 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148537,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148537,
            "unit": "ns/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508190124A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508190124A094101Federal",
            "value": 231380104,
            "unit": "1210428822508190124A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1223964 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 986.7,
            "unit": "ns/op",
            "extra": "1223964 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1223964 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1223964 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11677143 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.2,
            "unit": "ns/op",
            "extra": "11677143 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11677143 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11677143 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.36,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18938826 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.36,
            "unit": "ns/op",
            "extra": "18938826 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18938826 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18938826 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39760494 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.27,
            "unit": "ns/op",
            "extra": "39760494 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39760494 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39760494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84010904 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.22,
            "unit": "ns/op",
            "extra": "84010904 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84010904 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84010904 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.548,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "182710072 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.548,
            "unit": "ns/op",
            "extra": "182710072 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "182710072 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "182710072 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 304517,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 304517,
            "unit": "ns/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299805,
            "unit": "ns/op\t   57066 B/op\t     638 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299805,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57066,
            "unit": "B/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173665,
            "unit": "ns/op\t   57238 B/op\t     641 allocs/op",
            "extra": "6643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173665,
            "unit": "ns/op",
            "extra": "6643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57238,
            "unit": "B/op",
            "extra": "6643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6643 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 181205,
            "unit": "ns/op\t   57273 B/op\t     641 allocs/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 181205,
            "unit": "ns/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57273,
            "unit": "B/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6604 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 373119,
            "unit": "ns/op\t   62793 B/op\t     698 allocs/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 373119,
            "unit": "ns/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62793,
            "unit": "B/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3460 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 370036,
            "unit": "ns/op\t   62767 B/op\t     698 allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 370036,
            "unit": "ns/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62767,
            "unit": "B/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356682,
            "unit": "ns/op\t   62751 B/op\t     698 allocs/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356682,
            "unit": "ns/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62751,
            "unit": "B/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347860,
            "unit": "ns/op\t   62710 B/op\t     698 allocs/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347860,
            "unit": "ns/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62710,
            "unit": "B/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44431096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.5,
            "unit": "ns/op",
            "extra": "44431096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44431096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44431096 times\n4 procs"
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
          "id": "3bf75f77ccf3c336dd87bed67067dfc85d93f733",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0e8e584a81753d82420f750933c86ed5af4fe136",
          "timestamp": "2025-08-18T03:27:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3bf75f77ccf3c336dd87bed67067dfc85d93f733"
        },
        "date": 1755566228356,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12192,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "98224 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12192,
            "unit": "ns/op",
            "extra": "98224 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "98224 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "98224 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38406,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31116 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38406,
            "unit": "ns/op",
            "extra": "31116 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31116 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31116 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71474,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16736 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71474,
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
            "value": 29171,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41583 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29171,
            "unit": "ns/op",
            "extra": "41583 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41583 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41583 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293290,
            "unit": "ns/op\t   56976 B/op\t     742 allocs/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293290,
            "unit": "ns/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56976,
            "unit": "B/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3871 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292365,
            "unit": "ns/op\t   56975 B/op\t     742 allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292365,
            "unit": "ns/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56975,
            "unit": "B/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3986 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102419,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102419,
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
            "value": 44421,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26800 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44421,
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
            "value": 205247,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 205247,
            "unit": "ns/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5852,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "201544 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5852,
            "unit": "ns/op",
            "extra": "201544 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "201544 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "201544 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148776,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148776,
            "unit": "ns/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508200116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508200116A094101Federal",
            "value": 231380104,
            "unit": "1210428822508200116A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1216605 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1002,
            "unit": "ns/op",
            "extra": "1216605 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1216605 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1216605 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 103.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11823243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.1,
            "unit": "ns/op",
            "extra": "11823243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11823243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11823243 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.55,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18742731 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.55,
            "unit": "ns/op",
            "extra": "18742731 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18742731 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18742731 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39406578 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.13,
            "unit": "ns/op",
            "extra": "39406578 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39406578 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39406578 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84261769 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.22,
            "unit": "ns/op",
            "extra": "84261769 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84261769 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84261769 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "181066825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.54,
            "unit": "ns/op",
            "extra": "181066825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "181066825 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "181066825 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301283,
            "unit": "ns/op\t   57049 B/op\t     638 allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301283,
            "unit": "ns/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57049,
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
            "value": 300944,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300944,
            "unit": "ns/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172023,
            "unit": "ns/op\t   57244 B/op\t     641 allocs/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172023,
            "unit": "ns/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57244,
            "unit": "B/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174756,
            "unit": "ns/op\t   57273 B/op\t     641 allocs/op",
            "extra": "6469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174756,
            "unit": "ns/op",
            "extra": "6469 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57273,
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
            "value": 366810,
            "unit": "ns/op\t   62764 B/op\t     698 allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 366810,
            "unit": "ns/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62764,
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
            "value": 363896,
            "unit": "ns/op\t   62790 B/op\t     698 allocs/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363896,
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
            "value": 355244,
            "unit": "ns/op\t   62736 B/op\t     698 allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355244,
            "unit": "ns/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62736,
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
            "value": 345722,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345722,
            "unit": "ns/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4029 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43695312 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.55,
            "unit": "ns/op",
            "extra": "43695312 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43695312 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43695312 times\n4 procs"
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
          "id": "58c812d8c3dc4b2fb187dcfe531279d7275b267c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4fa80e9512017468cbf411ad9b1b81162008a013",
          "timestamp": "2025-08-19T03:08:17Z",
          "url": "https://github.com/moov-io/benchmarks/commit/58c812d8c3dc4b2fb187dcfe531279d7275b267c"
        },
        "date": 1755652516330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12190,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "97842 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12190,
            "unit": "ns/op",
            "extra": "97842 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "97842 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "97842 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38390,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31172 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38390,
            "unit": "ns/op",
            "extra": "31172 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31172 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31172 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74437,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16944 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74437,
            "unit": "ns/op",
            "extra": "16944 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16944 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16944 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29472,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41521 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29472,
            "unit": "ns/op",
            "extra": "41521 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41521 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41521 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290843,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290843,
            "unit": "ns/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 291275,
            "unit": "ns/op\t   56977 B/op\t     742 allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291275,
            "unit": "ns/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56977,
            "unit": "B/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94072,
            "unit": "ns/op\t   27748 B/op\t     200 allocs/op",
            "extra": "12772 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94072,
            "unit": "ns/op",
            "extra": "12772 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27748,
            "unit": "B/op",
            "extra": "12772 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12772 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43877,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27255 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43877,
            "unit": "ns/op",
            "extra": "27255 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27255 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27255 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209776,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5694 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209776,
            "unit": "ns/op",
            "extra": "5694 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5694 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5694 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5827,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "192188 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5827,
            "unit": "ns/op",
            "extra": "192188 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "192188 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "192188 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148706,
            "unit": "ns/op\t   57779 B/op\t     611 allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148706,
            "unit": "ns/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57779,
            "unit": "B/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508210114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508210114A094101Federal",
            "value": 231380104,
            "unit": "1210428822508210114A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 978.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1217295 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 978.3,
            "unit": "ns/op",
            "extra": "1217295 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1217295 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1217295 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11970534 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.4,
            "unit": "ns/op",
            "extra": "11970534 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11970534 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11970534 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.27,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17989782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.27,
            "unit": "ns/op",
            "extra": "17989782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17989782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17989782 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39658188 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.86,
            "unit": "ns/op",
            "extra": "39658188 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39658188 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39658188 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87464697 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.73,
            "unit": "ns/op",
            "extra": "87464697 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87464697 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87464697 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183136198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.53,
            "unit": "ns/op",
            "extra": "183136198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183136198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183136198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305819,
            "unit": "ns/op\t   57050 B/op\t     638 allocs/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305819,
            "unit": "ns/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4066 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296002,
            "unit": "ns/op\t   57071 B/op\t     638 allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296002,
            "unit": "ns/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57071,
            "unit": "B/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175111,
            "unit": "ns/op\t   57268 B/op\t     641 allocs/op",
            "extra": "6811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175111,
            "unit": "ns/op",
            "extra": "6811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57268,
            "unit": "B/op",
            "extra": "6811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171403,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "6374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171403,
            "unit": "ns/op",
            "extra": "6374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "6374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370373,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "3289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370373,
            "unit": "ns/op",
            "extra": "3289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62755,
            "unit": "B/op",
            "extra": "3289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3289 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357115,
            "unit": "ns/op\t   62776 B/op\t     698 allocs/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357115,
            "unit": "ns/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3541 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355908,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355908,
            "unit": "ns/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 346537,
            "unit": "ns/op\t   62714 B/op\t     698 allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 346537,
            "unit": "ns/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62714,
            "unit": "B/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4113 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43659636 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "43659636 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43659636 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43659636 times\n4 procs"
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
          "id": "0d7c93faf59c997956a660b8a7678431ac86b2d9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 045a4c5e8b872fb2fc523c993eafef372dbfca8c",
          "timestamp": "2025-08-20T03:06:22Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0d7c93faf59c997956a660b8a7678431ac86b2d9"
        },
        "date": 1755738869810,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12221,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "95392 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12221,
            "unit": "ns/op",
            "extra": "95392 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "95392 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "95392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38339,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38339,
            "unit": "ns/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31184 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71154,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16794 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71154,
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
            "value": 30465,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30465,
            "unit": "ns/op",
            "extra": "41732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41732 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291959,
            "unit": "ns/op\t   56979 B/op\t     742 allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291959,
            "unit": "ns/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56979,
            "unit": "B/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290883,
            "unit": "ns/op\t   56976 B/op\t     742 allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290883,
            "unit": "ns/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56976,
            "unit": "B/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "4014 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 103036,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 103036,
            "unit": "ns/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27749,
            "unit": "B/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 200,
            "unit": "allocs/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44070,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44070,
            "unit": "ns/op",
            "extra": "27274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27274 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27274 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 212232,
            "unit": "ns/op\t   53868 B/op\t    2040 allocs/op",
            "extra": "5529 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 212232,
            "unit": "ns/op",
            "extra": "5529 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53868,
            "unit": "B/op",
            "extra": "5529 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5529 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5873,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "196736 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5873,
            "unit": "ns/op",
            "extra": "196736 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "196736 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "196736 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148247,
            "unit": "ns/op\t   57780 B/op\t     611 allocs/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148247,
            "unit": "ns/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57780,
            "unit": "B/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "7489 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508220113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508220113A094101Federal",
            "value": 231380104,
            "unit": "1210428822508220113A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 984.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1227622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 984.7,
            "unit": "ns/op",
            "extra": "1227622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1227622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1227622 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11928400 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.3,
            "unit": "ns/op",
            "extra": "11928400 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11928400 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11928400 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.07,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18509876 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.07,
            "unit": "ns/op",
            "extra": "18509876 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18509876 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18509876 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.85,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "37413662 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.85,
            "unit": "ns/op",
            "extra": "37413662 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "37413662 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "37413662 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87222423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.83,
            "unit": "ns/op",
            "extra": "87222423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87222423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87222423 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.544,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183718420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.544,
            "unit": "ns/op",
            "extra": "183718420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183718420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183718420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295366,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295366,
            "unit": "ns/op",
            "extra": "4237 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57052,
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
            "value": 292852,
            "unit": "ns/op\t   57070 B/op\t     638 allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292852,
            "unit": "ns/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57070,
            "unit": "B/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172869,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "6697 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172869,
            "unit": "ns/op",
            "extra": "6697 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "6697 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6697 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174231,
            "unit": "ns/op\t   57272 B/op\t     641 allocs/op",
            "extra": "6505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174231,
            "unit": "ns/op",
            "extra": "6505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57272,
            "unit": "B/op",
            "extra": "6505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364875,
            "unit": "ns/op\t   62791 B/op\t     698 allocs/op",
            "extra": "3325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364875,
            "unit": "ns/op",
            "extra": "3325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62791,
            "unit": "B/op",
            "extra": "3325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3325 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 368986,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 368986,
            "unit": "ns/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3632 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355942,
            "unit": "ns/op\t   62758 B/op\t     698 allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355942,
            "unit": "ns/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62758,
            "unit": "B/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342128,
            "unit": "ns/op\t   62721 B/op\t     698 allocs/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342128,
            "unit": "ns/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62721,
            "unit": "B/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4136 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43720761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.25,
            "unit": "ns/op",
            "extra": "43720761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43720761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43720761 times\n4 procs"
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
          "id": "4d5af66ff3ec0521435a2003c19dbc61c5672a15",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e1b21858cc35648ba1cec8b301a9fd9d2f77de58",
          "timestamp": "2025-08-21T03:05:16Z",
          "url": "https://github.com/moov-io/benchmarks/commit/4d5af66ff3ec0521435a2003c19dbc61c5672a15"
        },
        "date": 1755825309356,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13590,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "86311 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13590,
            "unit": "ns/op",
            "extra": "86311 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "86311 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "86311 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42200,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "28278 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42200,
            "unit": "ns/op",
            "extra": "28278 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "28278 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "28278 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 77661,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15501 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 77661,
            "unit": "ns/op",
            "extra": "15501 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15501 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15501 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32082,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "36964 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32082,
            "unit": "ns/op",
            "extra": "36964 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "36964 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "36964 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 311927,
            "unit": "ns/op\t   56978 B/op\t     742 allocs/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 311927,
            "unit": "ns/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56978,
            "unit": "B/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 321448,
            "unit": "ns/op\t   56978 B/op\t     742 allocs/op",
            "extra": "3676 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 321448,
            "unit": "ns/op",
            "extra": "3676 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56978,
            "unit": "B/op",
            "extra": "3676 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 742,
            "unit": "allocs/op",
            "extra": "3676 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100102,
            "unit": "ns/op\t   27749 B/op\t     200 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100102,
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
            "value": 47416,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "25669 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47416,
            "unit": "ns/op",
            "extra": "25669 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "25669 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "25669 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 225314,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5325 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 225314,
            "unit": "ns/op",
            "extra": "5325 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5325 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5325 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6701,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "178821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6701,
            "unit": "ns/op",
            "extra": "178821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "178821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "178821 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162900,
            "unit": "ns/op\t   57781 B/op\t     611 allocs/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162900,
            "unit": "ns/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57781,
            "unit": "B/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 611,
            "unit": "allocs/op",
            "extra": "6729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822508230114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822508230114A094101Federal",
            "value": 231380104,
            "unit": "1210428822508230114A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1087,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1087,
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
            "value": 101.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11833316 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.5,
            "unit": "ns/op",
            "extra": "11833316 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11833316 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11833316 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.23,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18380677 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.23,
            "unit": "ns/op",
            "extra": "18380677 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18380677 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18380677 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38992906 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.4,
            "unit": "ns/op",
            "extra": "38992906 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38992906 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38992906 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "79269264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.08,
            "unit": "ns/op",
            "extra": "79269264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79269264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79269264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.548,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "180332156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.548,
            "unit": "ns/op",
            "extra": "180332156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "180332156 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "180332156 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 319522,
            "unit": "ns/op\t   57055 B/op\t     638 allocs/op",
            "extra": "3178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 319522,
            "unit": "ns/op",
            "extra": "3178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "3178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3178 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 323368,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 323368,
            "unit": "ns/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 191245,
            "unit": "ns/op\t   57266 B/op\t     641 allocs/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 191245,
            "unit": "ns/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57266,
            "unit": "B/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5568 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169694,
            "unit": "ns/op\t   57277 B/op\t     641 allocs/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169694,
            "unit": "ns/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57277,
            "unit": "B/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363183,
            "unit": "ns/op\t   62818 B/op\t     698 allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363183,
            "unit": "ns/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62818,
            "unit": "B/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355948,
            "unit": "ns/op\t   62770 B/op\t     698 allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355948,
            "unit": "ns/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62770,
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
            "value": 355042,
            "unit": "ns/op\t   62779 B/op\t     698 allocs/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355042,
            "unit": "ns/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62779,
            "unit": "B/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344062,
            "unit": "ns/op\t   62769 B/op\t     698 allocs/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344062,
            "unit": "ns/op",
            "extra": "4032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62769,
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
            "value": 25.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44061880 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.52,
            "unit": "ns/op",
            "extra": "44061880 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44061880 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44061880 times\n4 procs"
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