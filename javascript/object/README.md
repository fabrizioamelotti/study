# JavaScript Object
Let's begin!

## Documentation
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object

## Interview Questions:
* How I can create an object?
* How I can get attr from an object?
* How I can combine the attributes of two objects?
* How I can set an object read only?
* How I can set an attr read only?
* How I can get all the attributes from an object?
* How I can get all the values from an object?

## What is a Object in js?
> **Object**: A set of attributes and values

> In javascript: 
```
{
    <attr>: <value>,
    <attr>: <method>
}

// Example:
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
       return this.name + ' ' +this.surname
   }
}
``` 

## Operations with an Object
Accessing object attributes and methods:
```
objectName.methodName()
```

Get attribute (attr):
```
person.name
person["name"]
```

Execute a method:
```
person.getFullName()
person["getFullName"]()
```

# Some methods about Object
> How I can combine the attributes of two objects?
>
> Merge | Assign : Copies the values of all enumerable own properties from one or more source objects to a target object
```
let object1 = {
    id: 1,
    name: "Fabrizio"
};
let object2 = {
    name: "Samuel",
    list: [1,2,3,4],
    boolean: true
};

Object.assign(object1, object2);

// Result:
// All the attrs from object2 now are inside of object1, 
// if there is some attr with the same name is overridden
object1 = {
    name: "Samuel",
    list: [1,2,3,4],
    boolean: true,
    id: 1
};
object2 = {
    name: "Samuel",
    list: [1,2,3,4],
    boolean: true
};
```
> How I can set an attr read only?
>
> Define property | Object.defineProperty() : Adds the named property described by a given descriptor to an object.
```
const object3 = {};

Object.defineProperty(object3, 'property1', {
    value: 7,
    writable: false
});

object3.property1 = 9;
// Throws an error in strict mode

console.log(object3.property1);
// Expected output: 7 -> Because the property1 is not writeable
 ```
> How I can get all the attributes from an object?
>
> Object.keys()
```
let car = {
    id: 1,
    brand: "Audi"
};

Object.keys(car)
// Expected 
["id", "brand"]
```

> How I can get all the values from an object?
>
> Object.values()
```
let car = {
    id: 1,
    brand: "Audi"
};

Object.values(car)
// Expected 
[1, "Audi"]
```

> Entries | Object.entries() : Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
```
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
       return this.name + ' ' +this.surname
   }
}

// Returns an array [<attr>, <value>]
Object.entries(person);

// Expected:
(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ["id", 1]
1: (2) ["name", "Fabrizio"]
2: (2) ["surname", "Amelotti"]
3: (2) ["engineer", true]
4: (2) ["address", {…}]
5: (2) ["rewards", Array(4)]
6: (2) ["getFullName", ƒ]
 ```

> How I can set an object read only?
>
> Freeze | Object.freeze() : Freezes an object: other code can't delete or change any properties.
```
const objectFreeze = { id: 1, name: "Samuel"};

Object.freeze(objectFreeze);

objectFreeze.name = "Dmitry";

console.log(objectFreeze.name);
// Expected output: The name is Samuel, the name was not changed.
 ```

