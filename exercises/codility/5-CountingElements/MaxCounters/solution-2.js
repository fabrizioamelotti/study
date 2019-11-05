function solution(N, A) {

    let max = 0;
    const arr = new Array(N);
    arr.fill(0);

    const NPlus1 = N + 1;
    for (let i in A) {
        if (1 <= A[i] && A[i] <= N) {
            arr[A[i] - 1] += 1;

            if (arr[A[i] - 1] > max) {
                max = arr[A[i] - 1];
            }

        } else if (A[i] === NPlus1) {
            arr.fill(max);
        }
    }

    return arr;
}