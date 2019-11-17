function solution(A) {
    const mySet = new Set(A);
    return mySet.size;
}

// Detected time complexity: O(N*log(N)) or O(N)