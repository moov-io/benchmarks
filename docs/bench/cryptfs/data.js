window.BENCHMARK_DATA = {
  "lastUpdate": 1727989906599,
  "repoUrl": "https://github.com/moov-io/benchmarks",
  "entries": {
    "moov-io/cryptfs Benchmarks": [
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
          "id": "3f6314d3fe948d8a6dca76257142be9c5a5434bc",
          "message": "build: show output.txt on failure, startup containers for cryptfs and watchman",
          "timestamp": "2024-10-03T21:09:33Z",
          "url": "https://github.com/moov-io/benchmarks/commit/3f6314d3fe948d8a6dca76257142be9c5a5434bc"
        },
        "date": 1727989906586,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCryptfs__AES",
            "value": 53707,
            "unit": "ns/op\t    3104 B/op\t      25 allocs/op",
            "extra": "23076 times\n4 procs"
          },
          {
            "name": "BenchmarkCryptfs__AES - ns/op",
            "value": 53707,
            "unit": "ns/op",
            "extra": "23076 times\n4 procs"
          },
          {
            "name": "BenchmarkCryptfs__AES - B/op",
            "value": 3104,
            "unit": "B/op",
            "extra": "23076 times\n4 procs"
          },
          {
            "name": "BenchmarkCryptfs__AES - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "23076 times\n4 procs"
          }
        ]
      }
    ]
  }
}