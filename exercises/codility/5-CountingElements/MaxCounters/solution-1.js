function solution(N, A) {

    const length = A.length;
    const arr = new Array(N);
    arr.fill(0);

    const NPlus1 = N + 1;
    for (let i = 0; i < length; i++) {
        if (1 <= A[i] && A[i] <= N) {
            arr[A[i] - 1] += 1;
        } else if (A[i] === NPlus1) {
            arr.fill(Math.max(...arr));
        }
    }

    return arr;
}