function solution(A, K) {

    for (let i = 1; i <= K; i++) {
        A = A.splice(A.length -1, 1).concat(A);
    }

    return A;
}
