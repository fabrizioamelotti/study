function solution(N, A) {

    const arr = new Array(N);
    arr.fill(0);

    const NPlus1 = N + 1;
    for (let i in A) {
        if (1 <= A[i] && A[i] <= N) {
            arr[A[i] - 1] += 1;
        } else if (A[i] === NPlus1) {
            arr.fill(Math.max(...arr));
        }
    }

    return arr;
}