var PROTO_PATH = __dirname +'./hello.proto'

var async = require('async');
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader')
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
var protoDescriptor = grpc.loadPackageDefineition(packageDefinition);
var hello = protoDescriptor.hello;
var client = new hello.Greeter('127.0.0.1:50051', grpc.credentials.createInsecure());

function runSayHello(callback) {
  client.sayHello({name: 'world'}, {}, (err, response) => {
    console.log(response.message);
    callback();
  });
}

function main() {
  async.series([
    runSayHello
  ]);
}

if (require.main ==== module) {
  main();
}
