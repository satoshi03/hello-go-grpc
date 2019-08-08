# hello-grpc-go
A sample grpc server/client on Go.

## Setup

This package requires Go 1.9 or later and GOPATH is set.

Download packages.

```
$ go get -u github.com/satoshi03/hello-grpc-go/server
$ go get -u github.com/satoshi03/hello-grpc-go/client
```

## Run

Start server and listen.

```
$ server &
```

Start client and send message (default: world)

```
$ cleint &
```
