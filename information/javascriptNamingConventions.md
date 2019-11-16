# JavaScript Naming Conventions
Sometimes choose the correct name is difficult, but what about if even when you have the correct name now you have to choose which is the best way to write it?.
Here some tips about naming in JS.

## Case sensitive
JavaScript is key sensitive.

```javascript
let name = 'Fabrizio';
let Name = 'Samuel';
let NAME = 'Angela';

console.log(name);
// "Fabrizio"
console.log(Name);
// "Samuel"
console.log(NAME);
// "Angela"
```

## Self descriptive
JavaScript variable should be self-descriptive

```javascript
// incorrect
let value = 'Samuel';

// incorrect
let val = 'Samuel';

// correct
let firstName = 'Samuel';
```

## Conventions
In general we use camelCase for variables naming.

```javascript
// incorrect
let firstname = 'Samuel';

// incorrect
let first_name = 'Samuel';

// incorrect
let FIRSTNAME = 'Samuel';

// incorrect
let FIRST_NAME = 'Samuel';

// correct
let firstName = 'Robin';
```

## Diferent Styles

* camelCase (used in JS)
* PascalCase (used in JS)
* snake_case
* kebab-case

## Boolean
A prefix like is, are, or has helps every JavaScript developer to distinguish a boolean from another variable by just looking at it:

```javascript
// incorrect
let visible = true;
// correct
let isVisible = true;

// incorrect
let equal = false;
// correct
let areEqual = false;

// incorrect
let encryption = true;
// correct
let hasEncryption = true;
```

## Function
JavaScript functions are written in camel case too. In addition, it's a best practice to actually tell what the function is doing by giving the function name a verb as prefix.

```javascript
// incorrect
function name(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
// correct
function getName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

## Class
A JavaScript class is declared with a PascalCase in contrast to other JavaScript data structures:
```javascript
class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
let me = new SoftwareDeveloper('Robin', 'Wieruch');
```

## Coomponent
Use Pascal Case

Example file name: UserComponent

Example Vue: 
```
<script>
export default {
  name: 'UserComponent'
}
```

Usage
```
<script>
<template>
    <UserComponent />
</template>
```

## Methods 
```javascript
class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // use a prefix
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let me = new SoftwareDeveloper('Robin', 'Wieruch');
console.log(me.getName());
```

## Private
```javascript
class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = _getName(firstName, lastName);
  }
  _getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}
let me = new SoftwareDeveloper('Robin', 'Wieruch');

// correct
let name = me.name;
console.log(name);
// "Robin Wieruch"

// incorrect
name = me._getName(me.firstName, me.lastName);
console.log(name);
// "Robin Wieruch"
```

## Constant
Last but not least, there are constants -- intended to be non-changing variables -- in JavaScript which are written in capital letters (UPPERCASE):

```javascript
const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;
const DAY = SECONDS * MINUTES * HOURS;

const DAYS_UNTIL_TOMORROW = 1;
```

## Dash
```javascript
// incorrct
const person = {
  'first-name': 'Robin',
  'last-name': 'Wieruch',
};
const firstName = person['first-name'];

// correct
const person = {
  firstName: 'Robin',
  lastName: 'Wieruch',
};
const firstName = person.firstName;
```

It's even not possible to use a dash directly for a variable declaration:

```javascript
let first-name = 'Samuel';
// Uncaught SyntaxError: Unexpected token '-'
```

## Files
There are two strategies of naming files in JavaScript: PascalCase and kebab-case. In JavaScript frontend applications, you will often see PascalCase for naming components (e.g. Vue components).

```
- components/
 --- user/
 ----- UserProfile.js
 ----- UserList.js
 ----- UserItem.js
 --- ui/
 ----- Dialog.js
 ----- Dropdown.js
 ----- Table.js
```

In contrast, in JavaScript backend application, kebap-case is the common sense:

```
- routing/
--- user-route.js
--- messages-route.js
```
