function lcs(one, two) {
    let max = 0,
        index = 0,
        string = '',
        lcsarr = new Array(one.length + 1).fill(0).map(item => new Array(two.length + 1).fill(0));

    for (let i = 1; i < one.length + 1; i++) {
        for (let j = 1; j < two.length + 1; j++) {
            if (one[i-1] && two[j-1] && one[i-1] === two[j-1]) lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
            if (max < lcsarr[i][j]) max = lcsarr[i][j], index = i;
        }
    }

    if (max === 0) return string;
    for (let i = index - max; i < index; i++) string += one[i];
    return string;
}

lcs('havoc','raven');