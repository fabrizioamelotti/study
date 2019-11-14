# Readable Code
This text pretends introduce some concepts of how to improve your code skills.

## Situation
We spend more time: writing or reading code?
The ratio of read and write is 10 to 1.
Reading code is about fast and effective communication.

> Caring about the what happens after you deploy your code.

## Motivation:
The productivity is really high at the beginning of the project. 
But after some time the productivity is less and even less with more time.

## How do we make our code easy to read?
We have to create good practices in our project to build and maintain along the time.

Example: We can have a guide, how to do something
	
* Names - For variables, functions, files.
* Good practices

## Readable code
How we can create a readable code? Here some advices

### Rule of 5 seconds 
If you spend more than 5 seconds trying to understand the code, that is a signal about something is wrong.
We can smell the errors.

### Naming
Choose the correct name for variables and functions.
Use conventions for naming.

> Check the file: ReadableCode.md

> **Misspelling** - Consistent naming and spelling matter.
 
> Use Eslint & Prettier for example to format the code and have the same format in every file.

### Most important first
We can follow an internal convention like this:

1. Variables
1. Init variables
1. some actions

In general, organize the code.
		
### Smaller funtions
Less than 20 lines of code per function.

```javascript
function ensureLessThan20() {
    while (code.count > 20) {
        refactor(code);
    }
}
```

### Context === Clarity
Provide clarity through code first.
Example:

```javascript
// not easy to read
if (
    hero.power >= villan.power ||
    hero.energy < 100 ||
    !villan.monsterMode
) {
    // more code...
}
```

```javascript
// better right?
if ( hero.canDefeat(villan) ) {
    // more code...
}
```

### Comments
Comments must be readable and maintained.

Avoid comments when:
1. Explains "what" - If your code need some explanaiton, something is wronge.
1. Ourdated and incorrect. No old comments
1. Shouda used a well named function.

Use comments when
1. Explains "Why"
1. Explains consequences
1. API Docs (e.g. jsdoc)
1. RegEx

### Not everything is lost
Write dirty code, then clean it.
Put your code down one day and come back.

### Resume:
* 5 seconds rule
* One thing per file
* Small functions
* Well through naming
* Use comments wisely
* Craft a style guide
* Use prettier


		





