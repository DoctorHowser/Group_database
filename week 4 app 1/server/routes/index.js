var express = require('express');
var router = express.Router();

var path = require('path');
//var salary = require('../modules/salary');
//var years = require('../modules/years');
//var name = require('../modules/name');

//var randomNumber = require('../modules/randomNumber');

//router.post('/data', function(req, res){
//    console.log(req.body);
//    var salaryNum = salary(req.body.salaryMin, req.body.salaryMax);
//    var yearsOfService = years(req.body.yearsMin, req.body.yearsMax);
//    var fullName = name(req.body.gender);
//    console.log(salaryNum, yearsOfService, fullName);
//    res.send("Hello");
//});



router.get('/*', function(req, res){
    var file =req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;