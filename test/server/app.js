var express = require('express');
var bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
var p = require('./routes/route');

const app = express();

//Connect to MongoDB
var mongoose= require("mongoose");
mongoose.connect('mongodb://localhost/testdata',{useNewUrlParser:true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('db connected');  
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/snmp', p);


// Create Session
require("./snmpManager").createSnmpSession();

const port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});