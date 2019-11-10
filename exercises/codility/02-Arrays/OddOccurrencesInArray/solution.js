function solution(A) {

    const obj = {};
    const n = Math.trunc(A.length/2);

    for (let i = 0; i < n; i++) {

        addOrDelete( obj, A[i] );

        addOrDelete( obj, A[ A.length - 1 - i ] );
    }

    addOrDelete( obj, A[n] );

    return parseInt(Object.keys(obj)[0]);
}

function addOrDelete(obj, key) {
    if ( obj[key] ) {
        delete obj[key];
    } else {
        obj[key] = key;
    }
}

// Detected time complexity: O(N) or O(N*log(N))
