var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
	    auth: {
	        user: "noreply.kcw",
	        pass: "L0g1c^2tech"
	    }
	});


exports.sendemail = function(to,body,subject)
{

	var mailOptions = {
	    from: 'KCW', // sender address
	    to: to, // list of receivers
	    subject: subject, // Subject line
	    html: body // html body
	};

	


	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);

	});
}