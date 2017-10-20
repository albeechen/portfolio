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

server.post('/sent', (req, res) => {
	console.log("name= " + req.body.name);
	console.log("mail= " + req.body.mail);
	console.log("msg= " + req.body.msg);
	nodemailer.createTestAccount((err, account) => {
		let transporter  = nodemailer.createTransport({
		    host: "smtp.gmail.com",
		    port: 465,
		    secure: true,
		    auth: {
		        user: "XXX@gmail.com",
		        pass: "XXX"
		    }
		});
		let mailOptions = {
			from: req.body.mail,
			to: 'albeec0902@gmail.com',
			subject: req.body.name,
			text: req.body.msg,
		};
		transporter.sendMail(mailOptions, (error, info) => {
	        if (error) {
	            return console.log(error);
	        }
	        console.log('Message sent: %s', info.messageId);
	        // Preview only available when sending through an Ethereal account
	        console.log('Preview URL: %s', mailer.getTestMessageUrl(info));
	    });
	    transporter.close();
	 });
	return res.redirect("contact.html");
});

server.listen(server.get('port'),  function () {
  	console.log('Node app is running on port', server.get('port'));
});
