var express = require('express');
var server = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.use(express.static(__dirname + '/'));
server.get('/', (req, res) => {
	console.log("ENTER GET");
	res.status = 200;
	res.send({message: 'test'});
});

server.listen(server_port, server_ip_address, function () {
  	console.log( "Listening on " + server_ip_address + ", port " + server_port )
});