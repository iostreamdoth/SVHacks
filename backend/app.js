
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , fs = require('fs')
  , cors = require('cors')
  , path = require('path');

var bal = require('./routes/businesslogic');
var app = express();
app.set('port', process.env.PORT || 5001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.favicon(path.join(__dirname, 'public','img','favicon.ico')));
//app.use(express.logger('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
    next();
});
app.use(express.bodyParser());
//app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat', cookie: { maxAge: 3000000000000000 }}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.use(cors());

app.post('/update/location',bal.updatelocation)
app.get('/location',bal.fetchlocations)




var serverObj = http.createServer(app);
serverObj.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

