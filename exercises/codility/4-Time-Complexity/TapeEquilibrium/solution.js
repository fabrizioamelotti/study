function solution(A) {

    let left = sum(A.slice(0, 1));
    let right = sum(A.slice(1, A.length));

    let min = Math.abs(left - right);
    const length = A.length;

    for (let i = 1; i < length - 1; i++) {

        left = left + A[i];
        right = right - A[i];

        const diff = Math.abs(left - right);
        if (diff < min )  {
            min = diff;
        }
    }

    return min;
}

function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// Detected time complexity: O(N)