
var salary = require('./salary');
var years = require('./years');
var name = require('./name');

var employeeGenerator= function (salaryMin, salaryMax, yearMin, yearMax, sex){
   var  salaryNum = salary(salaryMin,salaryMax);
    var yearsOfService = years(yearMin,yearMax);
    var fullName = name(sex);
    console.log("here is whats happening in employee MOdule",salaryNum, yearsOfService,fullName);
    var employeeObject={};
        employeeObject.salary= salaryNum;
        employeeObject.years=yearsOfService;
        employeeObject.name=  fullName;
        employeeObject.gender=sex;

    return employeeObject;

};

module.exports=employeeGenerator;