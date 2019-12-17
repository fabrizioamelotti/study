# JavaScript Classes
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties is assigned inside a constructor() method.

## Class Definition

Use the keyword class to create a class, and always add a constructor method.

The constructor method is called each time the class object is initialized.

Example:

```javascript
class Dog {
    constructor(name) {
        this.name = name;
    }
}

let dog = new Dog("Mia");
```

## Methods

The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

You are also free to make your own methods, the syntax should be familiar:

```javascript
class Dog {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hello, my name is: ${this.name}`;
    }
}

let dog = new Dog("Mia");
console.log(dog.sayHello()); // Hello, my name is: Mia
```

## Static Methods

Static methods are defined on the class itself, and not on the prototype.

That means you cannot call a static method on the object (dog), but on the class (Dog):

```javascript
class Dog {
    constructor(name) {
        this.name = name;
    }
    static hi() {
        return "Hi";
    }
    sayHello() {
        return `Hello, my name is: ${this.name}`;
    }
}


let dog = new Dog("Mia");

// Call 'hello()' on the class Dog:
console.log(Dog.hi());

// and NOT on the 'dog' object:
// console.log(dog.hi());
// this would raise an error. 
```

## Inheritance

To create a class inheritance, use the **extends** keyword.

A class created with a class inheritance inherits all the methods from another class:

```javascript
class Animal {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
  sayHello() {
      return `Hello, my name is: ${this.name}`;
  }
}

class Dog extends Animal {
    constructor(id, name, description) {
        super(id, name, description);
    }
    sound() {
        return "Guau";
    }
}


let dog = new Dog(1, "Mia", "");
console.log(dog.sayHello());
console.log(dog.sound());
```
