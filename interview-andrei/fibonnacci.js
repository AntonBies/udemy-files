// 000 001 001 002 003 005 008 013 021 034 055 089 144
//   0   1   2   3   4   5   6   7   8   9  10  11  12

const fibon = (n) => {
    if (n < 2) return n;
    const prev = fibon[n - 1] || fibon(n - 1);
    const before = fibon[n - 2] || fibon(n - 2);
    return (fibon[n] = prev + before);
};

const fibonNoMem = (n) => {
    if (n < 2) return n;
    const prev = fibonNoMem(n - 1);
    const before = fibonNoMem(n - 2);
    return prev + before;
};

console.time("memoization");
console.log(fibon(42));
console.timeEnd("memoization");

console.time("nomem");
console.log(fibonNoMem(42));
console.timeEnd("nomem");
