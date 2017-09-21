const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const nodemailer  = require('nodemailer');

server.set('port', (process.env.PORT || 8080));
server.use(bodyParser.urlencoded({extended: false }));
server.use(express.static(__dirname + '/public/'));
server.get('/', (req, res) => {
	console.log("ENTER GET");
	res.status = 200;
	res.send({message: 'test'});
});

server.listen(server.get('port'),  function () {
  	console.log('Node app is running on port', server.get('port'));
});