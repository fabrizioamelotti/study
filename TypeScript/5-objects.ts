import { Computer } from './model/computer.model'

// TypeScripts objects
const undefinedObject:object = undefined;
const nullObject:object = null;
const myObject:object = {};

// Empty object model
const emptyObject:{} = {};
// emptyObject.name = "Samuel" Error! Because the model of emptyObject is {} and this is an empty object model.

const myComputer = new Computer({ram: 'Best ram ever', processor: 'AMD Rysen 9'});
console.log(myComputer.ram); // Best ram ever
console.log(myComputer.processor); // AMD Rysen 9
console.log(myComputer.video); // undefined
console.log(myComputer.notes); // This is a string with default notes when data.notes is undefined
