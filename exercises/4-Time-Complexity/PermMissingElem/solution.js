function solution(A) {
    if (A.length === 0) {
        // A = []
        return 1;
    } else if (A.length === 1) {
        if (A[0]) {
            if (A[0] === 1) {
                // A = [1]
                return 2;
            } else {
                // A = [2]
                return 1;
            }
        } else {
            // A = [0]
            return 1;
        }
    }

    const arr = [0];

    const ALength = A.length;
    const halfLength = Math.trunc(ALength / 2);

    for (let i = 0; i < halfLength; i++) {

        // Get from left
        arr[A[i]] = A[i];

        // Get from right
        arr[A[ ALength - 1 - i ]] = A[ ALength - 1 - i ];
    }

    if (ALength % 2 !== 0) {
        // Get the middle
        arr[A[halfLength]] = A[halfLength];
    }

    let missingValue;
    const arrLength = arr.length;
    const halfArrLength = Math.trunc(arrLength / 2);
    for (let j = 1; j < halfArrLength; j++) {
        if (!arr[j]) {
            missingValue = j;
            break;
        } else if (!arr[arrLength - 1 - j]) {
            missingValue = arrLength - 1 - j;
            break;
        }
    }

    if (arrLength % 2 !== 0) {
        if (!arr[halfArrLength]) {
            missingValue = halfArrLength;
        }
    }

    if (!missingValue) {
        return arr.length;
    }

    return missingValue;
}

// Detected time complexity: O(N) or O(N * log(N))