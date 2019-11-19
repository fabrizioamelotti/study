# Async Await
There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”.

## ASYNC
Let’s start with the async keyword. It can be placed before a function, like this:

```javascript
async function f () {
    return 1;
}
```

The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
For instance, this function returns a resolved promise with the result of 1, let’s test it:

```javascript
async function f () {
  return 1;
}

f().then((data) => {
    console.log(data); // 1
});
```

We could explicitly return a promise, that would be the same:
```javascript
async function f () {
  return Promise.resolve(1);
}
```

## AWAIT
The keyword await makes JavaScript wait until that promise settles and returns its result.
Works only inside an async functions.

```javascript
async function f () {
    const res = await promise;
}
```

Here’s an example with a promise that resolves in 1 second:
```javascript
async function f () {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => 
        resolve("done!")
    , 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();
```

The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.
Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

> **Can’t use await in regular functions**

```javascript
// Incorrect
function f () {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
}
```
We will get this error if we do not put async before a function. As said, await only works inside an async function.

> **await won’t work in the top-level code**

```javascript
// Incorrect
// syntax error in top-level code
let response = await fetch('some-url');
let jsonData = await response.json();
```

```javascript
// Correct
(async () => {
    let response = await fetch('some-url');
    let jsonData = await response.json();
    console.log(jsonData);
})();
```

## Error handling
If a promise resolves normally, then await promise returns the result. But in case of a rejection, it throws the error, just as if there were a throw statement at that line.

This code:
```javascript
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
```

Is the same as this:
```javascript
async function f() {
  throw new Error("Whoops!");
}
```

Real example:
```javascript
async function f() {

  try {
    let res = await fetch('http://no-such-url');
    console.log(res);
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

f();
```
In case of an error, the control jumps to the catch block

## Multiple calls with async await
If we have to do many calls, we can use Promise.all()

```javascript

```







