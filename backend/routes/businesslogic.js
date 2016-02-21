var mysqlobj = require('./mysql');
var emailservice = require('./email');
var randomstring = require('randomstring');
var md5 = require('MD5');
var request = require('request')



exports.updatelocation = function (req, res) {
	try {
		//console.log("helllo")
		var userid = req.body.userid;
		var location = req.body.location;
		
		var params =  userid + ", '" + location +"','I'";
		
		var message = "";var errval = false;
		if(req.body.userid == undefined)
		{
			message += "userid not provided. ";
		}
		if(req.body.userid == "")
		{
			message += "userid is blank. ";
		}


		if(req.body.location == undefined)
		{
			message += "location not provided. ";
		}
		if(req.body.location == "")
		{
			message += "location is blank. ";
		}


		
		if(message!="")
		{
			errval = true;
		}

		if(errval)
		{
			res.send({
				code : 200,
				error : {message : message},
				message : message
			});
			return;
		}


		var sqlQuery = "call spgetset_location(" + params + ")";
		mysqlobj.fetchdata(function(err, results) {
			console.log(JSON.stringify(results[0]));
			console.log()
			
			

			res.send({
				code : 200,
				error : err,
				message : results[0]
				
		// 0 -No Streak, 5- Continuous streak.
			});
		}, sqlQuery);
	} catch (ex) {
		res.send({
			code : 400,
			error : ex,
			message : ex.message
		});
	}
}


exports.fetchlocations = function (req, res) {
	try {
		console.log("helllo")
		var userid = 1;
		var location = "req.body.location";
		
		var params =  userid + ", '" + location +"','G'";
		
		var message = "";var errval = false;

		
		if(message!="")
		{
			errval = true;
		}

		if(errval)
		{
			res.send({
				code : 200,
				error : {message : message},
				message : message
			});
			return;
		}


		var sqlQuery = "call spgetset_location(" + params + ")";
		mysqlobj.fetchdata(function(err, results) {
			console.log(JSON.stringify(results[0]));
			console.log()
			
			

			res.send({
				code : 200,
				error : err,
				message : results[0]
				
		// 0 -No Streak, 5- Continuous streak.
			});
		}, sqlQuery);
	} catch (ex) {
		res.send({
			code : 400,
			error : ex,
			message : ex.message
		});
	}
}




