// Single types
let myUndefined:undefined = undefined;

let myNull:null = null;

let myBoolean:boolean = true;

let myString:string = "This is a string";

let myNumber:number = 7;

const myArrayOfNumbers:Array<number> = [1,2,3,4];
const myArrayOfNumbers2:number[] = [1,2,3,4,5];

const myArrayOfStrings:Array<string> = ["Item 1", "Item 2", "Item 3"];

let myDate:Date = new Date();

const myObject:object = {
    id: 1,
    name: "Samuel",
    admin: true
};

// Multiple types
let myAnyVariable:any = 1;
myAnyVariable = "true";
myAnyVariable = false;
myAnyVariable = [1,2,3];

let booleanOrNumber:boolean|number = 35;
booleanOrNumber = false;
// booleanOrNumber = "Error!" -- This is an error

// Compare types of the objects
// typeof
if (typeof null === "object") {
    console.log("typeof null is object")
}
if (typeof myBoolean === "boolean") {
    console.log("Is a boolean")
}
if (typeof myNumber === "number") {
    console.log("Is a number")
}
if (typeof myString === "string") {
    console.log("Is a string")
}
if (typeof myArrayOfNumbers === "object") {
    console.log("Is a object")
}

// instanceof !!!
import { Bear } from './model/bear.model';

const bear = new Bear("Robert", 5);

if (bear instanceof Bear) {
    console.log(`Yes! ${bear.name} is an instance of Bear!`);
}

// Cast
let thisIsNotAString:any = "This is a string";
// let stringLength = thisIsNotAString.length
let stringLength = (thisIsNotAString as string).length;
stringLength = (<string> thisIsNotAString).length;
