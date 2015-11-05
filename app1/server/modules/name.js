var randomNumber = require('./randomNumber');

var femaleFirstNamesArray = ["Emma", "Olivia", "Sophia", "Isabella", "Ava"];

var maleFirstNamesArray = ["Noah", "Liam", "Mason","Jacob", "William"];

var firstNamesArray = ["Noah", "Emma", "Liam", "Olivia", "Mason", "Sophia", "Jacob", "Isabella", "William", "Ava"];

var lastNamesArray = ["Smith", "Johnson", "Williams", "Brown", "Miller", "Garcia", "Moore", "Taylor", "Lee", "Clark"];

var firstName, lastName, fullName;

var combineName = function(sex) {
    switch (sex) {
        case "female":
            firstName = femaleFirstNamesArray[randomNumber(0, femaleFirstNamesArray.length - 1)];
            lastName = lastNamesArray[randomNumber(0, lastNamesArray.length - 1)];
            fullName = firstName + " " + lastName;
            break;
        case "male":
            firstName = maleFirstNamesArray[randomNumber(0, maleFirstNamesArray.length - 1)];
            lastName = lastNamesArray[randomNumber(0, lastNamesArray.length - 1)];
            fullName = firstName + " " + lastName;
            break;
        case "both":
            firstName = firstNamesArray[randomNumber(0, firstNamesArray.length - 1)];
            lastName = lastNamesArray[randomNumber(0, lastNamesArray.length - 1)];
            fullName = firstName + " " + lastName;
            break;
    }
    return fullName;
}

module.exports = combineName;