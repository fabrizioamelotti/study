// Intarfaces
import { Person } from './interface/person.interface';
import { Bear } from './interface/bear.interface';
import { Computer } from './interface/computer.interface';

const samuel: Person = {name: 'Samuel', surname: 'Stark', age: 20 };

// Re-assign values
samuel.name = 'Saaaaaamuel';

// Multiple interfaces
let personBear: Person | Bear; // Person or Bear
personBear = { name: 'Bear', surname: 'Man', age: 43 };
console.log(personBear); // Is a person

personBear = { claws: 3 };
console.log(personBear); // Is a bear

let multiInterface: Person & Bear & Computer;
multiInterface.name = 'Name';
multiInterface.claws = 10;
multiInterface.ram = 32;

console.log(multiInterface); // Multi interfaces

/**
 * With a new type with multiple interfaces!
  */
type multiTypes = Person & Bear & Computer;
let anotherMultiTypeObject: multiTypes;
anotherMultiTypeObject.claws = 12423;
