function solution(X, A) {

    const length = A.length;
    const set = new Set();
    const Y = X + 1;

    for (let i = 0; i < length; i++) {
        const val = A[i];
        if (val < Y) {
            set.add(val);
            if (set.size === X) {
                return i;
            }
        }
    }

    return -1;
}

// Detected time complexity: O(N)