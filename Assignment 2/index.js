"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputa = require('readline-sync');
var s1 = inputa.question("Enter C++ Numbers :");
var s2 = inputa.question("Enter Operating System Numbers :");
var s3 = inputa.question("Enter Database Numbers :");
var sub1 = parseFloat(s1);
var sub2 = parseFloat(s2);
var sub3 = parseFloat(s3);
var sum = sub1 + sub2 + sub3;
function grade(s1, s2, s3) {
    var total = sum / 3;
    console.log("".concat(total));
    if (total >= 91 && total <= 100)
        console.log("A+");
    else if (total >= 81 && total < 91)
        console.log("A");
    else if (total >= 71 && total < 81)
        console.log("B+");
    else if (total >= 61 && total < 71)
        console.log("B");
    else if (total >= 51 && total < 61)
        console.log("C+");
    else if (total >= 41 && total < 51)
        console.log("C");
    else if (total >= 33 && total < 41)
        console.log("D");
    else if (total >= 0 && total < 33)
        console.log("F");
    else
        console.log("Invalid Value");
}
if (sub1 > 100 && sub2 > 100 && sub3 > 100) {
    console.log("Each Subject less then 100");
}
else {
    grade(s1, s2, s3);
}
