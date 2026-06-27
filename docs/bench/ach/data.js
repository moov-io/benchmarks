window.BENCHMARK_DATA = {
  "lastUpdate": 1782528434060,
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
          "id": "011cef8083521ff168d125f8373a91b354ea2280",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e8dcde4e89c72f61c92aeef869165f1857bee741",
          "timestamp": "2026-06-02T06:38:56Z",
          "url": "https://github.com/moov-io/benchmarks/commit/011cef8083521ff168d125f8373a91b354ea2280"
        },
        "date": 1780458173682,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14597,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81820 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14597,
            "unit": "ns/op",
            "extra": "81820 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81820 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81820 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 290162148,
            "unit": "ns/op\t42450802 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 290162148,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450802,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 98584988,
            "unit": "ns/op\t42425958 B/op\t  203606 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 98584988,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425958,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1368130110,
            "unit": "ns/op\t215541544 B/op\t 1042869 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1368130110,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541544,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042869,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 492969412,
            "unit": "ns/op\t215426338 B/op\t 1042809 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 492969412,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426338,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042809,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42912,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "27954 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42912,
            "unit": "ns/op",
            "extra": "27954 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "27954 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27954 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73580,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16579 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73580,
            "unit": "ns/op",
            "extra": "16579 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16579 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16579 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31516,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31516,
            "unit": "ns/op",
            "extra": "37572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37572 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37572 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 271835,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4352 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 271835,
            "unit": "ns/op",
            "extra": "4352 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4352 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4352 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 272117,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 272117,
            "unit": "ns/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4288 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101764,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101764,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
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
            "value": 51184,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "23268 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51184,
            "unit": "ns/op",
            "extra": "23268 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "23268 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23268 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 217763,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5697 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 217763,
            "unit": "ns/op",
            "extra": "5697 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5697 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5697 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8524,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "139064 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8524,
            "unit": "ns/op",
            "extra": "139064 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "139064 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "139064 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157716,
            "unit": "ns/op\t   61153 B/op\t     721 allocs/op",
            "extra": "7040 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157716,
            "unit": "ns/op",
            "extra": "7040 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61153,
            "unit": "B/op",
            "extra": "7040 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7040 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606040342A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606040342A094101Federal",
            "value": 231380104,
            "unit": "1210428822606040342A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 93.83,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12721104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 93.83,
            "unit": "ns/op",
            "extra": "12721104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12721104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12721104 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.21,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16697841 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.21,
            "unit": "ns/op",
            "extra": "16697841 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16697841 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16697841 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.48,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44457824 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.48,
            "unit": "ns/op",
            "extra": "44457824 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44457824 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44457824 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91776504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.12,
            "unit": "ns/op",
            "extra": "91776504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91776504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91776504 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192877614 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.248,
            "unit": "ns/op",
            "extra": "192877614 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192877614 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192877614 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 266971,
            "unit": "ns/op\t   54144 B/op\t     306 allocs/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 266971,
            "unit": "ns/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54144,
            "unit": "B/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 262429,
            "unit": "ns/op\t   54153 B/op\t     306 allocs/op",
            "extra": "4581 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 262429,
            "unit": "ns/op",
            "extra": "4581 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54153,
            "unit": "B/op",
            "extra": "4581 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4581 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 149020,
            "unit": "ns/op\t   54544 B/op\t     310 allocs/op",
            "extra": "7912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 149020,
            "unit": "ns/op",
            "extra": "7912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54544,
            "unit": "B/op",
            "extra": "7912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7912 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 152189,
            "unit": "ns/op\t   54589 B/op\t     310 allocs/op",
            "extra": "6894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 152189,
            "unit": "ns/op",
            "extra": "6894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54589,
            "unit": "B/op",
            "extra": "6894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 330447,
            "unit": "ns/op\t   59856 B/op\t     366 allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 330447,
            "unit": "ns/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59856,
            "unit": "B/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3813 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 317663,
            "unit": "ns/op\t   59906 B/op\t     366 allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 317663,
            "unit": "ns/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59906,
            "unit": "B/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 315741,
            "unit": "ns/op\t   59881 B/op\t     366 allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 315741,
            "unit": "ns/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59881,
            "unit": "B/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3898 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 311140,
            "unit": "ns/op\t   59668 B/op\t     367 allocs/op",
            "extra": "4512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 311140,
            "unit": "ns/op",
            "extra": "4512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59668,
            "unit": "B/op",
            "extra": "4512 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4512 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45723360 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.9,
            "unit": "ns/op",
            "extra": "45723360 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45723360 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45723360 times\n4 procs"
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
          "id": "a24d14dcc72d239fc9da9e852476717bd218eb53",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 81c0262040e7a4f7fa9ec61195de2207270be33d",
          "timestamp": "2026-06-03T06:49:37Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a24d14dcc72d239fc9da9e852476717bd218eb53"
        },
        "date": 1780544339255,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13144,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "89700 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13144,
            "unit": "ns/op",
            "extra": "89700 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "89700 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "89700 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 268713130,
            "unit": "ns/op\t42450930 B/op\t  203657 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 268713130,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450930,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203657,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 92251108,
            "unit": "ns/op\t42425410 B/op\t  203606 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 92251108,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425410,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1415581544,
            "unit": "ns/op\t215541544 B/op\t 1042869 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1415581544,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541544,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042869,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 454147552,
            "unit": "ns/op\t215426266 B/op\t 1042809 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 454147552,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426266,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042809,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44673,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "28363 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44673,
            "unit": "ns/op",
            "extra": "28363 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "28363 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "28363 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71422,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71422,
            "unit": "ns/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16797 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31157,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38407 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31157,
            "unit": "ns/op",
            "extra": "38407 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38407 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38407 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 261822,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 261822,
            "unit": "ns/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4310 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 266268,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4383 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 266268,
            "unit": "ns/op",
            "extra": "4383 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4383 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4383 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 99510,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 99510,
            "unit": "ns/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
            "unit": "B/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12084 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47789,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "24831 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47789,
            "unit": "ns/op",
            "extra": "24831 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "24831 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "24831 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 193454,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "6038 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 193454,
            "unit": "ns/op",
            "extra": "6038 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "6038 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6038 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7827,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "151836 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7827,
            "unit": "ns/op",
            "extra": "151836 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "151836 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "151836 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151595,
            "unit": "ns/op\t   61152 B/op\t     721 allocs/op",
            "extra": "7993 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151595,
            "unit": "ns/op",
            "extra": "7993 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61152,
            "unit": "B/op",
            "extra": "7993 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7993 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606050338A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606050338A094101Federal",
            "value": 231380104,
            "unit": "1210428822606050338A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 910.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1315988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 910.7,
            "unit": "ns/op",
            "extra": "1315988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1315988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1315988 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 93.08,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12704258 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 93.08,
            "unit": "ns/op",
            "extra": "12704258 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12704258 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12704258 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.59,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19507683 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.59,
            "unit": "ns/op",
            "extra": "19507683 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19507683 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19507683 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.61,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44600670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.61,
            "unit": "ns/op",
            "extra": "44600670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44600670 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44600670 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87543014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.71,
            "unit": "ns/op",
            "extra": "87543014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87543014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87543014 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.681,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212537582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.681,
            "unit": "ns/op",
            "extra": "212537582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212537582 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212537582 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 271896,
            "unit": "ns/op\t   54141 B/op\t     306 allocs/op",
            "extra": "4738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 271896,
            "unit": "ns/op",
            "extra": "4738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54141,
            "unit": "B/op",
            "extra": "4738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4738 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 262264,
            "unit": "ns/op\t   54151 B/op\t     306 allocs/op",
            "extra": "4767 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 262264,
            "unit": "ns/op",
            "extra": "4767 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54151,
            "unit": "B/op",
            "extra": "4767 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4767 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 156667,
            "unit": "ns/op\t   54558 B/op\t     310 allocs/op",
            "extra": "7093 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 156667,
            "unit": "ns/op",
            "extra": "7093 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54558,
            "unit": "B/op",
            "extra": "7093 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7093 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 158180,
            "unit": "ns/op\t   54594 B/op\t     310 allocs/op",
            "extra": "7522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 158180,
            "unit": "ns/op",
            "extra": "7522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54594,
            "unit": "B/op",
            "extra": "7522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7522 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 340702,
            "unit": "ns/op\t   59879 B/op\t     366 allocs/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 340702,
            "unit": "ns/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59879,
            "unit": "B/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3501 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 321482,
            "unit": "ns/op\t   59943 B/op\t     366 allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 321482,
            "unit": "ns/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59943,
            "unit": "B/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4033 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 318087,
            "unit": "ns/op\t   59873 B/op\t     366 allocs/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 318087,
            "unit": "ns/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59873,
            "unit": "B/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3918 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 313389,
            "unit": "ns/op\t   59642 B/op\t     367 allocs/op",
            "extra": "4650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 313389,
            "unit": "ns/op",
            "extra": "4650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59642,
            "unit": "B/op",
            "extra": "4650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4650 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48460639 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.08,
            "unit": "ns/op",
            "extra": "48460639 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48460639 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48460639 times\n4 procs"
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
          "id": "c2b463408b7bc148703b2e7e605b5ea66337a38a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for e599f1b509db080d510669f2cca4de8fc7297ceb",
          "timestamp": "2026-06-04T06:39:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c2b463408b7bc148703b2e7e605b5ea66337a38a"
        },
        "date": 1780629934442,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13511,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "91882 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13511,
            "unit": "ns/op",
            "extra": "91882 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "91882 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "91882 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 266665556,
            "unit": "ns/op\t42450706 B/op\t  203655 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 266665556,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450706,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203655,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 93932325,
            "unit": "ns/op\t42425328 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 93932325,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425328,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1389933222,
            "unit": "ns/op\t215541496 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1389933222,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541496,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 462546137,
            "unit": "ns/op\t215426666 B/op\t 1042811 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 462546137,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426666,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042811,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42527,
            "unit": "ns/op\t   23331 B/op\t     114 allocs/op",
            "extra": "28314 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42527,
            "unit": "ns/op",
            "extra": "28314 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23331,
            "unit": "B/op",
            "extra": "28314 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "28314 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75264,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75264,
            "unit": "ns/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16437 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31779,
            "unit": "ns/op\t   21866 B/op\t      77 allocs/op",
            "extra": "39133 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31779,
            "unit": "ns/op",
            "extra": "39133 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21866,
            "unit": "B/op",
            "extra": "39133 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "39133 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 263696,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 263696,
            "unit": "ns/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 270923,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 270923,
            "unit": "ns/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4282 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 100282,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "12081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 100282,
            "unit": "ns/op",
            "extra": "12081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
            "unit": "B/op",
            "extra": "12081 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12081 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48279,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "23466 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48279,
            "unit": "ns/op",
            "extra": "23466 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "23466 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23466 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 193898,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 193898,
            "unit": "ns/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6452 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7819,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "151370 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7819,
            "unit": "ns/op",
            "extra": "151370 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "151370 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "151370 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162153,
            "unit": "ns/op\t   61153 B/op\t     721 allocs/op",
            "extra": "7432 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162153,
            "unit": "ns/op",
            "extra": "7432 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61153,
            "unit": "B/op",
            "extra": "7432 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7432 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606060324A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606060324A094101Federal",
            "value": 231380104,
            "unit": "1210428822606060324A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 905.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1329309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 905.7,
            "unit": "ns/op",
            "extra": "1329309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1329309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1329309 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 93.02,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12829094 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 93.02,
            "unit": "ns/op",
            "extra": "12829094 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12829094 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12829094 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.27,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19808012 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.27,
            "unit": "ns/op",
            "extra": "19808012 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19808012 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19808012 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.96,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43494216 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.96,
            "unit": "ns/op",
            "extra": "43494216 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43494216 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43494216 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87829900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.71,
            "unit": "ns/op",
            "extra": "87829900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87829900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87829900 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.637,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200535110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.637,
            "unit": "ns/op",
            "extra": "200535110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "200535110 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "200535110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 273683,
            "unit": "ns/op\t   54139 B/op\t     306 allocs/op",
            "extra": "4761 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 273683,
            "unit": "ns/op",
            "extra": "4761 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54139,
            "unit": "B/op",
            "extra": "4761 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4761 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 268695,
            "unit": "ns/op\t   54154 B/op\t     306 allocs/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 268695,
            "unit": "ns/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54154,
            "unit": "B/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4596 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 158766,
            "unit": "ns/op\t   54556 B/op\t     310 allocs/op",
            "extra": "7274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 158766,
            "unit": "ns/op",
            "extra": "7274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54556,
            "unit": "B/op",
            "extra": "7274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7274 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 154273,
            "unit": "ns/op\t   54597 B/op\t     310 allocs/op",
            "extra": "6746 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 154273,
            "unit": "ns/op",
            "extra": "6746 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54597,
            "unit": "B/op",
            "extra": "6746 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6746 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 335831,
            "unit": "ns/op\t   59880 B/op\t     366 allocs/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 335831,
            "unit": "ns/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59880,
            "unit": "B/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 324103,
            "unit": "ns/op\t   59861 B/op\t     366 allocs/op",
            "extra": "3658 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 324103,
            "unit": "ns/op",
            "extra": "3658 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59861,
            "unit": "B/op",
            "extra": "3658 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3658 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 321251,
            "unit": "ns/op\t   59922 B/op\t     366 allocs/op",
            "extra": "4064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 321251,
            "unit": "ns/op",
            "extra": "4064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59922,
            "unit": "B/op",
            "extra": "4064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 314460,
            "unit": "ns/op\t   59674 B/op\t     367 allocs/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 314460,
            "unit": "ns/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59674,
            "unit": "B/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47842405 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.48,
            "unit": "ns/op",
            "extra": "47842405 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47842405 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47842405 times\n4 procs"
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
          "id": "71926fc651dde55302db5e40a7978ef7e3f57fd3",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 291eb5dcd3c4f09ad47c4ef34a3119782cfc149d",
          "timestamp": "2026-06-05T06:19:00Z",
          "url": "https://github.com/moov-io/benchmarks/commit/71926fc651dde55302db5e40a7978ef7e3f57fd3"
        },
        "date": 1780714070808,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13403,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "76506 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13403,
            "unit": "ns/op",
            "extra": "76506 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "76506 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "76506 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 262898958,
            "unit": "ns/op\t42450936 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 262898958,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450936,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 95213332,
            "unit": "ns/op\t42425546 B/op\t  203606 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 95213332,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425546,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1329729054,
            "unit": "ns/op\t215540576 B/op\t 1042861 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1329729054,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215540576,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042861,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 445024329,
            "unit": "ns/op\t215426338 B/op\t 1042809 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 445024329,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426338,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042809,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42841,
            "unit": "ns/op\t   23331 B/op\t     114 allocs/op",
            "extra": "27738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42841,
            "unit": "ns/op",
            "extra": "27738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23331,
            "unit": "B/op",
            "extra": "27738 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27738 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 71686,
            "unit": "ns/op\t   26941 B/op\t     159 allocs/op",
            "extra": "16719 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 71686,
            "unit": "ns/op",
            "extra": "16719 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26941,
            "unit": "B/op",
            "extra": "16719 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16719 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31925,
            "unit": "ns/op\t   21866 B/op\t      77 allocs/op",
            "extra": "37857 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31925,
            "unit": "ns/op",
            "extra": "37857 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21866,
            "unit": "B/op",
            "extra": "37857 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37857 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 262640,
            "unit": "ns/op\t   56394 B/op\t     552 allocs/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 262640,
            "unit": "ns/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56394,
            "unit": "B/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4322 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 268192,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 268192,
            "unit": "ns/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4252 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102789,
            "unit": "ns/op\t   29774 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102789,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29774,
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
            "value": 47596,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "24967 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47596,
            "unit": "ns/op",
            "extra": "24967 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "24967 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "24967 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 191043,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5907 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 191043,
            "unit": "ns/op",
            "extra": "5907 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5907 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5907 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7909,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "147752 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7909,
            "unit": "ns/op",
            "extra": "147752 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "147752 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147752 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151367,
            "unit": "ns/op\t   61155 B/op\t     721 allocs/op",
            "extra": "7359 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151367,
            "unit": "ns/op",
            "extra": "7359 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61155,
            "unit": "B/op",
            "extra": "7359 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7359 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606070247A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606070247A094101Federal",
            "value": 231380104,
            "unit": "1210428822606070247A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 897.2,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1338854 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 897.2,
            "unit": "ns/op",
            "extra": "1338854 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1338854 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1338854 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 97.84,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12804127 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 97.84,
            "unit": "ns/op",
            "extra": "12804127 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12804127 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12804127 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 58.79,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19896759 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 58.79,
            "unit": "ns/op",
            "extra": "19896759 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19896759 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19896759 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.8,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43889701 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.8,
            "unit": "ns/op",
            "extra": "43889701 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43889701 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43889701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87835898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.71,
            "unit": "ns/op",
            "extra": "87835898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87835898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87835898 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.773,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212834107 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.773,
            "unit": "ns/op",
            "extra": "212834107 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212834107 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212834107 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 264765,
            "unit": "ns/op\t   54134 B/op\t     306 allocs/op",
            "extra": "4862 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 264765,
            "unit": "ns/op",
            "extra": "4862 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54134,
            "unit": "B/op",
            "extra": "4862 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4862 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 268583,
            "unit": "ns/op\t   54165 B/op\t     306 allocs/op",
            "extra": "4819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 268583,
            "unit": "ns/op",
            "extra": "4819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54165,
            "unit": "B/op",
            "extra": "4819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4819 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 152670,
            "unit": "ns/op\t   54551 B/op\t     310 allocs/op",
            "extra": "8478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 152670,
            "unit": "ns/op",
            "extra": "8478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54551,
            "unit": "B/op",
            "extra": "8478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "8478 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 148671,
            "unit": "ns/op\t   54575 B/op\t     310 allocs/op",
            "extra": "7874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 148671,
            "unit": "ns/op",
            "extra": "7874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54575,
            "unit": "B/op",
            "extra": "7874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7874 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 321400,
            "unit": "ns/op\t   59869 B/op\t     366 allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 321400,
            "unit": "ns/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59869,
            "unit": "B/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4047 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 314439,
            "unit": "ns/op\t   59886 B/op\t     366 allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 314439,
            "unit": "ns/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59886,
            "unit": "B/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3902 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 310093,
            "unit": "ns/op\t   59906 B/op\t     366 allocs/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 310093,
            "unit": "ns/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59906,
            "unit": "B/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3860 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 313520,
            "unit": "ns/op\t   59638 B/op\t     367 allocs/op",
            "extra": "4634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 313520,
            "unit": "ns/op",
            "extra": "4634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59638,
            "unit": "B/op",
            "extra": "4634 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4634 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48628923 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.67,
            "unit": "ns/op",
            "extra": "48628923 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48628923 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48628923 times\n4 procs"
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
          "id": "a4e892bf9b056574f343ca271f5ff8a18c72f8aa",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 93a38634d825a66bd8d8e0cf6f7434c9769db821",
          "timestamp": "2026-06-06T05:51:47Z",
          "url": "https://github.com/moov-io/benchmarks/commit/a4e892bf9b056574f343ca271f5ff8a18c72f8aa"
        },
        "date": 1780803098934,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 17759,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "59752 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 17759,
            "unit": "ns/op",
            "extra": "59752 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "59752 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "59752 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 269922706,
            "unit": "ns/op\t42451008 B/op\t  203657 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 269922706,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42451008,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203657,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 98099747,
            "unit": "ns/op\t42425402 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 98099747,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425402,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1363273296,
            "unit": "ns/op\t215541352 B/op\t 1042866 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1363273296,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541352,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042866,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 477788056,
            "unit": "ns/op\t215426560 B/op\t 1042810 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 477788056,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426560,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042810,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 46999,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 46999,
            "unit": "ns/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27188 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74229,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74229,
            "unit": "ns/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16071 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 34224,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37574 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 34224,
            "unit": "ns/op",
            "extra": "37574 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37574 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 275744,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 275744,
            "unit": "ns/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4184 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 274525,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 274525,
            "unit": "ns/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4182 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 104745,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 104745,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
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
            "value": 51733,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "23244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51733,
            "unit": "ns/op",
            "extra": "23244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "23244 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23244 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 219386,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5265 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 219386,
            "unit": "ns/op",
            "extra": "5265 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5265 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5265 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8512,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "138440 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8512,
            "unit": "ns/op",
            "extra": "138440 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "138440 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "138440 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 160572,
            "unit": "ns/op\t   61155 B/op\t     721 allocs/op",
            "extra": "7081 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 160572,
            "unit": "ns/op",
            "extra": "7081 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61155,
            "unit": "B/op",
            "extra": "7081 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7081 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606080331A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606080331A094101Federal",
            "value": 231380104,
            "unit": "1210428822606080331A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1200212 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1005,
            "unit": "ns/op",
            "extra": "1200212 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1200212 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1200212 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 91.86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12871454 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.86,
            "unit": "ns/op",
            "extra": "12871454 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12871454 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12871454 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.59,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16783154 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.59,
            "unit": "ns/op",
            "extra": "16783154 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16783154 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16783154 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.4,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42961963 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.4,
            "unit": "ns/op",
            "extra": "42961963 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "42961963 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "42961963 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91554598 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.16,
            "unit": "ns/op",
            "extra": "91554598 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91554598 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91554598 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.236,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192721162 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.236,
            "unit": "ns/op",
            "extra": "192721162 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192721162 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192721162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 263894,
            "unit": "ns/op\t   54143 B/op\t     306 allocs/op",
            "extra": "4804 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 263894,
            "unit": "ns/op",
            "extra": "4804 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54143,
            "unit": "B/op",
            "extra": "4804 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4804 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 261461,
            "unit": "ns/op\t   54155 B/op\t     306 allocs/op",
            "extra": "4425 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 261461,
            "unit": "ns/op",
            "extra": "4425 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54155,
            "unit": "B/op",
            "extra": "4425 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4425 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 176452,
            "unit": "ns/op\t   54543 B/op\t     310 allocs/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 176452,
            "unit": "ns/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54543,
            "unit": "B/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6534 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 167551,
            "unit": "ns/op\t   54589 B/op\t     310 allocs/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 167551,
            "unit": "ns/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54589,
            "unit": "B/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7110 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 326810,
            "unit": "ns/op\t   59857 B/op\t     366 allocs/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 326810,
            "unit": "ns/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59857,
            "unit": "B/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3661 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 330210,
            "unit": "ns/op\t   59851 B/op\t     366 allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 330210,
            "unit": "ns/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59851,
            "unit": "B/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3801 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 313559,
            "unit": "ns/op\t   59850 B/op\t     366 allocs/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 313559,
            "unit": "ns/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59850,
            "unit": "B/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 318564,
            "unit": "ns/op\t   59603 B/op\t     367 allocs/op",
            "extra": "4724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 318564,
            "unit": "ns/op",
            "extra": "4724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59603,
            "unit": "B/op",
            "extra": "4724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4724 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44118326 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.96,
            "unit": "ns/op",
            "extra": "44118326 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44118326 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44118326 times\n4 procs"
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
          "id": "1ed1a115863e6ece567a65683d1c489bd5ac6dff",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 62cf437f25a0d6eed82188ed5383a4285b75e956",
          "timestamp": "2026-06-07T06:20:42Z",
          "url": "https://github.com/moov-io/benchmarks/commit/1ed1a115863e6ece567a65683d1c489bd5ac6dff"
        },
        "date": 1780889811550,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13652,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81426 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13652,
            "unit": "ns/op",
            "extra": "81426 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81426 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81426 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 273604562,
            "unit": "ns/op\t42451144 B/op\t  203659 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 273604562,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42451144,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203659,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 94711388,
            "unit": "ns/op\t42425886 B/op\t  203606 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 94711388,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425886,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1353030795,
            "unit": "ns/op\t215541640 B/op\t 1042870 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1353030795,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541640,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042870,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 467256071,
            "unit": "ns/op\t215425992 B/op\t 1042807 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 467256071,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215425992,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042807,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44190,
            "unit": "ns/op\t   23331 B/op\t     114 allocs/op",
            "extra": "27297 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44190,
            "unit": "ns/op",
            "extra": "27297 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23331,
            "unit": "B/op",
            "extra": "27297 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27297 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73523,
            "unit": "ns/op\t   26940 B/op\t     159 allocs/op",
            "extra": "16228 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73523,
            "unit": "ns/op",
            "extra": "16228 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26940,
            "unit": "B/op",
            "extra": "16228 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16228 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32688,
            "unit": "ns/op\t   21866 B/op\t      77 allocs/op",
            "extra": "36369 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32688,
            "unit": "ns/op",
            "extra": "36369 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21866,
            "unit": "B/op",
            "extra": "36369 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "36369 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 268435,
            "unit": "ns/op\t   56394 B/op\t     552 allocs/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 268435,
            "unit": "ns/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56394,
            "unit": "B/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4243 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 267903,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 267903,
            "unit": "ns/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4398 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101557,
            "unit": "ns/op\t   29774 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101557,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29774,
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
            "value": 48828,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48828,
            "unit": "ns/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "24522 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 191979,
            "unit": "ns/op\t   54713 B/op\t    2069 allocs/op",
            "extra": "5734 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 191979,
            "unit": "ns/op",
            "extra": "5734 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54713,
            "unit": "B/op",
            "extra": "5734 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5734 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 7955,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "147489 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 7955,
            "unit": "ns/op",
            "extra": "147489 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "147489 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147489 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154577,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7312 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154577,
            "unit": "ns/op",
            "extra": "7312 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7312 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7312 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606090336A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606090336A094101Federal",
            "value": 231380104,
            "unit": "1210428822606090336A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 909.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1322733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 909.1,
            "unit": "ns/op",
            "extra": "1322733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1322733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1322733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 95.88,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12669895 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 95.88,
            "unit": "ns/op",
            "extra": "12669895 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12669895 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12669895 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.18,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19731380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.18,
            "unit": "ns/op",
            "extra": "19731380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19731380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19731380 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43955962 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26,
            "unit": "ns/op",
            "extra": "43955962 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43955962 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43955962 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87341990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.79,
            "unit": "ns/op",
            "extra": "87341990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "87341990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "87341990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.988,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "198818652 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.988,
            "unit": "ns/op",
            "extra": "198818652 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "198818652 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "198818652 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 265427,
            "unit": "ns/op\t   54146 B/op\t     306 allocs/op",
            "extra": "4780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 265427,
            "unit": "ns/op",
            "extra": "4780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54146,
            "unit": "B/op",
            "extra": "4780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 266112,
            "unit": "ns/op\t   54158 B/op\t     306 allocs/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 266112,
            "unit": "ns/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54158,
            "unit": "B/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4480 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 155152,
            "unit": "ns/op\t   54542 B/op\t     310 allocs/op",
            "extra": "6624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 155152,
            "unit": "ns/op",
            "extra": "6624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54542,
            "unit": "B/op",
            "extra": "6624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6624 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 155428,
            "unit": "ns/op\t   54598 B/op\t     310 allocs/op",
            "extra": "6973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 155428,
            "unit": "ns/op",
            "extra": "6973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54598,
            "unit": "B/op",
            "extra": "6973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6973 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 338328,
            "unit": "ns/op\t   59887 B/op\t     366 allocs/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 338328,
            "unit": "ns/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59887,
            "unit": "B/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 330017,
            "unit": "ns/op\t   59885 B/op\t     366 allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 330017,
            "unit": "ns/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59885,
            "unit": "B/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 327830,
            "unit": "ns/op\t   59835 B/op\t     366 allocs/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 327830,
            "unit": "ns/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59835,
            "unit": "B/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3808 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 312254,
            "unit": "ns/op\t   59604 B/op\t     367 allocs/op",
            "extra": "4726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 312254,
            "unit": "ns/op",
            "extra": "4726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59604,
            "unit": "B/op",
            "extra": "4726 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48414608 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.67,
            "unit": "ns/op",
            "extra": "48414608 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48414608 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48414608 times\n4 procs"
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
          "id": "19aca8415c67c354e6817c0f93aee7bc1d2b28e2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for ff7dc2428c8bc04d32ef4cbdcff0d801a067cec1",
          "timestamp": "2026-06-08T06:39:55Z",
          "url": "https://github.com/moov-io/benchmarks/commit/19aca8415c67c354e6817c0f93aee7bc1d2b28e2"
        },
        "date": 1780973210124,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14520,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "82713 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14520,
            "unit": "ns/op",
            "extra": "82713 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "82713 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82713 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 292936445,
            "unit": "ns/op\t42450802 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 292936445,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450802,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 98825534,
            "unit": "ns/op\t42425463 B/op\t  203606 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 98825534,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425463,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1459126870,
            "unit": "ns/op\t215541688 B/op\t 1042871 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1459126870,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541688,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042871,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 501898060,
            "unit": "ns/op\t215426117 B/op\t 1042807 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 501898060,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426117,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042807,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43381,
            "unit": "ns/op\t   23333 B/op\t     114 allocs/op",
            "extra": "27159 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43381,
            "unit": "ns/op",
            "extra": "27159 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23333,
            "unit": "B/op",
            "extra": "27159 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27159 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72951,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16432 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72951,
            "unit": "ns/op",
            "extra": "16432 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16432 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16432 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31727,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31727,
            "unit": "ns/op",
            "extra": "37898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37898 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37898 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 272430,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4344 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 272430,
            "unit": "ns/op",
            "extra": "4344 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4344 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4344 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 273384,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4191 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 273384,
            "unit": "ns/op",
            "extra": "4191 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4191 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4191 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101390,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101390,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
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
            "value": 53844,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "23379 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 53844,
            "unit": "ns/op",
            "extra": "23379 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "23379 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23379 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 221581,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 221581,
            "unit": "ns/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5724 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8480,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "137916 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8480,
            "unit": "ns/op",
            "extra": "137916 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "137916 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "137916 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 157934,
            "unit": "ns/op\t   61156 B/op\t     721 allocs/op",
            "extra": "7536 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 157934,
            "unit": "ns/op",
            "extra": "7536 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61156,
            "unit": "B/op",
            "extra": "7536 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7536 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606100246A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606100246A094101Federal",
            "value": 231380104,
            "unit": "1210428822606100246A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 91.4,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13122316 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.4,
            "unit": "ns/op",
            "extra": "13122316 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13122316 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13122316 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 70.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "16506883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 70.5,
            "unit": "ns/op",
            "extra": "16506883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16506883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16506883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.03,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43263682 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.03,
            "unit": "ns/op",
            "extra": "43263682 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43263682 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43263682 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91635685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.09,
            "unit": "ns/op",
            "extra": "91635685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91635685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91635685 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 6.278,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192496747 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 6.278,
            "unit": "ns/op",
            "extra": "192496747 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192496747 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192496747 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 264524,
            "unit": "ns/op\t   54147 B/op\t     306 allocs/op",
            "extra": "4843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 264524,
            "unit": "ns/op",
            "extra": "4843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54147,
            "unit": "B/op",
            "extra": "4843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4843 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 268755,
            "unit": "ns/op\t   54154 B/op\t     306 allocs/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 268755,
            "unit": "ns/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54154,
            "unit": "B/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4510 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 163908,
            "unit": "ns/op\t   54543 B/op\t     310 allocs/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 163908,
            "unit": "ns/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54543,
            "unit": "B/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6538 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 157336,
            "unit": "ns/op\t   54588 B/op\t     310 allocs/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 157336,
            "unit": "ns/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54588,
            "unit": "B/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6879 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 328362,
            "unit": "ns/op\t   59865 B/op\t     366 allocs/op",
            "extra": "3559 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 328362,
            "unit": "ns/op",
            "extra": "3559 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59865,
            "unit": "B/op",
            "extra": "3559 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3559 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 334561,
            "unit": "ns/op\t   59859 B/op\t     366 allocs/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 334561,
            "unit": "ns/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59859,
            "unit": "B/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3790 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 317566,
            "unit": "ns/op\t   59827 B/op\t     366 allocs/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 317566,
            "unit": "ns/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59827,
            "unit": "B/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3836 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 311626,
            "unit": "ns/op\t   59629 B/op\t     367 allocs/op",
            "extra": "4658 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 311626,
            "unit": "ns/op",
            "extra": "4658 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59629,
            "unit": "B/op",
            "extra": "4658 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4658 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46350406 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.03,
            "unit": "ns/op",
            "extra": "46350406 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46350406 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46350406 times\n4 procs"
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
          "id": "f6b659d94be4246b326299a2d90ba60c26d45574",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 16ab8a88391534f3914ed790e32628d756344ca6",
          "timestamp": "2026-06-09T06:06:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f6b659d94be4246b326299a2d90ba60c26d45574"
        },
        "date": 1781060387375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13373,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "89427 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13373,
            "unit": "ns/op",
            "extra": "89427 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "89427 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "89427 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 266099948,
            "unit": "ns/op\t42450944 B/op\t  203657 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 266099948,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450944,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203657,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 99029247,
            "unit": "ns/op\t42425364 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 99029247,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425364,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1423067724,
            "unit": "ns/op\t215541496 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1423067724,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541496,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 500300019,
            "unit": "ns/op\t215427368 B/op\t 1042816 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 500300019,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215427368,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042816,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 36531,
            "unit": "ns/op\t   23331 B/op\t     114 allocs/op",
            "extra": "33039 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 36531,
            "unit": "ns/op",
            "extra": "33039 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23331,
            "unit": "B/op",
            "extra": "33039 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "33039 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 63023,
            "unit": "ns/op\t   26941 B/op\t     159 allocs/op",
            "extra": "19126 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 63023,
            "unit": "ns/op",
            "extra": "19126 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26941,
            "unit": "B/op",
            "extra": "19126 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "19126 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 25982,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "46600 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 25982,
            "unit": "ns/op",
            "extra": "46600 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "46600 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "46600 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 249641,
            "unit": "ns/op\t   56399 B/op\t     552 allocs/op",
            "extra": "4796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 249641,
            "unit": "ns/op",
            "extra": "4796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56399,
            "unit": "B/op",
            "extra": "4796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4796 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 245640,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 245640,
            "unit": "ns/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4574 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 88343,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "13046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 88343,
            "unit": "ns/op",
            "extra": "13046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
            "unit": "B/op",
            "extra": "13046 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "13046 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47387,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "24346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47387,
            "unit": "ns/op",
            "extra": "24346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "24346 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "24346 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 200158,
            "unit": "ns/op\t   54718 B/op\t    2069 allocs/op",
            "extra": "5926 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 200158,
            "unit": "ns/op",
            "extra": "5926 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54718,
            "unit": "B/op",
            "extra": "5926 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5926 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8066,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "148078 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8066,
            "unit": "ns/op",
            "extra": "148078 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "148078 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148078 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 153670,
            "unit": "ns/op\t   61156 B/op\t     721 allocs/op",
            "extra": "7791 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 153670,
            "unit": "ns/op",
            "extra": "7791 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61156,
            "unit": "B/op",
            "extra": "7791 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7791 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606110259A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606110259A094101Federal",
            "value": 231380104,
            "unit": "1210428822606110259A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1216759 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 988.3,
            "unit": "ns/op",
            "extra": "1216759 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1216759 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1216759 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 85.68,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13823466 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 85.68,
            "unit": "ns/op",
            "extra": "13823466 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13823466 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13823466 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 54.5,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "21543153 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 54.5,
            "unit": "ns/op",
            "extra": "21543153 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "21543153 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "21543153 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 23.46,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "49140534 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 23.46,
            "unit": "ns/op",
            "extra": "49140534 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "49140534 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "49140534 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 11.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99852874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 11.9,
            "unit": "ns/op",
            "extra": "99852874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "99852874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "99852874 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.004,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "243690628 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.004,
            "unit": "ns/op",
            "extra": "243690628 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "243690628 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "243690628 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 241180,
            "unit": "ns/op\t   54146 B/op\t     306 allocs/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 241180,
            "unit": "ns/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54146,
            "unit": "B/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 235729,
            "unit": "ns/op\t   54160 B/op\t     306 allocs/op",
            "extra": "4950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 235729,
            "unit": "ns/op",
            "extra": "4950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54160,
            "unit": "B/op",
            "extra": "4950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4950 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 165367,
            "unit": "ns/op\t   54544 B/op\t     310 allocs/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 165367,
            "unit": "ns/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54544,
            "unit": "B/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6616 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 171941,
            "unit": "ns/op\t   54571 B/op\t     310 allocs/op",
            "extra": "6537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 171941,
            "unit": "ns/op",
            "extra": "6537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54571,
            "unit": "B/op",
            "extra": "6537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6537 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 294884,
            "unit": "ns/op\t   59870 B/op\t     366 allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 294884,
            "unit": "ns/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59870,
            "unit": "B/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4056 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 293908,
            "unit": "ns/op\t   59860 B/op\t     366 allocs/op",
            "extra": "4369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 293908,
            "unit": "ns/op",
            "extra": "4369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59860,
            "unit": "B/op",
            "extra": "4369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4369 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 294015,
            "unit": "ns/op\t   59925 B/op\t     366 allocs/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 294015,
            "unit": "ns/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59925,
            "unit": "B/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 278802,
            "unit": "ns/op\t   59504 B/op\t     367 allocs/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 278802,
            "unit": "ns/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59504,
            "unit": "B/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 22.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52752128 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 22.72,
            "unit": "ns/op",
            "extra": "52752128 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52752128 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52752128 times\n4 procs"
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
          "id": "3c4b4865b6a64d2be5d3f9daf17e2430f7faacd5",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f5092511e7f7bd7a7ee66d5c203fc5f0fb5f4725",
          "timestamp": "2026-06-10T06:20:29Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3c4b4865b6a64d2be5d3f9daf17e2430f7faacd5"
        },
        "date": 1781148930003,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13264,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "90110 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13264,
            "unit": "ns/op",
            "extra": "90110 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "90110 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "90110 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 266398510,
            "unit": "ns/op\t42451008 B/op\t  203657 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 266398510,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42451008,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203657,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 89806786,
            "unit": "ns/op\t42425328 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 89806786,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425328,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1378529630,
            "unit": "ns/op\t215541352 B/op\t 1042866 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1378529630,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541352,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042866,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 448092151,
            "unit": "ns/op\t215427056 B/op\t 1042813 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 448092151,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215427056,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042813,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41990,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "28832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41990,
            "unit": "ns/op",
            "extra": "28832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "28832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "28832 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70709,
            "unit": "ns/op\t   26941 B/op\t     159 allocs/op",
            "extra": "15471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70709,
            "unit": "ns/op",
            "extra": "15471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26941,
            "unit": "B/op",
            "extra": "15471 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "15471 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31277,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38925 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31277,
            "unit": "ns/op",
            "extra": "38925 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38925 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38925 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 264556,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 264556,
            "unit": "ns/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4424 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 263541,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 263541,
            "unit": "ns/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4286 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102213,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "12388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102213,
            "unit": "ns/op",
            "extra": "12388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
            "unit": "B/op",
            "extra": "12388 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12388 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47821,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "25022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47821,
            "unit": "ns/op",
            "extra": "25022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "25022 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "25022 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199785,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "6091 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199785,
            "unit": "ns/op",
            "extra": "6091 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "6091 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6091 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8072,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "145825 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8072,
            "unit": "ns/op",
            "extra": "145825 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "145825 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145825 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151890,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7430 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151890,
            "unit": "ns/op",
            "extra": "7430 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7430 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7430 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606120334A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606120334A094101Federal",
            "value": 231380104,
            "unit": "1210428822606120334A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 916.8,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1310562 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 916.8,
            "unit": "ns/op",
            "extra": "1310562 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1310562 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1310562 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.84,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12630273 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.84,
            "unit": "ns/op",
            "extra": "12630273 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12630273 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12630273 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 58.8,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19739746 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 58.8,
            "unit": "ns/op",
            "extra": "19739746 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19739746 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19739746 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 25.63,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44141266 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 25.63,
            "unit": "ns/op",
            "extra": "44141266 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44141266 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44141266 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85360776 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.06,
            "unit": "ns/op",
            "extra": "85360776 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85360776 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85360776 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212494016 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.634,
            "unit": "ns/op",
            "extra": "212494016 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212494016 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212494016 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 260851,
            "unit": "ns/op\t   54146 B/op\t     306 allocs/op",
            "extra": "4914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 260851,
            "unit": "ns/op",
            "extra": "4914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54146,
            "unit": "B/op",
            "extra": "4914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4914 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 273829,
            "unit": "ns/op\t   54160 B/op\t     306 allocs/op",
            "extra": "4638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 273829,
            "unit": "ns/op",
            "extra": "4638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54160,
            "unit": "B/op",
            "extra": "4638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4638 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 154468,
            "unit": "ns/op\t   54552 B/op\t     310 allocs/op",
            "extra": "7910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 154468,
            "unit": "ns/op",
            "extra": "7910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54552,
            "unit": "B/op",
            "extra": "7910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 154762,
            "unit": "ns/op\t   54588 B/op\t     310 allocs/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 154762,
            "unit": "ns/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54588,
            "unit": "B/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 325668,
            "unit": "ns/op\t   59880 B/op\t     366 allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 325668,
            "unit": "ns/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59880,
            "unit": "B/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4028 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 324126,
            "unit": "ns/op\t   59828 B/op\t     366 allocs/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 324126,
            "unit": "ns/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59828,
            "unit": "B/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4010 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 315762,
            "unit": "ns/op\t   59863 B/op\t     366 allocs/op",
            "extra": "3766 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 315762,
            "unit": "ns/op",
            "extra": "3766 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59863,
            "unit": "B/op",
            "extra": "3766 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3766 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 311323,
            "unit": "ns/op\t   59631 B/op\t     367 allocs/op",
            "extra": "4608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 311323,
            "unit": "ns/op",
            "extra": "4608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59631,
            "unit": "B/op",
            "extra": "4608 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4608 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49298431 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.98,
            "unit": "ns/op",
            "extra": "49298431 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49298431 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49298431 times\n4 procs"
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
          "id": "f46c49b26b672a980b3e75bdabf77c68c1263a29",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for aa8d2952764f8ea1375f118b7d566d9d72e13cfe",
          "timestamp": "2026-06-11T06:45:46Z",
          "url": "https://github.com/moov-io/benchmarks/commit/f46c49b26b672a980b3e75bdabf77c68c1263a29"
        },
        "date": 1781235282915,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13299,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "88519 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13299,
            "unit": "ns/op",
            "extra": "88519 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
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
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 268111885,
            "unit": "ns/op\t42450820 B/op\t  203655 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 268111885,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450820,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203655,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 90550701,
            "unit": "ns/op\t42425807 B/op\t  203606 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 90550701,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425807,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1366150892,
            "unit": "ns/op\t215541352 B/op\t 1042866 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1366150892,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541352,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042866,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 437295398,
            "unit": "ns/op\t215425501 B/op\t 1042804 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 437295398,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215425501,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042804,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 42150,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "28340 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 42150,
            "unit": "ns/op",
            "extra": "28340 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "28340 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "28340 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75498,
            "unit": "ns/op\t   26941 B/op\t     159 allocs/op",
            "extra": "16958 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75498,
            "unit": "ns/op",
            "extra": "16958 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26941,
            "unit": "B/op",
            "extra": "16958 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16958 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31241,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38230 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31241,
            "unit": "ns/op",
            "extra": "38230 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38230 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38230 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 265511,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 265511,
            "unit": "ns/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4408 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 269149,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 269149,
            "unit": "ns/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4410 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97711,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97711,
            "unit": "ns/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
            "unit": "B/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12078 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 48374,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "24592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 48374,
            "unit": "ns/op",
            "extra": "24592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "24592 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "24592 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 199899,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5704 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 199899,
            "unit": "ns/op",
            "extra": "5704 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5704 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5704 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8708,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "145249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8708,
            "unit": "ns/op",
            "extra": "145249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "145249 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145249 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 154014,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 154014,
            "unit": "ns/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7640 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606130334A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606130334A094101Federal",
            "value": 231380104,
            "unit": "1210428822606130334A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 953.6,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1296290 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 953.6,
            "unit": "ns/op",
            "extra": "1296290 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1296290 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1296290 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.82,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12710725 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.82,
            "unit": "ns/op",
            "extra": "12710725 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12710725 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12710725 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 58.66,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19697540 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 58.66,
            "unit": "ns/op",
            "extra": "19697540 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19697540 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19697540 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43901899 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.54,
            "unit": "ns/op",
            "extra": "43901899 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43901899 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43901899 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "74730786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.16,
            "unit": "ns/op",
            "extra": "74730786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "74730786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "74730786 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.638,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212678701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.638,
            "unit": "ns/op",
            "extra": "212678701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212678701 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212678701 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 271718,
            "unit": "ns/op\t   54148 B/op\t     306 allocs/op",
            "extra": "4503 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 271718,
            "unit": "ns/op",
            "extra": "4503 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54148,
            "unit": "B/op",
            "extra": "4503 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4503 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 269523,
            "unit": "ns/op\t   54157 B/op\t     306 allocs/op",
            "extra": "4618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 269523,
            "unit": "ns/op",
            "extra": "4618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54157,
            "unit": "B/op",
            "extra": "4618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4618 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 153672,
            "unit": "ns/op\t   54545 B/op\t     310 allocs/op",
            "extra": "7705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 153672,
            "unit": "ns/op",
            "extra": "7705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54545,
            "unit": "B/op",
            "extra": "7705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7705 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 148680,
            "unit": "ns/op\t   54587 B/op\t     310 allocs/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 148680,
            "unit": "ns/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54587,
            "unit": "B/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6960 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 330055,
            "unit": "ns/op\t   59841 B/op\t     366 allocs/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 330055,
            "unit": "ns/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59841,
            "unit": "B/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 322046,
            "unit": "ns/op\t   59875 B/op\t     366 allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 322046,
            "unit": "ns/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59875,
            "unit": "B/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 321407,
            "unit": "ns/op\t   59827 B/op\t     366 allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 321407,
            "unit": "ns/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59827,
            "unit": "B/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3834 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 315396,
            "unit": "ns/op\t   59587 B/op\t     367 allocs/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 315396,
            "unit": "ns/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59587,
            "unit": "B/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4702 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49767970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.13,
            "unit": "ns/op",
            "extra": "49767970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49767970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49767970 times\n4 procs"
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
          "id": "d9833466f0dffa039c4f40d8a287a3f653c1e1d2",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for baa2711a553db604cb765ded28cf610435ae860a",
          "timestamp": "2026-06-12T06:38:19Z",
          "url": "https://github.com/moov-io/benchmarks/commit/d9833466f0dffa039c4f40d8a287a3f653c1e1d2"
        },
        "date": 1781319598271,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14965,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "79875 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14965,
            "unit": "ns/op",
            "extra": "79875 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "79875 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "79875 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 265310518,
            "unit": "ns/op\t42450778 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 265310518,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450778,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 103535404,
            "unit": "ns/op\t42425547 B/op\t  203606 allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 103535404,
            "unit": "ns/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425547,
            "unit": "B/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1367231618,
            "unit": "ns/op\t215541240 B/op\t 1042865 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1367231618,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541240,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042865,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 503477030,
            "unit": "ns/op\t215426544 B/op\t 1042810 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 503477030,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426544,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042810,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43579,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "27250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43579,
            "unit": "ns/op",
            "extra": "27250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "27250 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27250 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73391,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16278 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73391,
            "unit": "ns/op",
            "extra": "16278 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16278 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16278 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31798,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31798,
            "unit": "ns/op",
            "extra": "37696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37696 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37696 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 276999,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4250 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 276999,
            "unit": "ns/op",
            "extra": "4250 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4250 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4250 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 276177,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 276177,
            "unit": "ns/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4170 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102584,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102584,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
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
            "value": 52197,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "23136 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 52197,
            "unit": "ns/op",
            "extra": "23136 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "23136 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23136 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 223009,
            "unit": "ns/op\t   54719 B/op\t    2069 allocs/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 223009,
            "unit": "ns/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54719,
            "unit": "B/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5637 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8531,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "141565 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8531,
            "unit": "ns/op",
            "extra": "141565 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "141565 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "141565 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 158682,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 158682,
            "unit": "ns/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7537 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606140259A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606140259A094101Federal",
            "value": 231380104,
            "unit": "1210428822606140259A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 997,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1208054 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 997,
            "unit": "ns/op",
            "extra": "1208054 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1208054 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1208054 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 90.13,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13182708 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 90.13,
            "unit": "ns/op",
            "extra": "13182708 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13182708 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13182708 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.08,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18523354 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.08,
            "unit": "ns/op",
            "extra": "18523354 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18523354 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18523354 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.56,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43609084 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.56,
            "unit": "ns/op",
            "extra": "43609084 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43609084 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43609084 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91527525 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.44,
            "unit": "ns/op",
            "extra": "91527525 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91527525 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91527525 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.671,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212634064 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.671,
            "unit": "ns/op",
            "extra": "212634064 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212634064 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212634064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 263309,
            "unit": "ns/op\t   54134 B/op\t     306 allocs/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 263309,
            "unit": "ns/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54134,
            "unit": "B/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 270677,
            "unit": "ns/op\t   54161 B/op\t     306 allocs/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 270677,
            "unit": "ns/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54161,
            "unit": "B/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4429 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 156790,
            "unit": "ns/op\t   54554 B/op\t     310 allocs/op",
            "extra": "7064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 156790,
            "unit": "ns/op",
            "extra": "7064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54554,
            "unit": "B/op",
            "extra": "7064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7064 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 158771,
            "unit": "ns/op\t   54579 B/op\t     310 allocs/op",
            "extra": "6345 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 158771,
            "unit": "ns/op",
            "extra": "6345 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54579,
            "unit": "B/op",
            "extra": "6345 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6345 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 320164,
            "unit": "ns/op\t   59888 B/op\t     366 allocs/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 320164,
            "unit": "ns/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59888,
            "unit": "B/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 322021,
            "unit": "ns/op\t   59893 B/op\t     366 allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 322021,
            "unit": "ns/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59893,
            "unit": "B/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3892 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 316208,
            "unit": "ns/op\t   59857 B/op\t     366 allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 316208,
            "unit": "ns/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59857,
            "unit": "B/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 311987,
            "unit": "ns/op\t   59713 B/op\t     367 allocs/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 311987,
            "unit": "ns/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59713,
            "unit": "B/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4471 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 28.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45572936 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 28.31,
            "unit": "ns/op",
            "extra": "45572936 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45572936 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45572936 times\n4 procs"
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
          "id": "579f9f138b11845c1e148092631505d21e5623f1",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 770aa965ae28a38df8510982d4cdb7105c66b1ee",
          "timestamp": "2026-06-13T06:13:24Z",
          "url": "https://github.com/moov-io/benchmarks/commit/579f9f138b11845c1e148092631505d21e5623f1"
        },
        "date": 1781408282799,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14751,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "80896 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14751,
            "unit": "ns/op",
            "extra": "80896 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "80896 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "80896 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 278895974,
            "unit": "ns/op\t42450730 B/op\t  203655 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 278895974,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450730,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203655,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 100180102,
            "unit": "ns/op\t42425336 B/op\t  203605 allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 100180102,
            "unit": "ns/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425336,
            "unit": "B/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "10 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1404371216,
            "unit": "ns/op\t215541320 B/op\t 1042866 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1404371216,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541320,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042866,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 502763974,
            "unit": "ns/op\t215426024 B/op\t 1042808 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 502763974,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426024,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042808,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 45266,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "26326 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 45266,
            "unit": "ns/op",
            "extra": "26326 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "26326 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "26326 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 77834,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "15747 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 77834,
            "unit": "ns/op",
            "extra": "15747 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "15747 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "15747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 33150,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "36188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 33150,
            "unit": "ns/op",
            "extra": "36188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "36188 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "36188 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 284097,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 284097,
            "unit": "ns/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4018 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287261,
            "unit": "ns/op\t   56399 B/op\t     552 allocs/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287261,
            "unit": "ns/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56399,
            "unit": "B/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4017 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 113832,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 113832,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
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
            "value": 53443,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "22660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 53443,
            "unit": "ns/op",
            "extra": "22660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "22660 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "22660 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 225126,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 225126,
            "unit": "ns/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8809,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "133372 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8809,
            "unit": "ns/op",
            "extra": "133372 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "133372 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "133372 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 165802,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 165802,
            "unit": "ns/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7107 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606150337A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606150337A094101Federal",
            "value": 231380104,
            "unit": "1210428822606150337A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "value": 92.86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12853611 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.86,
            "unit": "ns/op",
            "extra": "12853611 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12853611 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12853611 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.92,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18726548 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.92,
            "unit": "ns/op",
            "extra": "18726548 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18726548 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18726548 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.93,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42872990 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.93,
            "unit": "ns/op",
            "extra": "42872990 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "42872990 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "42872990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85699324 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.44,
            "unit": "ns/op",
            "extra": "85699324 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85699324 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85699324 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.613,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213477068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.613,
            "unit": "ns/op",
            "extra": "213477068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213477068 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213477068 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 277491,
            "unit": "ns/op\t   54146 B/op\t     306 allocs/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 277491,
            "unit": "ns/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54146,
            "unit": "B/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 272819,
            "unit": "ns/op\t   54167 B/op\t     306 allocs/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 272819,
            "unit": "ns/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54167,
            "unit": "B/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4492 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 166686,
            "unit": "ns/op\t   54565 B/op\t     310 allocs/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 166686,
            "unit": "ns/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54565,
            "unit": "B/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7000 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 156576,
            "unit": "ns/op\t   54584 B/op\t     310 allocs/op",
            "extra": "6934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 156576,
            "unit": "ns/op",
            "extra": "6934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54584,
            "unit": "B/op",
            "extra": "6934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6934 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 329149,
            "unit": "ns/op\t   59862 B/op\t     366 allocs/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 329149,
            "unit": "ns/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59862,
            "unit": "B/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3703 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 327833,
            "unit": "ns/op\t   59890 B/op\t     366 allocs/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 327833,
            "unit": "ns/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59890,
            "unit": "B/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3612 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 321996,
            "unit": "ns/op\t   59866 B/op\t     366 allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 321996,
            "unit": "ns/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59866,
            "unit": "B/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 323766,
            "unit": "ns/op\t   59713 B/op\t     367 allocs/op",
            "extra": "4442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 323766,
            "unit": "ns/op",
            "extra": "4442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59713,
            "unit": "B/op",
            "extra": "4442 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4442 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46240886 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46240886 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46240886 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46240886 times\n4 procs"
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
          "id": "c4d97dc52723e87eb3f58aa83d0c92cdc1e31d65",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 8e86eb4f241c062e2404f2c9e6f00ce17943fffa",
          "timestamp": "2026-06-14T06:36:43Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c4d97dc52723e87eb3f58aa83d0c92cdc1e31d65"
        },
        "date": 1781495579695,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 10429,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "115538 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 10429,
            "unit": "ns/op",
            "extra": "115538 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "115538 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "115538 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 206449404,
            "unit": "ns/op\t42450502 B/op\t  203657 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 206449404,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450502,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203657,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 69032566,
            "unit": "ns/op\t42425752 B/op\t  203606 allocs/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 69032566,
            "unit": "ns/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425752,
            "unit": "B/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1079287910,
            "unit": "ns/op\t215541240 B/op\t 1042865 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1079287910,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541240,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042865,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 333421507,
            "unit": "ns/op\t215426440 B/op\t 1042810 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 333421507,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426440,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042810,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 32268,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 32268,
            "unit": "ns/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 56290,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "21960 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 56290,
            "unit": "ns/op",
            "extra": "21960 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "21960 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "21960 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 23993,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "49455 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 23993,
            "unit": "ns/op",
            "extra": "49455 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "49455 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "49455 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 202362,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 202362,
            "unit": "ns/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "5532 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 203964,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "5970 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 203964,
            "unit": "ns/op",
            "extra": "5970 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "5970 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "5970 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 75045,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "15926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 75045,
            "unit": "ns/op",
            "extra": "15926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
            "unit": "B/op",
            "extra": "15926 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "15926 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 37130,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "32289 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 37130,
            "unit": "ns/op",
            "extra": "32289 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "32289 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "32289 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 151740,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 151740,
            "unit": "ns/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "7382 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6223,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "190580 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6223,
            "unit": "ns/op",
            "extra": "190580 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "190580 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "190580 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 117522,
            "unit": "ns/op\t   61153 B/op\t     721 allocs/op",
            "extra": "9278 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 117522,
            "unit": "ns/op",
            "extra": "9278 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61153,
            "unit": "B/op",
            "extra": "9278 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "9278 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606160352A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606160352A094101Federal",
            "value": 231380104,
            "unit": "1210428822606160352A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 717.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1689902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 717.5,
            "unit": "ns/op",
            "extra": "1689902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1689902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1689902 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 71.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16531165 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 71.47,
            "unit": "ns/op",
            "extra": "16531165 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16531165 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16531165 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 46.05,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "25622211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 46.05,
            "unit": "ns/op",
            "extra": "25622211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "25622211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "25622211 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 20.04,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "57046272 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 20.04,
            "unit": "ns/op",
            "extra": "57046272 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "57046272 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "57046272 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 11.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 11.1,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 4.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "274621794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 4.37,
            "unit": "ns/op",
            "extra": "274621794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "274621794 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "274621794 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 207987,
            "unit": "ns/op\t   54142 B/op\t     306 allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 207987,
            "unit": "ns/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54142,
            "unit": "B/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "6397 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 204880,
            "unit": "ns/op\t   54156 B/op\t     306 allocs/op",
            "extra": "6188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 204880,
            "unit": "ns/op",
            "extra": "6188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54156,
            "unit": "B/op",
            "extra": "6188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "6188 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 122490,
            "unit": "ns/op\t   54565 B/op\t     310 allocs/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 122490,
            "unit": "ns/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54565,
            "unit": "B/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 119789,
            "unit": "ns/op\t   54584 B/op\t     310 allocs/op",
            "extra": "10035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 119789,
            "unit": "ns/op",
            "extra": "10035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54584,
            "unit": "B/op",
            "extra": "10035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "10035 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 254646,
            "unit": "ns/op\t   59901 B/op\t     366 allocs/op",
            "extra": "4971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 254646,
            "unit": "ns/op",
            "extra": "4971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59901,
            "unit": "B/op",
            "extra": "4971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4971 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 252440,
            "unit": "ns/op\t   59890 B/op\t     366 allocs/op",
            "extra": "4987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 252440,
            "unit": "ns/op",
            "extra": "4987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59890,
            "unit": "B/op",
            "extra": "4987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4987 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 251549,
            "unit": "ns/op\t   59864 B/op\t     366 allocs/op",
            "extra": "5185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 251549,
            "unit": "ns/op",
            "extra": "5185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59864,
            "unit": "B/op",
            "extra": "5185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "5185 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 245270,
            "unit": "ns/op\t   59831 B/op\t     367 allocs/op",
            "extra": "5976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 245270,
            "unit": "ns/op",
            "extra": "5976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59831,
            "unit": "B/op",
            "extra": "5976 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "5976 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 19.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63549045 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 19.39,
            "unit": "ns/op",
            "extra": "63549045 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "63549045 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "63549045 times\n4 procs"
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
          "id": "33367abc7c6f0f84057d7d7fa66f3584c8af9083",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for fef4b97a36f6e2b2943ec347bf5e0efcad875264",
          "timestamp": "2026-06-15T07:14:44Z",
          "url": "https://github.com/moov-io/benchmarks/commit/33367abc7c6f0f84057d7d7fa66f3584c8af9083"
        },
        "date": 1781581307987,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14407,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "82684 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14407,
            "unit": "ns/op",
            "extra": "82684 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "82684 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82684 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 275032045,
            "unit": "ns/op\t42450974 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 275032045,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450974,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 100806169,
            "unit": "ns/op\t42425737 B/op\t  203607 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 100806169,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425737,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203607,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1397322238,
            "unit": "ns/op\t215541288 B/op\t 1042866 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1397322238,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541288,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042866,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 503185934,
            "unit": "ns/op\t215426196 B/op\t 1042807 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 503185934,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426196,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042807,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43329,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43329,
            "unit": "ns/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27882 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75415,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "15741 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75415,
            "unit": "ns/op",
            "extra": "15741 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "15741 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "15741 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31525,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38067 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31525,
            "unit": "ns/op",
            "extra": "38067 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38067 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38067 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 276650,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 276650,
            "unit": "ns/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4152 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 276809,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 276809,
            "unit": "ns/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4291 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 101299,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "9973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 101299,
            "unit": "ns/op",
            "extra": "9973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
            "unit": "B/op",
            "extra": "9973 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "9973 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 55673,
            "unit": "ns/op\t   34808 B/op\t     228 allocs/op",
            "extra": "23049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 55673,
            "unit": "ns/op",
            "extra": "23049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34808,
            "unit": "B/op",
            "extra": "23049 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23049 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 220646,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5454 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 220646,
            "unit": "ns/op",
            "extra": "5454 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5454 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5454 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8534,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "139604 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8534,
            "unit": "ns/op",
            "extra": "139604 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "139604 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "139604 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162728,
            "unit": "ns/op\t   61155 B/op\t     721 allocs/op",
            "extra": "6679 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162728,
            "unit": "ns/op",
            "extra": "6679 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61155,
            "unit": "B/op",
            "extra": "6679 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6679 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606170341A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606170341A094101Federal",
            "value": 231380104,
            "unit": "1210428822606170341A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1202918 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1012,
            "unit": "ns/op",
            "extra": "1202918 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1202918 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1202918 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.68,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12309064 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.68,
            "unit": "ns/op",
            "extra": "12309064 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12309064 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12309064 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.87,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18521552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.87,
            "unit": "ns/op",
            "extra": "18521552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18521552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18521552 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.57,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43334000 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.57,
            "unit": "ns/op",
            "extra": "43334000 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43334000 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43334000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90827888 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "90827888 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90827888 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90827888 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.644,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213699516 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.644,
            "unit": "ns/op",
            "extra": "213699516 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213699516 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213699516 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 272545,
            "unit": "ns/op\t   54146 B/op\t     306 allocs/op",
            "extra": "4556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 272545,
            "unit": "ns/op",
            "extra": "4556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54146,
            "unit": "B/op",
            "extra": "4556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4556 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 264155,
            "unit": "ns/op\t   54154 B/op\t     306 allocs/op",
            "extra": "4515 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 264155,
            "unit": "ns/op",
            "extra": "4515 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54154,
            "unit": "B/op",
            "extra": "4515 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4515 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 150448,
            "unit": "ns/op\t   54559 B/op\t     310 allocs/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 150448,
            "unit": "ns/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54559,
            "unit": "B/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7125 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 159846,
            "unit": "ns/op\t   54597 B/op\t     310 allocs/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 159846,
            "unit": "ns/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54597,
            "unit": "B/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6955 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 323333,
            "unit": "ns/op\t   59899 B/op\t     366 allocs/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 323333,
            "unit": "ns/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59899,
            "unit": "B/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 321702,
            "unit": "ns/op\t   59841 B/op\t     366 allocs/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 321702,
            "unit": "ns/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59841,
            "unit": "B/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3826 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 311550,
            "unit": "ns/op\t   59856 B/op\t     366 allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 311550,
            "unit": "ns/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59856,
            "unit": "B/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 310297,
            "unit": "ns/op\t   59662 B/op\t     367 allocs/op",
            "extra": "4525 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 310297,
            "unit": "ns/op",
            "extra": "4525 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59662,
            "unit": "B/op",
            "extra": "4525 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4525 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46465068 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "46465068 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46465068 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46465068 times\n4 procs"
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
          "id": "6aeda19e0828c4786abc0913e229e347258fb45c",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for d2b196fcffda28fe684dc1efa23817c20ff3500e",
          "timestamp": "2026-06-16T07:23:12Z",
          "url": "https://github.com/moov-io/benchmarks/commit/6aeda19e0828c4786abc0913e229e347258fb45c"
        },
        "date": 1781667716603,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13357,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "89226 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13357,
            "unit": "ns/op",
            "extra": "89226 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "89226 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "89226 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 268351592,
            "unit": "ns/op\t42450842 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 268351592,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450842,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 90454580,
            "unit": "ns/op\t42425431 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 90454580,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425431,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1393753973,
            "unit": "ns/op\t215541496 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1393753973,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541496,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 445936128,
            "unit": "ns/op\t215426106 B/op\t 1042807 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 445936128,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426106,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042807,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41855,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "28604 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41855,
            "unit": "ns/op",
            "extra": "28604 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "28604 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "28604 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74879,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16885 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74879,
            "unit": "ns/op",
            "extra": "16885 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16885 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16885 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30824,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30824,
            "unit": "ns/op",
            "extra": "38935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38935 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38935 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 263552,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 263552,
            "unit": "ns/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4365 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 264321,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 264321,
            "unit": "ns/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4542 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97523,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "12120 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97523,
            "unit": "ns/op",
            "extra": "12120 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
            "unit": "B/op",
            "extra": "12120 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12120 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47955,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "25069 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47955,
            "unit": "ns/op",
            "extra": "25069 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "25069 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "25069 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 203323,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 203323,
            "unit": "ns/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6135 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8140,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "147572 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8140,
            "unit": "ns/op",
            "extra": "147572 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "147572 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "147572 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151500,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7417 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151500,
            "unit": "ns/op",
            "extra": "7417 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7417 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606180341A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606180341A094101Federal",
            "value": 231380104,
            "unit": "1210428822606180341A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 916.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 916.5,
            "unit": "ns/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.45,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12899334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.45,
            "unit": "ns/op",
            "extra": "12899334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12899334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12899334 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.18,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19680964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.18,
            "unit": "ns/op",
            "extra": "19680964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19680964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19680964 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.54,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44151088 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.54,
            "unit": "ns/op",
            "extra": "44151088 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44151088 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44151088 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86271283 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.06,
            "unit": "ns/op",
            "extra": "86271283 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86271283 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86271283 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.648,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212944520 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.648,
            "unit": "ns/op",
            "extra": "212944520 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212944520 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212944520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 265331,
            "unit": "ns/op\t   54139 B/op\t     306 allocs/op",
            "extra": "4786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 265331,
            "unit": "ns/op",
            "extra": "4786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54139,
            "unit": "B/op",
            "extra": "4786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4786 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 261631,
            "unit": "ns/op\t   54157 B/op\t     306 allocs/op",
            "extra": "4569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 261631,
            "unit": "ns/op",
            "extra": "4569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54157,
            "unit": "B/op",
            "extra": "4569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 149791,
            "unit": "ns/op\t   54553 B/op\t     310 allocs/op",
            "extra": "7398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 149791,
            "unit": "ns/op",
            "extra": "7398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54553,
            "unit": "B/op",
            "extra": "7398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7398 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 155962,
            "unit": "ns/op\t   54585 B/op\t     310 allocs/op",
            "extra": "6930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 155962,
            "unit": "ns/op",
            "extra": "6930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54585,
            "unit": "B/op",
            "extra": "6930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6930 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 327821,
            "unit": "ns/op\t   59855 B/op\t     366 allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 327821,
            "unit": "ns/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59855,
            "unit": "B/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3795 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 313996,
            "unit": "ns/op\t   59850 B/op\t     366 allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 313996,
            "unit": "ns/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59850,
            "unit": "B/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3988 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 326267,
            "unit": "ns/op\t   59908 B/op\t     366 allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 326267,
            "unit": "ns/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59908,
            "unit": "B/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4106 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 309234,
            "unit": "ns/op\t   59596 B/op\t     367 allocs/op",
            "extra": "4735 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 309234,
            "unit": "ns/op",
            "extra": "4735 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59596,
            "unit": "B/op",
            "extra": "4735 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4735 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 24.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49956468 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 24.96,
            "unit": "ns/op",
            "extra": "49956468 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49956468 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49956468 times\n4 procs"
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
          "id": "96637597f9346b2ccfa44f2473438ee98cb05e2a",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 4b544ebcb92e38ed8e02a5d998e01312e65ba8f8",
          "timestamp": "2026-06-17T07:05:42Z",
          "url": "https://github.com/moov-io/benchmarks/commit/96637597f9346b2ccfa44f2473438ee98cb05e2a"
        },
        "date": 1781753638757,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14487,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "82646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14487,
            "unit": "ns/op",
            "extra": "82646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "82646 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82646 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 272306200,
            "unit": "ns/op\t42450730 B/op\t  203655 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 272306200,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450730,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203655,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 102262291,
            "unit": "ns/op\t42425406 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 102262291,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425406,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1418415556,
            "unit": "ns/op\t215541576 B/op\t 1042869 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1418415556,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541576,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042869,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 482964795,
            "unit": "ns/op\t215426954 B/op\t 1042812 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 482964795,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426954,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042812,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 45466,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "25983 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 45466,
            "unit": "ns/op",
            "extra": "25983 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "25983 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "25983 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 85312,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16090 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 85312,
            "unit": "ns/op",
            "extra": "16090 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16090 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16090 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32076,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37344 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32076,
            "unit": "ns/op",
            "extra": "37344 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37344 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37344 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 280636,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 280636,
            "unit": "ns/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4105 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 287172,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 287172,
            "unit": "ns/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "3870 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 103255,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 103255,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
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
            "value": 55441,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "22742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 55441,
            "unit": "ns/op",
            "extra": "22742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "22742 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "22742 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 221477,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5180 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 221477,
            "unit": "ns/op",
            "extra": "5180 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5180 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5180 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8601,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "138903 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8601,
            "unit": "ns/op",
            "extra": "138903 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "138903 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "138903 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 161590,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "6904 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 161590,
            "unit": "ns/op",
            "extra": "6904 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "6904 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6904 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606190333A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606190333A094101Federal",
            "value": 231380104,
            "unit": "1210428822606190333A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 91.03,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13005553 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.03,
            "unit": "ns/op",
            "extra": "13005553 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13005553 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13005553 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.61,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18847038 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.61,
            "unit": "ns/op",
            "extra": "18847038 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18847038 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18847038 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.69,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "41231883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.69,
            "unit": "ns/op",
            "extra": "41231883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "41231883 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "41231883 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91579395 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.6,
            "unit": "ns/op",
            "extra": "91579395 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91579395 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91579395 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.624,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213521042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.624,
            "unit": "ns/op",
            "extra": "213521042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213521042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213521042 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 268908,
            "unit": "ns/op\t   54144 B/op\t     306 allocs/op",
            "extra": "4401 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 268908,
            "unit": "ns/op",
            "extra": "4401 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54144,
            "unit": "B/op",
            "extra": "4401 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4401 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 278473,
            "unit": "ns/op\t   54151 B/op\t     306 allocs/op",
            "extra": "4520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 278473,
            "unit": "ns/op",
            "extra": "4520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54151,
            "unit": "B/op",
            "extra": "4520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4520 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 160856,
            "unit": "ns/op\t   54550 B/op\t     310 allocs/op",
            "extra": "7600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 160856,
            "unit": "ns/op",
            "extra": "7600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54550,
            "unit": "B/op",
            "extra": "7600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7600 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 159081,
            "unit": "ns/op\t   54597 B/op\t     310 allocs/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 159081,
            "unit": "ns/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54597,
            "unit": "B/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6781 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 337137,
            "unit": "ns/op\t   59870 B/op\t     366 allocs/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 337137,
            "unit": "ns/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59870,
            "unit": "B/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3644 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 327706,
            "unit": "ns/op\t   59911 B/op\t     366 allocs/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 327706,
            "unit": "ns/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59911,
            "unit": "B/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3867 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 320114,
            "unit": "ns/op\t   59813 B/op\t     366 allocs/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 320114,
            "unit": "ns/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59813,
            "unit": "B/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3842 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 321440,
            "unit": "ns/op\t   59674 B/op\t     367 allocs/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 321440,
            "unit": "ns/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59674,
            "unit": "B/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4558 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46350220 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.97,
            "unit": "ns/op",
            "extra": "46350220 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46350220 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46350220 times\n4 procs"
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
          "id": "ec73bc47856de9f5ae545d00bebbb328d43dddd6",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for aadffbca072dd2130784aa1669b69292935a6225",
          "timestamp": "2026-06-18T06:48:46Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ec73bc47856de9f5ae545d00bebbb328d43dddd6"
        },
        "date": 1781841360994,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14491,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "82395 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14491,
            "unit": "ns/op",
            "extra": "82395 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "82395 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82395 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 272717469,
            "unit": "ns/op\t42450834 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 272717469,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450834,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 99720216,
            "unit": "ns/op\t42425306 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 99720216,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425306,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1383534868,
            "unit": "ns/op\t215541544 B/op\t 1042869 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1383534868,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541544,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042869,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 486694107,
            "unit": "ns/op\t215426656 B/op\t 1042811 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 486694107,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426656,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042811,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44119,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "27288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44119,
            "unit": "ns/op",
            "extra": "27288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "27288 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27288 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 76389,
            "unit": "ns/op\t   26943 B/op\t     159 allocs/op",
            "extra": "16138 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 76389,
            "unit": "ns/op",
            "extra": "16138 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26943,
            "unit": "B/op",
            "extra": "16138 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16138 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32584,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37166 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32584,
            "unit": "ns/op",
            "extra": "37166 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37166 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37166 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 278300,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 278300,
            "unit": "ns/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4101 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 279794,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 279794,
            "unit": "ns/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4147 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 113138,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 113138,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
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
            "value": 53112,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "22924 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 53112,
            "unit": "ns/op",
            "extra": "22924 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "22924 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "22924 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 220526,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "5565 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 220526,
            "unit": "ns/op",
            "extra": "5565 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "5565 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5565 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8718,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "136567 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8718,
            "unit": "ns/op",
            "extra": "136567 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "136567 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "136567 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162422,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162422,
            "unit": "ns/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6890 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606200355A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606200355A094101Federal",
            "value": 231380104,
            "unit": "1210428822606200355A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 995.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1205226 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 995.1,
            "unit": "ns/op",
            "extra": "1205226 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1205226 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1205226 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 90.64,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12845446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 90.64,
            "unit": "ns/op",
            "extra": "12845446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12845446 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12845446 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 63.27,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18444508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 63.27,
            "unit": "ns/op",
            "extra": "18444508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18444508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18444508 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.77,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "42733590 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.77,
            "unit": "ns/op",
            "extra": "42733590 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "42733590 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "42733590 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91461002 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.67,
            "unit": "ns/op",
            "extra": "91461002 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91461002 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91461002 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.668,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "206855592 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.668,
            "unit": "ns/op",
            "extra": "206855592 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "206855592 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "206855592 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 264956,
            "unit": "ns/op\t   54145 B/op\t     306 allocs/op",
            "extra": "4507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 264956,
            "unit": "ns/op",
            "extra": "4507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54145,
            "unit": "B/op",
            "extra": "4507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4507 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 269298,
            "unit": "ns/op\t   54157 B/op\t     306 allocs/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 269298,
            "unit": "ns/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54157,
            "unit": "B/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 155934,
            "unit": "ns/op\t   54551 B/op\t     310 allocs/op",
            "extra": "7434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 155934,
            "unit": "ns/op",
            "extra": "7434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54551,
            "unit": "B/op",
            "extra": "7434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7434 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 156916,
            "unit": "ns/op\t   54588 B/op\t     310 allocs/op",
            "extra": "6919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 156916,
            "unit": "ns/op",
            "extra": "6919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54588,
            "unit": "B/op",
            "extra": "6919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6919 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 328369,
            "unit": "ns/op\t   59881 B/op\t     366 allocs/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 328369,
            "unit": "ns/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59881,
            "unit": "B/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3742 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 320645,
            "unit": "ns/op\t   59865 B/op\t     366 allocs/op",
            "extra": "3772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 320645,
            "unit": "ns/op",
            "extra": "3772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59865,
            "unit": "B/op",
            "extra": "3772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3772 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 316632,
            "unit": "ns/op\t   59865 B/op\t     366 allocs/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 316632,
            "unit": "ns/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59865,
            "unit": "B/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3764 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 313232,
            "unit": "ns/op\t   59676 B/op\t     367 allocs/op",
            "extra": "4533 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 313232,
            "unit": "ns/op",
            "extra": "4533 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59676,
            "unit": "B/op",
            "extra": "4533 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4533 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46335978 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.98,
            "unit": "ns/op",
            "extra": "46335978 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46335978 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46335978 times\n4 procs"
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
          "id": "ae6bcfd9a3278878727c3addcc376bb2e4e6c3c4",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 7e9ca3fc93ee00e63b849c72fd2f2dd618f3f503",
          "timestamp": "2026-06-19T07:02:48Z",
          "url": "https://github.com/moov-io/benchmarks/commit/ae6bcfd9a3278878727c3addcc376bb2e4e6c3c4"
        },
        "date": 1781924273383,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 10897,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "114907 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 10897,
            "unit": "ns/op",
            "extra": "114907 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "114907 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "114907 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 207245271,
            "unit": "ns/op\t42451644 B/op\t  203658 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 207245271,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42451644,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203658,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 70904803,
            "unit": "ns/op\t42425483 B/op\t  203605 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 70904803,
            "unit": "ns/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425483,
            "unit": "B/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1089314286,
            "unit": "ns/op\t215541496 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1089314286,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541496,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 337642894,
            "unit": "ns/op\t215425906 B/op\t 1042806 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 337642894,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215425906,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042806,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 33106,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "36928 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 33106,
            "unit": "ns/op",
            "extra": "36928 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "36928 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "36928 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 56434,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "20996 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 56434,
            "unit": "ns/op",
            "extra": "20996 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "20996 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "20996 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 24525,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "48644 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 24525,
            "unit": "ns/op",
            "extra": "48644 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "48644 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "48644 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 205902,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "5692 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 205902,
            "unit": "ns/op",
            "extra": "5692 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "5692 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "5692 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 204742,
            "unit": "ns/op\t   56395 B/op\t     552 allocs/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 204742,
            "unit": "ns/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56395,
            "unit": "B/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "5548 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 75872,
            "unit": "ns/op\t   29774 B/op\t     264 allocs/op",
            "extra": "15865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 75872,
            "unit": "ns/op",
            "extra": "15865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29774,
            "unit": "B/op",
            "extra": "15865 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "15865 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 37462,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "32185 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 37462,
            "unit": "ns/op",
            "extra": "32185 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "32185 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "32185 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 152522,
            "unit": "ns/op\t   54715 B/op\t    2069 allocs/op",
            "extra": "7659 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 152522,
            "unit": "ns/op",
            "extra": "7659 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54715,
            "unit": "B/op",
            "extra": "7659 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "7659 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 6601,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "186261 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 6601,
            "unit": "ns/op",
            "extra": "186261 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "186261 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "186261 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 119388,
            "unit": "ns/op\t   61152 B/op\t     721 allocs/op",
            "extra": "9297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 119388,
            "unit": "ns/op",
            "extra": "9297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61152,
            "unit": "B/op",
            "extra": "9297 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "9297 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606210257A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606210257A094101Federal",
            "value": 231380104,
            "unit": "1210428822606210257A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 708.7,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1700260 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 708.7,
            "unit": "ns/op",
            "extra": "1700260 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1700260 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1700260 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 71.69,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "16488453 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 71.69,
            "unit": "ns/op",
            "extra": "16488453 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "16488453 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16488453 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 45.73,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "25377846 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 45.73,
            "unit": "ns/op",
            "extra": "25377846 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "25377846 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "25377846 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 20,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "56733872 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 20,
            "unit": "ns/op",
            "extra": "56733872 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "56733872 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "56733872 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 10.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 10.96,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 4.369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "274158968 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 4.369,
            "unit": "ns/op",
            "extra": "274158968 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "274158968 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "274158968 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 209067,
            "unit": "ns/op\t   54141 B/op\t     306 allocs/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 209067,
            "unit": "ns/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54141,
            "unit": "B/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "5924 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 208445,
            "unit": "ns/op\t   54154 B/op\t     306 allocs/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 208445,
            "unit": "ns/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54154,
            "unit": "B/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "5928 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 118162,
            "unit": "ns/op\t   54553 B/op\t     310 allocs/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 118162,
            "unit": "ns/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54553,
            "unit": "B/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "9822 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 123274,
            "unit": "ns/op\t   54599 B/op\t     310 allocs/op",
            "extra": "8748 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 123274,
            "unit": "ns/op",
            "extra": "8748 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54599,
            "unit": "B/op",
            "extra": "8748 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "8748 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 262632,
            "unit": "ns/op\t   59863 B/op\t     366 allocs/op",
            "extra": "4908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 262632,
            "unit": "ns/op",
            "extra": "4908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59863,
            "unit": "B/op",
            "extra": "4908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 269018,
            "unit": "ns/op\t   59872 B/op\t     366 allocs/op",
            "extra": "5162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 269018,
            "unit": "ns/op",
            "extra": "5162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59872,
            "unit": "B/op",
            "extra": "5162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "5162 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 250225,
            "unit": "ns/op\t   59858 B/op\t     366 allocs/op",
            "extra": "5240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 250225,
            "unit": "ns/op",
            "extra": "5240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59858,
            "unit": "B/op",
            "extra": "5240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "5240 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 252551,
            "unit": "ns/op\t   59830 B/op\t     367 allocs/op",
            "extra": "5983 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 252551,
            "unit": "ns/op",
            "extra": "5983 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59830,
            "unit": "B/op",
            "extra": "5983 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "5983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 19.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63991218 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 19.31,
            "unit": "ns/op",
            "extra": "63991218 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "63991218 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "63991218 times\n4 procs"
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
          "id": "c1c03baa1eacc81e396f4b7a6fac9e0cf18b40ab",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for bf2411608083b1b77c2b4fdb4952ba065040bf0b",
          "timestamp": "2026-06-20T06:17:44Z",
          "url": "https://github.com/moov-io/benchmarks/commit/c1c03baa1eacc81e396f4b7a6fac9e0cf18b40ab"
        },
        "date": 1782013478050,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13228,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "90548 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13228,
            "unit": "ns/op",
            "extra": "90548 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "90548 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "90548 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 263905032,
            "unit": "ns/op\t42450830 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 263905032,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450830,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 88761401,
            "unit": "ns/op\t42425408 B/op\t  203605 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 88761401,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425408,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1354261336,
            "unit": "ns/op\t215541288 B/op\t 1042866 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1354261336,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541288,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042866,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 452825002,
            "unit": "ns/op\t215426165 B/op\t 1042808 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 452825002,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426165,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042808,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41882,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "28580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41882,
            "unit": "ns/op",
            "extra": "28580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "28580 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "28580 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 70138,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "17140 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 70138,
            "unit": "ns/op",
            "extra": "17140 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "17140 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "17140 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31078,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38928 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31078,
            "unit": "ns/op",
            "extra": "38928 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38928 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38928 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 265704,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 265704,
            "unit": "ns/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4358 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 262450,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 262450,
            "unit": "ns/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97212,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97212,
            "unit": "ns/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
            "unit": "B/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12297 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47748,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "22394 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47748,
            "unit": "ns/op",
            "extra": "22394 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "22394 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "22394 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 198299,
            "unit": "ns/op\t   54718 B/op\t    2069 allocs/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 198299,
            "unit": "ns/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54718,
            "unit": "B/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6088 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8036,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "145840 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8036,
            "unit": "ns/op",
            "extra": "145840 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "145840 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "145840 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 155682,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 155682,
            "unit": "ns/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7392 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606220343A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606220343A094101Federal",
            "value": 231380104,
            "unit": "1210428822606220343A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 922.3,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1297783 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 922.3,
            "unit": "ns/op",
            "extra": "1297783 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1297783 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1297783 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 96.41,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12740667 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 96.41,
            "unit": "ns/op",
            "extra": "12740667 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12740667 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12740667 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.18,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19174749 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.18,
            "unit": "ns/op",
            "extra": "19174749 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19174749 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19174749 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.18,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "44266186 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "44266186 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "44266186 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "44266186 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86083584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.03,
            "unit": "ns/op",
            "extra": "86083584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "86083584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "86083584 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.638,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211558771 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.638,
            "unit": "ns/op",
            "extra": "211558771 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "211558771 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "211558771 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 270325,
            "unit": "ns/op\t   54149 B/op\t     306 allocs/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 270325,
            "unit": "ns/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54149,
            "unit": "B/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4671 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 262342,
            "unit": "ns/op\t   54160 B/op\t     306 allocs/op",
            "extra": "4894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 262342,
            "unit": "ns/op",
            "extra": "4894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54160,
            "unit": "B/op",
            "extra": "4894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4894 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 154983,
            "unit": "ns/op\t   54540 B/op\t     310 allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 154983,
            "unit": "ns/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54540,
            "unit": "B/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6650 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 159528,
            "unit": "ns/op\t   54593 B/op\t     310 allocs/op",
            "extra": "6715 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 159528,
            "unit": "ns/op",
            "extra": "6715 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54593,
            "unit": "B/op",
            "extra": "6715 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6715 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 321536,
            "unit": "ns/op\t   59867 B/op\t     366 allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 321536,
            "unit": "ns/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59867,
            "unit": "B/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3882 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 315760,
            "unit": "ns/op\t   59885 B/op\t     366 allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 315760,
            "unit": "ns/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59885,
            "unit": "B/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3908 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 315322,
            "unit": "ns/op\t   59912 B/op\t     366 allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 315322,
            "unit": "ns/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59912,
            "unit": "B/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4082 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 313963,
            "unit": "ns/op\t   59646 B/op\t     367 allocs/op",
            "extra": "4695 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 313963,
            "unit": "ns/op",
            "extra": "4695 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59646,
            "unit": "B/op",
            "extra": "4695 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4695 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50246110 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.24,
            "unit": "ns/op",
            "extra": "50246110 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50246110 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50246110 times\n4 procs"
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
          "id": "b0dcbd00cefa60d73264c3bae35e74c8847f5619",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 957913a6eeda2cab14fa467d2638f14cf42a4735",
          "timestamp": "2026-06-21T06:48:30Z",
          "url": "https://github.com/moov-io/benchmarks/commit/b0dcbd00cefa60d73264c3bae35e74c8847f5619"
        },
        "date": 1782100302340,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14347,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "83233 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14347,
            "unit": "ns/op",
            "extra": "83233 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "83233 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "83233 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 271326132,
            "unit": "ns/op\t42450842 B/op\t  203656 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 271326132,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450842,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203656,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 97904369,
            "unit": "ns/op\t42425448 B/op\t  203606 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 97904369,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425448,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1386502062,
            "unit": "ns/op\t215541496 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1386502062,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541496,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 491294791,
            "unit": "ns/op\t215426426 B/op\t 1042808 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 491294791,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426426,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042808,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43779,
            "unit": "ns/op\t   23333 B/op\t     114 allocs/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43779,
            "unit": "ns/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23333,
            "unit": "B/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "24291 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 73912,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16189 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 73912,
            "unit": "ns/op",
            "extra": "16189 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16189 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16189 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32011,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32011,
            "unit": "ns/op",
            "extra": "37951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37951 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 280898,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 280898,
            "unit": "ns/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4119 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 281277,
            "unit": "ns/op\t   56399 B/op\t     552 allocs/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 281277,
            "unit": "ns/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56399,
            "unit": "B/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4183 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 104383,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 104383,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
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
            "value": 57662,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "21812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 57662,
            "unit": "ns/op",
            "extra": "21812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "21812 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "21812 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 221639,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5331 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 221639,
            "unit": "ns/op",
            "extra": "5331 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5331 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5331 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8571,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "136928 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8571,
            "unit": "ns/op",
            "extra": "136928 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "136928 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "136928 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162583,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "6832 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162583,
            "unit": "ns/op",
            "extra": "6832 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "6832 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6832 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606230351A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606230351A094101Federal",
            "value": 231380104,
            "unit": "1210428822606230351A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 993.5,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1208749 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 993.5,
            "unit": "ns/op",
            "extra": "1208749 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1208749 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1208749 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 93.11,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13333243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 93.11,
            "unit": "ns/op",
            "extra": "13333243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13333243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13333243 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.52,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18828301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.52,
            "unit": "ns/op",
            "extra": "18828301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18828301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18828301 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.6,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43502355 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.6,
            "unit": "ns/op",
            "extra": "43502355 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43502355 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43502355 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90881164 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.42,
            "unit": "ns/op",
            "extra": "90881164 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90881164 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90881164 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.612,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212975343 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.612,
            "unit": "ns/op",
            "extra": "212975343 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212975343 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212975343 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 268401,
            "unit": "ns/op\t   54149 B/op\t     306 allocs/op",
            "extra": "4531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 268401,
            "unit": "ns/op",
            "extra": "4531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54149,
            "unit": "B/op",
            "extra": "4531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4531 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 273788,
            "unit": "ns/op\t   54159 B/op\t     306 allocs/op",
            "extra": "4482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 273788,
            "unit": "ns/op",
            "extra": "4482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54159,
            "unit": "B/op",
            "extra": "4482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4482 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 152141,
            "unit": "ns/op\t   54552 B/op\t     310 allocs/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 152141,
            "unit": "ns/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54552,
            "unit": "B/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7207 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 160702,
            "unit": "ns/op\t   54596 B/op\t     310 allocs/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 160702,
            "unit": "ns/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54596,
            "unit": "B/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7113 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 324504,
            "unit": "ns/op\t   59850 B/op\t     366 allocs/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 324504,
            "unit": "ns/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59850,
            "unit": "B/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3802 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 322105,
            "unit": "ns/op\t   59881 B/op\t     366 allocs/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 322105,
            "unit": "ns/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59881,
            "unit": "B/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3910 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 314790,
            "unit": "ns/op\t   59831 B/op\t     366 allocs/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 314790,
            "unit": "ns/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59831,
            "unit": "B/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3811 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 319014,
            "unit": "ns/op\t   59674 B/op\t     367 allocs/op",
            "extra": "4557 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 319014,
            "unit": "ns/op",
            "extra": "4557 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59674,
            "unit": "B/op",
            "extra": "4557 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4557 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45542461 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.86,
            "unit": "ns/op",
            "extra": "45542461 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45542461 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45542461 times\n4 procs"
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
          "id": "811b9d858487b4703a5edea47a90ae12d5bcd589",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f4591979eae63153ee97ef1a5c664ddf57c190e5",
          "timestamp": "2026-06-22T07:20:29Z",
          "url": "https://github.com/moov-io/benchmarks/commit/811b9d858487b4703a5edea47a90ae12d5bcd589"
        },
        "date": 1782183113215,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 13061,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "91069 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 13061,
            "unit": "ns/op",
            "extra": "91069 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "91069 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "91069 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 259476187,
            "unit": "ns/op\t42452374 B/op\t  203659 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 259476187,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42452374,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203659,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 92448176,
            "unit": "ns/op\t42425668 B/op\t  203607 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 92448176,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425668,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203607,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1350130993,
            "unit": "ns/op\t215541688 B/op\t 1042871 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1350130993,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541688,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042871,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 440647044,
            "unit": "ns/op\t215425781 B/op\t 1042806 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 440647044,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215425781,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042806,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 41758,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "28648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 41758,
            "unit": "ns/op",
            "extra": "28648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "28648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "28648 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74005,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "17011 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74005,
            "unit": "ns/op",
            "extra": "17011 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "17011 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "17011 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 30873,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 30873,
            "unit": "ns/op",
            "extra": "38648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38648 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38648 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 263647,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 263647,
            "unit": "ns/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4262 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 264804,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4407 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 264804,
            "unit": "ns/op",
            "extra": "4407 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4407 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4407 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 97617,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "12417 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 97617,
            "unit": "ns/op",
            "extra": "12417 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
            "unit": "B/op",
            "extra": "12417 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - allocs/op",
            "value": 264,
            "unit": "allocs/op",
            "extra": "12417 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite",
            "value": 47858,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 47858,
            "unit": "ns/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 202082,
            "unit": "ns/op\t   54714 B/op\t    2069 allocs/op",
            "extra": "6380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 202082,
            "unit": "ns/op",
            "extra": "6380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54714,
            "unit": "B/op",
            "extra": "6380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "6380 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8553,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "148372 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8553,
            "unit": "ns/op",
            "extra": "148372 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "148372 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "148372 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 151572,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7252 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 151572,
            "unit": "ns/op",
            "extra": "7252 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7252 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7252 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606240251A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606240251A094101Federal",
            "value": 231380104,
            "unit": "1210428822606240251A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - ",
            "value": null,
            "unit": "",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort",
            "value": 936.1,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1285532 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 936.1,
            "unit": "ns/op",
            "extra": "1285532 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1285532 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1285532 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 92.66,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11061556 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 92.66,
            "unit": "ns/op",
            "extra": "11061556 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "11061556 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11061556 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 59.71,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "19467248 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 59.71,
            "unit": "ns/op",
            "extra": "19467248 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "19467248 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "19467248 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.33,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43102244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.33,
            "unit": "ns/op",
            "extra": "43102244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43102244 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43102244 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 14.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85328696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 14.07,
            "unit": "ns/op",
            "extra": "85328696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85328696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85328696 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "211807555 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.634,
            "unit": "ns/op",
            "extra": "211807555 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "211807555 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "211807555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 256776,
            "unit": "ns/op\t   54136 B/op\t     306 allocs/op",
            "extra": "4611 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 256776,
            "unit": "ns/op",
            "extra": "4611 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54136,
            "unit": "B/op",
            "extra": "4611 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4611 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 266947,
            "unit": "ns/op\t   54160 B/op\t     306 allocs/op",
            "extra": "4598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 266947,
            "unit": "ns/op",
            "extra": "4598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54160,
            "unit": "B/op",
            "extra": "4598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4598 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 152776,
            "unit": "ns/op\t   54555 B/op\t     310 allocs/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 152776,
            "unit": "ns/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54555,
            "unit": "B/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7468 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 148354,
            "unit": "ns/op\t   54577 B/op\t     310 allocs/op",
            "extra": "7358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 148354,
            "unit": "ns/op",
            "extra": "7358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54577,
            "unit": "B/op",
            "extra": "7358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7358 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 322519,
            "unit": "ns/op\t   59906 B/op\t     366 allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 322519,
            "unit": "ns/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59906,
            "unit": "B/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3940 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 321872,
            "unit": "ns/op\t   59893 B/op\t     366 allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 321872,
            "unit": "ns/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59893,
            "unit": "B/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4142 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 312985,
            "unit": "ns/op\t   59915 B/op\t     366 allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 312985,
            "unit": "ns/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59915,
            "unit": "B/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 305659,
            "unit": "ns/op\t   59603 B/op\t     367 allocs/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 305659,
            "unit": "ns/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59603,
            "unit": "B/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4713 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "49581037 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.25,
            "unit": "ns/op",
            "extra": "49581037 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49581037 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49581037 times\n4 procs"
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
          "id": "5509f666d41e2cc022e963a8932eec7770852b99",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0645a8eca970dbfba057407c0c7f543b976378ac",
          "timestamp": "2026-06-23T06:03:49Z",
          "url": "https://github.com/moov-io/benchmarks/commit/5509f666d41e2cc022e963a8932eec7770852b99"
        },
        "date": 1782269562364,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14352,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "83367 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14352,
            "unit": "ns/op",
            "extra": "83367 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "83367 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "83367 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 271599668,
            "unit": "ns/op\t42450832 B/op\t  203655 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 271599668,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450832,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203655,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 98932220,
            "unit": "ns/op\t42425393 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 98932220,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425393,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1415373833,
            "unit": "ns/op\t215541496 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1415373833,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541496,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 496000692,
            "unit": "ns/op\t215426080 B/op\t 1042807 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 496000692,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426080,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042807,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43585,
            "unit": "ns/op\t   23333 B/op\t     114 allocs/op",
            "extra": "27721 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43585,
            "unit": "ns/op",
            "extra": "27721 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23333,
            "unit": "B/op",
            "extra": "27721 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27721 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 78330,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "16410 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 78330,
            "unit": "ns/op",
            "extra": "16410 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "16410 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16410 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31666,
            "unit": "ns/op\t   21868 B/op\t      77 allocs/op",
            "extra": "37134 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31666,
            "unit": "ns/op",
            "extra": "37134 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21868,
            "unit": "B/op",
            "extra": "37134 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37134 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 277586,
            "unit": "ns/op\t   56398 B/op\t     552 allocs/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 277586,
            "unit": "ns/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56398,
            "unit": "B/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4227 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 277324,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 277324,
            "unit": "ns/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102045,
            "unit": "ns/op\t   29775 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102045,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29775,
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
            "value": 51429,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "23239 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51429,
            "unit": "ns/op",
            "extra": "23239 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "23239 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23239 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 221581,
            "unit": "ns/op\t   54717 B/op\t    2069 allocs/op",
            "extra": "5642 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 221581,
            "unit": "ns/op",
            "extra": "5642 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54717,
            "unit": "B/op",
            "extra": "5642 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5642 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8391,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "139927 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8391,
            "unit": "ns/op",
            "extra": "139927 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "139927 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "139927 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 159307,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 159307,
            "unit": "ns/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "7158 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606250252A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606250252A094101Federal",
            "value": 231380104,
            "unit": "1210428822606250252A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
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
            "value": 93.84,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13249780 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 93.84,
            "unit": "ns/op",
            "extra": "13249780 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13249780 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13249780 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.81,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18304140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.81,
            "unit": "ns/op",
            "extra": "18304140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18304140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18304140 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.61,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43522039 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.61,
            "unit": "ns/op",
            "extra": "43522039 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43522039 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43522039 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91316180 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "91316180 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91316180 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91316180 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.616,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213773954 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.616,
            "unit": "ns/op",
            "extra": "213773954 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213773954 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213773954 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 263828,
            "unit": "ns/op\t   54141 B/op\t     306 allocs/op",
            "extra": "4617 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 263828,
            "unit": "ns/op",
            "extra": "4617 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54141,
            "unit": "B/op",
            "extra": "4617 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4617 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 269862,
            "unit": "ns/op\t   54156 B/op\t     306 allocs/op",
            "extra": "4730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 269862,
            "unit": "ns/op",
            "extra": "4730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54156,
            "unit": "B/op",
            "extra": "4730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4730 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 152491,
            "unit": "ns/op\t   54551 B/op\t     310 allocs/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 152491,
            "unit": "ns/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54551,
            "unit": "B/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7374 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 151977,
            "unit": "ns/op\t   54589 B/op\t     310 allocs/op",
            "extra": "6876 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 151977,
            "unit": "ns/op",
            "extra": "6876 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54589,
            "unit": "B/op",
            "extra": "6876 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6876 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 326564,
            "unit": "ns/op\t   59862 B/op\t     366 allocs/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 326564,
            "unit": "ns/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59862,
            "unit": "B/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3775 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 328519,
            "unit": "ns/op\t   59889 B/op\t     366 allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 328519,
            "unit": "ns/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59889,
            "unit": "B/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3903 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 314943,
            "unit": "ns/op\t   59889 B/op\t     366 allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 314943,
            "unit": "ns/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59889,
            "unit": "B/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3885 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 315248,
            "unit": "ns/op\t   59606 B/op\t     367 allocs/op",
            "extra": "4710 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 315248,
            "unit": "ns/op",
            "extra": "4710 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59606,
            "unit": "B/op",
            "extra": "4710 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4710 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46449034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "46449034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46449034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46449034 times\n4 procs"
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
          "id": "8be4701dd9abd4f6e880a0e724f003cec2cc0774",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0d8e26650aacecf6874a2e081e8a1e04cc3a5532",
          "timestamp": "2026-06-24T06:03:59Z",
          "url": "https://github.com/moov-io/benchmarks/commit/8be4701dd9abd4f6e880a0e724f003cec2cc0774"
        },
        "date": 1782355955792,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14567,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "80035 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14567,
            "unit": "ns/op",
            "extra": "80035 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "80035 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "80035 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 275040904,
            "unit": "ns/op\t42451080 B/op\t  203658 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 275040904,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42451080,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203658,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 100539278,
            "unit": "ns/op\t42425431 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 100539278,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425431,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1387450018,
            "unit": "ns/op\t215541496 B/op\t 1042868 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1387450018,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541496,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042868,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 485349133,
            "unit": "ns/op\t215426445 B/op\t 1042810 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 485349133,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426445,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042810,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 44140,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "27080 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 44140,
            "unit": "ns/op",
            "extra": "27080 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "27080 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27080 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 74020,
            "unit": "ns/op\t   26941 B/op\t     159 allocs/op",
            "extra": "16089 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 74020,
            "unit": "ns/op",
            "extra": "16089 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26941,
            "unit": "B/op",
            "extra": "16089 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16089 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32816,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32816,
            "unit": "ns/op",
            "extra": "37086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37086 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37086 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 281338,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4036 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 281338,
            "unit": "ns/op",
            "extra": "4036 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4036 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4036 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 294981,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 294981,
            "unit": "ns/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4149 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102699,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102699,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
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
            "value": 52964,
            "unit": "ns/op\t   34807 B/op\t     228 allocs/op",
            "extra": "21747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 52964,
            "unit": "ns/op",
            "extra": "21747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34807,
            "unit": "B/op",
            "extra": "21747 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "21747 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 223804,
            "unit": "ns/op\t   54716 B/op\t    2069 allocs/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 223804,
            "unit": "ns/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54716,
            "unit": "B/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5380 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8679,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "138784 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8679,
            "unit": "ns/op",
            "extra": "138784 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "138784 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "138784 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 162348,
            "unit": "ns/op\t   61155 B/op\t     721 allocs/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 162348,
            "unit": "ns/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61155,
            "unit": "B/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6963 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606260251A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606260251A094101Federal",
            "value": 231380104,
            "unit": "1210428822606260251A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1204360 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1002,
            "unit": "ns/op",
            "extra": "1204360 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1204360 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1204360 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 91.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12965007 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.3,
            "unit": "ns/op",
            "extra": "12965007 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12965007 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12965007 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.9,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18337980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.9,
            "unit": "ns/op",
            "extra": "18337980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18337980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18337980 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.78,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43101271 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.78,
            "unit": "ns/op",
            "extra": "43101271 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43101271 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43101271 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91146991 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.43,
            "unit": "ns/op",
            "extra": "91146991 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91146991 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91146991 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213860569 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.64,
            "unit": "ns/op",
            "extra": "213860569 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213860569 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213860569 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 265114,
            "unit": "ns/op\t   54142 B/op\t     306 allocs/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 265114,
            "unit": "ns/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54142,
            "unit": "B/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4639 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 267971,
            "unit": "ns/op\t   54161 B/op\t     306 allocs/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 267971,
            "unit": "ns/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54161,
            "unit": "B/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4555 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 175332,
            "unit": "ns/op\t   54554 B/op\t     310 allocs/op",
            "extra": "6927 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 175332,
            "unit": "ns/op",
            "extra": "6927 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54554,
            "unit": "B/op",
            "extra": "6927 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6927 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 159755,
            "unit": "ns/op\t   54588 B/op\t     310 allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 159755,
            "unit": "ns/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54588,
            "unit": "B/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6675 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 327825,
            "unit": "ns/op\t   59890 B/op\t     366 allocs/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 327825,
            "unit": "ns/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59890,
            "unit": "B/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3727 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 323381,
            "unit": "ns/op\t   59867 B/op\t     366 allocs/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 323381,
            "unit": "ns/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59867,
            "unit": "B/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3597 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 318403,
            "unit": "ns/op\t   59864 B/op\t     366 allocs/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 318403,
            "unit": "ns/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59864,
            "unit": "B/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3858 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 318574,
            "unit": "ns/op\t   59670 B/op\t     367 allocs/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 318574,
            "unit": "ns/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59670,
            "unit": "B/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4591 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44466122 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.74,
            "unit": "ns/op",
            "extra": "44466122 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44466122 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44466122 times\n4 procs"
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
          "id": "01e80c23a93971c3896b30240801e226579a5e6e",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for 0cc8c9b299c6796a4217b2d31182ff427a69f318",
          "timestamp": "2026-06-25T06:03:31Z",
          "url": "https://github.com/moov-io/benchmarks/commit/01e80c23a93971c3896b30240801e226579a5e6e"
        },
        "date": 1782442660690,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14401,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "82900 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14401,
            "unit": "ns/op",
            "extra": "82900 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "82900 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "82900 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 267232730,
            "unit": "ns/op\t42450742 B/op\t  203655 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 267232730,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450742,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203655,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 99124056,
            "unit": "ns/op\t42425354 B/op\t  203605 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 99124056,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425354,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203605,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1394085539,
            "unit": "ns/op\t215541576 B/op\t 1042869 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1394085539,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541576,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042869,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 485142370,
            "unit": "ns/op\t215426296 B/op\t 1042808 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 485142370,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426296,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042808,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 43355,
            "unit": "ns/op\t   23332 B/op\t     114 allocs/op",
            "extra": "27753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 43355,
            "unit": "ns/op",
            "extra": "27753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23332,
            "unit": "B/op",
            "extra": "27753 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "27753 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 72905,
            "unit": "ns/op\t   26942 B/op\t     159 allocs/op",
            "extra": "15133 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 72905,
            "unit": "ns/op",
            "extra": "15133 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26942,
            "unit": "B/op",
            "extra": "15133 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "15133 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 31558,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "38352 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 31558,
            "unit": "ns/op",
            "extra": "38352 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "38352 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "38352 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 274330,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 274330,
            "unit": "ns/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "3951 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 281174,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 281174,
            "unit": "ns/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4264 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 102205,
            "unit": "ns/op\t   29776 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 102205,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29776,
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
            "value": 51708,
            "unit": "ns/op\t   34806 B/op\t     228 allocs/op",
            "extra": "23263 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 51708,
            "unit": "ns/op",
            "extra": "23263 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34806,
            "unit": "B/op",
            "extra": "23263 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "23263 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 231179,
            "unit": "ns/op\t   54718 B/op\t    2069 allocs/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 231179,
            "unit": "ns/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54718,
            "unit": "B/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5920 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8494,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "137511 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8494,
            "unit": "ns/op",
            "extra": "137511 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "137511 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "137511 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 159002,
            "unit": "ns/op\t   61152 B/op\t     721 allocs/op",
            "extra": "6968 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 159002,
            "unit": "ns/op",
            "extra": "6968 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61152,
            "unit": "B/op",
            "extra": "6968 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6968 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606270256A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606270256A094101Federal",
            "value": 231380104,
            "unit": "1210428822606270256A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "extra": "1210792 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1001,
            "unit": "ns/op",
            "extra": "1210792 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1210792 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1210792 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 90.97,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13059822 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 90.97,
            "unit": "ns/op",
            "extra": "13059822 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13059822 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13059822 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.34,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18887581 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.34,
            "unit": "ns/op",
            "extra": "18887581 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18887581 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18887581 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 27.55,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43034586 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 27.55,
            "unit": "ns/op",
            "extra": "43034586 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43034586 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43034586 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90393130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "90393130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90393130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90393130 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.628,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212304357 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.628,
            "unit": "ns/op",
            "extra": "212304357 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212304357 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212304357 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 272202,
            "unit": "ns/op\t   54147 B/op\t     306 allocs/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 272202,
            "unit": "ns/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54147,
            "unit": "B/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 257891,
            "unit": "ns/op\t   54151 B/op\t     306 allocs/op",
            "extra": "4656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 257891,
            "unit": "ns/op",
            "extra": "4656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54151,
            "unit": "B/op",
            "extra": "4656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4656 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 154424,
            "unit": "ns/op\t   54552 B/op\t     310 allocs/op",
            "extra": "7267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 154424,
            "unit": "ns/op",
            "extra": "7267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54552,
            "unit": "B/op",
            "extra": "7267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7267 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 150099,
            "unit": "ns/op\t   54578 B/op\t     310 allocs/op",
            "extra": "7456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 150099,
            "unit": "ns/op",
            "extra": "7456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54578,
            "unit": "B/op",
            "extra": "7456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7456 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 322382,
            "unit": "ns/op\t   59871 B/op\t     366 allocs/op",
            "extra": "3758 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 322382,
            "unit": "ns/op",
            "extra": "3758 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59871,
            "unit": "B/op",
            "extra": "3758 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3758 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 319054,
            "unit": "ns/op\t   59863 B/op\t     366 allocs/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 319054,
            "unit": "ns/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59863,
            "unit": "B/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3780 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 315199,
            "unit": "ns/op\t   59919 B/op\t     366 allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 315199,
            "unit": "ns/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59919,
            "unit": "B/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "4024 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 309700,
            "unit": "ns/op\t   59637 B/op\t     367 allocs/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 309700,
            "unit": "ns/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59637,
            "unit": "B/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4677 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 25.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46436882 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 25.87,
            "unit": "ns/op",
            "extra": "46436882 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46436882 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46436882 times\n4 procs"
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
          "id": "235fb8e40c1a3ed936f40e07e50305fae5537cbd",
          "message": "add moov-io/cryptfs Benchmarks (go) benchmark result for f07907bca91ae68792c402e98dbdb0e3e37a2df9",
          "timestamp": "2026-06-26T06:06:57Z",
          "url": "https://github.com/moov-io/benchmarks/commit/235fb8e40c1a3ed936f40e07e50305fae5537cbd"
        },
        "date": 1782528434044,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuildFile",
            "value": 14821,
            "unit": "ns/op\t   10765 B/op\t     131 allocs/op",
            "extra": "81096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - ns/op",
            "value": 14821,
            "unit": "ns/op",
            "extra": "81096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - B/op",
            "value": 10765,
            "unit": "B/op",
            "extra": "81096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildFile - allocs/op",
            "value": 131,
            "unit": "allocs/op",
            "extra": "81096 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader",
            "value": 270913758,
            "unit": "ns/op\t42450666 B/op\t  203654 allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - ns/op",
            "value": 270913758,
            "unit": "ns/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - B/op",
            "value": 42450666,
            "unit": "B/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/reader - allocs/op",
            "value": 203654,
            "unit": "allocs/op",
            "extra": "4 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator",
            "value": 100781730,
            "unit": "ns/op\t42425547 B/op\t  203606 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - ns/op",
            "value": 100781730,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - B/op",
            "value": 42425547,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/200_batches_100000_entries/iterator - allocs/op",
            "value": 203606,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader",
            "value": 1389179362,
            "unit": "ns/op\t215541544 B/op\t 1042869 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - ns/op",
            "value": 1389179362,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - B/op",
            "value": 215541544,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/reader - allocs/op",
            "value": 1042869,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator",
            "value": 501659667,
            "unit": "ns/op\t215426397 B/op\t 1042810 allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - ns/op",
            "value": 501659667,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - B/op",
            "value": 215426397,
            "unit": "B/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "Benchmark_ReadLargeFile/2500_batches_500000_entries/iterator - allocs/op",
            "value": 1042810,
            "unit": "allocs/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead",
            "value": 46469,
            "unit": "ns/op\t   23333 B/op\t     114 allocs/op",
            "extra": "26854 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - ns/op",
            "value": 46469,
            "unit": "ns/op",
            "extra": "26854 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - B/op",
            "value": 23333,
            "unit": "B/op",
            "extra": "26854 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitRead - allocs/op",
            "value": 114,
            "unit": "allocs/op",
            "extra": "26854 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead",
            "value": 75234,
            "unit": "ns/op\t   26943 B/op\t     159 allocs/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - ns/op",
            "value": 75234,
            "unit": "ns/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - B/op",
            "value": 26943,
            "unit": "B/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkWEBDebitRead - allocs/op",
            "value": 159,
            "unit": "allocs/op",
            "extra": "16141 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead",
            "value": 32476,
            "unit": "ns/op\t   21867 B/op\t      77 allocs/op",
            "extra": "37104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - ns/op",
            "value": 32476,
            "unit": "ns/op",
            "extra": "37104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - B/op",
            "value": 21867,
            "unit": "B/op",
            "extra": "37104 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDDebitFixedLengthRead - allocs/op",
            "value": 77,
            "unit": "allocs/op",
            "extra": "37104 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead",
            "value": 281196,
            "unit": "ns/op\t   56397 B/op\t     552 allocs/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - ns/op",
            "value": 281196,
            "unit": "ns/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - B/op",
            "value": 56397,
            "unit": "B/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4054 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2",
            "value": 282944,
            "unit": "ns/op\t   56396 B/op\t     552 allocs/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - ns/op",
            "value": 282944,
            "unit": "ns/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - B/op",
            "value": 56396,
            "unit": "B/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead2 - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "4083 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3",
            "value": 105029,
            "unit": "ns/op\t   29777 B/op\t     264 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - ns/op",
            "value": 105029,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkACHFileRead3 - B/op",
            "value": 29777,
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
            "value": 53961,
            "unit": "ns/op\t   34808 B/op\t     228 allocs/op",
            "extra": "22758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - ns/op",
            "value": 53961,
            "unit": "ns/op",
            "extra": "22758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - B/op",
            "value": 34808,
            "unit": "B/op",
            "extra": "22758 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDWrite - allocs/op",
            "value": 228,
            "unit": "allocs/op",
            "extra": "22758 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite",
            "value": 224684,
            "unit": "ns/op\t   54718 B/op\t    2069 allocs/op",
            "extra": "5348 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - ns/op",
            "value": 224684,
            "unit": "ns/op",
            "extra": "5348 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - B/op",
            "value": 54718,
            "unit": "B/op",
            "extra": "5348 times\n4 procs"
          },
          {
            "name": "BenchmarkLargeWEBWrite - allocs/op",
            "value": 2069,
            "unit": "allocs/op",
            "extra": "5348 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr",
            "value": 8693,
            "unit": "ns/op\t    7626 B/op\t      73 allocs/op",
            "extra": "136237 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - ns/op",
            "value": 8693,
            "unit": "ns/op",
            "extra": "136237 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - B/op",
            "value": 7626,
            "unit": "B/op",
            "extra": "136237 times\n4 procs"
          },
          {
            "name": "BenchmarkFileWriteErr - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "136237 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite",
            "value": 165766,
            "unit": "ns/op\t   61154 B/op\t     721 allocs/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - ns/op",
            "value": 165766,
            "unit": "ns/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - B/op",
            "value": 61154,
            "unit": "B/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkIATWrite - allocs/op",
            "value": 721,
            "unit": "allocs/op",
            "extra": "6902 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite",
            "value": 231380104,
            "unit": "1210428822606280246A094101Federal Reserve Bank   My Bank Name                   ",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - 1210428822606280246A094101Federal",
            "value": 231380104,
            "unit": "1210428822606280246A094101Federal",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
          },
          {
            "name": "BenchmarkPPDIATWrite - Bank",
            "value": null,
            "unit": "Bank",
            "extra": "101 times\n4 procs"
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
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1200198 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - ns/op",
            "value": 1030,
            "unit": "ns/op",
            "extra": "1200198 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1200198 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldShort - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "1200198 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong",
            "value": 91.64,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12941560 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - ns/op",
            "value": 91.64,
            "unit": "ns/op",
            "extra": "12941560 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12941560 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12941560 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort",
            "value": 62.52,
            "unit": "ns/op\t      16 B/op\t       2 allocs/op",
            "extra": "18527905 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - ns/op",
            "value": 62.52,
            "unit": "ns/op",
            "extra": "18527905 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "18527905 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldShort - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "18527905 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong",
            "value": 26.71,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "43420986 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - ns/op",
            "value": 26.71,
            "unit": "ns/op",
            "extra": "43420986 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "43420986 times\n4 procs"
          },
          {
            "name": "BenchmarkNumericFieldLong - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "43420986 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField",
            "value": 13.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85310528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - ns/op",
            "value": 13.4,
            "unit": "ns/op",
            "extra": "85310528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "85310528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseNumField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "85310528 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField",
            "value": 5.622,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "213719660 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - ns/op",
            "value": 5.622,
            "unit": "ns/op",
            "extra": "213719660 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "213719660 times\n4 procs"
          },
          {
            "name": "BenchmarkParseStringField - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "213719660 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles",
            "value": 275279,
            "unit": "ns/op\t   54143 B/op\t     306 allocs/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - ns/op",
            "value": 275279,
            "unit": "ns/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - B/op",
            "value": 54143,
            "unit": "B/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4603 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts",
            "value": 262774,
            "unit": "ns/op\t   54153 B/op\t     306 allocs/op",
            "extra": "4588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - ns/op",
            "value": 262774,
            "unit": "ns/op",
            "extra": "4588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - B/op",
            "value": 54153,
            "unit": "B/op",
            "extra": "4588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_ValidateOpts - allocs/op",
            "value": 306,
            "unit": "allocs/op",
            "extra": "4588 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir",
            "value": 157947,
            "unit": "ns/op\t   54560 B/op\t     310 allocs/op",
            "extra": "7479 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - ns/op",
            "value": 157947,
            "unit": "ns/op",
            "extra": "7479 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - B/op",
            "value": 54560,
            "unit": "B/op",
            "extra": "7479 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "7479 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts",
            "value": 162195,
            "unit": "ns/op\t   54593 B/op\t     310 allocs/op",
            "extra": "6724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - ns/op",
            "value": 162195,
            "unit": "ns/op",
            "extra": "6724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - B/op",
            "value": 54593,
            "unit": "B/op",
            "extra": "6724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeDir_ValidateOpts - allocs/op",
            "value": 310,
            "unit": "allocs/op",
            "extra": "6724 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups",
            "value": 323434,
            "unit": "ns/op\t   59870 B/op\t     366 allocs/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - ns/op",
            "value": 323434,
            "unit": "ns/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - B/op",
            "value": 59870,
            "unit": "B/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_3Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3613 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups",
            "value": 320730,
            "unit": "ns/op\t   59869 B/op\t     366 allocs/op",
            "extra": "3782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - ns/op",
            "value": 320730,
            "unit": "ns/op",
            "extra": "3782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - B/op",
            "value": 59869,
            "unit": "B/op",
            "extra": "3782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_5Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3782 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups",
            "value": 322124,
            "unit": "ns/op\t   59836 B/op\t     366 allocs/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - ns/op",
            "value": 322124,
            "unit": "ns/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - B/op",
            "value": 59836,
            "unit": "B/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_10Groups - allocs/op",
            "value": 366,
            "unit": "allocs/op",
            "extra": "3848 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups",
            "value": 308817,
            "unit": "ns/op\t   59629 B/op\t     367 allocs/op",
            "extra": "4623 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - ns/op",
            "value": 308817,
            "unit": "ns/op",
            "extra": "4623 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - B/op",
            "value": 59629,
            "unit": "B/op",
            "extra": "4623 times\n4 procs"
          },
          {
            "name": "BenchmarkMergeFiles/MergeFiles_100Groups - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "4623 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid",
            "value": 26.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46461094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - ns/op",
            "value": 26.1,
            "unit": "ns/op",
            "extra": "46461094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46461094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateCheckDigit/valid - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46461094 times\n4 procs"
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