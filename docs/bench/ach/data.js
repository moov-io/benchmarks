window.BENCHMARK_DATA = {
  "lastUpdate": 1762737598751,
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
          "id": "fdbc569f267b988f8ebdca0ec0b57a2f5e209087",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 73482bfcbaa721ec0927d971fdfe9dad774472a2",
          "timestamp": "2025-10-16T03:00:45Z",
          "url": "https://github.com/moov-io/benchmarks/commit/fdbc569f267b988f8ebdca0ec0b57a2f5e209087"
        },
        "date": 1760663575846,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11837,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101672 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11837,
            "unit": "ns/op",
            "extra": "101672 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101672 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101672 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38951,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30816 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38951,
            "unit": "ns/op",
            "extra": "30816 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "30816 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "30816 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74277,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16221 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74277,
            "unit": "ns/op",
            "extra": "16221 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16221 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16221 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29181,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41150 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29181,
            "unit": "ns/op",
            "extra": "41150 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41150 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41150 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291180,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291180,
            "unit": "ns/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292271,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292271,
            "unit": "ns/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95085,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95085,
            "unit": "ns/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43039,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26551 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43039,
            "unit": "ns/op",
            "extra": "26551 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26551 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26551 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 209328,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5714 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 209328,
            "unit": "ns/op",
            "extra": "5714 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5714 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5714 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5638,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "209359 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5638,
            "unit": "ns/op",
            "extra": "209359 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "209359 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209359 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148657,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7492 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148657,
            "unit": "ns/op",
            "extra": "7492 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7492 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7492 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510180112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510180112A094101Federal",
            "value": 231380104,
            "unit": "1210428822510180112A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 978.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1243243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 978.6,
            "unit": "ns/op",
            "extra": "1243243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1243243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1243243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12095744 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.47,
            "unit": "ns/op",
            "extra": "12095744 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12095744 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12095744 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 65.47,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18803932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 65.47,
            "unit": "ns/op",
            "extra": "18803932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18803932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18803932 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.02,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40016524 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.02,
            "unit": "ns/op",
            "extra": "40016524 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40016524 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40016524 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89359574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "89359574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89359574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89359574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183798051 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.56,
            "unit": "ns/op",
            "extra": "183798051 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183798051 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183798051 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294184,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294184,
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
            "value": 290615,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "4035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 290615,
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
            "value": 168957,
            "unit": "ns/op\t   57249 B/op\t     641 allocs/op",
            "extra": "7180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168957,
            "unit": "ns/op",
            "extra": "7180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57249,
            "unit": "B/op",
            "extra": "7180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7180 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 166305,
            "unit": "ns/op\t   57283 B/op\t     641 allocs/op",
            "extra": "6272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 166305,
            "unit": "ns/op",
            "extra": "6272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57283,
            "unit": "B/op",
            "extra": "6272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361636,
            "unit": "ns/op\t   62789 B/op\t     698 allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361636,
            "unit": "ns/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62789,
            "unit": "B/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 349875,
            "unit": "ns/op\t   62787 B/op\t     698 allocs/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 349875,
            "unit": "ns/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62787,
            "unit": "B/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 347991,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 347991,
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
            "value": 338568,
            "unit": "ns/op\t   62728 B/op\t     698 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 338568,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62728,
            "unit": "B/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46366093 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.95,
            "unit": "ns/op",
            "extra": "46366093 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46366093 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46366093 times\n4 procs"
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
          "id": "f912d4a4f7f094bbd932c5b101280cf2da1e5f53",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f490557862c973ac9db3f1008f2a91020024784c",
          "timestamp": "2025-10-17T02:59:41Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f912d4a4f7f094bbd932c5b101280cf2da1e5f53"
        },
        "date": 1760749776086,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11829,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101156 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11829,
            "unit": "ns/op",
            "extra": "101156 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101156 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101156 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39151,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31172 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39151,
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
            "value": 71745,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16842 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71745,
            "unit": "ns/op",
            "extra": "16842 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16842 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16842 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29362,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41222 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29362,
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
            "value": 291015,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291015,
            "unit": "ns/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3884 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295506,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295506,
            "unit": "ns/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100086,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100086,
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
            "value": 43354,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27814 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43354,
            "unit": "ns/op",
            "extra": "27814 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27814 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27814 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204685,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5738 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204685,
            "unit": "ns/op",
            "extra": "5738 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5738 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5738 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5636,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207836 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5636,
            "unit": "ns/op",
            "extra": "207836 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207836 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207836 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148607,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148607,
            "unit": "ns/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510190108A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510190108A094101Federal",
            "value": 231380104,
            "unit": "1210428822510190108A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 991.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1237330 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 991.9,
            "unit": "ns/op",
            "extra": "1237330 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1237330 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1237330 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12197997 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.2,
            "unit": "ns/op",
            "extra": "12197997 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12197997 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12197997 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.79,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18844419 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.79,
            "unit": "ns/op",
            "extra": "18844419 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18844419 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18844419 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.57,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38545896 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.57,
            "unit": "ns/op",
            "extra": "38545896 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38545896 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38545896 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88705353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.57,
            "unit": "ns/op",
            "extra": "88705353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88705353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88705353 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.552,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183869377 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.552,
            "unit": "ns/op",
            "extra": "183869377 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183869377 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183869377 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298794,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298794,
            "unit": "ns/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4354 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292021,
            "unit": "ns/op\t   57071 B/op\t     638 allocs/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292021,
            "unit": "ns/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57071,
            "unit": "B/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4130 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175345,
            "unit": "ns/op\t   57254 B/op\t     641 allocs/op",
            "extra": "6842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175345,
            "unit": "ns/op",
            "extra": "6842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57254,
            "unit": "B/op",
            "extra": "6842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173345,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173345,
            "unit": "ns/op",
            "extra": "6458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
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
            "value": 352753,
            "unit": "ns/op\t   62812 B/op\t     698 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 352753,
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
            "value": 354750,
            "unit": "ns/op\t   62754 B/op\t     698 allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354750,
            "unit": "ns/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62754,
            "unit": "B/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349707,
            "unit": "ns/op\t   62776 B/op\t     698 allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349707,
            "unit": "ns/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62776,
            "unit": "B/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 341234,
            "unit": "ns/op\t   62802 B/op\t     698 allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 341234,
            "unit": "ns/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62802,
            "unit": "B/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45973521 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.85,
            "unit": "ns/op",
            "extra": "45973521 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45973521 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45973521 times\n4 procs"
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
          "id": "ce782fb2d00c54738060f2ceb01e523a100b87b7",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 637c7988ec43dd50b07b06f04d5c0510d4476a92",
          "timestamp": "2025-10-18T02:52:47Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ce782fb2d00c54738060f2ceb01e523a100b87b7"
        },
        "date": 1760836871388,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11852,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100742 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11852,
            "unit": "ns/op",
            "extra": "100742 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100742 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38609,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38609,
            "unit": "ns/op",
            "extra": "31252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31252 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70279,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16963 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70279,
            "unit": "ns/op",
            "extra": "16963 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16963 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16963 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29325,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29325,
            "unit": "ns/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288786,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288786,
            "unit": "ns/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288458,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288458,
            "unit": "ns/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3980 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94599,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12652 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94599,
            "unit": "ns/op",
            "extra": "12652 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12652 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12652 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43395,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27801 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43395,
            "unit": "ns/op",
            "extra": "27801 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27801 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27801 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206555,
            "unit": "ns/op\t   53864 B/op\t    2040 allocs/op",
            "extra": "5758 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206555,
            "unit": "ns/op",
            "extra": "5758 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53864,
            "unit": "B/op",
            "extra": "5758 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5758 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5675,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "209491 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5675,
            "unit": "ns/op",
            "extra": "209491 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "209491 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209491 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147116,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "8174 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147116,
            "unit": "ns/op",
            "extra": "8174 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "8174 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "8174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510200120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510200120A094101Federal",
            "value": 231380104,
            "unit": "1210428822510200120A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 968,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1235527 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 968,
            "unit": "ns/op",
            "extra": "1235527 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1235527 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1235527 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.26,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12158173 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.26,
            "unit": "ns/op",
            "extra": "12158173 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12158173 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12158173 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.43,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18156927 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.43,
            "unit": "ns/op",
            "extra": "18156927 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18156927 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18156927 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40103763 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.26,
            "unit": "ns/op",
            "extra": "40103763 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40103763 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40103763 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89527952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "89527952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89527952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89527952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.578,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183487048 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.578,
            "unit": "ns/op",
            "extra": "183487048 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183487048 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183487048 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 290668,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 290668,
            "unit": "ns/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291439,
            "unit": "ns/op\t   57061 B/op\t     638 allocs/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291439,
            "unit": "ns/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57061,
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
            "value": 172864,
            "unit": "ns/op\t   57259 B/op\t     641 allocs/op",
            "extra": "6985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172864,
            "unit": "ns/op",
            "extra": "6985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57259,
            "unit": "B/op",
            "extra": "6985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6985 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175368,
            "unit": "ns/op\t   57282 B/op\t     641 allocs/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175368,
            "unit": "ns/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57282,
            "unit": "B/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6115 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364486,
            "unit": "ns/op\t   62818 B/op\t     698 allocs/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364486,
            "unit": "ns/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62818,
            "unit": "B/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357071,
            "unit": "ns/op\t   62753 B/op\t     698 allocs/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357071,
            "unit": "ns/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62753,
            "unit": "B/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345811,
            "unit": "ns/op\t   62738 B/op\t     698 allocs/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345811,
            "unit": "ns/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62738,
            "unit": "B/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345956,
            "unit": "ns/op\t   62723 B/op\t     698 allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345956,
            "unit": "ns/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62723,
            "unit": "B/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46682162 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.89,
            "unit": "ns/op",
            "extra": "46682162 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46682162 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46682162 times\n4 procs"
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
          "id": "9630523806bbc58dc588c6f5c89ca7ea0479be88",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0d6fd7f6e87d330c0e57cb801e323805ea0e1cb8",
          "timestamp": "2025-10-19T03:13:26Z",
          "url": "https://github.com/moov-io/benchmarks/commit/9630523806bbc58dc588c6f5c89ca7ea0479be88"
        },
        "date": 1760923109556,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11842,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99194 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11842,
            "unit": "ns/op",
            "extra": "99194 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99194 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99194 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38607,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38607,
            "unit": "ns/op",
            "extra": "31095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31095 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31095 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70498,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "17010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70498,
            "unit": "ns/op",
            "extra": "17010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "17010 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17010 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29409,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40599 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29409,
            "unit": "ns/op",
            "extra": "40599 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40599 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40599 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291470,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291470,
            "unit": "ns/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3907 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297844,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297844,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94747,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94747,
            "unit": "ns/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12624 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43198,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27872 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43198,
            "unit": "ns/op",
            "extra": "27872 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27872 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27872 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204704,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204704,
            "unit": "ns/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5651,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "203469 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5651,
            "unit": "ns/op",
            "extra": "203469 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "203469 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "203469 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147922,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7362 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147922,
            "unit": "ns/op",
            "extra": "7362 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7362 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7362 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510210117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510210117A094101Federal",
            "value": 231380104,
            "unit": "1210428822510210117A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 967.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1238606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 967.5,
            "unit": "ns/op",
            "extra": "1238606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1238606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1238606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.61,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12126780 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.61,
            "unit": "ns/op",
            "extra": "12126780 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12126780 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12126780 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.21,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18783380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.21,
            "unit": "ns/op",
            "extra": "18783380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18783380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18783380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39492463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.6,
            "unit": "ns/op",
            "extra": "39492463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39492463 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39492463 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89013606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.41,
            "unit": "ns/op",
            "extra": "89013606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89013606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89013606 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183106018 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.54,
            "unit": "ns/op",
            "extra": "183106018 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183106018 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183106018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297968,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297968,
            "unit": "ns/op",
            "extra": "4256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295292,
            "unit": "ns/op\t   57071 B/op\t     638 allocs/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295292,
            "unit": "ns/op",
            "extra": "4204 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57071,
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
            "value": 175368,
            "unit": "ns/op\t   57267 B/op\t     641 allocs/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175368,
            "unit": "ns/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57267,
            "unit": "B/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7184 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 195558,
            "unit": "ns/op\t   57273 B/op\t     641 allocs/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 195558,
            "unit": "ns/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57273,
            "unit": "B/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357398,
            "unit": "ns/op\t   62741 B/op\t     698 allocs/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357398,
            "unit": "ns/op",
            "extra": "3414 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62741,
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
            "value": 358957,
            "unit": "ns/op\t   62742 B/op\t     698 allocs/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358957,
            "unit": "ns/op",
            "extra": "3468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62742,
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
            "value": 349371,
            "unit": "ns/op\t   62745 B/op\t     698 allocs/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349371,
            "unit": "ns/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62745,
            "unit": "B/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344443,
            "unit": "ns/op\t   62729 B/op\t     698 allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344443,
            "unit": "ns/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62729,
            "unit": "B/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46321340 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.94,
            "unit": "ns/op",
            "extra": "46321340 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46321340 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46321340 times\n4 procs"
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
          "id": "a68153c72396d30ae8212e1d89484ef1c19a76c1",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f7b5501b6787f2d01cf6f8a975808bcc5edc31f9",
          "timestamp": "2025-10-20T03:13:01Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a68153c72396d30ae8212e1d89484ef1c19a76c1"
        },
        "date": 1761009325311,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11815,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11815,
            "unit": "ns/op",
            "extra": "101646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101646 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38544,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31299 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38544,
            "unit": "ns/op",
            "extra": "31299 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31299 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31299 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70622,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16987 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70622,
            "unit": "ns/op",
            "extra": "16987 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16987 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16987 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29697,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29697,
            "unit": "ns/op",
            "extra": "40747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40747 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300335,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300335,
            "unit": "ns/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3332 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289081,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289081,
            "unit": "ns/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94892,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12681 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94892,
            "unit": "ns/op",
            "extra": "12681 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12681 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12681 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43156,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27818 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43156,
            "unit": "ns/op",
            "extra": "27818 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27818 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27818 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206917,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6120 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206917,
            "unit": "ns/op",
            "extra": "6120 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6120 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6120 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5753,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "211396 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5753,
            "unit": "ns/op",
            "extra": "211396 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "211396 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211396 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162639,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162639,
            "unit": "ns/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7371 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510220114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510220114A094101Federal",
            "value": 231380104,
            "unit": "1210428822510220114A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 976,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1243412 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 976,
            "unit": "ns/op",
            "extra": "1243412 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1243412 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1243412 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.61,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12113445 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.61,
            "unit": "ns/op",
            "extra": "12113445 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12113445 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12113445 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.18,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19002573 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.18,
            "unit": "ns/op",
            "extra": "19002573 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19002573 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19002573 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.2,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38612473 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.2,
            "unit": "ns/op",
            "extra": "38612473 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38612473 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38612473 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89501836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.41,
            "unit": "ns/op",
            "extra": "89501836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89501836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89501836 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.535,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183575791 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.535,
            "unit": "ns/op",
            "extra": "183575791 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183575791 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183575791 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 293401,
            "unit": "ns/op\t   57056 B/op\t     638 allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 293401,
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
            "value": 293628,
            "unit": "ns/op\t   57068 B/op\t     638 allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293628,
            "unit": "ns/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57068,
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
            "value": 168210,
            "unit": "ns/op\t   57251 B/op\t     641 allocs/op",
            "extra": "7188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168210,
            "unit": "ns/op",
            "extra": "7188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57251,
            "unit": "B/op",
            "extra": "7188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173157,
            "unit": "ns/op\t   57291 B/op\t     641 allocs/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173157,
            "unit": "ns/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57291,
            "unit": "B/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6958 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357530,
            "unit": "ns/op\t   62802 B/op\t     698 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357530,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62802,
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
            "value": 390149,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 390149,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62759,
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
            "value": 348196,
            "unit": "ns/op\t   62741 B/op\t     698 allocs/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 348196,
            "unit": "ns/op",
            "extra": "3591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62741,
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
            "value": 336666,
            "unit": "ns/op\t   62711 B/op\t     698 allocs/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 336666,
            "unit": "ns/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62711,
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
            "value": 25.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46289163 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.88,
            "unit": "ns/op",
            "extra": "46289163 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46289163 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46289163 times\n4 procs"
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
          "id": "1ec7d0bc18e4017816602f36a0f2496a83fecb64",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 29ae0e942a4ce6711b8afe2571cdeb4f0b2a9bae",
          "timestamp": "2025-10-21T03:03:37Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1ec7d0bc18e4017816602f36a0f2496a83fecb64"
        },
        "date": 1761095795290,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11759,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11759,
            "unit": "ns/op",
            "extra": "100696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38305,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31236 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38305,
            "unit": "ns/op",
            "extra": "31236 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31236 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31236 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78418,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16994 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78418,
            "unit": "ns/op",
            "extra": "16994 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16994 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16994 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29006,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41425 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29006,
            "unit": "ns/op",
            "extra": "41425 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41425 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41425 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289197,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289197,
            "unit": "ns/op",
            "extra": "3938 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
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
            "value": 288026,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288026,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94544,
            "unit": "ns/op\t   27908 B/op\t     202 allocs/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94544,
            "unit": "ns/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27908,
            "unit": "B/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43363,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43363,
            "unit": "ns/op",
            "extra": "27825 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
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
            "value": 210343,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5959 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210343,
            "unit": "ns/op",
            "extra": "5959 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
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
            "value": 5634,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207860 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5634,
            "unit": "ns/op",
            "extra": "207860 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207860 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207860 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147485,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7006 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147485,
            "unit": "ns/op",
            "extra": "7006 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7006 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7006 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510230115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510230115A094101Federal",
            "value": 231380104,
            "unit": "1210428822510230115A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 963.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1243140 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 963.3,
            "unit": "ns/op",
            "extra": "1243140 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1243140 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1243140 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.16,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12153739 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.16,
            "unit": "ns/op",
            "extra": "12153739 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12153739 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12153739 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.38,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18884605 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.38,
            "unit": "ns/op",
            "extra": "18884605 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18884605 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18884605 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.16,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40343695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.16,
            "unit": "ns/op",
            "extra": "40343695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40343695 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40343695 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89091118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.43,
            "unit": "ns/op",
            "extra": "89091118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89091118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89091118 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.538,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183648420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.538,
            "unit": "ns/op",
            "extra": "183648420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183648420 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183648420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 308265,
            "unit": "ns/op\t   57052 B/op\t     638 allocs/op",
            "extra": "4261 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 308265,
            "unit": "ns/op",
            "extra": "4261 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57052,
            "unit": "B/op",
            "extra": "4261 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4261 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297749,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297749,
            "unit": "ns/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
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
            "value": 171428,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "7033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171428,
            "unit": "ns/op",
            "extra": "7033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "7033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173396,
            "unit": "ns/op\t   57278 B/op\t     641 allocs/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173396,
            "unit": "ns/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57278,
            "unit": "B/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 356467,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356467,
            "unit": "ns/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3372 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 350244,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 350244,
            "unit": "ns/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62759,
            "unit": "B/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354068,
            "unit": "ns/op\t   62782 B/op\t     698 allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354068,
            "unit": "ns/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62782,
            "unit": "B/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3362 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342073,
            "unit": "ns/op\t   62712 B/op\t     698 allocs/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342073,
            "unit": "ns/op",
            "extra": "4144 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62712,
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
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46664293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46664293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46664293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46664293 times\n4 procs"
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
          "id": "b278a74ccff7dea8ce49eff79dae5dc5b9588292",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for efc77436ca7a4f3a3a8166913f9cc86a1c6266e6",
          "timestamp": "2025-10-22T03:08:34Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b278a74ccff7dea8ce49eff79dae5dc5b9588292"
        },
        "date": 1761182096541,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11830,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101204 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11830,
            "unit": "ns/op",
            "extra": "101204 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101204 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101204 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38391,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38391,
            "unit": "ns/op",
            "extra": "31200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31200 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31200 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70588,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16952 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70588,
            "unit": "ns/op",
            "extra": "16952 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16952 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16952 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29049,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41422 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29049,
            "unit": "ns/op",
            "extra": "41422 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41422 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41422 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 289276,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 289276,
            "unit": "ns/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3913 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290033,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290033,
            "unit": "ns/op",
            "extra": "3967 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
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
            "value": 95033,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12661 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95033,
            "unit": "ns/op",
            "extra": "12661 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12661 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12661 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43120,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27895 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43120,
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
            "value": 204944,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "6078 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204944,
            "unit": "ns/op",
            "extra": "6078 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "6078 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6078 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5653,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "212344 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5653,
            "unit": "ns/op",
            "extra": "212344 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "212344 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212344 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147758,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147758,
            "unit": "ns/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7407 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510240114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510240114A094101Federal",
            "value": 231380104,
            "unit": "1210428822510240114A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1204252 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975.2,
            "unit": "ns/op",
            "extra": "1204252 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1204252 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1204252 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11919876 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.4,
            "unit": "ns/op",
            "extra": "11919876 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11919876 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11919876 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.45,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18862110 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.45,
            "unit": "ns/op",
            "extra": "18862110 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18862110 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18862110 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40190983 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.27,
            "unit": "ns/op",
            "extra": "40190983 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40190983 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40190983 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89528640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "89528640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89528640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89528640 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.529,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183663082 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.529,
            "unit": "ns/op",
            "extra": "183663082 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183663082 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183663082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297646,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297646,
            "unit": "ns/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4215 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 291931,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 291931,
            "unit": "ns/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 166812,
            "unit": "ns/op\t   57263 B/op\t     641 allocs/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 166812,
            "unit": "ns/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57263,
            "unit": "B/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7191 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171587,
            "unit": "ns/op\t   57279 B/op\t     641 allocs/op",
            "extra": "6511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171587,
            "unit": "ns/op",
            "extra": "6511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57279,
            "unit": "B/op",
            "extra": "6511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 355065,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 355065,
            "unit": "ns/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62765,
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
            "value": 348425,
            "unit": "ns/op\t   62782 B/op\t     698 allocs/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 348425,
            "unit": "ns/op",
            "extra": "3614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62782,
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
            "value": 341628,
            "unit": "ns/op\t   62733 B/op\t     698 allocs/op",
            "extra": "3696 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 341628,
            "unit": "ns/op",
            "extra": "3696 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62733,
            "unit": "B/op",
            "extra": "3696 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3696 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340907,
            "unit": "ns/op\t   62755 B/op\t     698 allocs/op",
            "extra": "4078 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340907,
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
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46458306 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46458306 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46458306 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46458306 times\n4 procs"
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
          "id": "08ae2cbfa1a8a6eab4b28e0e754e71a5c748ea6b",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 5f90fb75ffb30425efc7ab3b5cd86a2d8218d236",
          "timestamp": "2025-10-23T03:01:32Z",
          "url": "https://github.com/moov-io/benchmarks/commit/08ae2cbfa1a8a6eab4b28e0e754e71a5c748ea6b"
        },
        "date": 1761268273601,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11805,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100446 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11805,
            "unit": "ns/op",
            "extra": "100446 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100446 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100446 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38205,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38205,
            "unit": "ns/op",
            "extra": "31402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31402 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31402 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71588,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "17059 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71588,
            "unit": "ns/op",
            "extra": "17059 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "17059 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17059 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29167,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "34992 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29167,
            "unit": "ns/op",
            "extra": "34992 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "34992 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "34992 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288201,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288201,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
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
            "value": 287634,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287634,
            "unit": "ns/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94429,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12674 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94429,
            "unit": "ns/op",
            "extra": "12674 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12674 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12674 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43016,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "26947 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43016,
            "unit": "ns/op",
            "extra": "26947 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "26947 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "26947 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207438,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5821 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207438,
            "unit": "ns/op",
            "extra": "5821 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5821 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5821 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5663,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "197059 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5663,
            "unit": "ns/op",
            "extra": "197059 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "197059 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "197059 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147327,
            "unit": "ns/op\t   57940 B/op\t     613 allocs/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147327,
            "unit": "ns/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57940,
            "unit": "B/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7585 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510250110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510250110A094101Federal",
            "value": 231380104,
            "unit": "1210428822510250110A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1243929 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 966.4,
            "unit": "ns/op",
            "extra": "1243929 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1243929 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1243929 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12261337 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.86,
            "unit": "ns/op",
            "extra": "12261337 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12261337 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12261337 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.23,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18926022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.23,
            "unit": "ns/op",
            "extra": "18926022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18926022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18926022 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.13,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39652584 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.13,
            "unit": "ns/op",
            "extra": "39652584 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39652584 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39652584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89263762 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.47,
            "unit": "ns/op",
            "extra": "89263762 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89263762 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89263762 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.539,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183754963 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.539,
            "unit": "ns/op",
            "extra": "183754963 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183754963 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183754963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 291345,
            "unit": "ns/op\t   57039 B/op\t     638 allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 291345,
            "unit": "ns/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57039,
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
            "value": 287839,
            "unit": "ns/op\t   57066 B/op\t     638 allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 287839,
            "unit": "ns/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57066,
            "unit": "B/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 172898,
            "unit": "ns/op\t   57250 B/op\t     641 allocs/op",
            "extra": "7266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 172898,
            "unit": "ns/op",
            "extra": "7266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57250,
            "unit": "B/op",
            "extra": "7266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7266 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171350,
            "unit": "ns/op\t   57275 B/op\t     641 allocs/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171350,
            "unit": "ns/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57275,
            "unit": "B/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6328 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 366442,
            "unit": "ns/op\t   62773 B/op\t     698 allocs/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 366442,
            "unit": "ns/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62773,
            "unit": "B/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3499 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 350578,
            "unit": "ns/op\t   62765 B/op\t     698 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 350578,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62765,
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
            "value": 346096,
            "unit": "ns/op\t   62721 B/op\t     698 allocs/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346096,
            "unit": "ns/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62721,
            "unit": "B/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3716 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 337423,
            "unit": "ns/op\t   62722 B/op\t     698 allocs/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 337423,
            "unit": "ns/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62722,
            "unit": "B/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4141 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46285087 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46285087 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46285087 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46285087 times\n4 procs"
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
          "id": "c49b09f20668913619471abc3ccd7b06f1c739b9",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0e4b334b4d00a8f3d4d37c833a1603cd5e60ca84",
          "timestamp": "2025-10-24T02:57:51Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c49b09f20668913619471abc3ccd7b06f1c739b9"
        },
        "date": 1761354726083,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14084,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "92589 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14084,
            "unit": "ns/op",
            "extra": "92589 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "92589 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "92589 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44516,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "27105 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44516,
            "unit": "ns/op",
            "extra": "27105 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "27105 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "27105 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 81360,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "14725 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 81360,
            "unit": "ns/op",
            "extra": "14725 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "14725 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "14725 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 33217,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "36066 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 33217,
            "unit": "ns/op",
            "extra": "36066 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "36066 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "36066 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 335496,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 335496,
            "unit": "ns/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 329688,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 329688,
            "unit": "ns/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 108514,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "9848 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 108514,
            "unit": "ns/op",
            "extra": "9848 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "9848 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "9848 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49613,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49613,
            "unit": "ns/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 228461,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5191 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 228461,
            "unit": "ns/op",
            "extra": "5191 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5191 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5191 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6128,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "184130 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6128,
            "unit": "ns/op",
            "extra": "184130 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "184130 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "184130 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 167434,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 167434,
            "unit": "ns/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510260111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510260111A094101Federal",
            "value": 231380104,
            "unit": "1210428822510260111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1054,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1054,
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
            "value": 116.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10207376 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 116.5,
            "unit": "ns/op",
            "extra": "10207376 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10207376 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10207376 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.37,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17011086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.37,
            "unit": "ns/op",
            "extra": "17011086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17011086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17011086 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 32.91,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "33828520 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 32.91,
            "unit": "ns/op",
            "extra": "33828520 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "33828520 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "33828520 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "75638287 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.62,
            "unit": "ns/op",
            "extra": "75638287 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "75638287 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "75638287 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 7.051,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "170025852 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 7.051,
            "unit": "ns/op",
            "extra": "170025852 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "170025852 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "170025852 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 331336,
            "unit": "ns/op\t   57049 B/op\t     638 allocs/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 331336,
            "unit": "ns/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 326840,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "3610 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 326840,
            "unit": "ns/op",
            "extra": "3610 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "3610 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3610 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 193838,
            "unit": "ns/op\t   57259 B/op\t     641 allocs/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 193838,
            "unit": "ns/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57259,
            "unit": "B/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 184283,
            "unit": "ns/op\t   57280 B/op\t     641 allocs/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 184283,
            "unit": "ns/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57280,
            "unit": "B/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 401342,
            "unit": "ns/op\t   62761 B/op\t     698 allocs/op",
            "extra": "3085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 401342,
            "unit": "ns/op",
            "extra": "3085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62761,
            "unit": "B/op",
            "extra": "3085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3085 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 394428,
            "unit": "ns/op\t   62817 B/op\t     698 allocs/op",
            "extra": "3032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 394428,
            "unit": "ns/op",
            "extra": "3032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62817,
            "unit": "B/op",
            "extra": "3032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3032 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 399266,
            "unit": "ns/op\t   62950 B/op\t     698 allocs/op",
            "extra": "3052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 399266,
            "unit": "ns/op",
            "extra": "3052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62950,
            "unit": "B/op",
            "extra": "3052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3052 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 382402,
            "unit": "ns/op\t   62362 B/op\t     698 allocs/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 382402,
            "unit": "ns/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62362,
            "unit": "B/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3404 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43151084 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.7,
            "unit": "ns/op",
            "extra": "43151084 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43151084 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43151084 times\n4 procs"
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
          "id": "1caebd7f037779ad34c7fe4daa9309300403b6a6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 87e5104bb1f97c900f414679418f80b618340817",
          "timestamp": "2025-10-25T02:59:50Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1caebd7f037779ad34c7fe4daa9309300403b6a6"
        },
        "date": 1761441566256,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11894,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100396 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11894,
            "unit": "ns/op",
            "extra": "100396 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100396 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100396 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39036,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31206 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39036,
            "unit": "ns/op",
            "extra": "31206 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31206 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31206 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71031,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15129 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71031,
            "unit": "ns/op",
            "extra": "15129 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15129 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15129 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29137,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41090 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29137,
            "unit": "ns/op",
            "extra": "41090 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41090 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41090 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290689,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290689,
            "unit": "ns/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 290975,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 290975,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96283,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12576 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96283,
            "unit": "ns/op",
            "extra": "12576 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12576 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12576 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43255,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43255,
            "unit": "ns/op",
            "extra": "27668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27668 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 210164,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 210164,
            "unit": "ns/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6080 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5781,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207386 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5781,
            "unit": "ns/op",
            "extra": "207386 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207386 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207386 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148574,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148574,
            "unit": "ns/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7690 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510270118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510270118A094101Federal",
            "value": 231380104,
            "unit": "1210428822510270118A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 967.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1240902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 967.9,
            "unit": "ns/op",
            "extra": "1240902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1240902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1240902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.57,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12112675 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.57,
            "unit": "ns/op",
            "extra": "12112675 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12112675 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12112675 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.41,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18756528 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.41,
            "unit": "ns/op",
            "extra": "18756528 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18756528 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18756528 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.98,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40038957 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.98,
            "unit": "ns/op",
            "extra": "40038957 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40038957 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40038957 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89518869 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.66,
            "unit": "ns/op",
            "extra": "89518869 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89518869 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89518869 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.536,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183757708 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.536,
            "unit": "ns/op",
            "extra": "183757708 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183757708 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183757708 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 291728,
            "unit": "ns/op\t   57046 B/op\t     638 allocs/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 291728,
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
            "value": 300949,
            "unit": "ns/op\t   57070 B/op\t     638 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300949,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57070,
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
            "value": 170863,
            "unit": "ns/op\t   57260 B/op\t     641 allocs/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170863,
            "unit": "ns/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57260,
            "unit": "B/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172003,
            "unit": "ns/op\t   57278 B/op\t     641 allocs/op",
            "extra": "6505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172003,
            "unit": "ns/op",
            "extra": "6505 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57278,
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
            "value": 356608,
            "unit": "ns/op\t   62808 B/op\t     698 allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 356608,
            "unit": "ns/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62808,
            "unit": "B/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3337 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 352348,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 352348,
            "unit": "ns/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3601 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 345936,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 345936,
            "unit": "ns/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340402,
            "unit": "ns/op\t   62714 B/op\t     698 allocs/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340402,
            "unit": "ns/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62714,
            "unit": "B/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4132 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46498850 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "46498850 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46498850 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46498850 times\n4 procs"
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
          "id": "891f8a326da02870577ef3d986d9bfbcd0e07629",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4802add30451b900036e9d8e656c735772199b44",
          "timestamp": "2025-10-26T03:07:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/891f8a326da02870577ef3d986d9bfbcd0e07629"
        },
        "date": 1761528050561,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11799,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "99744 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11799,
            "unit": "ns/op",
            "extra": "99744 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "99744 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "99744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39139,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "30572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39139,
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
            "value": 73991,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "15950 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73991,
            "unit": "ns/op",
            "extra": "15950 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "15950 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "15950 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31355,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31355,
            "unit": "ns/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291839,
            "unit": "ns/op\t   57140 B/op\t     744 allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291839,
            "unit": "ns/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57140,
            "unit": "B/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3879 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292300,
            "unit": "ns/op\t   57136 B/op\t     744 allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292300,
            "unit": "ns/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57136,
            "unit": "B/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4068 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95216,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12589 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95216,
            "unit": "ns/op",
            "extra": "12589 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12589 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12589 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43425,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43425,
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
            "value": 207101,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5678 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207101,
            "unit": "ns/op",
            "extra": "5678 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5678 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5678 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6035,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6035,
            "unit": "ns/op",
            "extra": "205926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205926 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149710,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "7236 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149710,
            "unit": "ns/op",
            "extra": "7236 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "7236 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7236 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510280120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510280120A094101Federal",
            "value": 231380104,
            "unit": "1210428822510280120A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 992.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1202415 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 992.3,
            "unit": "ns/op",
            "extra": "1202415 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1202415 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1202415 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.85,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12146532 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.85,
            "unit": "ns/op",
            "extra": "12146532 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12146532 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12146532 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.64,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18885763 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.64,
            "unit": "ns/op",
            "extra": "18885763 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18885763 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18885763 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.43,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39636240 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.43,
            "unit": "ns/op",
            "extra": "39636240 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39636240 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39636240 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89519068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "89519068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89519068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89519068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.569,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "182189805 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.569,
            "unit": "ns/op",
            "extra": "182189805 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "182189805 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "182189805 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294938,
            "unit": "ns/op\t   57044 B/op\t     638 allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294938,
            "unit": "ns/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57044,
            "unit": "B/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 295458,
            "unit": "ns/op\t   57062 B/op\t     638 allocs/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295458,
            "unit": "ns/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3835 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 182108,
            "unit": "ns/op\t   57261 B/op\t     641 allocs/op",
            "extra": "6792 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 182108,
            "unit": "ns/op",
            "extra": "6792 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57261,
            "unit": "B/op",
            "extra": "6792 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6792 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171679,
            "unit": "ns/op\t   57275 B/op\t     641 allocs/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171679,
            "unit": "ns/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57275,
            "unit": "B/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368757,
            "unit": "ns/op\t   62768 B/op\t     698 allocs/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368757,
            "unit": "ns/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62768,
            "unit": "B/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 360025,
            "unit": "ns/op\t   62760 B/op\t     698 allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360025,
            "unit": "ns/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62760,
            "unit": "B/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 357558,
            "unit": "ns/op\t   62787 B/op\t     698 allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357558,
            "unit": "ns/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62787,
            "unit": "B/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344456,
            "unit": "ns/op\t   62718 B/op\t     698 allocs/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344456,
            "unit": "ns/op",
            "extra": "4120 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62718,
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
            "value": 25.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46535605 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.84,
            "unit": "ns/op",
            "extra": "46535605 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46535605 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46535605 times\n4 procs"
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
          "id": "5ff71fc153358cdc764309f306f4501404adabed",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a1d2e04a94c95b612aa167f3d65594a38a28de64",
          "timestamp": "2025-10-27T03:17:25Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5ff71fc153358cdc764309f306f4501404adabed"
        },
        "date": 1761614020290,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11918,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100698 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11918,
            "unit": "ns/op",
            "extra": "100698 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100698 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100698 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38496,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31041 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38496,
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
            "value": 70613,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "16930 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70613,
            "unit": "ns/op",
            "extra": "16930 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "16930 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16930 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30836,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40834 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30836,
            "unit": "ns/op",
            "extra": "40834 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40834 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40834 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290162,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290162,
            "unit": "ns/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289133,
            "unit": "ns/op\t   57137 B/op\t     744 allocs/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289133,
            "unit": "ns/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57137,
            "unit": "B/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99826,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99826,
            "unit": "ns/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12618 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43589,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27364 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43589,
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
            "value": 204764,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5995 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204764,
            "unit": "ns/op",
            "extra": "5995 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5995 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5995 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5687,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "205387 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5687,
            "unit": "ns/op",
            "extra": "205387 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "205387 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "205387 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147888,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7408 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147888,
            "unit": "ns/op",
            "extra": "7408 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7408 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7408 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510290113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510290113A094101Federal",
            "value": 231380104,
            "unit": "1210428822510290113A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1214100 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 973.4,
            "unit": "ns/op",
            "extra": "1214100 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1214100 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1214100 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.69,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12048517 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.69,
            "unit": "ns/op",
            "extra": "12048517 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12048517 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12048517 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.39,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18633662 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.39,
            "unit": "ns/op",
            "extra": "18633662 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18633662 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18633662 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39481974 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.96,
            "unit": "ns/op",
            "extra": "39481974 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39481974 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39481974 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89707076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.45,
            "unit": "ns/op",
            "extra": "89707076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89707076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89707076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.539,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183688254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.539,
            "unit": "ns/op",
            "extra": "183688254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183688254 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183688254 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295049,
            "unit": "ns/op\t   57045 B/op\t     638 allocs/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295049,
            "unit": "ns/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57045,
            "unit": "B/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 293456,
            "unit": "ns/op\t   57065 B/op\t     638 allocs/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 293456,
            "unit": "ns/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57065,
            "unit": "B/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168709,
            "unit": "ns/op\t   57245 B/op\t     641 allocs/op",
            "extra": "6448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168709,
            "unit": "ns/op",
            "extra": "6448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57245,
            "unit": "B/op",
            "extra": "6448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6448 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169533,
            "unit": "ns/op\t   57274 B/op\t     641 allocs/op",
            "extra": "6631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169533,
            "unit": "ns/op",
            "extra": "6631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57274,
            "unit": "B/op",
            "extra": "6631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6631 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364657,
            "unit": "ns/op\t   62798 B/op\t     698 allocs/op",
            "extra": "3343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364657,
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
            "value": 357599,
            "unit": "ns/op\t   62759 B/op\t     698 allocs/op",
            "extra": "3451 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357599,
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
            "value": 357991,
            "unit": "ns/op\t   62739 B/op\t     698 allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 357991,
            "unit": "ns/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62739,
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
            "value": 345152,
            "unit": "ns/op\t   62722 B/op\t     698 allocs/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345152,
            "unit": "ns/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62722,
            "unit": "B/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4140 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46476992 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "46476992 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46476992 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46476992 times\n4 procs"
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
          "id": "0b7799fc8122ef5b8bcd77cdd840012c33c40117",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for cb5fa28206f5f5bcf35a633a979f84aa84d306d7",
          "timestamp": "2025-10-28T03:05:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0b7799fc8122ef5b8bcd77cdd840012c33c40117"
        },
        "date": 1761700709044,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11938,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "100210 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11938,
            "unit": "ns/op",
            "extra": "100210 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "100210 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38433,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "26970 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38433,
            "unit": "ns/op",
            "extra": "26970 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "26970 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "26970 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70666,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16978 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70666,
            "unit": "ns/op",
            "extra": "16978 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16978 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16978 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30750,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41469 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30750,
            "unit": "ns/op",
            "extra": "41469 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41469 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41469 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291000,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291000,
            "unit": "ns/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4027 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 289243,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 289243,
            "unit": "ns/op",
            "extra": "4023 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
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
            "value": 95211,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95211,
            "unit": "ns/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12627 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43291,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27616 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43291,
            "unit": "ns/op",
            "extra": "27616 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
            "unit": "B/op",
            "extra": "27616 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27616 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206345,
            "unit": "ns/op\t   53864 B/op\t    2040 allocs/op",
            "extra": "6002 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206345,
            "unit": "ns/op",
            "extra": "6002 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53864,
            "unit": "B/op",
            "extra": "6002 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6002 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6048,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "207183 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6048,
            "unit": "ns/op",
            "extra": "207183 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "207183 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "207183 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147921,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147921,
            "unit": "ns/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7210 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510300117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510300117A094101Federal",
            "value": 231380104,
            "unit": "1210428822510300117A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 999.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1235058 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 999.6,
            "unit": "ns/op",
            "extra": "1235058 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1235058 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1235058 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.15,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11935060 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.15,
            "unit": "ns/op",
            "extra": "11935060 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11935060 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11935060 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.62,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18725866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.62,
            "unit": "ns/op",
            "extra": "18725866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18725866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18725866 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40283083 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.71,
            "unit": "ns/op",
            "extra": "40283083 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40283083 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40283083 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89546251 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.39,
            "unit": "ns/op",
            "extra": "89546251 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89546251 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89546251 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.541,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183674098 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.541,
            "unit": "ns/op",
            "extra": "183674098 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183674098 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183674098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 292825,
            "unit": "ns/op\t   57061 B/op\t     638 allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 292825,
            "unit": "ns/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57061,
            "unit": "B/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292822,
            "unit": "ns/op\t   57067 B/op\t     638 allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292822,
            "unit": "ns/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57067,
            "unit": "B/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 191067,
            "unit": "ns/op\t   57262 B/op\t     641 allocs/op",
            "extra": "7176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 191067,
            "unit": "ns/op",
            "extra": "7176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57262,
            "unit": "B/op",
            "extra": "7176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169336,
            "unit": "ns/op\t   57302 B/op\t     641 allocs/op",
            "extra": "6775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169336,
            "unit": "ns/op",
            "extra": "6775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57302,
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
            "value": 353452,
            "unit": "ns/op\t   62781 B/op\t     698 allocs/op",
            "extra": "3516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 353452,
            "unit": "ns/op",
            "extra": "3516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62781,
            "unit": "B/op",
            "extra": "3516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 347999,
            "unit": "ns/op\t   62812 B/op\t     698 allocs/op",
            "extra": "3691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 347999,
            "unit": "ns/op",
            "extra": "3691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62812,
            "unit": "B/op",
            "extra": "3691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3691 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 346983,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 346983,
            "unit": "ns/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62762,
            "unit": "B/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3459 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 340301,
            "unit": "ns/op\t   62718 B/op\t     698 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 340301,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62718,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46483882 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "46483882 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46483882 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46483882 times\n4 procs"
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
          "id": "a4e2fab002dfc2ccc1a9155a34837ab5837c112e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 027b8314e5e27852766a0810a7785a640c5cf69c",
          "timestamp": "2025-10-29T03:13:10Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a4e2fab002dfc2ccc1a9155a34837ab5837c112e"
        },
        "date": 1761787082107,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11801,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101178 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11801,
            "unit": "ns/op",
            "extra": "101178 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101178 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101178 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38254,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38254,
            "unit": "ns/op",
            "extra": "31256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31256 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31256 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73053,
            "unit": "ns/op\t   25517 B/op\t     137 allocs/op",
            "extra": "17160 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73053,
            "unit": "ns/op",
            "extra": "17160 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25517,
            "unit": "B/op",
            "extra": "17160 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "17160 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28794,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "41414 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28794,
            "unit": "ns/op",
            "extra": "41414 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "41414 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "41414 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294376,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294376,
            "unit": "ns/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57139,
            "unit": "B/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287273,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "3976 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287273,
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
            "value": 93750,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12696 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93750,
            "unit": "ns/op",
            "extra": "12696 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12696 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42747,
            "unit": "ns/op\t   31794 B/op\t     130 allocs/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42747,
            "unit": "ns/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31794,
            "unit": "B/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 130,
            "unit": "allocs/op",
            "extra": "27883 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204650,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5750 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204650,
            "unit": "ns/op",
            "extra": "5750 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5750 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5750 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5621,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "209557 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5621,
            "unit": "ns/op",
            "extra": "209557 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "209557 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209557 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156347,
            "unit": "ns/op\t   57941 B/op\t     613 allocs/op",
            "extra": "7556 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156347,
            "unit": "ns/op",
            "extra": "7556 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57941,
            "unit": "B/op",
            "extra": "7556 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "7556 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822510310117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822510310117A094101Federal",
            "value": 231380104,
            "unit": "1210428822510310117A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1017,
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
            "value": 97.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12181693 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.5,
            "unit": "ns/op",
            "extra": "12181693 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12181693 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12181693 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 64.95,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18022333 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 64.95,
            "unit": "ns/op",
            "extra": "18022333 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18022333 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18022333 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.09,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40077343 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.09,
            "unit": "ns/op",
            "extra": "40077343 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40077343 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40077343 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90542878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.44,
            "unit": "ns/op",
            "extra": "90542878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90542878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90542878 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.514,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183636498 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.514,
            "unit": "ns/op",
            "extra": "183636498 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183636498 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183636498 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 291101,
            "unit": "ns/op\t   57047 B/op\t     638 allocs/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 291101,
            "unit": "ns/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4166 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 292141,
            "unit": "ns/op\t   57063 B/op\t     638 allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 292141,
            "unit": "ns/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57063,
            "unit": "B/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4104 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169738,
            "unit": "ns/op\t   57259 B/op\t     641 allocs/op",
            "extra": "7035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169738,
            "unit": "ns/op",
            "extra": "7035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57259,
            "unit": "B/op",
            "extra": "7035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "7035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 187891,
            "unit": "ns/op\t   57275 B/op\t     641 allocs/op",
            "extra": "6318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 187891,
            "unit": "ns/op",
            "extra": "6318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57275,
            "unit": "B/op",
            "extra": "6318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6318 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361343,
            "unit": "ns/op\t   62794 B/op\t     698 allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361343,
            "unit": "ns/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62794,
            "unit": "B/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354788,
            "unit": "ns/op\t   62779 B/op\t     698 allocs/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354788,
            "unit": "ns/op",
            "extra": "3540 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62779,
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
            "value": 344578,
            "unit": "ns/op\t   62772 B/op\t     698 allocs/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 344578,
            "unit": "ns/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62772,
            "unit": "B/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 335220,
            "unit": "ns/op\t   62679 B/op\t     698 allocs/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 335220,
            "unit": "ns/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62679,
            "unit": "B/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46353991 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.13,
            "unit": "ns/op",
            "extra": "46353991 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46353991 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46353991 times\n4 procs"
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
          "id": "3be3193a6d8ba458d64bd2f01423754815e0c91e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c3e6f4182bc607054e740a932f2bf15bcc99cc05",
          "timestamp": "2025-10-30T03:08:54Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3be3193a6d8ba458d64bd2f01423754815e0c91e"
        },
        "date": 1761873337660,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11810,
            "unit": "ns/op\t    9818 B/op\t      99 allocs/op",
            "extra": "101860 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11810,
            "unit": "ns/op",
            "extra": "101860 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9818,
            "unit": "B/op",
            "extra": "101860 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101860 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38402,
            "unit": "ns/op\t   21620 B/op\t      62 allocs/op",
            "extra": "31161 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38402,
            "unit": "ns/op",
            "extra": "31161 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21620,
            "unit": "B/op",
            "extra": "31161 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 62,
            "unit": "allocs/op",
            "extra": "31161 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70951,
            "unit": "ns/op\t   25518 B/op\t     137 allocs/op",
            "extra": "16900 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70951,
            "unit": "ns/op",
            "extra": "16900 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25518,
            "unit": "B/op",
            "extra": "16900 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "16900 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30126,
            "unit": "ns/op\t   21028 B/op\t      55 allocs/op",
            "extra": "40638 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30126,
            "unit": "ns/op",
            "extra": "40638 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21028,
            "unit": "B/op",
            "extra": "40638 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 55,
            "unit": "allocs/op",
            "extra": "40638 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 288645,
            "unit": "ns/op\t   57138 B/op\t     744 allocs/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 288645,
            "unit": "ns/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 744,
            "unit": "allocs/op",
            "extra": "4004 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 288307,
            "unit": "ns/op\t   57139 B/op\t     744 allocs/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 288307,
            "unit": "ns/op",
            "extra": "4011 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 57139,
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
            "value": 93971,
            "unit": "ns/op\t   27909 B/op\t     202 allocs/op",
            "extra": "12739 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 93971,
            "unit": "ns/op",
            "extra": "12739 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27909,
            "unit": "B/op",
            "extra": "12739 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "12739 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43337,
            "unit": "ns/op\t   31795 B/op\t     130 allocs/op",
            "extra": "27754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43337,
            "unit": "ns/op",
            "extra": "27754 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31795,
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
            "value": 203888,
            "unit": "ns/op\t   53863 B/op\t    2040 allocs/op",
            "extra": "5604 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203888,
            "unit": "ns/op",
            "extra": "5604 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53863,
            "unit": "B/op",
            "extra": "5604 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5604 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6005,
            "unit": "ns/op\t    6273 B/op\t      25 allocs/op",
            "extra": "211731 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6005,
            "unit": "ns/op",
            "extra": "211731 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6273,
            "unit": "B/op",
            "extra": "211731 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211731 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147958,
            "unit": "ns/op\t   57942 B/op\t     613 allocs/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147958,
            "unit": "ns/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57942,
            "unit": "B/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 613,
            "unit": "allocs/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511010114A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511010114A094101Federal",
            "value": 231380104,
            "unit": "1210428822511010114A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 967.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1216588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 967.7,
            "unit": "ns/op",
            "extra": "1216588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1216588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1216588 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.18,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12290524 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.18,
            "unit": "ns/op",
            "extra": "12290524 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12290524 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12290524 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.34,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18786258 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.34,
            "unit": "ns/op",
            "extra": "18786258 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18786258 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18786258 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.08,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39448941 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.08,
            "unit": "ns/op",
            "extra": "39448941 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39448941 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39448941 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88657072 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.41,
            "unit": "ns/op",
            "extra": "88657072 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88657072 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88657072 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.532,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183521917 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.532,
            "unit": "ns/op",
            "extra": "183521917 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183521917 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183521917 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 295085,
            "unit": "ns/op\t   57048 B/op\t     638 allocs/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 295085,
            "unit": "ns/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57048,
            "unit": "B/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 294634,
            "unit": "ns/op\t   57060 B/op\t     638 allocs/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 294634,
            "unit": "ns/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57060,
            "unit": "B/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "4075 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 196736,
            "unit": "ns/op\t   57264 B/op\t     641 allocs/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 196736,
            "unit": "ns/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57264,
            "unit": "B/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172638,
            "unit": "ns/op\t   57299 B/op\t     641 allocs/op",
            "extra": "6740 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172638,
            "unit": "ns/op",
            "extra": "6740 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57299,
            "unit": "B/op",
            "extra": "6740 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 641,
            "unit": "allocs/op",
            "extra": "6740 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362957,
            "unit": "ns/op\t   62804 B/op\t     698 allocs/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362957,
            "unit": "ns/op",
            "extra": "3457 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62804,
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
            "value": 356142,
            "unit": "ns/op\t   62771 B/op\t     698 allocs/op",
            "extra": "3624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356142,
            "unit": "ns/op",
            "extra": "3624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62771,
            "unit": "B/op",
            "extra": "3624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "3624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355214,
            "unit": "ns/op\t   62762 B/op\t     698 allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355214,
            "unit": "ns/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62762,
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
            "value": 342654,
            "unit": "ns/op\t   62715 B/op\t     698 allocs/op",
            "extra": "4154 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342654,
            "unit": "ns/op",
            "extra": "4154 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62715,
            "unit": "B/op",
            "extra": "4154 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 698,
            "unit": "allocs/op",
            "extra": "4154 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46557338 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.14,
            "unit": "ns/op",
            "extra": "46557338 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46557338 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46557338 times\n4 procs"
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
          "id": "1cf46dd2b10951d522794f3e962c51a9b8f51e96",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for c68a7870887e605cdc16a0a4e32b32674670501b",
          "timestamp": "2025-10-31T03:08:32Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1cf46dd2b10951d522794f3e962c51a9b8f51e96"
        },
        "date": 1761959996646,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13541,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13541,
            "unit": "ns/op",
            "extra": "86696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 37281,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "32560 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 37281,
            "unit": "ns/op",
            "extra": "32560 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "32560 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32560 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 66284,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "15326 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 66284,
            "unit": "ns/op",
            "extra": "15326 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "15326 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15326 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 26760,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "44984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 26760,
            "unit": "ns/op",
            "extra": "44984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "44984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "44984 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 273265,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 273265,
            "unit": "ns/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4315 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 270077,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 270077,
            "unit": "ns/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 90044,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "13383 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 90044,
            "unit": "ns/op",
            "extra": "13383 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "13383 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "13383 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49280,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24294 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49280,
            "unit": "ns/op",
            "extra": "24294 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24294 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199246,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199246,
            "unit": "ns/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7865,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146032 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7865,
            "unit": "ns/op",
            "extra": "146032 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146032 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146032 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149706,
            "unit": "ns/op\t   60923 B/op\t     717 allocs/op",
            "extra": "7821 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149706,
            "unit": "ns/op",
            "extra": "7821 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60923,
            "unit": "B/op",
            "extra": "7821 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7821 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511020119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511020119A094101Federal",
            "value": 231380104,
            "unit": "1210428822511020119A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 994.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1205446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 994.2,
            "unit": "ns/op",
            "extra": "1205446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1205446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1205446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 89.11,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13506294 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 89.11,
            "unit": "ns/op",
            "extra": "13506294 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13506294 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13506294 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 57.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21136383 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 57.92,
            "unit": "ns/op",
            "extra": "21136383 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21136383 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21136383 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.57,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "45986952 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.57,
            "unit": "ns/op",
            "extra": "45986952 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "45986952 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "45986952 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "97423496 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.6,
            "unit": "ns/op",
            "extra": "97423496 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "97423496 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "97423496 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230880301 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.198,
            "unit": "ns/op",
            "extra": "230880301 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230880301 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230880301 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 270974,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 270974,
            "unit": "ns/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
            "unit": "B/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 271819,
            "unit": "ns/op\t   57900 B/op\t     666 allocs/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 271819,
            "unit": "ns/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57900,
            "unit": "B/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181871,
            "unit": "ns/op\t   58079 B/op\t     669 allocs/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181871,
            "unit": "ns/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58079,
            "unit": "B/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6856 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 183666,
            "unit": "ns/op\t   58098 B/op\t     669 allocs/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 183666,
            "unit": "ns/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58098,
            "unit": "B/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 327804,
            "unit": "ns/op\t   63588 B/op\t     726 allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 327804,
            "unit": "ns/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63588,
            "unit": "B/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3585 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 326903,
            "unit": "ns/op\t   63608 B/op\t     726 allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 326903,
            "unit": "ns/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63608,
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
            "value": 321938,
            "unit": "ns/op\t   63574 B/op\t     726 allocs/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 321938,
            "unit": "ns/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63574,
            "unit": "B/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3667 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 319715,
            "unit": "ns/op\t   63448 B/op\t     727 allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 319715,
            "unit": "ns/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63448,
            "unit": "B/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4402 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53208682 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.56,
            "unit": "ns/op",
            "extra": "53208682 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53208682 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53208682 times\n4 procs"
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
          "id": "e2abdcf77070cff45cc30d4310bcb92a88de693d",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 21ad11e3dce9205bcef2052ddd62aa32ca775174",
          "timestamp": "2025-11-01T03:09:18Z",
          "url": "https://github.com/moov-io/benchmarks/commit/e2abdcf77070cff45cc30d4310bcb92a88de693d"
        },
        "date": 1762046437018,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13512,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88596 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13512,
            "unit": "ns/op",
            "extra": "88596 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88596 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43806,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28449 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43806,
            "unit": "ns/op",
            "extra": "28449 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28449 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28449 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74810,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15151 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74810,
            "unit": "ns/op",
            "extra": "15151 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15151 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15151 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31107,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31107,
            "unit": "ns/op",
            "extra": "38742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38742 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 297240,
            "unit": "ns/op\t   58802 B/op\t     800 allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 297240,
            "unit": "ns/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58802,
            "unit": "B/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3855 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295710,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295710,
            "unit": "ns/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99258,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "12058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99258,
            "unit": "ns/op",
            "extra": "12058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "12058 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12058 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50075,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50075,
            "unit": "ns/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202385,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "5722 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202385,
            "unit": "ns/op",
            "extra": "5722 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "5722 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5722 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7960,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "147885 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7960,
            "unit": "ns/op",
            "extra": "147885 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "147885 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147885 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153637,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153637,
            "unit": "ns/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7094 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511030120A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511030120A094101Federal",
            "value": 231380104,
            "unit": "1210428822511030120A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1011,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1011,
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
            "value": 100.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12047180 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "12047180 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12047180 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12047180 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 64.83,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18405745 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 64.83,
            "unit": "ns/op",
            "extra": "18405745 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18405745 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18405745 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.17,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39472504 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.17,
            "unit": "ns/op",
            "extra": "39472504 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39472504 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39472504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87780757 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "87780757 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87780757 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87780757 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.525,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183907689 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.525,
            "unit": "ns/op",
            "extra": "183907689 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183907689 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183907689 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302571,
            "unit": "ns/op\t   57881 B/op\t     666 allocs/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302571,
            "unit": "ns/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57881,
            "unit": "B/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296913,
            "unit": "ns/op\t   57895 B/op\t     666 allocs/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296913,
            "unit": "ns/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57895,
            "unit": "B/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 179212,
            "unit": "ns/op\t   58093 B/op\t     669 allocs/op",
            "extra": "7160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 179212,
            "unit": "ns/op",
            "extra": "7160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58093,
            "unit": "B/op",
            "extra": "7160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "7160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172312,
            "unit": "ns/op\t   58106 B/op\t     669 allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172312,
            "unit": "ns/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58106,
            "unit": "B/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362153,
            "unit": "ns/op\t   63573 B/op\t     726 allocs/op",
            "extra": "3302 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362153,
            "unit": "ns/op",
            "extra": "3302 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63573,
            "unit": "B/op",
            "extra": "3302 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3302 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 356690,
            "unit": "ns/op\t   63594 B/op\t     726 allocs/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 356690,
            "unit": "ns/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63594,
            "unit": "B/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359451,
            "unit": "ns/op\t   63613 B/op\t     726 allocs/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359451,
            "unit": "ns/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63613,
            "unit": "B/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3366 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 349806,
            "unit": "ns/op\t   63528 B/op\t     727 allocs/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349806,
            "unit": "ns/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63528,
            "unit": "B/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4222 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45476106 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.47,
            "unit": "ns/op",
            "extra": "45476106 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45476106 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45476106 times\n4 procs"
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
          "id": "74982104f3f7059ac81348425388794642f515df",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for aaf43d32ad3673b74e332a7d722c811f73c69f16",
          "timestamp": "2025-11-02T03:13:17Z",
          "url": "https://github.com/moov-io/benchmarks/commit/74982104f3f7059ac81348425388794642f515df"
        },
        "date": 1762132750912,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13022,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "91932 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13022,
            "unit": "ns/op",
            "extra": "91932 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "91932 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "91932 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 35829,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "33103 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 35829,
            "unit": "ns/op",
            "extra": "33103 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "33103 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "33103 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 66237,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "18349 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 66237,
            "unit": "ns/op",
            "extra": "18349 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "18349 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "18349 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 25881,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "46178 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 25881,
            "unit": "ns/op",
            "extra": "46178 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "46178 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "46178 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 265435,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 265435,
            "unit": "ns/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4478 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 266978,
            "unit": "ns/op\t   58806 B/op\t     800 allocs/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 266978,
            "unit": "ns/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58806,
            "unit": "B/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4360 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 87123,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "13098 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 87123,
            "unit": "ns/op",
            "extra": "13098 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "13098 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "13098 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 46159,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "25876 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 46159,
            "unit": "ns/op",
            "extra": "25876 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "25876 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "25876 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 191286,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 191286,
            "unit": "ns/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6474 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7670,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "154680 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7670,
            "unit": "ns/op",
            "extra": "154680 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "154680 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "154680 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 142548,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 142548,
            "unit": "ns/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511040118A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511040118A094101Federal",
            "value": 231380104,
            "unit": "1210428822511040118A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 985.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1219502 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 985.1,
            "unit": "ns/op",
            "extra": "1219502 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1219502 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1219502 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 86.87,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13655672 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 86.87,
            "unit": "ns/op",
            "extra": "13655672 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13655672 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13655672 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 55.21,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21624685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 55.21,
            "unit": "ns/op",
            "extra": "21624685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21624685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21624685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.21,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "46034737 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.21,
            "unit": "ns/op",
            "extra": "46034737 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "46034737 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "46034737 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 12.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "92055064 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 12.64,
            "unit": "ns/op",
            "extra": "92055064 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "92055064 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "92055064 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.245,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "230734395 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.245,
            "unit": "ns/op",
            "extra": "230734395 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "230734395 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "230734395 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 276904,
            "unit": "ns/op\t   57886 B/op\t     666 allocs/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 276904,
            "unit": "ns/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57886,
            "unit": "B/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 271843,
            "unit": "ns/op\t   57895 B/op\t     666 allocs/op",
            "extra": "4420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 271843,
            "unit": "ns/op",
            "extra": "4420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57895,
            "unit": "B/op",
            "extra": "4420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4420 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 181099,
            "unit": "ns/op\t   58070 B/op\t     669 allocs/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 181099,
            "unit": "ns/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58070,
            "unit": "B/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178293,
            "unit": "ns/op\t   58101 B/op\t     669 allocs/op",
            "extra": "5894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178293,
            "unit": "ns/op",
            "extra": "5894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58101,
            "unit": "B/op",
            "extra": "5894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "5894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 332640,
            "unit": "ns/op\t   63592 B/op\t     726 allocs/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 332640,
            "unit": "ns/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63592,
            "unit": "B/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3668 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 325382,
            "unit": "ns/op\t   63591 B/op\t     726 allocs/op",
            "extra": "3560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 325382,
            "unit": "ns/op",
            "extra": "3560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63591,
            "unit": "B/op",
            "extra": "3560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3560 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 324044,
            "unit": "ns/op\t   63616 B/op\t     726 allocs/op",
            "extra": "3602 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 324044,
            "unit": "ns/op",
            "extra": "3602 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63616,
            "unit": "B/op",
            "extra": "3602 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3602 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 317899,
            "unit": "ns/op\t   63562 B/op\t     727 allocs/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 317899,
            "unit": "ns/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63562,
            "unit": "B/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53071977 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.59,
            "unit": "ns/op",
            "extra": "53071977 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53071977 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53071977 times\n4 procs"
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
          "id": "a4428104d431040c314427a3f1825d868e8f0ff0",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for dcdc038bb9313d7285d48b17f5f4197b144d796b",
          "timestamp": "2025-11-03T03:15:07Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a4428104d431040c314427a3f1825d868e8f0ff0"
        },
        "date": 1762218963855,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13712,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88233 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13712,
            "unit": "ns/op",
            "extra": "88233 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88233 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88233 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42140,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "29084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42140,
            "unit": "ns/op",
            "extra": "29084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "29084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "29084 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73791,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16304 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73791,
            "unit": "ns/op",
            "extra": "16304 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16304 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16304 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30722,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38620 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30722,
            "unit": "ns/op",
            "extra": "38620 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38620 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38620 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 307166,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 307166,
            "unit": "ns/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3896 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 299689,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 299689,
            "unit": "ns/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3966 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 98074,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12267 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 98074,
            "unit": "ns/op",
            "extra": "12267 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12267 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12267 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48668,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24379 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48668,
            "unit": "ns/op",
            "extra": "24379 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24379 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24379 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202325,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202325,
            "unit": "ns/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5978 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7980,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "148310 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7980,
            "unit": "ns/op",
            "extra": "148310 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "148310 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148310 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 168609,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 168609,
            "unit": "ns/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7130 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511050115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511050115A094101Federal",
            "value": 231380104,
            "unit": "1210428822511050115A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 972.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1225531 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 972.2,
            "unit": "ns/op",
            "extra": "1225531 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1225531 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1225531 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 98.75,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12060424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 98.75,
            "unit": "ns/op",
            "extra": "12060424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12060424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12060424 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 65.82,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18076141 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 65.82,
            "unit": "ns/op",
            "extra": "18076141 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18076141 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18076141 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.86,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40051171 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.86,
            "unit": "ns/op",
            "extra": "40051171 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40051171 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40051171 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87454383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.77,
            "unit": "ns/op",
            "extra": "87454383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87454383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87454383 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.589,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183658340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.589,
            "unit": "ns/op",
            "extra": "183658340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183658340 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183658340 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310396,
            "unit": "ns/op\t   57892 B/op\t     666 allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310396,
            "unit": "ns/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57892,
            "unit": "B/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4186 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302437,
            "unit": "ns/op\t   57895 B/op\t     666 allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302437,
            "unit": "ns/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57895,
            "unit": "B/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 178153,
            "unit": "ns/op\t   58077 B/op\t     669 allocs/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 178153,
            "unit": "ns/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58077,
            "unit": "B/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171855,
            "unit": "ns/op\t   58104 B/op\t     669 allocs/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171855,
            "unit": "ns/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58104,
            "unit": "B/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6416 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365541,
            "unit": "ns/op\t   63624 B/op\t     726 allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365541,
            "unit": "ns/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63624,
            "unit": "B/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 361628,
            "unit": "ns/op\t   63610 B/op\t     726 allocs/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361628,
            "unit": "ns/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63610,
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
            "value": 358405,
            "unit": "ns/op\t   63571 B/op\t     726 allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358405,
            "unit": "ns/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63571,
            "unit": "B/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348301,
            "unit": "ns/op\t   63665 B/op\t     727 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348301,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63665,
            "unit": "B/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45022509 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.51,
            "unit": "ns/op",
            "extra": "45022509 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45022509 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45022509 times\n4 procs"
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
          "id": "7a97d0120badd4d2a02d8a9d0c47f970a64ad4ea",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 1ffff58acdd12688b018ca7b50ac5899ad85af4b",
          "timestamp": "2025-11-04T03:07:46Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7a97d0120badd4d2a02d8a9d0c47f970a64ad4ea"
        },
        "date": 1762305470230,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13511,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86676 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13511,
            "unit": "ns/op",
            "extra": "86676 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86676 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86676 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42001,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28413 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42001,
            "unit": "ns/op",
            "extra": "28413 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28413 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28413 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74743,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15576 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74743,
            "unit": "ns/op",
            "extra": "15576 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15576 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15576 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31893,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "37602 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31893,
            "unit": "ns/op",
            "extra": "37602 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "37602 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "37602 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 300997,
            "unit": "ns/op\t   58805 B/op\t     800 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 300997,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58805,
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
            "value": 302564,
            "unit": "ns/op\t   58807 B/op\t     800 allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 302564,
            "unit": "ns/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58807,
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
            "value": 102857,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102857,
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
            "value": 49237,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24220 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49237,
            "unit": "ns/op",
            "extra": "24220 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24220 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24220 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 201628,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "6168 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 201628,
            "unit": "ns/op",
            "extra": "6168 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "6168 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6168 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7955,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144332 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7955,
            "unit": "ns/op",
            "extra": "144332 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144332 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144332 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154376,
            "unit": "ns/op\t   60921 B/op\t     717 allocs/op",
            "extra": "6981 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154376,
            "unit": "ns/op",
            "extra": "6981 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60921,
            "unit": "B/op",
            "extra": "6981 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "6981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511060117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511060117A094101Federal",
            "value": 231380104,
            "unit": "1210428822511060117A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 993.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1229767 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 993.4,
            "unit": "ns/op",
            "extra": "1229767 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1229767 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1229767 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 99.53,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11906421 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 99.53,
            "unit": "ns/op",
            "extra": "11906421 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11906421 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11906421 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.65,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17308460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.65,
            "unit": "ns/op",
            "extra": "17308460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17308460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17308460 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.57,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40055044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.57,
            "unit": "ns/op",
            "extra": "40055044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40055044 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40055044 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86641579 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.7,
            "unit": "ns/op",
            "extra": "86641579 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86641579 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86641579 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.595,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183730071 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.595,
            "unit": "ns/op",
            "extra": "183730071 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183730071 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183730071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 313029,
            "unit": "ns/op\t   57879 B/op\t     666 allocs/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 313029,
            "unit": "ns/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57879,
            "unit": "B/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4216 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298101,
            "unit": "ns/op\t   57895 B/op\t     666 allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298101,
            "unit": "ns/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57895,
            "unit": "B/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4128 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175664,
            "unit": "ns/op\t   58090 B/op\t     669 allocs/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175664,
            "unit": "ns/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58090,
            "unit": "B/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177802,
            "unit": "ns/op\t   58111 B/op\t     669 allocs/op",
            "extra": "6027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177802,
            "unit": "ns/op",
            "extra": "6027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58111,
            "unit": "B/op",
            "extra": "6027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6027 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 375209,
            "unit": "ns/op\t   63652 B/op\t     726 allocs/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 375209,
            "unit": "ns/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63652,
            "unit": "B/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3438 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 351316,
            "unit": "ns/op\t   63595 B/op\t     726 allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 351316,
            "unit": "ns/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63595,
            "unit": "B/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3412 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 358919,
            "unit": "ns/op\t   63616 B/op\t     726 allocs/op",
            "extra": "3322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358919,
            "unit": "ns/op",
            "extra": "3322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63616,
            "unit": "B/op",
            "extra": "3322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3322 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342443,
            "unit": "ns/op\t   63148 B/op\t     727 allocs/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342443,
            "unit": "ns/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63148,
            "unit": "B/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3688 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46049822 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.37,
            "unit": "ns/op",
            "extra": "46049822 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46049822 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46049822 times\n4 procs"
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
          "id": "329cebe10e9c827a26779e6785f76faa0232d35c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 6b6421385fc3abc6c4b7cb0930e163416457da7e",
          "timestamp": "2025-11-05T03:09:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/329cebe10e9c827a26779e6785f76faa0232d35c"
        },
        "date": 1762391873945,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13437,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88467 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13437,
            "unit": "ns/op",
            "extra": "88467 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88467 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88467 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41870,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41870,
            "unit": "ns/op",
            "extra": "28520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28520 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28520 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75089,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16119 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75089,
            "unit": "ns/op",
            "extra": "16119 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16119 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16119 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31477,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38419 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31477,
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
            "value": 312898,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3646 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 312898,
            "unit": "ns/op",
            "extra": "3646 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3646 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3646 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 311296,
            "unit": "ns/op\t   58802 B/op\t     800 allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 311296,
            "unit": "ns/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58802,
            "unit": "B/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99411,
            "unit": "ns/op\t   29623 B/op\t     260 allocs/op",
            "extra": "11540 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99411,
            "unit": "ns/op",
            "extra": "11540 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29623,
            "unit": "B/op",
            "extra": "11540 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "11540 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48935,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48935,
            "unit": "ns/op",
            "extra": "24612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34781,
            "unit": "B/op",
            "extra": "24612 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24612 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200671,
            "unit": "ns/op\t   54711 B/op\t    2069 allocs/op",
            "extra": "5700 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200671,
            "unit": "ns/op",
            "extra": "5700 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54711,
            "unit": "B/op",
            "extra": "5700 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5700 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7990,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "148538 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7990,
            "unit": "ns/op",
            "extra": "148538 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "148538 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148538 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154594,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154594,
            "unit": "ns/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7581 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511070117A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511070117A094101Federal",
            "value": 231380104,
            "unit": "1210428822511070117A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 978.4,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1217748 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 978.4,
            "unit": "ns/op",
            "extra": "1217748 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1217748 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1217748 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.82,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12232700 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.82,
            "unit": "ns/op",
            "extra": "12232700 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12232700 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12232700 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 64.61,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18262896 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 64.61,
            "unit": "ns/op",
            "extra": "18262896 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18262896 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18262896 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.97,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40250092 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.97,
            "unit": "ns/op",
            "extra": "40250092 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40250092 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40250092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87633138 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.72,
            "unit": "ns/op",
            "extra": "87633138 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87633138 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87633138 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.629,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183822957 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.629,
            "unit": "ns/op",
            "extra": "183822957 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183822957 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183822957 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 306451,
            "unit": "ns/op\t   57875 B/op\t     666 allocs/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 306451,
            "unit": "ns/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57875,
            "unit": "B/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4090 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 305670,
            "unit": "ns/op\t   57896 B/op\t     666 allocs/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305670,
            "unit": "ns/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57896,
            "unit": "B/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171589,
            "unit": "ns/op\t   58073 B/op\t     669 allocs/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171589,
            "unit": "ns/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58073,
            "unit": "B/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177092,
            "unit": "ns/op\t   58106 B/op\t     669 allocs/op",
            "extra": "6394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177092,
            "unit": "ns/op",
            "extra": "6394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58106,
            "unit": "B/op",
            "extra": "6394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6394 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 372651,
            "unit": "ns/op\t   63587 B/op\t     726 allocs/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 372651,
            "unit": "ns/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63587,
            "unit": "B/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3310 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355345,
            "unit": "ns/op\t   63606 B/op\t     726 allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355345,
            "unit": "ns/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63606,
            "unit": "B/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356290,
            "unit": "ns/op\t   63598 B/op\t     726 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356290,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63598,
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
            "value": 347638,
            "unit": "ns/op\t   63670 B/op\t     727 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347638,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63670,
            "unit": "B/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45975747 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45975747 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45975747 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45975747 times\n4 procs"
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
          "id": "7b9e58d0292fe0de6c96f2c745e567e2a4c011d6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for a465356c03c8ab2374ac64f273084000e0490b03",
          "timestamp": "2025-11-06T03:11:45Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7b9e58d0292fe0de6c96f2c745e567e2a4c011d6"
        },
        "date": 1762478197075,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13815,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "86904 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13815,
            "unit": "ns/op",
            "extra": "86904 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "86904 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "86904 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42291,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28114 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42291,
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
            "value": 75018,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15580 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75018,
            "unit": "ns/op",
            "extra": "15580 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15580 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32189,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "33729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32189,
            "unit": "ns/op",
            "extra": "33729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "33729 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "33729 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296770,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296770,
            "unit": "ns/op",
            "extra": "3663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296964,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296964,
            "unit": "ns/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3853 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99653,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99653,
            "unit": "ns/op",
            "extra": "12044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12044 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12044 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49373,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49373,
            "unit": "ns/op",
            "extra": "24174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24174 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24174 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 207032,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "5812 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 207032,
            "unit": "ns/op",
            "extra": "5812 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "5812 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5812 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8228,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "140877 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8228,
            "unit": "ns/op",
            "extra": "140877 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "140877 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "140877 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155316,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155316,
            "unit": "ns/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511080115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511080115A094101Federal",
            "value": 231380104,
            "unit": "1210428822511080115A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 975.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1233572 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975.1,
            "unit": "ns/op",
            "extra": "1233572 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1233572 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1233572 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11761718 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101,
            "unit": "ns/op",
            "extra": "11761718 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11761718 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11761718 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.3,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18887420 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.3,
            "unit": "ns/op",
            "extra": "18887420 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18887420 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18887420 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 30.23,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "37550745 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 30.23,
            "unit": "ns/op",
            "extra": "37550745 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "37550745 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "37550745 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91699008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "91699008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91699008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91699008 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.914,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202630198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.914,
            "unit": "ns/op",
            "extra": "202630198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202630198 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202630198 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307028,
            "unit": "ns/op\t   57882 B/op\t     666 allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307028,
            "unit": "ns/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57882,
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
            "value": 305858,
            "unit": "ns/op\t   57886 B/op\t     666 allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 305858,
            "unit": "ns/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57886,
            "unit": "B/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 177164,
            "unit": "ns/op\t   58073 B/op\t     669 allocs/op",
            "extra": "6495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 177164,
            "unit": "ns/op",
            "extra": "6495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58073,
            "unit": "B/op",
            "extra": "6495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6495 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176552,
            "unit": "ns/op\t   58107 B/op\t     669 allocs/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176552,
            "unit": "ns/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58107,
            "unit": "B/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363084,
            "unit": "ns/op\t   63629 B/op\t     726 allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363084,
            "unit": "ns/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63629,
            "unit": "B/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3476 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 364696,
            "unit": "ns/op\t   63617 B/op\t     726 allocs/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364696,
            "unit": "ns/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63617,
            "unit": "B/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 351145,
            "unit": "ns/op\t   63610 B/op\t     726 allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 351145,
            "unit": "ns/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63610,
            "unit": "B/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3399 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348826,
            "unit": "ns/op\t   63076 B/op\t     727 allocs/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348826,
            "unit": "ns/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63076,
            "unit": "B/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48209024 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.9,
            "unit": "ns/op",
            "extra": "48209024 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48209024 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48209024 times\n4 procs"
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
          "id": "73c294898c315870f3a4479df9ac8667d3040a55",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2e375693f0fbcb0f1504f3424327135cbbfbf981",
          "timestamp": "2025-11-07T03:08:15Z",
          "url": "https://github.com/moov-io/benchmarks/commit/73c294898c315870f3a4479df9ac8667d3040a55"
        },
        "date": 1762564389606,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13709,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "88056 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13709,
            "unit": "ns/op",
            "extra": "88056 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "88056 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "88056 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42222,
            "unit": "ns/op\t   23324 B/op\t     120 allocs/op",
            "extra": "28519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42222,
            "unit": "ns/op",
            "extra": "28519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23324,
            "unit": "B/op",
            "extra": "28519 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28519 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74687,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74687,
            "unit": "ns/op",
            "extra": "16004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32811,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38774 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32811,
            "unit": "ns/op",
            "extra": "38774 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38774 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38774 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 298013,
            "unit": "ns/op\t   58806 B/op\t     800 allocs/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 298013,
            "unit": "ns/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58806,
            "unit": "B/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 310181,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 310181,
            "unit": "ns/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99693,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12127 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99693,
            "unit": "ns/op",
            "extra": "12127 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12127 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12127 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 50141,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24262 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 50141,
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
            "value": 206083,
            "unit": "ns/op\t   54712 B/op\t    2069 allocs/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206083,
            "unit": "ns/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54712,
            "unit": "B/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6001 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8823,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146784 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8823,
            "unit": "ns/op",
            "extra": "146784 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146784 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146784 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155708,
            "unit": "ns/op\t   60922 B/op\t     717 allocs/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155708,
            "unit": "ns/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60922,
            "unit": "B/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511090112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511090112A094101Federal",
            "value": 231380104,
            "unit": "1210428822511090112A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 971.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1229926 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 971.9,
            "unit": "ns/op",
            "extra": "1229926 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1229926 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1229926 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 100.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11936554 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 100.4,
            "unit": "ns/op",
            "extra": "11936554 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11936554 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11936554 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.07,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19073636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.07,
            "unit": "ns/op",
            "extra": "19073636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19073636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19073636 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.64,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40582551 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.64,
            "unit": "ns/op",
            "extra": "40582551 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40582551 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40582551 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90726214 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.6,
            "unit": "ns/op",
            "extra": "90726214 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90726214 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90726214 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.911,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202989775 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.911,
            "unit": "ns/op",
            "extra": "202989775 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202989775 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202989775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296910,
            "unit": "ns/op\t   57882 B/op\t     666 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296910,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57882,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304693,
            "unit": "ns/op\t   57902 B/op\t     666 allocs/op",
            "extra": "3778 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304693,
            "unit": "ns/op",
            "extra": "3778 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57902,
            "unit": "B/op",
            "extra": "3778 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3778 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 201219,
            "unit": "ns/op\t   58100 B/op\t     669 allocs/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 201219,
            "unit": "ns/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58100,
            "unit": "B/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6669 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 179628,
            "unit": "ns/op\t   58106 B/op\t     669 allocs/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 179628,
            "unit": "ns/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58106,
            "unit": "B/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363912,
            "unit": "ns/op\t   63588 B/op\t     726 allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363912,
            "unit": "ns/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63588,
            "unit": "B/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3396 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 362435,
            "unit": "ns/op\t   63585 B/op\t     726 allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362435,
            "unit": "ns/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63585,
            "unit": "B/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3463 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356440,
            "unit": "ns/op\t   63619 B/op\t     726 allocs/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356440,
            "unit": "ns/op",
            "extra": "3511 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63619,
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
            "value": 349652,
            "unit": "ns/op\t   63578 B/op\t     727 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349652,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63578,
            "unit": "B/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45116590 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.06,
            "unit": "ns/op",
            "extra": "45116590 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45116590 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45116590 times\n4 procs"
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
          "id": "c5be2fa1ef5fb7c58510a47a1a499685f548ee9e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8331207ba1cd34f4ba83f98f9f669b6b40fad656",
          "timestamp": "2025-11-08T02:59:53Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c5be2fa1ef5fb7c58510a47a1a499685f548ee9e"
        },
        "date": 1762651201812,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13654,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87393 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13654,
            "unit": "ns/op",
            "extra": "87393 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87393 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87393 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42074,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42074,
            "unit": "ns/op",
            "extra": "28476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28476 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28476 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74773,
            "unit": "ns/op\t   27221 B/op\t     195 allocs/op",
            "extra": "15993 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74773,
            "unit": "ns/op",
            "extra": "15993 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27221,
            "unit": "B/op",
            "extra": "15993 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "15993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32956,
            "unit": "ns/op\t   21859 B/op\t      83 allocs/op",
            "extra": "38676 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32956,
            "unit": "ns/op",
            "extra": "38676 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21859,
            "unit": "B/op",
            "extra": "38676 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38676 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296683,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296683,
            "unit": "ns/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "3865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 296281,
            "unit": "ns/op\t   58803 B/op\t     800 allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296281,
            "unit": "ns/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58803,
            "unit": "B/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99661,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99661,
            "unit": "ns/op",
            "extra": "12022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12022 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49157,
            "unit": "ns/op\t   34782 B/op\t     234 allocs/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49157,
            "unit": "ns/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34782,
            "unit": "B/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 234,
            "unit": "allocs/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 206265,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 206265,
            "unit": "ns/op",
            "extra": "5853 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
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
            "value": 8683,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "146164 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8683,
            "unit": "ns/op",
            "extra": "146164 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "146164 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "146164 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156679,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7197 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156679,
            "unit": "ns/op",
            "extra": "7197 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7197 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7197 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511100119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511100119A094101Federal",
            "value": 231380104,
            "unit": "1210428822511100119A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1231129 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 975,
            "unit": "ns/op",
            "extra": "1231129 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1231129 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1231129 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11775429 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.8,
            "unit": "ns/op",
            "extra": "11775429 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11775429 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11775429 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.03,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18943041 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.03,
            "unit": "ns/op",
            "extra": "18943041 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18943041 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18943041 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.74,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40675915 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.74,
            "unit": "ns/op",
            "extra": "40675915 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40675915 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40675915 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91833076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "91833076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91833076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91833076 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202587193 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.915,
            "unit": "ns/op",
            "extra": "202587193 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202587193 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202587193 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301211,
            "unit": "ns/op\t   57877 B/op\t     666 allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301211,
            "unit": "ns/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57877,
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
            "value": 295232,
            "unit": "ns/op\t   57900 B/op\t     666 allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 295232,
            "unit": "ns/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57900,
            "unit": "B/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 666,
            "unit": "allocs/op",
            "extra": "3963 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 197534,
            "unit": "ns/op\t   58078 B/op\t     669 allocs/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 197534,
            "unit": "ns/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58078,
            "unit": "B/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174305,
            "unit": "ns/op\t   58105 B/op\t     669 allocs/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174305,
            "unit": "ns/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58105,
            "unit": "B/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6576 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354792,
            "unit": "ns/op\t   63602 B/op\t     726 allocs/op",
            "extra": "3373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354792,
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
            "value": 354987,
            "unit": "ns/op\t   63594 B/op\t     726 allocs/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354987,
            "unit": "ns/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63594,
            "unit": "B/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353569,
            "unit": "ns/op\t   63609 B/op\t     726 allocs/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353569,
            "unit": "ns/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63609,
            "unit": "B/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347459,
            "unit": "ns/op\t   63606 B/op\t     727 allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347459,
            "unit": "ns/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 63606,
            "unit": "B/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 727,
            "unit": "allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45828310 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.95,
            "unit": "ns/op",
            "extra": "45828310 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45828310 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45828310 times\n4 procs"
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
          "id": "1b524b11a6be3830e7fc3dacd7edab9a21f562a4",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2f59d512329d12c2c0f10ebf4960196e4af19912",
          "timestamp": "2025-11-09T03:10:52Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1b524b11a6be3830e7fc3dacd7edab9a21f562a4"
        },
        "date": 1762737598734,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13622,
            "unit": "ns/op\t   10701 B/op\t     131 allocs/op",
            "extra": "87190 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13622,
            "unit": "ns/op",
            "extra": "87190 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10701,
            "unit": "B/op",
            "extra": "87190 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "87190 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 45039,
            "unit": "ns/op\t   23323 B/op\t     120 allocs/op",
            "extra": "28621 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 45039,
            "unit": "ns/op",
            "extra": "28621 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23323,
            "unit": "B/op",
            "extra": "28621 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "28621 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 79760,
            "unit": "ns/op\t   27222 B/op\t     195 allocs/op",
            "extra": "16015 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 79760,
            "unit": "ns/op",
            "extra": "16015 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 27222,
            "unit": "B/op",
            "extra": "16015 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "16015 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31115,
            "unit": "ns/op\t   21858 B/op\t      83 allocs/op",
            "extra": "38623 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31115,
            "unit": "ns/op",
            "extra": "38623 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21858,
            "unit": "B/op",
            "extra": "38623 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "38623 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296194,
            "unit": "ns/op\t   58801 B/op\t     800 allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296194,
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
            "value": 296655,
            "unit": "ns/op\t   58804 B/op\t     800 allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 296655,
            "unit": "ns/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 58804,
            "unit": "B/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 800,
            "unit": "allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99622,
            "unit": "ns/op\t   29622 B/op\t     260 allocs/op",
            "extra": "12000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99622,
            "unit": "ns/op",
            "extra": "12000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29622,
            "unit": "B/op",
            "extra": "12000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 260,
            "unit": "allocs/op",
            "extra": "12000 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 49165,
            "unit": "ns/op\t   34781 B/op\t     234 allocs/op",
            "extra": "24417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 49165,
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
            "value": 217579,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 217579,
            "unit": "ns/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5673 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8138,
            "unit": "ns/op\t    7594 B/op\t      73 allocs/op",
            "extra": "144824 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8138,
            "unit": "ns/op",
            "extra": "144824 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7594,
            "unit": "B/op",
            "extra": "144824 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "144824 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155132,
            "unit": "ns/op\t   60920 B/op\t     717 allocs/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155132,
            "unit": "ns/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 60920,
            "unit": "B/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 717,
            "unit": "allocs/op",
            "extra": "7196 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822511110119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822511110119A094101Federal",
            "value": 231380104,
            "unit": "1210428822511110119A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 976.9,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1229624 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 976.9,
            "unit": "ns/op",
            "extra": "1229624 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1229624 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1229624 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 101.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11657792 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 101.6,
            "unit": "ns/op",
            "extra": "11657792 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11657792 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11657792 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.45,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18860091 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.45,
            "unit": "ns/op",
            "extra": "18860091 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18860091 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18860091 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.74,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40584523 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.74,
            "unit": "ns/op",
            "extra": "40584523 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40584523 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40584523 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91646133 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.43,
            "unit": "ns/op",
            "extra": "91646133 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91646133 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91646133 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.916,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203052190 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.916,
            "unit": "ns/op",
            "extra": "203052190 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203052190 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203052190 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298491,
            "unit": "ns/op\t   57883 B/op\t     666 allocs/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298491,
            "unit": "ns/op",
            "extra": "4150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 57883,
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
            "value": 306963,
            "unit": "ns/op\t   57898 B/op\t     666 allocs/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 306963,
            "unit": "ns/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 57898,
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
            "value": 168923,
            "unit": "ns/op\t   58085 B/op\t     669 allocs/op",
            "extra": "6855 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168923,
            "unit": "ns/op",
            "extra": "6855 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 58085,
            "unit": "B/op",
            "extra": "6855 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 669,
            "unit": "allocs/op",
            "extra": "6855 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177444,
            "unit": "ns/op\t   58110 B/op\t     669 allocs/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177444,
            "unit": "ns/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 58110,
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
            "value": 362336,
            "unit": "ns/op\t   63586 B/op\t     726 allocs/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362336,
            "unit": "ns/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 63586,
            "unit": "B/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3405 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355074,
            "unit": "ns/op\t   63598 B/op\t     726 allocs/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355074,
            "unit": "ns/op",
            "extra": "3447 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 63598,
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
            "value": 355842,
            "unit": "ns/op\t   63618 B/op\t     726 allocs/op",
            "extra": "3363 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355842,
            "unit": "ns/op",
            "extra": "3363 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 63618,
            "unit": "B/op",
            "extra": "3363 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 726,
            "unit": "allocs/op",
            "extra": "3363 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348210,
            "unit": "ns/op\t   63617 B/op\t     727 allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348210,
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
            "value": 24.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45596193 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.93,
            "unit": "ns/op",
            "extra": "45596193 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45596193 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45596193 times\n4 procs"
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