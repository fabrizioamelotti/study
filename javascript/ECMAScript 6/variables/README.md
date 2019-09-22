# Variables - var | let | const

In javascript we have three different ways to create a variable.

- var
- let
- const

What is the difference between them? But firstly, some additional information:

> A javascript variable is a simply a name of storage location.

There are some rules while declaring a JavaScript variable (also known as identifiers).

1. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
2. After first letter we can use digits (0 to 9), for example value1.
3. JavaScript variables are case sensitive, for example x and X are different variables.
4. All JavaScript variables must be identified with unique names.
5. Reserved words (like JavaScript keywords) cannot be used as names

```javascript
let hello = 1;
let HELLO = 2;

console.log(hello);
console.log(HELLO);
// 1
// 2 

// More examples
let hello123 = 213;
let _hello1 = 1;
let $hello = 1234;

console.log(hello123);
console.log(_hello1);
console.log($hello);
```

# Global variable or Local variable
```javascript
var globalVariable = "Global";

function hello() {
    var localVariable = "Hello local";
    console.log(localVariable);
    console.log(globalVariable);
}
function bye() {
    var localVariable = "Bye local";
    console.log(localVariable);
    console.log(globalVariable);
}

hello();
bye();

console.log(globalVariable);
console.log(localVariable);

// Results
// Hello local
// Global
// Bye local
// Global
// Global
// Error
```

Whats is wronge?
The issue is because in javascript the variables exist just in a specific block.

> Bloque hello & bye - localVariable exist just here, in the hello function
> 
> The same happend with the bye function, that's why too we can use the same name in both functions.

# VAR
The first way to create a variable in javascript was "var".

> Some information
>
> Re-Declaring - You can re-declare the variable

```javascript
var number = 1;
console.log(number);
var number;
console.log(number);
var number = 2;
console.log(number);

// Result
// 1
// 1
// 2
```

# LET
sdfdsfs

> Some information
>
> Re-declare is not allowed

```javascript
let number = 1;
console.log(number);
let number;

// Result
// Error - Uncaught SyntaxError: Identifier 'number' has already been declared
```

# CONST
asdsadsad

> some infor
>

# VAR vs LET
adssda

Examples:
```javascript

```

# HOISTING
adsada

