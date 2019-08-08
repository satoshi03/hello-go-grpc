const {HelloRequest, HelloReply} = require('./hello_pb.js');
const {GreeterClient} = require('./hello_grpc_web_pb.js')

var client = new GreeterClient('http://127.0.0.1:50051', null, null);

var request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
  console.log(response.getMessage());
});
