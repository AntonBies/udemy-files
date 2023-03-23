// Given two arrays, create a function that lets a user know
// whether these two arrays contain any common items
// For example
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//-------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

const containCommonItemSet = (array1, array2) => {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    for (let item of set1) {
        if (set2.has(item)) return true;
    }

    return false;
};

const containCommonItemObject = (array1, array2) => {
    const object1 = array1.reduce((acc, cur) => {
        acc[cur] = true;
        return acc;
    }, {});

    for (let item of array2) {
        if (object1[item]) return true;
    }

    return false;
};

const array1 = [];
const array2 = [];

for (let i = 0; i < 4000000; i++) {
    array1.push(i);
    array2.push(-1 - i);
}

console.time("set");
containCommonItemSet(array1, array2);
console.timeEnd("set");

console.time("object");
containCommonItemObject(array1, array2);
console.timeEnd("object");
