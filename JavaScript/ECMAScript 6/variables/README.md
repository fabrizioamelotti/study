# Variables - var | let | const

In javascript we have three different ways to create a variable.

- var
- let
- const

What is the difference between them? But firstly, some additional information:

> A javascript variable is a simply a name of storage location.

There are some rules while declaring a JavaScript variable (also known as identifiers).

1. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
2. After first letter we can use digits (0 to 9), for example: 'value1'.
3. JavaScript variables are case sensitive, for example x and X are different variables.
4. All JavaScript variables must be identified with unique names.
5. Reserved words (like JavaScript keywords) cannot be used as names.

```javascript
let hello = 1;
let HELLO = 2;

console.log(hello); // 1
console.log(HELLO); // 2 

// More examples
let hello123 = 213;
let _hello1 = 1;
let $hello = 1234;

console.log(hello123); // 213
console.log(_hello1); // 1
console.log($hello); // 1234
```

# Global variable or Local variable
```javascript
var globalVariable = "Global";

function hello() {
    var localVariable = "Hello local";
    console.log(localVariable); // Hello local
    console.log(globalVariable); // Global
}
function bye() {
    var localVariable = "Bye local";
    console.log(localVariable); // Bye local
    console.log(globalVariable); // Global
}

hello();
bye();

console.log(globalVariable); // Global
console.log(localVariable); // Error -> localVariable is not defined

// Results
// Hello local
// Global
// Bye local
// Global
// Global
// Error -> localVariable is not defined
```

Whats is wrong?
The issue is because in javascript the variables exist just in a specific block.

> Block hello & bye - localVariable exist just here, in the hello function
> 
> The same happend with the bye function, that's why too we can use the same name in both functions.
>
> VAR is a variable with **Function Scope**

# VAR
The first way to create a variable in javascript was "var".

> Some information
>
> Re-Declaring - You can re-declare the variable

```javascript
var number = 1;
console.log(number); // 1

var number;
console.log(number); // 1

var number = 2;
console.log(number); // 2
```

# LET
Declare a variable with 'let' is a variable with **Block Scope**.
Variables declared inside a block {} can not be accessed from outside the block:

```javascript
{
    let hello = 'hello'
}
// hello = 'hi'
// 'hello' variable can't be used here
```

> Some information
>
> Re-declare is **NOT allowed**

```javascript
let number = 1;
console.log(number); // 1

let number;

// Result
// Error - Uncaught SyntaxError: Identifier 'number' has already been declared
```

# CONST
Const is similar a constant. Similar because not some constants can change.
More information: https://www.w3schools.com/js/js_const.asp

```javascript
const hi = 'Hi';
console.log(hi); // Hi

hi = 'Hello';
// Error!! -> Uncaught TypeError: Assignment to constant variable.
```

> Block Scope
```javascript
const x = 1;
{
    const y = 2;
    console.log(x); // 1
}
console.log(y);
// Uncaught ReferenceError: y is not defined
```

> Assigned when Declared
```javascript
// Correct
const numberSeven = 7;
console.log(numberSeven); // 7

// Incorrect
const numberNine;
numberNine = 9;
// Uncaught SyntaxError: Missing initializer in const declaration
```

> Reasign a value
```javascript
// Correct
const arr = [1,2,3];

// Incorrect
const arrX = [2,2,2];
arrX = [2,2,2,2,2];
// Uncaught TypeError: Assignment to constant variable.
```

> CONST Object & Array can change
```javascript
const obj = { id: 1 };
console.log(obj.id); // 1

obj.id = 2;
console.log(obj.id); // 2

const array = [1,2,3];
console.log(array); // [1, 2, 3]

array.push(4);
console.log(array); // [1, 2, 3, 4]
```

# HOISTING
Hoisting is JavaScript's default behavior of moving declarations to the top.

More: https://www.w3schools.com/js/js_hoisting.asp

> IMPORTANT
>
> Variables and constants declared with **let** or **const** are **NOT HOISTED!**

> Normal declaration
```javascript
var x = 5;
console.log(x); // 5 
```

> How?
```javascript
{
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
}
```

Explanation: Javascript moves the **DECLARATION** to the top ->

```javascript
{
    var x;
    console.log(x); // undefined
    x = 5;
    console.log(x); // 5
}
```

That's why "x" at the first console.log is undefined.

> IMPORTANT! Just the DECLARATION is moved, not the initialization

> GOOD PRACTICE: Declare Your Variables At the Top

> JavaScript in strict mode does not allow variables to be used if they are not declared.
> "use strict"

# Use strict
"use strict"; Defines that JavaScript code should be executed in "strict mode".

The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

More: https://www.w3schools.com/js/js_strict.asp

Example:
```javascript
// INCORRECT
"use strict"
x = 4
// Error! -> Uncaught ReferenceError: x is not defined
```
```javascript
// CORRECT
"use strict"
let x = 4;
console.log(x); // 4
```
