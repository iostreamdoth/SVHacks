var mysql = require('mysql');

var connectionpool = [];
var pushed = 0;
var popped = 0;
var poollength = 10;
var isconnectionpool = false;
function getConnection() {
	var connection = mysql.createConnection({
		host : '127.0.0.1',
		user : 'root',
		password : 'MySql',
		database : 'svhacks',
		multipleStatements : true
	});

	return connection;

}

function fetchdata(callback, sqlQuery) {

	console.log("\nSQL Query::" + sqlQuery);

	var connection = getConnection();

	connection.connect();

	connection.query(sqlQuery, function(err, rows, fields) {
		if (err) {
			console.log("ERROR: " + err.message);
			callback(err, err.message);
		} else { // return err or result
			// console.log("DB Results:" + rows);
			callback(err, rows);
		}
		connection.end()

		;
	});

}
exports.fetchdata = fetchdata;