function solution(N) {
    return getGap(getBinary(N));
}

function getBinary(number) {
    return (number >>> 0).toString(2);
}

function getGap(binaryString) {
    const res = binaryString.match(/(?=)0+(?=1)/g);
    if (res) {
        return getLongest(res).length;
    }

    return 0;
}

function getLongest(arr) {
    return arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
}
