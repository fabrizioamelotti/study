class Animal {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this._description = description;
    }
    sayHello() {
        return `Hello, my name is: ${this.name}`;
    }
    getCompleteInformation() {
        return `id: ${this.id} | name: ${this.name} | description: ${this.description}`
    }
    toString() {
        return `Animal`
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
}

class Dog extends Animal {
    constructor(id, name, description) {
        super(id, name, description);
    }
    sound() {
        return "Guau";
    }
    toString() {
        return `Dog ${this.sound()}`
    }
}

class Cat extends Animal {
    constructor(id, name, description) {
        super(id, name, description);
    }
    sound() {
        return "Miau";
    }
    toString() {
        return `Cat ${this.sound()}`
    }
}


let dog = new Dog(1, "Mia", "Mia description");
console.log(dog.sayHello()); // Hello, my name is: Mia
console.log(dog.description); // Mia description
console.log(dog.sound()); // Guau
console.log(dog.toString()); // Dog Guau
console.log(dog.getCompleteInformation()); // id: 1 | name: Mia | description: Mia description
console.log(dog.__proto__); // Animal

dog.description = "Mia desc 2";
console.log(dog.description); // Mia desc 2

let cat = new Cat(2, "Ricky", "Ricky description");
console.log(cat.sayHello()); // Hello, my name is: Ricky
console.log(cat.description); // Ricky description
console.log(cat.sound()); // Miau
console.log(cat.toString()); // Cat Miau
console.log(cat.getCompleteInformation()); // id: 2 | name: Ricky | description: Ricky description
console.log(cat.__proto__); // Animal

// Prototypes
// Adding a method to the Animal
Animal.prototype.greet = function () {
    return `Greet: ${this.sound()}`
};

console.log(dog.greet()); // Greet: Guau
console.log(cat.greet()); // Greet: Miau