# Arrays
An Arrry is a JavaScript object type. It's a list of other objects.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Examples
```javascript
// Empty Array
const arr1 = new Array();
const arr2 = [];

// List of numbers
const numbers = [1,2,3,4];

// List of strings
const strings = ["Hello", "my", "name", "is", "Fabrizio"];

// List of objects
const objects = [{id: 6, name: "Charizard"}, {id: 150, name: "MewTwo"}, {id: 197, name: "Umbreon"}];

// Mixed
const mix = [1, "Hi", [2,4,6], {}, true];
```

## Check if array is empty, undefined or null
If we have to check if the array exist or even more, if is empty, we can do this:
```javascript
// Check if is an array
const number = 1;
const string = "Hello";
const emptyArray = [];

console.log(`isArray number? ${Array.isArray(number)}`);
console.log(`isArray string? ${Array.isArray(string)}`);
console.log(`isArray array? ${Array.isArray(emptyArray)}`);

// False
// False
// True

// Check null
// If checks if the condition is true or false
if (emptyArray) {
    console.log("Array exist");
} else {
    console.log("Array doesn't exist");
}

// Check if is not empty
if (emptyArray.length) {
    console.log("Array with items");
} else {
    console.log("Array is empty");
}

// Complete check
const arr = [1,2,3,4,5];
if (arr && Array.isArray(arr) && arr.length) {
    /**
     This validation is for:
        * arr --> not undefined 
        * arr --> not null
        * Array.isArray(arr) --> is an array object
        * arr.length --> not empty array
    */
    console.log("Complete Array validation");
} else {
    console.log("Array is null|undefined|not an array|empty array");
}
```
> IF: Test if the CONDITION is TRUE or FALSE.

TRUE condition:
* true --> true (boolean true)
* 1 --> true (number not cero is true)
* "" --> true (string is true)
* {} --> true (Object is true)
* [] --> true (Array is true)

FALSE condition
* false --> false (boolean false)
* 0 --> false
* null --> false
* undefined --> false

## Loop an Array
How I can loop an array? Which is the best way?
```javascript
// Create an array with 10000 elements
const arr = new Array(10000);
const arrLength = arr.length;

// Fill the array with a number
arr.fill(7);

// Check the length
console.log(`Length: ${arrLength}`);

let count = 0;
while(count < 10) {

    console.log(`Loop: ${count + 1}`);

    // Array forEach
    console.time("forEach");
    let sumForEach = 0;
    arr.forEach(a => sumForEach += a);
    console.timeEnd("forEach");
    
    // For
    console.time("for");
    let sumFor = 0;
    for (let i = 0; i < arrLength; i++) {
        sumFor += arr[i];
    }
    console.timeEnd("for");
    
    // ForIn
    console.time("forIn");
    let sumForIn = 0;
    for (let i in arr) {
        sumForIn += arr[i];
    }
    console.timeEnd("forIn");

    // ForOf
    console.time("forOf");
    let sumForOf = 0;
    for (let i of arr) {
        sumForOf += arr[i];
    }
    console.timeEnd("forOf");

    // Reduce
    console.time("reduce");
    let sumReduce = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    sumReduce = arr.reduce(reducer);
    console.timeEnd("reduce");

    // While
    console.time("while");
    let j = 0;
    let sumWhile = 0;
    while (j < arrLength) {
      sumWhile += arr[j];
      j++;
    }
    console.timeEnd("while");

    // Sums
    console.log(`Sum sumForEach: ${sumForEach}`);
    console.log(`Sum sumFor: ${sumFor}`);
    console.log(`Sum sumForIn: ${sumForIn}`);
    console.log(`Sum sumForOf: ${sumForOf}`);
    console.log(`Sum sumReduce: ${sumReduce}`);
    console.log(`Sum sumWhile: ${sumWhile}`);

    count++; 
}
```
> Fill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

> Tip: Is very important use other variable for the length! - const arrLength = arr.length - It's faster

After several times... the winer is --> WHILE !!!

Yes, the fastest way to loop an array is with while

## Usefull functions
> Get an item from array
```javascript
const numbers = [1,2,3,4];
console.log(`First: ${numbers[0]}`);
console.log(`Second: ${numbers[1]}`);
console.log(`Last: ${numbers[numbers.length - 1]}`);
```

> Length
```javascript
const numbers = [1,2,3,4];
console.log(numbers.length);
// 4
```

> Add item to the front
```javascript
const numbers = [1,2,3,4];
numbers.unshift(0);
console.log(numbers);
// [0, 1, 2, 3, 4]
```

> Add item to the end
```javascript
const numbers = [1,2,3,4];
numbers.push(5);
console.log(numbers);
// [1, 2, 3, 4, 5]
```

> Remove item to the front
```javascript
const numbers = [1,2,3,4];
numbers.shift();
console.log(numbers);
// [2, 3, 4]
```

> Remove item to the end
```javascript
const numbers = [1,2,3,4];
numbers.pop();
console.log(numbers);
// [1, 2, 3]
```

> Copy an array - Two different arrays
```javascript
const arr1 = [1,2,3,4];
const arr2 = arr1.slice();
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
// arr1: [1, 2, 3, 4]
// arr2: [1, 2, 3, 4]

arr1.push(5);
arr2.push(6);

console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
// arr1: [1, 2, 3, 4, 5]
// arr2: [1, 2, 3, 4, 6]

// Wrong way to copy!
const arr3 = [1,2,3];
const arr4 = arr3;

console.log(`arr3: ${arr3}`);
console.log(`arr4: ${arr4}`);
// arr3: [1, 2, 3]
// arr4: [1, 2, 3]

arr3.push(4);

console.log(`arr3: ${arr3}`);
console.log(`arr4: ${arr4}`);
// arr3: [1, 2, 3, 4]
// arr4: [1, 2, 3, 4]
// Wht? Because is the same array!!!
```
```javascript
// Another way to copy an array
const arr1 = [1,2,3];
const arr2 = Array.from(arr1);

console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
// arr1: [1, 2, 3]
// arr2: [1, 2, 3]

arr1.push(4);
arr2.push(5);

console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
// arr1: [1, 2, 3, 4]
// arr2: [1, 2, 3, 5]
```

> Filter
>
>The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```javascript
const numbers = [1,2,3,55,45,6456,324,100,777,44,77,1235654];

// Get all the numbers bigger than 100
const result = numbers.filter(n => n > 100);

console.log(`Bigger than 100: ${result}`);
// [6456,324,777,1235654]
```

> Every
>
>The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
```javascript
const numbers = [1,2,3,55,45,6456,324,100,777,44,77,1235654];

// Check if all the numbers are bigger than 1000
const result = numbers.every(n => n > 1000);

console.log(`Every number is bigger than 1000? ${result}`);
// False
```

> Some
>
>The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 
```javascript
const numbers = [1,2,3,55,45,6456,324,100,777,44,77,1235654];

// Check if some the numbers are bigger than 1000
const result = numbers.some(n => n > 1000);

console.log(`Some numbers is bigger than 1000? ${result}`);
// True
```

> Map
> 
> The map() method creates a new array with the results of calling a provided function on every element in the calling array.
```javascript
const numbers = [2,4,6,8,10];

// Get the double of this numbers
const result = numbers.map(n => n * 2);

console.log(`Original: ${numbers}`);
console.log(`Double: ${result}`);
// True
```