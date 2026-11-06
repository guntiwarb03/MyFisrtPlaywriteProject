"use strict";
let sum;
let sub;
function addition(num1, num2) {
    sum = num1 + num2;
    console.log("Addition of number as :-- " + sum);
}
addition(10, 20);
addition(100, 20);
addition(10, 200);
addition(15, 20);
function substraction(n1, n2) {
    sub = n1 - n2;
    console.log("Substraction of numbers is :--" + sub);
    return sub; //if must be the last statement
}
substraction(50, 10);
substraction(500, 30);
