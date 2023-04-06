// /*
// Create your own hash table example
// */
// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//         }
//         return hash;
//     }

//     set(key, value) {
//         const i = this._hash(key);
//         this.data[i] = this.data[i] || [];
//         this.data[i].push([key, value]);
//     }

//     get(key) {
//         const i = this._hash(key);
//         this.data[i] = this.data[i] || [];
//         const bucket = this.data[i].find((bucket) => bucket[0] === key);
//         return bucket && bucket[1];
//     }

//     keys() {
//         const keysArray = [];
//         for (let shelf of this.data) {
//             if (shelf) {
//                 for (let bucket of shelf) {
//                     keysArray.push(bucket[0]);
//                 }
//             }
//         }
//         return keysArray;
//     }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("apples", 5000);
// console.log(myHashTable);
// console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get("bananas"));
// console.log(myHashTable.keys());

/*
First Recurring Character
Given an array chars, return the first character that appears again. Otherwise return undefined
*/

const firstRecurringCharacter = (chars) => {
    const map = {};
    for (let i = 0; i < chars.length; i++) {
        const item = chars[i];
        if (map[item]) return item;
        map[item] = 1;
    }
};

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
