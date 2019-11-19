// async function
async function f1 () {
    return 1;
}

f().then((data) => {
    console.log(data); // 1
});

// async await
async function f2 () {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>
                resolve("done!")
            , 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

f2();

// Multiple calls
async function correctAsync500ms() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("correctAsync500ms");
        }, 500);
    })
}

async function correctAsync100ms() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("correctAsync100ms");
        }, 500);
    })
}

(async () => {
    console.time("promise-all");
    const res = await Promise.all([correctAsync500ms(), correctAsync100ms()]);
    console.timeEnd("promise-all");
    console.log(res);
})();
