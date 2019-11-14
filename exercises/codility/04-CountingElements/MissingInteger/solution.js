function solution(A) {

    let min = 1;
    const map = {};

    for (let i in A) {
        map[A[i]] = true;

        if (A[i] === min) {
            min = getNewMin(min, map);
        }
    }

    return min;
}

function getNewMin(actualMin, map) {
    actualMin += 1;
    while (1) {
        if (map[actualMin]) {
            actualMin += 1
        } else {
            return actualMin;
        }
    }
}

// Alternative with less performance
// function getNewMin(actualMin, map) {
//     actualMin += 1;
//     if (map[actualMin]) {
//         return getNewMin(actualMin, map);
//     } else {
//         return actualMin;
//     }
// }

// Detected time complexity: O(N) or O(N * log(N))