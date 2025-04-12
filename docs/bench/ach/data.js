window.BENCHMARK_DATA = {
  "lastUpdate": 1744420302924,
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
          "id": "8fa2f0af7a140be4545000bbeeb49ce4a4a02bc7",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2cf98183780459baf3db91578975f6b3cd8140ee",
          "timestamp": "2025-03-18T02:56:05Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8fa2f0af7a140be4545000bbeeb49ce4a4a02bc7"
        },
        "date": 1742346693809,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11737,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "100455 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11737,
            "unit": "ns/op",
            "extra": "100455 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "100455 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100455 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39884,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39884,
            "unit": "ns/op",
            "extra": "30004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30004 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30004 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71879,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16716 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71879,
            "unit": "ns/op",
            "extra": "16716 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16716 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16716 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31290,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "40534 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31290,
            "unit": "ns/op",
            "extra": "40534 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "40534 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40534 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 301286,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 301286,
            "unit": "ns/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
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
            "value": 310806,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 310806,
            "unit": "ns/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96495,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12582 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96495,
            "unit": "ns/op",
            "extra": "12582 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12582 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12582 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43724,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27460 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43724,
            "unit": "ns/op",
            "extra": "27460 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27460 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27460 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198113,
            "unit": "ns/op\t   53856 B/op\t    2040 allocs/op",
            "extra": "5719 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198113,
            "unit": "ns/op",
            "extra": "5719 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53856,
            "unit": "B/op",
            "extra": "5719 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5719 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5749,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "216067 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5749,
            "unit": "ns/op",
            "extra": "216067 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "216067 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216067 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147519,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7670 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147519,
            "unit": "ns/op",
            "extra": "7670 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7670 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7670 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503200110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503200110A094101Federal",
            "value": 231380104,
            "unit": "1210428822503200110A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 104.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11345434 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.5,
            "unit": "ns/op",
            "extra": "11345434 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11345434 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11345434 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.42,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17594827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.42,
            "unit": "ns/op",
            "extra": "17594827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17594827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17594827 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "37330446 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.46,
            "unit": "ns/op",
            "extra": "37330446 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "37330446 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "37330446 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86082349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.68,
            "unit": "ns/op",
            "extra": "86082349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86082349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86082349 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.929,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202438844 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.929,
            "unit": "ns/op",
            "extra": "202438844 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202438844 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202438844 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 307834,
            "unit": "ns/op\t   56832 B/op\t     637 allocs/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 307834,
            "unit": "ns/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56832,
            "unit": "B/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4196 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 311435,
            "unit": "ns/op\t   56843 B/op\t     637 allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 311435,
            "unit": "ns/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56843,
            "unit": "B/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175053,
            "unit": "ns/op\t   57026 B/op\t     640 allocs/op",
            "extra": "5850 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175053,
            "unit": "ns/op",
            "extra": "5850 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57026,
            "unit": "B/op",
            "extra": "5850 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "5850 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 185283,
            "unit": "ns/op\t   57050 B/op\t     640 allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 185283,
            "unit": "ns/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6201 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368453,
            "unit": "ns/op\t   62537 B/op\t     697 allocs/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368453,
            "unit": "ns/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62537,
            "unit": "B/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 366669,
            "unit": "ns/op\t   62550 B/op\t     697 allocs/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 366669,
            "unit": "ns/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62550,
            "unit": "B/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 359050,
            "unit": "ns/op\t   62609 B/op\t     697 allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 359050,
            "unit": "ns/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62609,
            "unit": "B/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 354086,
            "unit": "ns/op\t   62491 B/op\t     697 allocs/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 354086,
            "unit": "ns/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62491,
            "unit": "B/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4137 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46399350 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.12,
            "unit": "ns/op",
            "extra": "46399350 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46399350 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46399350 times\n4 procs"
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
          "id": "3a37ddfc06c3788d475a700c4c49a24239f3e94c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for db62d3ea183c68dbff677492e4eeaff6a7560a68",
          "timestamp": "2025-03-19T02:55:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3a37ddfc06c3788d475a700c4c49a24239f3e94c"
        },
        "date": 1742433010334,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11588,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103438 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11588,
            "unit": "ns/op",
            "extra": "103438 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103438 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103438 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39206,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39206,
            "unit": "ns/op",
            "extra": "30829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30829 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30829 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71023,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71023,
            "unit": "ns/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16879 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29481,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29481,
            "unit": "ns/op",
            "extra": "40548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 308372,
            "unit": "ns/op\t   56271 B/op\t     743 allocs/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 308372,
            "unit": "ns/op",
            "extra": "3932 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56271,
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
            "value": 311021,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 311021,
            "unit": "ns/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95134,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95134,
            "unit": "ns/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43515,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27447 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43515,
            "unit": "ns/op",
            "extra": "27447 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27447 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27447 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200650,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200650,
            "unit": "ns/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6166 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5557,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "214710 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5557,
            "unit": "ns/op",
            "extra": "214710 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "214710 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214710 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155770,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155770,
            "unit": "ns/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
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
            "unit": "1210428822503210109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503210109A094101Federal",
            "value": 231380104,
            "unit": "1210428822503210109A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "11352800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.4,
            "unit": "ns/op",
            "extra": "11352800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11352800 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11352800 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.03,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16978858 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.03,
            "unit": "ns/op",
            "extra": "16978858 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16978858 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16978858 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.85,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39139843 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.85,
            "unit": "ns/op",
            "extra": "39139843 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39139843 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39139843 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88299122 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.58,
            "unit": "ns/op",
            "extra": "88299122 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88299122 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88299122 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.989,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202641490 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.989,
            "unit": "ns/op",
            "extra": "202641490 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202641490 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202641490 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299102,
            "unit": "ns/op\t   56822 B/op\t     637 allocs/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299102,
            "unit": "ns/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56822,
            "unit": "B/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4287 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297691,
            "unit": "ns/op\t   56840 B/op\t     637 allocs/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297691,
            "unit": "ns/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56840,
            "unit": "B/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4084 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 186157,
            "unit": "ns/op\t   57039 B/op\t     640 allocs/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 186157,
            "unit": "ns/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57039,
            "unit": "B/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6909 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168275,
            "unit": "ns/op\t   57051 B/op\t     640 allocs/op",
            "extra": "6409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168275,
            "unit": "ns/op",
            "extra": "6409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57051,
            "unit": "B/op",
            "extra": "6409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6409 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359230,
            "unit": "ns/op\t   62587 B/op\t     697 allocs/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359230,
            "unit": "ns/op",
            "extra": "3442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62587,
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
            "value": 360900,
            "unit": "ns/op\t   62522 B/op\t     697 allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360900,
            "unit": "ns/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62522,
            "unit": "B/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354743,
            "unit": "ns/op\t   62515 B/op\t     697 allocs/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354743,
            "unit": "ns/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62515,
            "unit": "B/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3590 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345340,
            "unit": "ns/op\t   62024 B/op\t     697 allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345340,
            "unit": "ns/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62024,
            "unit": "B/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46389278 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26,
            "unit": "ns/op",
            "extra": "46389278 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46389278 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46389278 times\n4 procs"
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
          "id": "7adcbaf2b552f80fa6488e111dd9084d728dcdb2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 876f7141266af9c17c7b49c3298fd8dbf52e8861",
          "timestamp": "2025-03-20T02:54:04Z",
          "url": "https://github.com/moov-io/benchmarks/commit/7adcbaf2b552f80fa6488e111dd9084d728dcdb2"
        },
        "date": 1742519499653,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11623,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103554 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11623,
            "unit": "ns/op",
            "extra": "103554 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103554 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103554 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39073,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30740 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39073,
            "unit": "ns/op",
            "extra": "30740 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30740 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30740 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71142,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16790 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71142,
            "unit": "ns/op",
            "extra": "16790 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16790 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16790 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31258,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40720 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31258,
            "unit": "ns/op",
            "extra": "40720 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40720 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40720 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293615,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293615,
            "unit": "ns/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 293615,
            "unit": "ns/op\t   56276 B/op\t     743 allocs/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293615,
            "unit": "ns/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56276,
            "unit": "B/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "4015 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94886,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "11613 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94886,
            "unit": "ns/op",
            "extra": "11613 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "11613 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "11613 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43132,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "25951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43132,
            "unit": "ns/op",
            "extra": "25951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "25951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "25951 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195903,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195903,
            "unit": "ns/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6111 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5535,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212472 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5535,
            "unit": "ns/op",
            "extra": "212472 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212472 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212472 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 149395,
            "unit": "ns/op\t   57105 B/op\t     610 allocs/op",
            "extra": "8414 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 149395,
            "unit": "ns/op",
            "extra": "8414 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57105,
            "unit": "B/op",
            "extra": "8414 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8414 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503220111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503220111A094101Federal",
            "value": 231380104,
            "unit": "1210428822503220111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1018,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1018,
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
            "value": 103.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11367007 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.9,
            "unit": "ns/op",
            "extra": "11367007 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11367007 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11367007 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.14,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17510712 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.14,
            "unit": "ns/op",
            "extra": "17510712 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17510712 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17510712 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39207014 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.27,
            "unit": "ns/op",
            "extra": "39207014 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39207014 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39207014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89563848 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.54,
            "unit": "ns/op",
            "extra": "89563848 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89563848 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89563848 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.924,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203198942 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.924,
            "unit": "ns/op",
            "extra": "203198942 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203198942 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203198942 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298043,
            "unit": "ns/op\t   56832 B/op\t     637 allocs/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298043,
            "unit": "ns/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56832,
            "unit": "B/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297043,
            "unit": "ns/op\t   56852 B/op\t     637 allocs/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297043,
            "unit": "ns/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56852,
            "unit": "B/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173814,
            "unit": "ns/op\t   57041 B/op\t     640 allocs/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173814,
            "unit": "ns/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6948 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168038,
            "unit": "ns/op\t   57066 B/op\t     640 allocs/op",
            "extra": "6735 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168038,
            "unit": "ns/op",
            "extra": "6735 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57066,
            "unit": "B/op",
            "extra": "6735 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6735 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 364362,
            "unit": "ns/op\t   62579 B/op\t     697 allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 364362,
            "unit": "ns/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62579,
            "unit": "B/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3342 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354941,
            "unit": "ns/op\t   62536 B/op\t     697 allocs/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354941,
            "unit": "ns/op",
            "extra": "3562 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62536,
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
            "value": 350952,
            "unit": "ns/op\t   62508 B/op\t     697 allocs/op",
            "extra": "3504 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350952,
            "unit": "ns/op",
            "extra": "3504 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62508,
            "unit": "B/op",
            "extra": "3504 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3504 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342445,
            "unit": "ns/op\t   62490 B/op\t     697 allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342445,
            "unit": "ns/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62490,
            "unit": "B/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46443844 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.27,
            "unit": "ns/op",
            "extra": "46443844 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46443844 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46443844 times\n4 procs"
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
          "id": "55689d2b298874ace67f3f4cbefcf434bf8a0785",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for b945795b92ee4f1f09815a98455a48c53787f56c",
          "timestamp": "2025-03-21T02:56:11Z",
          "url": "https://github.com/moov-io/benchmarks/commit/55689d2b298874ace67f3f4cbefcf434bf8a0785"
        },
        "date": 1742605804878,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11572,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103340 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11572,
            "unit": "ns/op",
            "extra": "103340 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103340 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103340 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39053,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30063 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39053,
            "unit": "ns/op",
            "extra": "30063 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30063 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30063 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72115,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "16898 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72115,
            "unit": "ns/op",
            "extra": "16898 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "16898 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29690,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29690,
            "unit": "ns/op",
            "extra": "40356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40356 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40356 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 291395,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 291395,
            "unit": "ns/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
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
            "value": 292184,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "4081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292184,
            "unit": "ns/op",
            "extra": "4081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56272,
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
            "value": 102711,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102711,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
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
            "value": 44818,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44818,
            "unit": "ns/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27657 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200654,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6092 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200654,
            "unit": "ns/op",
            "extra": "6092 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6092 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6092 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5669,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212523 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5669,
            "unit": "ns/op",
            "extra": "212523 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212523 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212523 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147278,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147278,
            "unit": "ns/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7724 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503230109A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503230109A094101Federal",
            "value": 231380104,
            "unit": "1210428822503230109A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 104.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11418217 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.6,
            "unit": "ns/op",
            "extra": "11418217 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11418217 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11418217 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.23,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17538577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.23,
            "unit": "ns/op",
            "extra": "17538577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17538577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17538577 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.27,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39616071 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.27,
            "unit": "ns/op",
            "extra": "39616071 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39616071 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39616071 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89429119 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.54,
            "unit": "ns/op",
            "extra": "89429119 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89429119 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89429119 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202779160 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.913,
            "unit": "ns/op",
            "extra": "202779160 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202779160 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202779160 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 302722,
            "unit": "ns/op\t   56825 B/op\t     637 allocs/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 302722,
            "unit": "ns/op",
            "extra": "4230 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56825,
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
            "value": 308457,
            "unit": "ns/op\t   56835 B/op\t     637 allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 308457,
            "unit": "ns/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56835,
            "unit": "B/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4099 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169519,
            "unit": "ns/op\t   57031 B/op\t     640 allocs/op",
            "extra": "6853 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169519,
            "unit": "ns/op",
            "extra": "6853 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57031,
            "unit": "B/op",
            "extra": "6853 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6853 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170220,
            "unit": "ns/op\t   57054 B/op\t     640 allocs/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170220,
            "unit": "ns/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57054,
            "unit": "B/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359690,
            "unit": "ns/op\t   62513 B/op\t     697 allocs/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359690,
            "unit": "ns/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62513,
            "unit": "B/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3300 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358244,
            "unit": "ns/op\t   62540 B/op\t     697 allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358244,
            "unit": "ns/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62540,
            "unit": "B/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3378 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352997,
            "unit": "ns/op\t   62535 B/op\t     697 allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352997,
            "unit": "ns/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62535,
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
            "value": 349929,
            "unit": "ns/op\t   62496 B/op\t     697 allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349929,
            "unit": "ns/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62496,
            "unit": "B/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4111 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46563628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.84,
            "unit": "ns/op",
            "extra": "46563628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46563628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46563628 times\n4 procs"
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
          "id": "65775af87a298fbe7c739c78a713cb35e2963efe",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f8d68fb65cc1d189d8b889fbd29fce4f6321ddde",
          "timestamp": "2025-03-22T02:52:17Z",
          "url": "https://github.com/moov-io/benchmarks/commit/65775af87a298fbe7c739c78a713cb35e2963efe"
        },
        "date": 1742692557823,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11515,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "104517 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11515,
            "unit": "ns/op",
            "extra": "104517 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "104517 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104517 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38949,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30705 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38949,
            "unit": "ns/op",
            "extra": "30705 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30705 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30705 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71878,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16477 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71878,
            "unit": "ns/op",
            "extra": "16477 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16477 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16477 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31631,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31631,
            "unit": "ns/op",
            "extra": "40753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40753 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 329711,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 329711,
            "unit": "ns/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3409 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 314356,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 314356,
            "unit": "ns/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3919 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95417,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12626 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95417,
            "unit": "ns/op",
            "extra": "12626 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12626 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12626 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43010,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43010,
            "unit": "ns/op",
            "extra": "27984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27984 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27984 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199987,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199987,
            "unit": "ns/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6376 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5503,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "214052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5503,
            "unit": "ns/op",
            "extra": "214052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "214052 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214052 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152887,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "8067 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152887,
            "unit": "ns/op",
            "extra": "8067 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "8067 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8067 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503240115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503240115A094101Federal",
            "value": 231380104,
            "unit": "1210428822503240115A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 108,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11442066 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 108,
            "unit": "ns/op",
            "extra": "11442066 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11442066 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11442066 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.05,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17577199 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.05,
            "unit": "ns/op",
            "extra": "17577199 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17577199 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17577199 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38640336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.54,
            "unit": "ns/op",
            "extra": "38640336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38640336 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38640336 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89770723 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.85,
            "unit": "ns/op",
            "extra": "89770723 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89770723 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89770723 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.933,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202894162 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.933,
            "unit": "ns/op",
            "extra": "202894162 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202894162 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202894162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299866,
            "unit": "ns/op\t   56816 B/op\t     637 allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299866,
            "unit": "ns/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56816,
            "unit": "B/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300060,
            "unit": "ns/op\t   56842 B/op\t     637 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300060,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56842,
            "unit": "B/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169050,
            "unit": "ns/op\t   57037 B/op\t     640 allocs/op",
            "extra": "7150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169050,
            "unit": "ns/op",
            "extra": "7150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57037,
            "unit": "B/op",
            "extra": "7150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7150 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 170026,
            "unit": "ns/op\t   57049 B/op\t     640 allocs/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 170026,
            "unit": "ns/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57049,
            "unit": "B/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 368988,
            "unit": "ns/op\t   62572 B/op\t     697 allocs/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 368988,
            "unit": "ns/op",
            "extra": "3474 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62572,
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
            "value": 362447,
            "unit": "ns/op\t   62533 B/op\t     697 allocs/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 362447,
            "unit": "ns/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62533,
            "unit": "B/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 358853,
            "unit": "ns/op\t   62538 B/op\t     697 allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358853,
            "unit": "ns/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62538,
            "unit": "B/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3435 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348634,
            "unit": "ns/op\t   62485 B/op\t     697 allocs/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348634,
            "unit": "ns/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62485,
            "unit": "B/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4134 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46478071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.26,
            "unit": "ns/op",
            "extra": "46478071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46478071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46478071 times\n4 procs"
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
          "id": "ed25ad25068e209d9bd7ce532e398d9c134a4f5e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ef2600378d6d3cdda31ba877bc6e366f5194409e",
          "timestamp": "2025-03-23T03:00:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ed25ad25068e209d9bd7ce532e398d9c134a4f5e"
        },
        "date": 1742778815499,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11558,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101812 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11558,
            "unit": "ns/op",
            "extra": "101812 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101812 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38971,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38971,
            "unit": "ns/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71338,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16482 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71338,
            "unit": "ns/op",
            "extra": "16482 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16482 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16482 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30337,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40477 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30337,
            "unit": "ns/op",
            "extra": "40477 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40477 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40477 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293066,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293066,
            "unit": "ns/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
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
            "value": 302552,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 302552,
            "unit": "ns/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3849 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94481,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12214 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94481,
            "unit": "ns/op",
            "extra": "12214 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12214 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12214 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42890,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42890,
            "unit": "ns/op",
            "extra": "27596 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
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
            "value": 199373,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199373,
            "unit": "ns/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5748,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212566 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5748,
            "unit": "ns/op",
            "extra": "212566 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212566 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212566 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147177,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147177,
            "unit": "ns/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7712 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503250112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503250112A094101Federal",
            "value": 231380104,
            "unit": "1210428822503250112A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1082,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1082,
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
            "extra": "11373606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.1,
            "unit": "ns/op",
            "extra": "11373606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11373606 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11373606 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.08,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17507098 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.08,
            "unit": "ns/op",
            "extra": "17507098 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17507098 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17507098 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.37,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39477522 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.37,
            "unit": "ns/op",
            "extra": "39477522 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39477522 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39477522 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89644003 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.75,
            "unit": "ns/op",
            "extra": "89644003 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89644003 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89644003 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.995,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202498465 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.995,
            "unit": "ns/op",
            "extra": "202498465 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202498465 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202498465 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297008,
            "unit": "ns/op\t   56824 B/op\t     637 allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297008,
            "unit": "ns/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56824,
            "unit": "B/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4095 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304024,
            "unit": "ns/op\t   56838 B/op\t     637 allocs/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304024,
            "unit": "ns/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56838,
            "unit": "B/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3754 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168200,
            "unit": "ns/op\t   57019 B/op\t     640 allocs/op",
            "extra": "6642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168200,
            "unit": "ns/op",
            "extra": "6642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57019,
            "unit": "B/op",
            "extra": "6642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6642 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 173394,
            "unit": "ns/op\t   57050 B/op\t     640 allocs/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 173394,
            "unit": "ns/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6327 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362163,
            "unit": "ns/op\t   62591 B/op\t     697 allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362163,
            "unit": "ns/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62591,
            "unit": "B/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354165,
            "unit": "ns/op\t   62529 B/op\t     697 allocs/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354165,
            "unit": "ns/op",
            "extra": "3561 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62529,
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
            "value": 364215,
            "unit": "ns/op\t   62551 B/op\t     697 allocs/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 364215,
            "unit": "ns/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62551,
            "unit": "B/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3606 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344935,
            "unit": "ns/op\t   62493 B/op\t     697 allocs/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344935,
            "unit": "ns/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62493,
            "unit": "B/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46661347 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.55,
            "unit": "ns/op",
            "extra": "46661347 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46661347 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46661347 times\n4 procs"
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
          "id": "586188c2f17eb7bbac574e14c135359a0b2d6c4a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7013a738683dc039c72b199b583608ff5290799a",
          "timestamp": "2025-03-24T03:00:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/586188c2f17eb7bbac574e14c135359a0b2d6c4a"
        },
        "date": 1742865140540,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11648,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "100424 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11648,
            "unit": "ns/op",
            "extra": "100424 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "100424 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "100424 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38988,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38988,
            "unit": "ns/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30751 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71482,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16815 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71482,
            "unit": "ns/op",
            "extra": "16815 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16815 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16815 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30762,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "40718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30762,
            "unit": "ns/op",
            "extra": "40718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "40718 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40718 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293957,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293957,
            "unit": "ns/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292937,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292937,
            "unit": "ns/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94997,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12638 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94997,
            "unit": "ns/op",
            "extra": "12638 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12638 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12638 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42954,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27792 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42954,
            "unit": "ns/op",
            "extra": "27792 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27792 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27792 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199894,
            "unit": "ns/op\t   53862 B/op\t    2040 allocs/op",
            "extra": "5984 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199894,
            "unit": "ns/op",
            "extra": "5984 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53862,
            "unit": "B/op",
            "extra": "5984 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5984 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5688,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "214578 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5688,
            "unit": "ns/op",
            "extra": "214578 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "214578 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214578 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147432,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147432,
            "unit": "ns/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7668 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503260111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503260111A094101Federal",
            "value": 231380104,
            "unit": "1210428822503260111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 103.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11409580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 103.9,
            "unit": "ns/op",
            "extra": "11409580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11409580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11409580 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.13,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17417047 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.13,
            "unit": "ns/op",
            "extra": "17417047 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17417047 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17417047 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.3,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39611430 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.3,
            "unit": "ns/op",
            "extra": "39611430 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39611430 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39611430 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89743472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.48,
            "unit": "ns/op",
            "extra": "89743472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89743472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89743472 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.937,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202942874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.937,
            "unit": "ns/op",
            "extra": "202942874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202942874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202942874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294136,
            "unit": "ns/op\t   56820 B/op\t     637 allocs/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294136,
            "unit": "ns/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56820,
            "unit": "B/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304333,
            "unit": "ns/op\t   56845 B/op\t     637 allocs/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304333,
            "unit": "ns/op",
            "extra": "4112 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56845,
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
            "value": 169227,
            "unit": "ns/op\t   57041 B/op\t     640 allocs/op",
            "extra": "7118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169227,
            "unit": "ns/op",
            "extra": "7118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "7118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7118 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168191,
            "unit": "ns/op\t   57054 B/op\t     640 allocs/op",
            "extra": "6612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168191,
            "unit": "ns/op",
            "extra": "6612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57054,
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
            "value": 358087,
            "unit": "ns/op\t   62526 B/op\t     697 allocs/op",
            "extra": "3290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358087,
            "unit": "ns/op",
            "extra": "3290 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62526,
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
            "value": 354070,
            "unit": "ns/op\t   62542 B/op\t     697 allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354070,
            "unit": "ns/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62542,
            "unit": "B/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3508 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 349933,
            "unit": "ns/op\t   62532 B/op\t     697 allocs/op",
            "extra": "3636 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 349933,
            "unit": "ns/op",
            "extra": "3636 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62532,
            "unit": "B/op",
            "extra": "3636 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3636 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 349049,
            "unit": "ns/op\t   62451 B/op\t     697 allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 349049,
            "unit": "ns/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62451,
            "unit": "B/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4221 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46564125 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.84,
            "unit": "ns/op",
            "extra": "46564125 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46564125 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46564125 times\n4 procs"
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
          "id": "044ad37ad44ebe73977fb953c29dd3564c930d4f",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4e68ca6d0a835279a8da9c464b8728b5a4990eac",
          "timestamp": "2025-03-25T02:57:09Z",
          "url": "https://github.com/moov-io/benchmarks/commit/044ad37ad44ebe73977fb953c29dd3564c930d4f"
        },
        "date": 1742951514360,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11674,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101533 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11674,
            "unit": "ns/op",
            "extra": "101533 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101533 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101533 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39256,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "29796 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39256,
            "unit": "ns/op",
            "extra": "29796 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "29796 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "29796 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74963,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16629 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74963,
            "unit": "ns/op",
            "extra": "16629 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16629 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16629 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29753,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "39898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29753,
            "unit": "ns/op",
            "extra": "39898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "39898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "39898 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 325034,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 325034,
            "unit": "ns/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 295841,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 295841,
            "unit": "ns/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3909 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96718,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12463 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96718,
            "unit": "ns/op",
            "extra": "12463 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12463 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12463 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43919,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43919,
            "unit": "ns/op",
            "extra": "27732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27732 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27732 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202410,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202410,
            "unit": "ns/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
            "unit": "B/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5607,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "214201 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5607,
            "unit": "ns/op",
            "extra": "214201 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "214201 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214201 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151291,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "8131 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151291,
            "unit": "ns/op",
            "extra": "8131 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "8131 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8131 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503270111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503270111A094101Federal",
            "value": 231380104,
            "unit": "1210428822503270111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 104.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11287707 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.5,
            "unit": "ns/op",
            "extra": "11287707 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11287707 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11287707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.39,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17340428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.39,
            "unit": "ns/op",
            "extra": "17340428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17340428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17340428 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39118983 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.67,
            "unit": "ns/op",
            "extra": "39118983 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39118983 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39118983 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89642617 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.53,
            "unit": "ns/op",
            "extra": "89642617 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89642617 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89642617 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.941,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202977981 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.941,
            "unit": "ns/op",
            "extra": "202977981 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202977981 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202977981 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299577,
            "unit": "ns/op\t   56815 B/op\t     637 allocs/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299577,
            "unit": "ns/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56815,
            "unit": "B/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299902,
            "unit": "ns/op\t   56836 B/op\t     637 allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299902,
            "unit": "ns/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56836,
            "unit": "B/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 183646,
            "unit": "ns/op\t   57035 B/op\t     640 allocs/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 183646,
            "unit": "ns/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57035,
            "unit": "B/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6690 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172751,
            "unit": "ns/op\t   57057 B/op\t     640 allocs/op",
            "extra": "6142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172751,
            "unit": "ns/op",
            "extra": "6142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57057,
            "unit": "B/op",
            "extra": "6142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365952,
            "unit": "ns/op\t   62510 B/op\t     697 allocs/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365952,
            "unit": "ns/op",
            "extra": "3421 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62510,
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
            "value": 363938,
            "unit": "ns/op\t   62533 B/op\t     697 allocs/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 363938,
            "unit": "ns/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62533,
            "unit": "B/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3450 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 360272,
            "unit": "ns/op\t   62506 B/op\t     697 allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 360272,
            "unit": "ns/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62506,
            "unit": "B/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 348630,
            "unit": "ns/op\t   62535 B/op\t     697 allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348630,
            "unit": "ns/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62535,
            "unit": "B/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4069 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45974492 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "45974492 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45974492 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45974492 times\n4 procs"
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
          "id": "0cf8825030c2610fd2a5a730a4a8f2f57af503b1",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 31977d023c7eeea3113c97c0d30c33c6643096c3",
          "timestamp": "2025-03-26T02:56:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0cf8825030c2610fd2a5a730a4a8f2f57af503b1"
        },
        "date": 1743037896004,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11609,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103964 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11609,
            "unit": "ns/op",
            "extra": "103964 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103964 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103964 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39296,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39296,
            "unit": "ns/op",
            "extra": "30483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30483 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 80617,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16677 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 80617,
            "unit": "ns/op",
            "extra": "16677 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16677 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16677 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29831,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40275 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29831,
            "unit": "ns/op",
            "extra": "40275 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40275 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40275 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294484,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294484,
            "unit": "ns/op",
            "extra": "3945 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
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
            "value": 293413,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293413,
            "unit": "ns/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3942 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96981,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12577 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96981,
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
            "value": 43301,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "26463 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43301,
            "unit": "ns/op",
            "extra": "26463 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "26463 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "26463 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204943,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5883 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204943,
            "unit": "ns/op",
            "extra": "5883 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5883 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5883 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5561,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212486 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5561,
            "unit": "ns/op",
            "extra": "212486 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212486 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212486 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148254,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7872 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148254,
            "unit": "ns/op",
            "extra": "7872 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7872 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7872 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503280110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503280110A094101Federal",
            "value": 231380104,
            "unit": "1210428822503280110A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 104.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11397433 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.3,
            "unit": "ns/op",
            "extra": "11397433 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11397433 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11397433 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.17,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17488261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.17,
            "unit": "ns/op",
            "extra": "17488261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17488261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17488261 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.83,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38862762 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.83,
            "unit": "ns/op",
            "extra": "38862762 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38862762 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38862762 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88077085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.73,
            "unit": "ns/op",
            "extra": "88077085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88077085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88077085 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.036,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "197063347 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.036,
            "unit": "ns/op",
            "extra": "197063347 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "197063347 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "197063347 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296102,
            "unit": "ns/op\t   56818 B/op\t     637 allocs/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296102,
            "unit": "ns/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56818,
            "unit": "B/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4232 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300504,
            "unit": "ns/op\t   56835 B/op\t     637 allocs/op",
            "extra": "3943 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300504,
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
            "value": 183975,
            "unit": "ns/op\t   57033 B/op\t     640 allocs/op",
            "extra": "6681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 183975,
            "unit": "ns/op",
            "extra": "6681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57033,
            "unit": "B/op",
            "extra": "6681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6681 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178357,
            "unit": "ns/op\t   57055 B/op\t     640 allocs/op",
            "extra": "5930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178357,
            "unit": "ns/op",
            "extra": "5930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "5930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "5930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 369160,
            "unit": "ns/op\t   62553 B/op\t     697 allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 369160,
            "unit": "ns/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62553,
            "unit": "B/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358373,
            "unit": "ns/op\t   62550 B/op\t     697 allocs/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358373,
            "unit": "ns/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62550,
            "unit": "B/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 353658,
            "unit": "ns/op\t   62558 B/op\t     697 allocs/op",
            "extra": "3603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 353658,
            "unit": "ns/op",
            "extra": "3603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62558,
            "unit": "B/op",
            "extra": "3603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344564,
            "unit": "ns/op\t   62585 B/op\t     697 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344564,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62585,
            "unit": "B/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46563099 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "46563099 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46563099 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46563099 times\n4 procs"
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
          "id": "0b094f498077de474d9fbf6e7e98a0a10d0fe11e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 48a39c0abf0fcd995f7f9d2ae2782727358e2151",
          "timestamp": "2025-03-27T02:56:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/0b094f498077de474d9fbf6e7e98a0a10d0fe11e"
        },
        "date": 1743124289719,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11610,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101929 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11610,
            "unit": "ns/op",
            "extra": "101929 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101929 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101929 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39268,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "29526 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39268,
            "unit": "ns/op",
            "extra": "29526 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "29526 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "29526 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71074,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16780 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71074,
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
            "value": 30993,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30993,
            "unit": "ns/op",
            "extra": "40714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40714 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40714 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293559,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293559,
            "unit": "ns/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3452 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 303281,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 303281,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95274,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95274,
            "unit": "ns/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12594 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43127,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "25798 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43127,
            "unit": "ns/op",
            "extra": "25798 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "25798 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "25798 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198897,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5968 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198897,
            "unit": "ns/op",
            "extra": "5968 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "5968 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5968 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5578,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "214687 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5578,
            "unit": "ns/op",
            "extra": "214687 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "214687 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "214687 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148189,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7478 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148189,
            "unit": "ns/op",
            "extra": "7478 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7478 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7478 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503290110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503290110A094101Federal",
            "value": 231380104,
            "unit": "1210428822503290110A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 104.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11405694 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.3,
            "unit": "ns/op",
            "extra": "11405694 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11405694 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11405694 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.1,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17547352 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.1,
            "unit": "ns/op",
            "extra": "17547352 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17547352 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17547352 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39514976 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.46,
            "unit": "ns/op",
            "extra": "39514976 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39514976 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39514976 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89767881 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.64,
            "unit": "ns/op",
            "extra": "89767881 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89767881 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89767881 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.923,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203031670 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.923,
            "unit": "ns/op",
            "extra": "203031670 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203031670 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203031670 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 301742,
            "unit": "ns/op\t   56823 B/op\t     637 allocs/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 301742,
            "unit": "ns/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56823,
            "unit": "B/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4164 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302994,
            "unit": "ns/op\t   56839 B/op\t     637 allocs/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302994,
            "unit": "ns/op",
            "extra": "3997 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56839,
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
            "value": 174649,
            "unit": "ns/op\t   57029 B/op\t     640 allocs/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174649,
            "unit": "ns/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 175978,
            "unit": "ns/op\t   57050 B/op\t     640 allocs/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 175978,
            "unit": "ns/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57050,
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
            "value": 365153,
            "unit": "ns/op\t   62585 B/op\t     697 allocs/op",
            "extra": "3434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365153,
            "unit": "ns/op",
            "extra": "3434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62585,
            "unit": "B/op",
            "extra": "3434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 366190,
            "unit": "ns/op\t   62547 B/op\t     697 allocs/op",
            "extra": "3547 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 366190,
            "unit": "ns/op",
            "extra": "3547 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62547,
            "unit": "B/op",
            "extra": "3547 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3547 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362945,
            "unit": "ns/op\t   62543 B/op\t     697 allocs/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362945,
            "unit": "ns/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62543,
            "unit": "B/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3626 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352251,
            "unit": "ns/op\t   62498 B/op\t     697 allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352251,
            "unit": "ns/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62498,
            "unit": "B/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45466917 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "45466917 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45466917 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45466917 times\n4 procs"
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
          "id": "c33a8a2915c6fdb0a1b9413c817db995373a5f1a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2bdd2ec95551e2e33f6122b934ae074a83030d4c",
          "timestamp": "2025-03-28T02:58:03Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c33a8a2915c6fdb0a1b9413c817db995373a5f1a"
        },
        "date": 1743210658764,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11662,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "101630 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11662,
            "unit": "ns/op",
            "extra": "101630 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "101630 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101630 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38775,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "31070 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38775,
            "unit": "ns/op",
            "extra": "31070 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "31070 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31070 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72241,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "15692 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72241,
            "unit": "ns/op",
            "extra": "15692 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "15692 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "15692 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29550,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40507 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29550,
            "unit": "ns/op",
            "extra": "40507 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40507 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40507 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293248,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293248,
            "unit": "ns/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292923,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292923,
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
            "value": 103599,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 103599,
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
            "value": 43508,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27957 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43508,
            "unit": "ns/op",
            "extra": "27957 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27957 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27957 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 204344,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 204344,
            "unit": "ns/op",
            "extra": "5892 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
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
            "value": 5629,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "208810 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5629,
            "unit": "ns/op",
            "extra": "208810 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "208810 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "208810 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146571,
            "unit": "ns/op\t   57108 B/op\t     610 allocs/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146571,
            "unit": "ns/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57108,
            "unit": "B/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7354 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503300110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503300110A094101Federal",
            "value": 231380104,
            "unit": "1210428822503300110A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
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
            "value": 104.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11475685 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.9,
            "unit": "ns/op",
            "extra": "11475685 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11475685 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11475685 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.23,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17367670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.23,
            "unit": "ns/op",
            "extra": "17367670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17367670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17367670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.53,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38516130 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.53,
            "unit": "ns/op",
            "extra": "38516130 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38516130 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38516130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89331463 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.68,
            "unit": "ns/op",
            "extra": "89331463 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89331463 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89331463 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.917,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203036319 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.917,
            "unit": "ns/op",
            "extra": "203036319 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203036319 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203036319 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298557,
            "unit": "ns/op\t   56822 B/op\t     637 allocs/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298557,
            "unit": "ns/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56822,
            "unit": "B/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 302691,
            "unit": "ns/op\t   56839 B/op\t     637 allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 302691,
            "unit": "ns/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56839,
            "unit": "B/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3964 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174228,
            "unit": "ns/op\t   57020 B/op\t     640 allocs/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174228,
            "unit": "ns/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57020,
            "unit": "B/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 177858,
            "unit": "ns/op\t   57047 B/op\t     640 allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 177858,
            "unit": "ns/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57047,
            "unit": "B/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6489 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 359728,
            "unit": "ns/op\t   62535 B/op\t     697 allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 359728,
            "unit": "ns/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62535,
            "unit": "B/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3570 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355811,
            "unit": "ns/op\t   62539 B/op\t     697 allocs/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355811,
            "unit": "ns/op",
            "extra": "3633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62539,
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
            "value": 355396,
            "unit": "ns/op\t   62536 B/op\t     697 allocs/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355396,
            "unit": "ns/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62536,
            "unit": "B/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3648 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343349,
            "unit": "ns/op\t   62540 B/op\t     697 allocs/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343349,
            "unit": "ns/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62540,
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
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46388629 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46388629 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46388629 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46388629 times\n4 procs"
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
          "id": "32df69e5293fea3f0eb33a1451b77f5adeb7b2ea",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 94ecbfcfd5c86de7615d6ce919503c4746e92e20",
          "timestamp": "2025-03-29T02:54:26Z",
          "url": "https://github.com/moov-io/benchmarks/commit/32df69e5293fea3f0eb33a1451b77f5adeb7b2ea"
        },
        "date": 1743297433824,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11538,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "104575 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11538,
            "unit": "ns/op",
            "extra": "104575 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "104575 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104575 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39468,
            "unit": "ns/op\t   21523 B/op\t      61 allocs/op",
            "extra": "31003 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39468,
            "unit": "ns/op",
            "extra": "31003 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21523,
            "unit": "B/op",
            "extra": "31003 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31003 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71739,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "16832 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71739,
            "unit": "ns/op",
            "extra": "16832 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "16832 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30681,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40162 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30681,
            "unit": "ns/op",
            "extra": "40162 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40162 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40162 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 290520,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 290520,
            "unit": "ns/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 291577,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 291577,
            "unit": "ns/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3757 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 103081,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 103081,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
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
            "value": 43014,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27780 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43014,
            "unit": "ns/op",
            "extra": "27780 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27780 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27780 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197058,
            "unit": "ns/op\t   53856 B/op\t    2040 allocs/op",
            "extra": "5980 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197058,
            "unit": "ns/op",
            "extra": "5980 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53856,
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
            "value": 5715,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "217134 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5715,
            "unit": "ns/op",
            "extra": "217134 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "217134 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "217134 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154156,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154156,
            "unit": "ns/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7574 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822503310116A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822503310116A094101Federal",
            "value": 231380104,
            "unit": "1210428822503310116A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 104.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11436038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.9,
            "unit": "ns/op",
            "extra": "11436038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11436038 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11436038 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.12,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17561726 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.12,
            "unit": "ns/op",
            "extra": "17561726 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17561726 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17561726 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.59,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39229464 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.59,
            "unit": "ns/op",
            "extra": "39229464 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39229464 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39229464 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89652448 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.88,
            "unit": "ns/op",
            "extra": "89652448 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89652448 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89652448 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.927,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202151673 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.927,
            "unit": "ns/op",
            "extra": "202151673 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202151673 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202151673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296881,
            "unit": "ns/op\t   56826 B/op\t     637 allocs/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296881,
            "unit": "ns/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56826,
            "unit": "B/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4263 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298703,
            "unit": "ns/op\t   56835 B/op\t     637 allocs/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298703,
            "unit": "ns/op",
            "extra": "4057 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56835,
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
            "value": 174920,
            "unit": "ns/op\t   57030 B/op\t     640 allocs/op",
            "extra": "7195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174920,
            "unit": "ns/op",
            "extra": "7195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57030,
            "unit": "B/op",
            "extra": "7195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7195 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 185588,
            "unit": "ns/op\t   57062 B/op\t     640 allocs/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 185588,
            "unit": "ns/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57062,
            "unit": "B/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354444,
            "unit": "ns/op\t   62539 B/op\t     697 allocs/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354444,
            "unit": "ns/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62539,
            "unit": "B/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3564 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 357909,
            "unit": "ns/op\t   62523 B/op\t     697 allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 357909,
            "unit": "ns/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62523,
            "unit": "B/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3574 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354152,
            "unit": "ns/op\t   62525 B/op\t     697 allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354152,
            "unit": "ns/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62525,
            "unit": "B/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3548 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344008,
            "unit": "ns/op\t   62546 B/op\t     697 allocs/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344008,
            "unit": "ns/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62546,
            "unit": "B/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46595422 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46595422 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46595422 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46595422 times\n4 procs"
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
          "id": "f828971eb8fcdd748f4d8a3399ba6527b564e07f",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 464a79595fb7fc70e01e46f86a610168a7143b55",
          "timestamp": "2025-03-30T03:03:40Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f828971eb8fcdd748f4d8a3399ba6527b564e07f"
        },
        "date": 1743383736807,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11514,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "104282 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11514,
            "unit": "ns/op",
            "extra": "104282 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "104282 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104282 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38916,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30441 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38916,
            "unit": "ns/op",
            "extra": "30441 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30441 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30441 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71083,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16808 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71083,
            "unit": "ns/op",
            "extra": "16808 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16808 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16808 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30632,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40766 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30632,
            "unit": "ns/op",
            "extra": "40766 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40766 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40766 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 311757,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 311757,
            "unit": "ns/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3987 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294202,
            "unit": "ns/op\t   56271 B/op\t     743 allocs/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294202,
            "unit": "ns/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56271,
            "unit": "B/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3900 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94640,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94640,
            "unit": "ns/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12537 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43624,
            "unit": "ns/op\t   31569 B/op\t     129 allocs/op",
            "extra": "27722 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43624,
            "unit": "ns/op",
            "extra": "27722 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31569,
            "unit": "B/op",
            "extra": "27722 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27722 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197054,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197054,
            "unit": "ns/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6152 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5777,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "216086 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5777,
            "unit": "ns/op",
            "extra": "216086 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "216086 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216086 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148761,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7786 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148761,
            "unit": "ns/op",
            "extra": "7786 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7786 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7786 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504010115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504010115A094101Federal",
            "value": 231380104,
            "unit": "1210428822504010115A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "11433106 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.1,
            "unit": "ns/op",
            "extra": "11433106 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11433106 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11433106 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.05,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17430175 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.05,
            "unit": "ns/op",
            "extra": "17430175 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17430175 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17430175 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.79,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39076489 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.79,
            "unit": "ns/op",
            "extra": "39076489 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39076489 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39076489 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87339390 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.8,
            "unit": "ns/op",
            "extra": "87339390 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87339390 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87339390 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "194406696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.915,
            "unit": "ns/op",
            "extra": "194406696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "194406696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "194406696 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 294845,
            "unit": "ns/op\t   56820 B/op\t     637 allocs/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 294845,
            "unit": "ns/op",
            "extra": "4274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56820,
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
            "value": 299582,
            "unit": "ns/op\t   56846 B/op\t     637 allocs/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299582,
            "unit": "ns/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56846,
            "unit": "B/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 167139,
            "unit": "ns/op\t   57036 B/op\t     640 allocs/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 167139,
            "unit": "ns/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57036,
            "unit": "B/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167440,
            "unit": "ns/op\t   57043 B/op\t     640 allocs/op",
            "extra": "6352 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167440,
            "unit": "ns/op",
            "extra": "6352 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57043,
            "unit": "B/op",
            "extra": "6352 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6352 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 365099,
            "unit": "ns/op\t   62556 B/op\t     697 allocs/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 365099,
            "unit": "ns/op",
            "extra": "3514 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62556,
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
            "value": 361967,
            "unit": "ns/op\t   62557 B/op\t     697 allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 361967,
            "unit": "ns/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62557,
            "unit": "B/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 361276,
            "unit": "ns/op\t   62524 B/op\t     697 allocs/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 361276,
            "unit": "ns/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62524,
            "unit": "B/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 344747,
            "unit": "ns/op\t   62579 B/op\t     697 allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 344747,
            "unit": "ns/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62579,
            "unit": "B/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3999 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46407642 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.85,
            "unit": "ns/op",
            "extra": "46407642 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46407642 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46407642 times\n4 procs"
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
          "id": "d228f2e28b8193e7a330957a45d86c231b56ad23",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f361793f66c31d9d6dadc974aaeb960527716bae",
          "timestamp": "2025-03-31T03:03:38Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d228f2e28b8193e7a330957a45d86c231b56ad23"
        },
        "date": 1743470426822,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11555,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "104410 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11555,
            "unit": "ns/op",
            "extra": "104410 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "104410 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104410 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39117,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30802 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39117,
            "unit": "ns/op",
            "extra": "30802 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30802 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30802 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71751,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71751,
            "unit": "ns/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30543,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40804 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30543,
            "unit": "ns/op",
            "extra": "40804 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40804 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40804 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 296337,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 296337,
            "unit": "ns/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 305140,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 305140,
            "unit": "ns/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
            "unit": "B/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3456 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95729,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12573 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95729,
            "unit": "ns/op",
            "extra": "12573 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12573 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12573 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43726,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43726,
            "unit": "ns/op",
            "extra": "27505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27505 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27505 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200390,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "5508 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200390,
            "unit": "ns/op",
            "extra": "5508 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
            "unit": "B/op",
            "extra": "5508 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5508 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5697,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "209038 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5697,
            "unit": "ns/op",
            "extra": "209038 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "209038 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "209038 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 152565,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7990 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 152565,
            "unit": "ns/op",
            "extra": "7990 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7990 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7990 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504020119A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504020119A094101Federal",
            "value": 231380104,
            "unit": "1210428822504020119A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
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
            "extra": "11345318 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.4,
            "unit": "ns/op",
            "extra": "11345318 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11345318 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11345318 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.54,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17483692 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.54,
            "unit": "ns/op",
            "extra": "17483692 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17483692 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17483692 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.58,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "37196412 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.58,
            "unit": "ns/op",
            "extra": "37196412 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "37196412 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "37196412 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88709563 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.83,
            "unit": "ns/op",
            "extra": "88709563 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88709563 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88709563 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.929,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198584620 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.929,
            "unit": "ns/op",
            "extra": "198584620 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "198584620 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "198584620 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296132,
            "unit": "ns/op\t   56821 B/op\t     637 allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296132,
            "unit": "ns/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56821,
            "unit": "B/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4173 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298622,
            "unit": "ns/op\t   56837 B/op\t     637 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298622,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56837,
            "unit": "B/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 173164,
            "unit": "ns/op\t   57024 B/op\t     640 allocs/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 173164,
            "unit": "ns/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57024,
            "unit": "B/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7256 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169410,
            "unit": "ns/op\t   57063 B/op\t     640 allocs/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169410,
            "unit": "ns/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57063,
            "unit": "B/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361856,
            "unit": "ns/op\t   62545 B/op\t     697 allocs/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361856,
            "unit": "ns/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62545,
            "unit": "B/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 369041,
            "unit": "ns/op\t   62525 B/op\t     697 allocs/op",
            "extra": "3525 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 369041,
            "unit": "ns/op",
            "extra": "3525 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62525,
            "unit": "B/op",
            "extra": "3525 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3525 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 367959,
            "unit": "ns/op\t   62550 B/op\t     697 allocs/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 367959,
            "unit": "ns/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62550,
            "unit": "B/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 351814,
            "unit": "ns/op\t   62501 B/op\t     697 allocs/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 351814,
            "unit": "ns/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62501,
            "unit": "B/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4156 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46467138 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.03,
            "unit": "ns/op",
            "extra": "46467138 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46467138 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46467138 times\n4 procs"
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
          "id": "d5d0d3eb128aa5923cc4c023edfc37d0e8d3eb5c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8bac4d53368f59435cbc5479bfb1f80d870d12a6",
          "timestamp": "2025-04-01T03:10:21Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d5d0d3eb128aa5923cc4c023edfc37d0e8d3eb5c"
        },
        "date": 1743556381835,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11531,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "104647 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11531,
            "unit": "ns/op",
            "extra": "104647 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "104647 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104647 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38851,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38851,
            "unit": "ns/op",
            "extra": "30696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30696 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73397,
            "unit": "ns/op\t   25388 B/op\t     136 allocs/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73397,
            "unit": "ns/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25388,
            "unit": "B/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16833 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29389,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "36512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29389,
            "unit": "ns/op",
            "extra": "36512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "36512 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "36512 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 304969,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 304969,
            "unit": "ns/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 292578,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 292578,
            "unit": "ns/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 95294,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95294,
            "unit": "ns/op",
            "extra": "12548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12548 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43106,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "27584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43106,
            "unit": "ns/op",
            "extra": "27584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "27584 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27584 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198005,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198005,
            "unit": "ns/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
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
            "value": 5612,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "212100 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5612,
            "unit": "ns/op",
            "extra": "212100 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "212100 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "212100 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 156788,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 156788,
            "unit": "ns/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504030112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504030112A094101Federal",
            "value": 231380104,
            "unit": "1210428822504030112A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 106.1,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "10459530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.1,
            "unit": "ns/op",
            "extra": "10459530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "10459530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10459530 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.23,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17461112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.23,
            "unit": "ns/op",
            "extra": "17461112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17461112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17461112 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.45,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39089036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.45,
            "unit": "ns/op",
            "extra": "39089036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39089036 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39089036 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88893537 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.82,
            "unit": "ns/op",
            "extra": "88893537 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88893537 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88893537 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.932,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202167518 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.932,
            "unit": "ns/op",
            "extra": "202167518 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202167518 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202167518 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310755,
            "unit": "ns/op\t   56824 B/op\t     637 allocs/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310755,
            "unit": "ns/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56824,
            "unit": "B/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 304660,
            "unit": "ns/op\t   56845 B/op\t     637 allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 304660,
            "unit": "ns/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56845,
            "unit": "B/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175000,
            "unit": "ns/op\t   57012 B/op\t     640 allocs/op",
            "extra": "6592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175000,
            "unit": "ns/op",
            "extra": "6592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57012,
            "unit": "B/op",
            "extra": "6592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 193739,
            "unit": "ns/op\t   57050 B/op\t     640 allocs/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 193739,
            "unit": "ns/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 361930,
            "unit": "ns/op\t   62596 B/op\t     697 allocs/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 361930,
            "unit": "ns/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62596,
            "unit": "B/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3441 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 364162,
            "unit": "ns/op\t   62587 B/op\t     697 allocs/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 364162,
            "unit": "ns/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62587,
            "unit": "B/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 358811,
            "unit": "ns/op\t   62533 B/op\t     697 allocs/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 358811,
            "unit": "ns/op",
            "extra": "3534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62533,
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
            "value": 348704,
            "unit": "ns/op\t   62493 B/op\t     697 allocs/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348704,
            "unit": "ns/op",
            "extra": "4126 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62493,
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
            "value": 25.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46502146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.94,
            "unit": "ns/op",
            "extra": "46502146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46502146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46502146 times\n4 procs"
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
          "id": "28881724a43add854a54a1c41011c50e22dbcdf7",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 066915f47e2b46554d315323d88d7c196b264e07",
          "timestamp": "2025-04-02T02:58:57Z",
          "url": "https://github.com/moov-io/benchmarks/commit/28881724a43add854a54a1c41011c50e22dbcdf7"
        },
        "date": 1743642733995,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11199,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "105483 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11199,
            "unit": "ns/op",
            "extra": "105483 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "105483 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "105483 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38946,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38946,
            "unit": "ns/op",
            "extra": "30744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30744 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30744 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70781,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16970 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70781,
            "unit": "ns/op",
            "extra": "16970 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16970 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16970 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30226,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40850 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30226,
            "unit": "ns/op",
            "extra": "40850 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40850 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40850 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293764,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293764,
            "unit": "ns/op",
            "extra": "3952 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
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
            "value": 316876,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 316876,
            "unit": "ns/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3930 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94822,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12657 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94822,
            "unit": "ns/op",
            "extra": "12657 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12657 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12657 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42531,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "28134 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42531,
            "unit": "ns/op",
            "extra": "28134 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "28134 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28134 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 196381,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 196381,
            "unit": "ns/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5518,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "219682 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5518,
            "unit": "ns/op",
            "extra": "219682 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "219682 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "219682 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146844,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146844,
            "unit": "ns/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7675 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504040111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504040111A094101Federal",
            "value": 231380104,
            "unit": "1210428822504040111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
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
            "extra": "11276791 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.6,
            "unit": "ns/op",
            "extra": "11276791 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11276791 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11276791 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 68.17,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17233461 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 68.17,
            "unit": "ns/op",
            "extra": "17233461 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17233461 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17233461 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.53,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "38603179 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.53,
            "unit": "ns/op",
            "extra": "38603179 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "38603179 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "38603179 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85563759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.18,
            "unit": "ns/op",
            "extra": "85563759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85563759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85563759 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.538,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183356972 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.538,
            "unit": "ns/op",
            "extra": "183356972 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183356972 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183356972 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 300019,
            "unit": "ns/op\t   56829 B/op\t     637 allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 300019,
            "unit": "ns/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56829,
            "unit": "B/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4022 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300727,
            "unit": "ns/op\t   56828 B/op\t     637 allocs/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300727,
            "unit": "ns/op",
            "extra": "4008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56828,
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
            "value": 169770,
            "unit": "ns/op\t   57029 B/op\t     640 allocs/op",
            "extra": "6700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169770,
            "unit": "ns/op",
            "extra": "6700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "6700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6700 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167350,
            "unit": "ns/op\t   57055 B/op\t     640 allocs/op",
            "extra": "6571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167350,
            "unit": "ns/op",
            "extra": "6571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57055,
            "unit": "B/op",
            "extra": "6571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6571 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 357634,
            "unit": "ns/op\t   62527 B/op\t     697 allocs/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 357634,
            "unit": "ns/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62527,
            "unit": "B/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3308 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355463,
            "unit": "ns/op\t   62522 B/op\t     697 allocs/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355463,
            "unit": "ns/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62522,
            "unit": "B/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3466 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350533,
            "unit": "ns/op\t   62547 B/op\t     697 allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350533,
            "unit": "ns/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62547,
            "unit": "B/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343065,
            "unit": "ns/op\t   62542 B/op\t     697 allocs/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343065,
            "unit": "ns/op",
            "extra": "4040 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62542,
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
            "value": 28.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42838990 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.34,
            "unit": "ns/op",
            "extra": "42838990 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42838990 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42838990 times\n4 procs"
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
          "id": "4c92dcb9c1c47ac799f8cd7eb29742ada71ef20e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 56edc46defd3340553ab618c47ecc86c07ded949",
          "timestamp": "2025-04-03T02:57:27Z",
          "url": "https://github.com/moov-io/benchmarks/commit/4c92dcb9c1c47ac799f8cd7eb29742ada71ef20e"
        },
        "date": 1743729128494,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11697,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "105763 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11697,
            "unit": "ns/op",
            "extra": "105763 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "105763 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "105763 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39050,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "31017 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39050,
            "unit": "ns/op",
            "extra": "31017 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "31017 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31017 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70712,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70712,
            "unit": "ns/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16765 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29079,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40864 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29079,
            "unit": "ns/op",
            "extra": "40864 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40864 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40864 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293516,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293516,
            "unit": "ns/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3933 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 312536,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 312536,
            "unit": "ns/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3921 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97574,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97574,
            "unit": "ns/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42664,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "28430 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42664,
            "unit": "ns/op",
            "extra": "28430 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "28430 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28430 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198167,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198167,
            "unit": "ns/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5301,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "219000 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5301,
            "unit": "ns/op",
            "extra": "219000 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "219000 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "219000 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147269,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147269,
            "unit": "ns/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7530 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504050111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504050111A094101Federal",
            "value": 231380104,
            "unit": "1210428822504050111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 105,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11387442 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 105,
            "unit": "ns/op",
            "extra": "11387442 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11387442 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11387442 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.27,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18215206 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.27,
            "unit": "ns/op",
            "extra": "18215206 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18215206 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18215206 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.56,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40469499 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.56,
            "unit": "ns/op",
            "extra": "40469499 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40469499 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40469499 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85325481 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.17,
            "unit": "ns/op",
            "extra": "85325481 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85325481 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85325481 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.592,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183485373 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.592,
            "unit": "ns/op",
            "extra": "183485373 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183485373 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183485373 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 296910,
            "unit": "ns/op\t   56824 B/op\t     637 allocs/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 296910,
            "unit": "ns/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56824,
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
            "value": 303691,
            "unit": "ns/op\t   56837 B/op\t     637 allocs/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 303691,
            "unit": "ns/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56837,
            "unit": "B/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3741 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 167117,
            "unit": "ns/op\t   57034 B/op\t     640 allocs/op",
            "extra": "7034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 167117,
            "unit": "ns/op",
            "extra": "7034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57034,
            "unit": "B/op",
            "extra": "7034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7034 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 174750,
            "unit": "ns/op\t   57068 B/op\t     640 allocs/op",
            "extra": "6864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 174750,
            "unit": "ns/op",
            "extra": "6864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57068,
            "unit": "B/op",
            "extra": "6864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6864 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371423,
            "unit": "ns/op\t   62531 B/op\t     697 allocs/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371423,
            "unit": "ns/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62531,
            "unit": "B/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3384 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359011,
            "unit": "ns/op\t   62553 B/op\t     697 allocs/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359011,
            "unit": "ns/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62553,
            "unit": "B/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3433 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 356511,
            "unit": "ns/op\t   62505 B/op\t     697 allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 356511,
            "unit": "ns/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62505,
            "unit": "B/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3573 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 353826,
            "unit": "ns/op\t   62449 B/op\t     697 allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 353826,
            "unit": "ns/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62449,
            "unit": "B/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4212 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42574892 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.75,
            "unit": "ns/op",
            "extra": "42574892 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42574892 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42574892 times\n4 procs"
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
          "id": "4898859de3feca90671ed046d9d69f726f51edad",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fa473ef5db463e26a803aab676a9618df4059ee6",
          "timestamp": "2025-04-04T02:57:33Z",
          "url": "https://github.com/moov-io/benchmarks/commit/4898859de3feca90671ed046d9d69f726f51edad"
        },
        "date": 1743815465289,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11511,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103980 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11511,
            "unit": "ns/op",
            "extra": "103980 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103980 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103980 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38528,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "31131 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38528,
            "unit": "ns/op",
            "extra": "31131 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "31131 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31131 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70191,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "17088 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70191,
            "unit": "ns/op",
            "extra": "17088 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "17088 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "17088 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29233,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "41054 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29233,
            "unit": "ns/op",
            "extra": "41054 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "41054 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292809,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292809,
            "unit": "ns/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3944 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 313441,
            "unit": "ns/op\t   56271 B/op\t     743 allocs/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 313441,
            "unit": "ns/op",
            "extra": "3954 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56271,
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
            "value": 94915,
            "unit": "ns/op\t   27428 B/op\t     199 allocs/op",
            "extra": "12640 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94915,
            "unit": "ns/op",
            "extra": "12640 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27428,
            "unit": "B/op",
            "extra": "12640 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12640 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42938,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "28312 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42938,
            "unit": "ns/op",
            "extra": "28312 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
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
            "value": 195476,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6024 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195476,
            "unit": "ns/op",
            "extra": "6024 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6024 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6024 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5359,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "217675 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5359,
            "unit": "ns/op",
            "extra": "217675 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "217675 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "217675 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146439,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146439,
            "unit": "ns/op",
            "extra": "7628 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
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
            "unit": "1210428822504060110A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504060110A094101Federal",
            "value": 231380104,
            "unit": "1210428822504060110A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 106.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11316441 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.9,
            "unit": "ns/op",
            "extra": "11316441 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11316441 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11316441 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.06,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17408709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.06,
            "unit": "ns/op",
            "extra": "17408709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17408709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17408709 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.68,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40539789 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.68,
            "unit": "ns/op",
            "extra": "40539789 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40539789 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40539789 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85562320 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.22,
            "unit": "ns/op",
            "extra": "85562320 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85562320 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85562320 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.566,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183999380 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.566,
            "unit": "ns/op",
            "extra": "183999380 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183999380 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183999380 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 305553,
            "unit": "ns/op\t   56825 B/op\t     637 allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 305553,
            "unit": "ns/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56825,
            "unit": "B/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4100 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 298127,
            "unit": "ns/op\t   56839 B/op\t     637 allocs/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 298127,
            "unit": "ns/op",
            "extra": "4102 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56839,
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
            "value": 171943,
            "unit": "ns/op\t   57029 B/op\t     640 allocs/op",
            "extra": "7024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171943,
            "unit": "ns/op",
            "extra": "7024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57029,
            "unit": "B/op",
            "extra": "7024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167294,
            "unit": "ns/op\t   57050 B/op\t     640 allocs/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167294,
            "unit": "ns/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57050,
            "unit": "B/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 362352,
            "unit": "ns/op\t   62533 B/op\t     697 allocs/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 362352,
            "unit": "ns/op",
            "extra": "3387 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62533,
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
            "value": 360050,
            "unit": "ns/op\t   62525 B/op\t     697 allocs/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 360050,
            "unit": "ns/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62525,
            "unit": "B/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3458 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 352687,
            "unit": "ns/op\t   62527 B/op\t     697 allocs/op",
            "extra": "3558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352687,
            "unit": "ns/op",
            "extra": "3558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62527,
            "unit": "B/op",
            "extra": "3558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 347000,
            "unit": "ns/op\t   62486 B/op\t     697 allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 347000,
            "unit": "ns/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62486,
            "unit": "B/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4174 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43262209 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.76,
            "unit": "ns/op",
            "extra": "43262209 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43262209 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43262209 times\n4 procs"
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
          "id": "058152995664bd2c0215a84e17d5fb5636df9700",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 376cf0df169f031a0a176251c0e632f27106e193",
          "timestamp": "2025-04-05T02:55:14Z",
          "url": "https://github.com/moov-io/benchmarks/commit/058152995664bd2c0215a84e17d5fb5636df9700"
        },
        "date": 1743902195017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11294,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "104683 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11294,
            "unit": "ns/op",
            "extra": "104683 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "104683 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104683 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38206,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "31209 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38206,
            "unit": "ns/op",
            "extra": "31209 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "31209 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31209 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71359,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16749 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71359,
            "unit": "ns/op",
            "extra": "16749 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16749 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16749 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 28942,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "41247 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 28942,
            "unit": "ns/op",
            "extra": "41247 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "41247 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41247 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292456,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292456,
            "unit": "ns/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3994 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 297150,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297150,
            "unit": "ns/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3950 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97598,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97598,
            "unit": "ns/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 45056,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "26821 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 45056,
            "unit": "ns/op",
            "extra": "26821 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "26821 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "26821 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195673,
            "unit": "ns/op\t   53858 B/op\t    2040 allocs/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195673,
            "unit": "ns/op",
            "extra": "6236 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53858,
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
            "value": 5295,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "221623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5295,
            "unit": "ns/op",
            "extra": "221623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "221623 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "221623 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148603,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148603,
            "unit": "ns/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504070115A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504070115A094101Federal",
            "value": 231380104,
            "unit": "1210428822504070115A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1006,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1006,
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
            "value": 106.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11329981 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.4,
            "unit": "ns/op",
            "extra": "11329981 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11329981 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11329981 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.34,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17716564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.34,
            "unit": "ns/op",
            "extra": "17716564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17716564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17716564 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40407546 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.55,
            "unit": "ns/op",
            "extra": "40407546 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40407546 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40407546 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85327616 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.33,
            "unit": "ns/op",
            "extra": "85327616 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85327616 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85327616 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.531,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183766264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.531,
            "unit": "ns/op",
            "extra": "183766264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183766264 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183766264 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303196,
            "unit": "ns/op\t   56823 B/op\t     637 allocs/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303196,
            "unit": "ns/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56823,
            "unit": "B/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4272 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299397,
            "unit": "ns/op\t   56852 B/op\t     637 allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299397,
            "unit": "ns/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56852,
            "unit": "B/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4155 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 168270,
            "unit": "ns/op\t   57028 B/op\t     640 allocs/op",
            "extra": "7423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 168270,
            "unit": "ns/op",
            "extra": "7423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57028,
            "unit": "B/op",
            "extra": "7423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7423 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168537,
            "unit": "ns/op\t   57058 B/op\t     640 allocs/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168537,
            "unit": "ns/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57058,
            "unit": "B/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358774,
            "unit": "ns/op\t   62531 B/op\t     697 allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358774,
            "unit": "ns/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62531,
            "unit": "B/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3392 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355883,
            "unit": "ns/op\t   62521 B/op\t     697 allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355883,
            "unit": "ns/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62521,
            "unit": "B/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3462 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 350187,
            "unit": "ns/op\t   62549 B/op\t     697 allocs/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 350187,
            "unit": "ns/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62549,
            "unit": "B/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 343093,
            "unit": "ns/op\t   62526 B/op\t     697 allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 343093,
            "unit": "ns/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62526,
            "unit": "B/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43283808 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.73,
            "unit": "ns/op",
            "extra": "43283808 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43283808 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43283808 times\n4 procs"
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
          "id": "370b5d1f75901b2db96ec37e70f45e92e7a97594",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for db8e412c2b6c8c403c17286e1a27cf547c565db3",
          "timestamp": "2025-04-06T03:01:52Z",
          "url": "https://github.com/moov-io/benchmarks/commit/370b5d1f75901b2db96ec37e70f45e92e7a97594"
        },
        "date": 1743988472969,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11340,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "103950 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11340,
            "unit": "ns/op",
            "extra": "103950 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "103950 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "103950 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38447,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "31146 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38447,
            "unit": "ns/op",
            "extra": "31146 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "31146 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31146 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70411,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16322 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70411,
            "unit": "ns/op",
            "extra": "16322 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16322 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16322 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29140,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40789 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29140,
            "unit": "ns/op",
            "extra": "40789 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40789 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40789 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 293580,
            "unit": "ns/op\t   56272 B/op\t     743 allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 293580,
            "unit": "ns/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56272,
            "unit": "B/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294978,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294978,
            "unit": "ns/op",
            "extra": "3998 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
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
            "value": 102583,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102583,
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
            "value": 42645,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42645,
            "unit": "ns/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28038 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 197082,
            "unit": "ns/op\t   53857 B/op\t    2040 allocs/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 197082,
            "unit": "ns/op",
            "extra": "6294 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53857,
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
            "value": 5472,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "215883 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5472,
            "unit": "ns/op",
            "extra": "215883 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "215883 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "215883 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147238,
            "unit": "ns/op\t   57106 B/op\t     610 allocs/op",
            "extra": "7314 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147238,
            "unit": "ns/op",
            "extra": "7314 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7314 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7314 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504080113A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504080113A094101Federal",
            "value": 231380104,
            "unit": "1210428822504080113A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1006,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1006,
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
            "extra": "11340268 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 105.9,
            "unit": "ns/op",
            "extra": "11340268 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11340268 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11340268 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.04,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17528508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.04,
            "unit": "ns/op",
            "extra": "17528508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17528508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17528508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39981546 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.6,
            "unit": "ns/op",
            "extra": "39981546 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39981546 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39981546 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81780262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.34,
            "unit": "ns/op",
            "extra": "81780262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "81780262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "81780262 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.539,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183277360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.539,
            "unit": "ns/op",
            "extra": "183277360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183277360 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183277360 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 313920,
            "unit": "ns/op\t   56832 B/op\t     637 allocs/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 313920,
            "unit": "ns/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56832,
            "unit": "B/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4294 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 315996,
            "unit": "ns/op\t   56839 B/op\t     637 allocs/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 315996,
            "unit": "ns/op",
            "extra": "4070 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56839,
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
            "value": 174587,
            "unit": "ns/op\t   57039 B/op\t     640 allocs/op",
            "extra": "7269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174587,
            "unit": "ns/op",
            "extra": "7269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57039,
            "unit": "B/op",
            "extra": "7269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7269 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 172827,
            "unit": "ns/op\t   57066 B/op\t     640 allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 172827,
            "unit": "ns/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57066,
            "unit": "B/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 367037,
            "unit": "ns/op\t   62534 B/op\t     697 allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 367037,
            "unit": "ns/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62534,
            "unit": "B/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3386 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 358626,
            "unit": "ns/op\t   62532 B/op\t     697 allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 358626,
            "unit": "ns/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62532,
            "unit": "B/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3422 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 363572,
            "unit": "ns/op\t   62556 B/op\t     697 allocs/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 363572,
            "unit": "ns/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62556,
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
            "value": 348878,
            "unit": "ns/op\t   62538 B/op\t     697 allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 348878,
            "unit": "ns/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62538,
            "unit": "B/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4045 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43239694 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.78,
            "unit": "ns/op",
            "extra": "43239694 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43239694 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43239694 times\n4 procs"
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
          "id": "bb26c6b7c30e68c60d30a6cb2c1d9ab0d0316d4f",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0cebc8f2e4a818d7a29162d70d35b1289d48c2a5",
          "timestamp": "2025-04-07T03:02:02Z",
          "url": "https://github.com/moov-io/benchmarks/commit/bb26c6b7c30e68c60d30a6cb2c1d9ab0d0316d4f"
        },
        "date": 1744074750674,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11249,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "105507 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11249,
            "unit": "ns/op",
            "extra": "105507 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "105507 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "105507 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38305,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "31048 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38305,
            "unit": "ns/op",
            "extra": "31048 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "31048 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "31048 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73460,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16983 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73460,
            "unit": "ns/op",
            "extra": "16983 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16983 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16983 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30350,
            "unit": "ns/op\t   20932 B/op\t      54 allocs/op",
            "extra": "41298 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30350,
            "unit": "ns/op",
            "extra": "41298 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20932,
            "unit": "B/op",
            "extra": "41298 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "41298 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292198,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292198,
            "unit": "ns/op",
            "extra": "3937 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
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
            "value": 293045,
            "unit": "ns/op\t   56275 B/op\t     743 allocs/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 293045,
            "unit": "ns/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56275,
            "unit": "B/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3956 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 94782,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 94782,
            "unit": "ns/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12663 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42688,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "28225 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42688,
            "unit": "ns/op",
            "extra": "28225 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "28225 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28225 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200604,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200604,
            "unit": "ns/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "5991 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5359,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "219567 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5359,
            "unit": "ns/op",
            "extra": "219567 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "219567 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "219567 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146287,
            "unit": "ns/op\t   57107 B/op\t     610 allocs/op",
            "extra": "7660 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146287,
            "unit": "ns/op",
            "extra": "7660 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57107,
            "unit": "B/op",
            "extra": "7660 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504090111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504090111A094101Federal",
            "value": 231380104,
            "unit": "1210428822504090111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
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
            "value": 105,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11210443 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 105,
            "unit": "ns/op",
            "extra": "11210443 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11210443 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11210443 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.01,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17542621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.01,
            "unit": "ns/op",
            "extra": "17542621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17542621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17542621 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40351929 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.71,
            "unit": "ns/op",
            "extra": "40351929 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40351929 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40351929 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84246234 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.24,
            "unit": "ns/op",
            "extra": "84246234 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84246234 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84246234 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.529,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183468094 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.529,
            "unit": "ns/op",
            "extra": "183468094 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183468094 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183468094 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 298124,
            "unit": "ns/op\t   56824 B/op\t     637 allocs/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 298124,
            "unit": "ns/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56824,
            "unit": "B/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4254 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 296065,
            "unit": "ns/op\t   56843 B/op\t     637 allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 296065,
            "unit": "ns/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56843,
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
            "value": 182013,
            "unit": "ns/op\t   57036 B/op\t     640 allocs/op",
            "extra": "7174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 182013,
            "unit": "ns/op",
            "extra": "7174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57036,
            "unit": "B/op",
            "extra": "7174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7174 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169587,
            "unit": "ns/op\t   57041 B/op\t     640 allocs/op",
            "extra": "6530 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169587,
            "unit": "ns/op",
            "extra": "6530 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57041,
            "unit": "B/op",
            "extra": "6530 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6530 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 363975,
            "unit": "ns/op\t   62553 B/op\t     697 allocs/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 363975,
            "unit": "ns/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62553,
            "unit": "B/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3361 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 394395,
            "unit": "ns/op\t   62544 B/op\t     697 allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 394395,
            "unit": "ns/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62544,
            "unit": "B/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355468,
            "unit": "ns/op\t   62542 B/op\t     697 allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355468,
            "unit": "ns/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62542,
            "unit": "B/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3529 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342356,
            "unit": "ns/op\t   62537 B/op\t     697 allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342356,
            "unit": "ns/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62537,
            "unit": "B/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43272860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.31,
            "unit": "ns/op",
            "extra": "43272860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43272860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43272860 times\n4 procs"
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
          "id": "6f86a6aebef7df3148ffb3e893c3d04dbd6ce412",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 46a9d694e3a84adb4cd2e778d2145bd82a1ff867",
          "timestamp": "2025-04-08T02:58:03Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6f86a6aebef7df3148ffb3e893c3d04dbd6ce412"
        },
        "date": 1744161161425,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11525,
            "unit": "ns/op\t    9674 B/op\t      99 allocs/op",
            "extra": "104923 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11525,
            "unit": "ns/op",
            "extra": "104923 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9674,
            "unit": "B/op",
            "extra": "104923 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "104923 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38749,
            "unit": "ns/op\t   21524 B/op\t      61 allocs/op",
            "extra": "30938 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38749,
            "unit": "ns/op",
            "extra": "30938 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21524,
            "unit": "B/op",
            "extra": "30938 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30938 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70692,
            "unit": "ns/op\t   25389 B/op\t     136 allocs/op",
            "extra": "16839 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70692,
            "unit": "ns/op",
            "extra": "16839 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25389,
            "unit": "B/op",
            "extra": "16839 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16839 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29489,
            "unit": "ns/op\t   20931 B/op\t      54 allocs/op",
            "extra": "40485 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29489,
            "unit": "ns/op",
            "extra": "40485 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20931,
            "unit": "B/op",
            "extra": "40485 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40485 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 292663,
            "unit": "ns/op\t   56273 B/op\t     743 allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 292663,
            "unit": "ns/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56273,
            "unit": "B/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3888 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 313453,
            "unit": "ns/op\t   56274 B/op\t     743 allocs/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 313453,
            "unit": "ns/op",
            "extra": "3974 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56274,
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
            "value": 95696,
            "unit": "ns/op\t   27429 B/op\t     199 allocs/op",
            "extra": "12650 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 95696,
            "unit": "ns/op",
            "extra": "12650 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27429,
            "unit": "B/op",
            "extra": "12650 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12650 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 42526,
            "unit": "ns/op\t   31570 B/op\t     129 allocs/op",
            "extra": "28160 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 42526,
            "unit": "ns/op",
            "extra": "28160 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31570,
            "unit": "B/op",
            "extra": "28160 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "28160 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 195747,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 195747,
            "unit": "ns/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53859,
            "unit": "B/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6325 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5280,
            "unit": "ns/op\t    6145 B/op\t      25 allocs/op",
            "extra": "223400 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5280,
            "unit": "ns/op",
            "extra": "223400 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6145,
            "unit": "B/op",
            "extra": "223400 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "223400 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146273,
            "unit": "ns/op\t   57109 B/op\t     610 allocs/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146273,
            "unit": "ns/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57109,
            "unit": "B/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7878 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504100112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504100112A094101Federal",
            "value": 231380104,
            "unit": "1210428822504100112A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 107.9,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11303614 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 107.9,
            "unit": "ns/op",
            "extra": "11303614 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11303614 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11303614 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 67.7,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17572707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 67.7,
            "unit": "ns/op",
            "extra": "17572707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17572707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17572707 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.37,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39844216 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.37,
            "unit": "ns/op",
            "extra": "39844216 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39844216 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39844216 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85237110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.37,
            "unit": "ns/op",
            "extra": "85237110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85237110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85237110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.546,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "183345997 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.546,
            "unit": "ns/op",
            "extra": "183345997 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "183345997 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "183345997 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 297705,
            "unit": "ns/op\t   56826 B/op\t     637 allocs/op",
            "extra": "4306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 297705,
            "unit": "ns/op",
            "extra": "4306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56826,
            "unit": "B/op",
            "extra": "4306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4306 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 297335,
            "unit": "ns/op\t   56842 B/op\t     637 allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 297335,
            "unit": "ns/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56842,
            "unit": "B/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4122 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 169518,
            "unit": "ns/op\t   57013 B/op\t     640 allocs/op",
            "extra": "6645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 169518,
            "unit": "ns/op",
            "extra": "6645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57013,
            "unit": "B/op",
            "extra": "6645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6645 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 169745,
            "unit": "ns/op\t   57059 B/op\t     640 allocs/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 169745,
            "unit": "ns/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57059,
            "unit": "B/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 358743,
            "unit": "ns/op\t   62522 B/op\t     697 allocs/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 358743,
            "unit": "ns/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62522,
            "unit": "B/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3312 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 354295,
            "unit": "ns/op\t   62526 B/op\t     697 allocs/op",
            "extra": "3577 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 354295,
            "unit": "ns/op",
            "extra": "3577 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62526,
            "unit": "B/op",
            "extra": "3577 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3577 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 362272,
            "unit": "ns/op\t   62510 B/op\t     697 allocs/op",
            "extra": "3673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 362272,
            "unit": "ns/op",
            "extra": "3673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62510,
            "unit": "B/op",
            "extra": "3673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3673 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 345044,
            "unit": "ns/op\t   62452 B/op\t     697 allocs/op",
            "extra": "4220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 345044,
            "unit": "ns/op",
            "extra": "4220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62452,
            "unit": "B/op",
            "extra": "4220 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4220 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 27.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43357714 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 27.79,
            "unit": "ns/op",
            "extra": "43357714 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43357714 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43357714 times\n4 procs"
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
          "id": "1e0e0bdae68b1f7a88f22608e93f213e328b4525",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8220be252ab8c2bf8e63e43e45938c97e347198f",
          "timestamp": "2025-04-09T02:59:18Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1e0e0bdae68b1f7a88f22608e93f213e328b4525"
        },
        "date": 1744247566456,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11553,
            "unit": "ns/op\t    9754 B/op\t      99 allocs/op",
            "extra": "101498 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11553,
            "unit": "ns/op",
            "extra": "101498 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9754,
            "unit": "B/op",
            "extra": "101498 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "101498 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39589,
            "unit": "ns/op\t   21540 B/op\t      61 allocs/op",
            "extra": "30060 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39589,
            "unit": "ns/op",
            "extra": "30060 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21540,
            "unit": "B/op",
            "extra": "30060 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30060 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72498,
            "unit": "ns/op\t   25437 B/op\t     136 allocs/op",
            "extra": "16412 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72498,
            "unit": "ns/op",
            "extra": "16412 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25437,
            "unit": "B/op",
            "extra": "16412 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16412 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29846,
            "unit": "ns/op\t   20947 B/op\t      54 allocs/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29846,
            "unit": "ns/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20947,
            "unit": "B/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 317110,
            "unit": "ns/op\t   56947 B/op\t     743 allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 317110,
            "unit": "ns/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56947,
            "unit": "B/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3904 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 301449,
            "unit": "ns/op\t   56946 B/op\t     743 allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 301449,
            "unit": "ns/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56946,
            "unit": "B/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3847 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 96966,
            "unit": "ns/op\t   27685 B/op\t     199 allocs/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 96966,
            "unit": "ns/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27685,
            "unit": "B/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12423 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 44146,
            "unit": "ns/op\t   31650 B/op\t     129 allocs/op",
            "extra": "27223 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 44146,
            "unit": "ns/op",
            "extra": "27223 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31650,
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
            "value": 198971,
            "unit": "ns/op\t   53860 B/op\t    2040 allocs/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198971,
            "unit": "ns/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53860,
            "unit": "B/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2040,
            "unit": "allocs/op",
            "extra": "6324 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 5742,
            "unit": "ns/op\t    6209 B/op\t      25 allocs/op",
            "extra": "179230 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5742,
            "unit": "ns/op",
            "extra": "179230 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6209,
            "unit": "B/op",
            "extra": "179230 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "179230 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 148500,
            "unit": "ns/op\t   57652 B/op\t     610 allocs/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 148500,
            "unit": "ns/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57652,
            "unit": "B/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "6991 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504110112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504110112A094101Federal",
            "value": 231380104,
            "unit": "1210428822504110112A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 104.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11361562 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 104.2,
            "unit": "ns/op",
            "extra": "11361562 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11361562 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11361562 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 69.01,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17532331 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 69.01,
            "unit": "ns/op",
            "extra": "17532331 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17532331 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17532331 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 29.05,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39778276 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 29.05,
            "unit": "ns/op",
            "extra": "39778276 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39778276 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39778276 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89294277 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.83,
            "unit": "ns/op",
            "extra": "89294277 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89294277 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89294277 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.927,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199650334 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.927,
            "unit": "ns/op",
            "extra": "199650334 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "199650334 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "199650334 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 310395,
            "unit": "ns/op\t   56907 B/op\t     637 allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 310395,
            "unit": "ns/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56907,
            "unit": "B/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4159 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 300769,
            "unit": "ns/op\t   56915 B/op\t     637 allocs/op",
            "extra": "3901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 300769,
            "unit": "ns/op",
            "extra": "3901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56915,
            "unit": "B/op",
            "extra": "3901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3901 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 170009,
            "unit": "ns/op\t   57101 B/op\t     640 allocs/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 170009,
            "unit": "ns/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57101,
            "unit": "B/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6517 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 176716,
            "unit": "ns/op\t   57151 B/op\t     640 allocs/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 176716,
            "unit": "ns/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57151,
            "unit": "B/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6685 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 370101,
            "unit": "ns/op\t   62623 B/op\t     697 allocs/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 370101,
            "unit": "ns/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62623,
            "unit": "B/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3376 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 371475,
            "unit": "ns/op\t   62620 B/op\t     697 allocs/op",
            "extra": "3385 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 371475,
            "unit": "ns/op",
            "extra": "3385 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62620,
            "unit": "B/op",
            "extra": "3385 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3385 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 354685,
            "unit": "ns/op\t   62615 B/op\t     697 allocs/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 354685,
            "unit": "ns/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62615,
            "unit": "B/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3535 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 352563,
            "unit": "ns/op\t   62609 B/op\t     697 allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352563,
            "unit": "ns/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62609,
            "unit": "B/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4016 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45271402 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "45271402 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45271402 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45271402 times\n4 procs"
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
          "id": "501c3fd75fc52df8cc42756db6addfd0b7ac7683",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2175af60dd18866877523a0c629854654e72afbd",
          "timestamp": "2025-04-10T02:58:38Z",
          "url": "https://github.com/moov-io/benchmarks/commit/501c3fd75fc52df8cc42756db6addfd0b7ac7683"
        },
        "date": 1744333984664,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 12305,
            "unit": "ns/op\t    9754 B/op\t      99 allocs/op",
            "extra": "102091 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 12305,
            "unit": "ns/op",
            "extra": "102091 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9754,
            "unit": "B/op",
            "extra": "102091 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102091 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 38959,
            "unit": "ns/op\t   21540 B/op\t      61 allocs/op",
            "extra": "30637 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 38959,
            "unit": "ns/op",
            "extra": "30637 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21540,
            "unit": "B/op",
            "extra": "30637 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30637 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71040,
            "unit": "ns/op\t   25437 B/op\t     136 allocs/op",
            "extra": "16675 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71040,
            "unit": "ns/op",
            "extra": "16675 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25437,
            "unit": "B/op",
            "extra": "16675 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16675 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29437,
            "unit": "ns/op\t   20947 B/op\t      54 allocs/op",
            "extra": "40525 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29437,
            "unit": "ns/op",
            "extra": "40525 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20947,
            "unit": "B/op",
            "extra": "40525 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40525 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 295499,
            "unit": "ns/op\t   56946 B/op\t     743 allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 295499,
            "unit": "ns/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56946,
            "unit": "B/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3844 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 312505,
            "unit": "ns/op\t   56947 B/op\t     743 allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 312505,
            "unit": "ns/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56947,
            "unit": "B/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3883 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99836,
            "unit": "ns/op\t   27684 B/op\t     199 allocs/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99836,
            "unit": "ns/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27684,
            "unit": "B/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12517 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43390,
            "unit": "ns/op\t   31650 B/op\t     129 allocs/op",
            "extra": "27518 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43390,
            "unit": "ns/op",
            "extra": "27518 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31650,
            "unit": "B/op",
            "extra": "27518 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27518 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200130,
            "unit": "ns/op\t   53861 B/op\t    2040 allocs/op",
            "extra": "6081 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200130,
            "unit": "ns/op",
            "extra": "6081 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 53861,
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
            "value": 5499,
            "unit": "ns/op\t    6209 B/op\t      25 allocs/op",
            "extra": "216902 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5499,
            "unit": "ns/op",
            "extra": "216902 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6209,
            "unit": "B/op",
            "extra": "216902 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "216902 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 147645,
            "unit": "ns/op\t   57652 B/op\t     610 allocs/op",
            "extra": "7618 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 147645,
            "unit": "ns/op",
            "extra": "7618 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57652,
            "unit": "B/op",
            "extra": "7618 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "7618 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504120112A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504120112A094101Federal",
            "value": 231380104,
            "unit": "1210428822504120112A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 106.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11449012 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.2,
            "unit": "ns/op",
            "extra": "11449012 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11449012 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11449012 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.96,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17648625 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.96,
            "unit": "ns/op",
            "extra": "17648625 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17648625 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17648625 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.89,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "39816297 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.89,
            "unit": "ns/op",
            "extra": "39816297 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "39816297 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "39816297 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89713078 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.69,
            "unit": "ns/op",
            "extra": "89713078 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "89713078 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "89713078 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202546351 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.991,
            "unit": "ns/op",
            "extra": "202546351 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202546351 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202546351 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 303066,
            "unit": "ns/op\t   56902 B/op\t     637 allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 303066,
            "unit": "ns/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56902,
            "unit": "B/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4077 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 299786,
            "unit": "ns/op\t   56924 B/op\t     637 allocs/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299786,
            "unit": "ns/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56924,
            "unit": "B/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "3984 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 171810,
            "unit": "ns/op\t   57106 B/op\t     640 allocs/op",
            "extra": "7038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 171810,
            "unit": "ns/op",
            "extra": "7038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57106,
            "unit": "B/op",
            "extra": "7038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "7038 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 178549,
            "unit": "ns/op\t   57138 B/op\t     640 allocs/op",
            "extra": "6133 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 178549,
            "unit": "ns/op",
            "extra": "6133 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57138,
            "unit": "B/op",
            "extra": "6133 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6133 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 371182,
            "unit": "ns/op\t   62618 B/op\t     697 allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 371182,
            "unit": "ns/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62618,
            "unit": "B/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3316 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 359707,
            "unit": "ns/op\t   62646 B/op\t     697 allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 359707,
            "unit": "ns/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62646,
            "unit": "B/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 355260,
            "unit": "ns/op\t   62594 B/op\t     697 allocs/op",
            "extra": "3592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 355260,
            "unit": "ns/op",
            "extra": "3592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62594,
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
            "value": 352316,
            "unit": "ns/op\t   62661 B/op\t     697 allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 352316,
            "unit": "ns/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62661,
            "unit": "B/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3968 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46443666 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.84,
            "unit": "ns/op",
            "extra": "46443666 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46443666 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46443666 times\n4 procs"
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
          "id": "50e86ed3e8edc80737d307b2d16da20c8fdcad9d",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 2d155aeb7aadbcbdb09f24993c552f07d2ef5b00",
          "timestamp": "2025-04-11T02:59:34Z",
          "url": "https://github.com/moov-io/benchmarks/commit/50e86ed3e8edc80737d307b2d16da20c8fdcad9d"
        },
        "date": 1744420302905,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 11484,
            "unit": "ns/op\t    9754 B/op\t      99 allocs/op",
            "extra": "102867 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 11484,
            "unit": "ns/op",
            "extra": "102867 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 9754,
            "unit": "B/op",
            "extra": "102867 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 99,
            "unit": "allocs/op",
            "extra": "102867 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 39054,
            "unit": "ns/op\t   21540 B/op\t      61 allocs/op",
            "extra": "30723 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 39054,
            "unit": "ns/op",
            "extra": "30723 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 21540,
            "unit": "B/op",
            "extra": "30723 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 61,
            "unit": "allocs/op",
            "extra": "30723 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74616,
            "unit": "ns/op\t   25437 B/op\t     136 allocs/op",
            "extra": "16896 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74616,
            "unit": "ns/op",
            "extra": "16896 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 25437,
            "unit": "B/op",
            "extra": "16896 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "16896 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 29386,
            "unit": "ns/op\t   20947 B/op\t      54 allocs/op",
            "extra": "40989 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 29386,
            "unit": "ns/op",
            "extra": "40989 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 20947,
            "unit": "B/op",
            "extra": "40989 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "40989 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 294424,
            "unit": "ns/op\t   56946 B/op\t     743 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 294424,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56946,
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
            "value": 297490,
            "unit": "ns/op\t   56946 B/op\t     743 allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 297490,
            "unit": "ns/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56946,
            "unit": "B/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 743,
            "unit": "allocs/op",
            "extra": "3961 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99482,
            "unit": "ns/op\t   27684 B/op\t     199 allocs/op",
            "extra": "12591 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99482,
            "unit": "ns/op",
            "extra": "12591 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 27684,
            "unit": "B/op",
            "extra": "12591 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 199,
            "unit": "allocs/op",
            "extra": "12591 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 43733,
            "unit": "ns/op\t   31650 B/op\t     129 allocs/op",
            "extra": "27981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 43733,
            "unit": "ns/op",
            "extra": "27981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 31650,
            "unit": "B/op",
            "extra": "27981 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "27981 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199077,
            "unit": "ns/op\t   53859 B/op\t    2040 allocs/op",
            "extra": "5905 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199077,
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
            "value": 5450,
            "unit": "ns/op\t    6209 B/op\t      25 allocs/op",
            "extra": "211027 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 5450,
            "unit": "ns/op",
            "extra": "211027 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 6209,
            "unit": "B/op",
            "extra": "211027 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "211027 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 146442,
            "unit": "ns/op\t   57651 B/op\t     610 allocs/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 146442,
            "unit": "ns/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 57651,
            "unit": "B/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 610,
            "unit": "allocs/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822504130111A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822504130111A094101Federal",
            "value": 231380104,
            "unit": "1210428822504130111A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 1018,
            "unit": "ns/op\t      96 B/op\t       4 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1018,
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
            "value": 106.8,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11397183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 106.8,
            "unit": "ns/op",
            "extra": "11397183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11397183 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11397183 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 66.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "17309679 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 66.92,
            "unit": "ns/op",
            "extra": "17309679 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "17309679 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17309679 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 28.67,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "40816929 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 28.67,
            "unit": "ns/op",
            "extra": "40816929 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "40816929 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "40816929 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88487502 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.67,
            "unit": "ns/op",
            "extra": "88487502 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "88487502 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "88487502 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202438086 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.95,
            "unit": "ns/op",
            "extra": "202438086 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202438086 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202438086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 299505,
            "unit": "ns/op\t   56907 B/op\t     637 allocs/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 299505,
            "unit": "ns/op",
            "extra": "4209 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 56907,
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
            "value": 299742,
            "unit": "ns/op\t   56920 B/op\t     637 allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 299742,
            "unit": "ns/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 56920,
            "unit": "B/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 637,
            "unit": "allocs/op",
            "extra": "4096 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 174157,
            "unit": "ns/op\t   57096 B/op\t     640 allocs/op",
            "extra": "6486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 174157,
            "unit": "ns/op",
            "extra": "6486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 57096,
            "unit": "B/op",
            "extra": "6486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6486 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 168760,
            "unit": "ns/op\t   57133 B/op\t     640 allocs/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 168760,
            "unit": "ns/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 57133,
            "unit": "B/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "6391 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 354580,
            "unit": "ns/op\t   62622 B/op\t     697 allocs/op",
            "extra": "3277 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 354580,
            "unit": "ns/op",
            "extra": "3277 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 62622,
            "unit": "B/op",
            "extra": "3277 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3277 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 355225,
            "unit": "ns/op\t   62618 B/op\t     697 allocs/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 355225,
            "unit": "ns/op",
            "extra": "3445 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 62618,
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
            "value": 352460,
            "unit": "ns/op\t   62608 B/op\t     697 allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 352460,
            "unit": "ns/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 62608,
            "unit": "B/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "3481 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 342971,
            "unit": "ns/op\t   62611 B/op\t     697 allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 342971,
            "unit": "ns/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 62611,
            "unit": "B/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 697,
            "unit": "allocs/op",
            "extra": "4074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46479853 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46479853 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46479853 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46479853 times\n4 procs"
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