function solution(A) {
    debugger
    const n = Math.trunc(A.length/2);

    // Always the position 0 is the length of the array
    if (A[0] !== A.length) {
        return 0;
    }

    for (let i = 1; i <= n; i++) {

        if (A[ A[i] ] !== i) {
            return 0
        }

        const right = A.length - i;
        if (A[ A[right] ] !== right) {
            return 0
        }
    }

    return 1;
}

// TODO - Incomplete
