import { Person } from './model/person.model';

function sum(valueOne: number, valueTwo: number): number {
    return valueOne + valueTwo
}

function voidExample(): void {
    sum(1,2);
}

function neverExample(): never {
    throw Error
}

function sayHello(person:Person) {
    return `Hello ${person.name}`
}

const samuel = new Person('Samuel', 'WebStorm', 28);
sayHello(samuel); // Hello Samuel
