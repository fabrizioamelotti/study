# Arrow functios
A new way to write functions in JS, sometimes called 'fat arrow' functions, utilizing the new token =>

## Syntax
```
(arg1, arg2...) => {
  // Function body
}
```
A list of arguments within parenthesis, followed by a 'fat arrow' (=>), followed by a function body.

This is very similar to traditional functions, we just leave off the function keyword and add a fat arrow after the arguments.
> Different ways to write an arrow function
```javascript
const sum1 = (a,b) => { return a + b };
const sum2 = (a,b) => a + b;
// Examples
console.log(sum1(1,2));
console.log(sum2(2,2));
// Results
// 3
// 4
```
> If we have just 1 argument, we can leave off the parenthesis
```javascript
const getFirst = array => array[0];
// Example
console.log(getFirst([11,22,33]));
// Result
// 11
```

## Enclosing Scope Context
Unlike every other form of function, arrow functions don't have their own execution context.

Practically, this means that both this and arguments are inherited from their parent function.

For example:
```javascript
const person = {
    id: 1,
    name: "Fabrizio",
    surname: "Amelotti",
    getFullName1: function() {
      return `${this.name} ${this.surname}`
    },
    getFullName2: () => {
      return `${this.name} ${this.surname}`
    }
};

console.log(person.getFullName1());
console.log(person.getFullName2());

// Results
// getFullName1: Fabrizio Amelotti - String
// getFullName2:  - Empty string - Doesn't work because the arrow function doesn't have their own execution context
```
Other Example:
```javascript
const test = {
  name: 'Fabrizio',
  createAnonFunction: function() {
    return function() {
      console.log(this.name);
      console.log(arguments);
    };
  },

  createArrowFunction: function() {
    return () => {
      console.log(this.name);
      console.log(arguments);
    };
  }
};

const anon = test.createAnonFunction('hello', 'world');
const arrow = test.createArrowFunction('hello', 'world');

anon();
// Results
// undefined
// {}

arrow();
// Results
// Fabrizio
// { '0': 'hello', '1': 'world' } - arguments Its's and object with the parameters
```
The anonymous function has its own function context, so when you call it there is no reference available to the this.name of the test object, nor to the arguments called in creating it.

The arrow function, on the other hand, has the exact same function context as the function that created it, giving it access to both the arguments and the test object.

## Where do I use this?
Some examples
```javascript
const arr = [1,2,3,4,5];
const result1 = arr.map(n => n + 1);
console.log(result1);
// [2, 3, 4, 5, 6]

const objects = [{id: 1, name: "Fabrizio"}, {id: 2, name: "Samuel"}, {id: 3, name: "Ricardo", surname: "Fort", tag: "El comandante"}]
const result2 = objects.map(o => o.name);
console.log(result2);
// ["Fabrizio", "Samuel", "Ricardo"]

// Get the property name of the object and return it
const result3 = objects.map(({name}) => name);
console.log(result3);
// ["Fabrizio", "Samuel", "Ricardo"]

const arr2 = [2,4,6];
arr2.forEach(number => {
  console.log(number);
});
// Result
// 2
// 4
// 6

new Promise((resolve, reject) => {
    console.log('Hello :)');
    resolve();
})
.then(() => {
    console.log('All is working fine');
})
.catch(() => {
    console.error('Something is not working well');
});
```

## Where You Should Not Use Arrow Functions
Don't use in objects
```javascript
// This is wrong
class pokemonWrong {
    id = 150;
    name = "MewTwo";
    sayHello = () => {
        console.log("Hi human");
    }   
}

// This is OK
class pokemon {
    id = 150;
    name = "MewTwo";
    sayHello() {
        console.log("Hi human");
    }   
}
```
```javascript
const person = {
    id: 1,
    name: "Fabrizio",
    surname: "Amelotti",
    // Good idea
    getFullName1: function() {
      return `${this.name} ${this.surname}`
    },
    // Bad idea
    getFullName2: () => {
      return `${this.name} ${this.surname}`
    }
};
```