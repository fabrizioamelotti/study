"use strict";
exports.__esModule = true;
// Single types
var myBoolean = true;
var myString = "This is a string";
var myNumber = 7;
var myArrayOfNumbers = [1, 2, 3, 4];
var myArrayOfNumbers2 = [1, 2, 3, 4, 5];
var myArrayOfStrings = ["Item 1", "Item 2", "Item 3"];
var myDate = new Date();
var myObject = {
    id: 1,
    name: "Samuel",
    admin: true
};
// Multiple types
var myAnyVariable = 1;
myAnyVariable = "true";
myAnyVariable = false;
myAnyVariable = [1, 2, 3];
var booleanOrNumber = 35;
booleanOrNumber = false;
// booleanOrNumber = "Error!" -- This is an error
// Compare types of the objects
// typeof
if (typeof myBoolean === "boolean") {
    console.log("Is a boolean");
}
if (typeof myNumber === "number") {
    console.log("Is a number");
}
if (typeof myString === "string") {
    console.log("Is a string");
}
if (typeof myArrayOfNumbers === "object") {
    console.log("Is a object");
}
// instanceof !!!
var bear_model_1 = require("./model/bear.model");
var bear = new bear_model_1.Bear("Robert");
if (bear instanceof bear_model_1.Bear) {
    console.log("Yes! " + bear.name + " is an instance of Bear!");
}
