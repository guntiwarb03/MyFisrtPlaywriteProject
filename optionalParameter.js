"use strict";
let addnumber;
function adding(num1, num2) {
    if (num2 == undefined)
        return num1;
    else
        return num1 + num2;
}
let printValue;
printValue = adding(10);
console.log("Retun value is :--" + printValue); //As num2 is optional(?) and undefined so it will return only num1 value
printValue = adding(10, 200);
console.log("Retun value is :--" + printValue); //As num2 is optional(?) and defined so it will return num1+num2 value
