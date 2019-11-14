function solution(A) {

    const length = A.length;
    const pLength = length - 2;
    const qLength = length - 1;

    for (let p = 0; p < pLength; p++) {
        for (let q = p + 1; q < qLength; q++) {

            let prefix = q + 1;
            let resLength = length - q - 1;
            let resLength2 = Math.trunc(resLength/2);

            for (let r = 0; r < resLength2; r++) {

                const R1 = prefix + r;
                const R2 = length - r - 1;
                /**
                 * A[P] + A[Q] > A[R]
                 * A[Q] + A[R] > A[P]
                 * A[R] + A[P] > A[Q]
                 */
                if (
                    A[p] + A[q] > A[R1] &&
                    A[q] + A[R1] > A[p] &&
                    A[R1] + A[p] > A[q]
                ) {
                    return 1;
                } else if (
                    A[p] + A[q] > A[R2] &&
                    A[q] + A[R2] > A[p] &&
                    A[R2] + A[p] > A[q]
                ){
                    return 1;
                }
            }

            // Check if mid
            if (resLength2) {
                if (resLength % 2 !== 0) {
                    if (
                        A[p] + A[q] > A[resLength2 + 1] &&
                        A[q] + A[resLength2 + 1] > A[p] &&
                        A[resLength2 + 1] + A[p] > A[q]
                    ) {
                        return 1;
                    }
                }
            } else {
                if (
                    A[p] + A[q] > A[prefix] &&
                    A[q] + A[prefix] > A[p] &&
                    A[prefix] + A[p] > A[q]
                ) {
                    return 1;
                }
            }
        }
    }

    return 0;
}

// Result: 75%
// Detected time complexity: O(N**3)

// Test: solution([10,2,5,1,8,20]); -> 1
// solution([10, 50, 5, 1]); -> 0
// solution([10,0,0,1,5,0,0,0,0,0,0]); => 0
