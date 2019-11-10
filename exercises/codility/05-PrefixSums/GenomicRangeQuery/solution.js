function solution(S, P, Q) {

    const sLength = S.length;
    const map = {
        count_of_a: new Array(sLength + 1).fill(0),
        count_of_c: new Array(sLength + 1).fill(0),
        count_of_g: new Array(sLength + 1).fill(0),
        count_of_t: new Array(sLength + 1).fill(0),
        A: function (i) {
            this.count_of_a[i + 1] = 1;
        },
        C: function (i) {
            this.count_of_c[i + 1] = 1;
        },
        G: function (i) {
            this.count_of_g[i + 1] = 1;
        },
        T: function (i) {
            this.count_of_t[i + 1] = 1;
        }
    };

    /**
     * Building the array of x
     * Example: S: "ACGTACGT"
     * Result:
     * count_of_a: [1,0,0,0,1,0,0,0]
     * count_of_c: [0,1,0,0,0,1,0,0]
     * count_of_g: [0,0,1,0,0,0,1,0]
     * count_of_t: [0,0,0,1,0,0,0,1]
     */
    for (let i = 0; i < sLength; i++) {
        map[S[i]](i);
    }

    /**
     * Transform the array to count array
     * Example: S: "ACGTACGT"
     * count_of_a: [1,1,1,1,2,2,2,2]
     * count_of_c: [0,1,1,1,1,2,2,2]
     * count_of_g: [0,0,1,1,1,1,2,2]
     * count_of_t: [0,0,0,1,1,1,1,2]
     */
    for (let i = 1; i < sLength; i++) {
        map.count_of_a[i] = map.count_of_a[i] + map.count_of_a[i - 1];
        map.count_of_c[i] = map.count_of_c[i] + map.count_of_c[i - 1];
        map.count_of_g[i] = map.count_of_g[i] + map.count_of_g[i - 1];
        map.count_of_t[i] = map.count_of_t[i] + map.count_of_t[i - 1];
    }

    debugger
    const result = [];
    const pLength = P.length;
    for (let i = 0; i < pLength; i++) {
        if (map.count_of_a[Q[i] + 1] - map.count_of_a[P[i]] != 0) {
            result.push(1);
        } else if (map.count_of_c[Q[i] + 1] - map.count_of_c[P[i]] != 0) {
            result.push(2);
        } else if (map.count_of_g[Q[i] + 1] - map.count_of_g[P[i]] != 0) {
            result.push(3);
        } else if (map.count_of_t[Q[i] + 1] - map.count_of_t[P[i]] != 0) {
            result.push(4);
        }
    }

    return result;
}

/**
 * Test
 * solution("AC", [0,0,1], [0,1,1])
 * [1, 1, 2]
 *
 * solution("ACGTACGT", [0,1], [2,4])
 * [1,1]
 *
 * solution("ACGTACGT", [0,1], [2,3])
 * [1,2]
 *
 * solution("TTACCA", [0,2], [3,5])
 * [1,1]
 *
 * solution("TTCCCC", [0,2], [3,5])
 * [2,2]
 *
 * solution("TTTCCC", [0,3], [2,5])
 * [4,2]
 *
 * TODO - INCOMPLETE
 */
