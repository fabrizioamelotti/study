// Create an Object

// Empty Object
let firstObject = {};
console.log("Empty Object");
console.log(firstObject);
console.log("------------------");

// Person Object
let person = {
    id: 1,
    name: "Fabrizio",
    surname: "Amelotti",
    engineer: true,
    address: {
        street: "Calle Falsa",
        number: "123",
        city: "Springfield",
        country: "USA"
    },
    rewards: [1,2,3,4],
    getFullName: function() {
        return this.name + ' ' +this.surname;
    }
};

console.log("Person object");
console.log(person);
console.log("------------------");

console.log("Access to attribute");
console.log("person.name -> " + person.name);
console.log("person['name'] -> " + person["name"]);
console.log("------------------");

console.log("Access to method");
console.log("person.getFullName() -> " + person.getFullName());
console.log("person[\"getFullName\"]() -> " + person["getFullName"]());
console.log("------------------");

let otherObject = new Object();
// Simplified ->
// let otherObject = {};
otherObject.name = "Name";
otherObject.surname = "Surname";
otherObject.number = 1;
otherObject.boolean = true;
otherObject.list = ["hello", "my", "name", "is", "Peewee"];

console.log(otherObject);
console.log("------------------");

// Merge | Assign
// Copy attributes from one object to another
console.log("Merge | Assign");
let object1 = {
    id: 1,
    name: "Fabrizio"
};
let object2 = {
    name: "Samuel",
    list: [1,2,3,4],
    boolean: true
};
console.log("Object1");
console.log(object1);
console.log("Object2");
console.log(object2);
console.log("Object.assign");
console.log(Object.assign(object1, object2));
console.log("After assign");
console.log("Object1");
console.log(object1);
console.log("Object2");
console.log(object2);
console.log("Assign: Add all the attr from object2 to object1");
console.log("------------------");

// Define property | Object.defineProperty()
console.log("Define property | Object.defineProperty()");
const object3 = {};

Object.defineProperty(object3, 'property1', {
    value: 7,
    writable: false
});
console.log("Object 3");
console.log(object3);

object3.property1 = 9;
// Throws an error in strict mode

console.log("Expected output: 7 -> Because the property1 is not writeable");
console.log(object3.property1);
console.log("------------------");

console.log(Object.entries(person));

// Entries
console.log("Entries | Object.entries()");

console.log("Person:");
console.log(person);

console.log("Object.entries(person)");
console.log(Object.entries(person));
console.log("------------------");

// Freeze | Object.freeze()
console.log("Freeze | Object.freeze()");

const objectFreeze = { id: 1, name: "Samuel"};

Object.freeze(objectFreeze);

objectFreeze.name = "Dmitry";

console.log("objectFreeze -> The name was not changed");
console.log(objectFreeze);
console.log("------------------");