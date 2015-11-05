/**
 * Created by Zeo on 11/4/15.
 */
var express = require('express');
var router = express.Router();

var employeeGenerator= require('../modules/employeeGenerator');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/chembros');
mongoose.model('Employee', new Schema({"gender": String, "salary": Number, "years": Number, "name": String, "title": String, "rank":Number }, {collection: 'employees'}));

var Employee = mongoose.model('Employee');

router.post('/data', function(req, res){
    console.log(req.body);
    var generatedEmployee = employeeGenerator(req.body.salaryMin, req.body.salaryMax, req.body.yearsMin, req.body.yearsMax, req.body.gender);


    var newEmployee= new Employee({
        "gender": generatedEmployee.gender,
        "salary": generatedEmployee.salary,
        "years": generatedEmployee.years,
        "name":generatedEmployee.name

    });

    newEmployee.save(function(err, data){
        if(err) console.log(err);
        res.send(data);
    });

});

router.get('/data', function(req,res){
   Employee.find({}, function (err, data){
       if(err){
           console.log("ERROR! : Homie!! this is what zeeshan wants!!!!", err);
       }
       res.send(data);
   });
});

module.exports=router;