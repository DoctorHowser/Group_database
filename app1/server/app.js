var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var employee = require('./routes/employee');

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use('/employee', employee);
app.use('/', index);


app.listen(app.get('port'), function(){
    console.log("Listening to", app.get('port'));
});