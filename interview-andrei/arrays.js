// /*
// Given two arrays, create a function that lets a user know
// whether these two arrays contain any common items
// For example
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// -------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// */

// const containCommonItemSet = (arr1, arr2) => {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);

//     for (let item of set1) {
//         if (set2.has(item)) return true;
//     }

//     return false;
// };

// const containCommonItemObject = (arr1, arr2) => {
//     const object1 = arr1.reduce((acc, cur) => {
//         acc[cur] = true;
//         return acc;
//     }, {});

//     for (let item of arr2) {
//         if (object1[item]) return true;
//     }

//     return false;
// };

// const array1 = [];
// const array2 = [];

// for (let i = 0; i < 400000; i++) {
//     array1.push(i);
//     array2.push(-1 - i);
// }

// console.time("set");
// containCommonItemSet(array1, array2);
// console.timeEnd("set");

// console.time("object");
// containCommonItemObject(array1, array2);
// console.timeEnd("object");

// /*
// mergeSortedArrays
// */
// const mergeSortedArrays = (array1, array2) => {
//     let index1, index2;
//     index1 = index2 = 0;
//     const totalLength = array1.length + array2.length;

//     const mergedArray = [];

//     for (let i = 0; i < totalLength; i++) {
//         const item1 = array1[index1];
//         const item2 = array2[index2];
//         if (item1 < item2 || !item2) {
//             mergedArray.push(item1);
//             index1++;
//         } else {
//             mergedArray.push(item2);
//             index2++;
//         }
//     }

//     return mergedArray;
// };

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// /*
// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
// */
// const twoSum = (nums, target) => {
//     const complements = {};
//     for (let i = 0; i < nums.length; i++) {
//         const number = nums[i];
//         const complement = target - number;
//         if (complements[number] !== undefined) return [complements[number], i];
//         complements[complement] = i;
//     }
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 6, 1, -1, 4, -3, 9, 10], 8));

// /*
// Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// */

// const maxSubArray = (nums) => {
//     let sum = 0;
//     let maxSum = -Infinity;
//     for (let number of nums) {
//         sum = sum > 0 ? sum + number : number;
//         maxSum = Math.max(sum, maxSum);
//     }
//     return maxSum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));

// /*
// Move Zeroes
// Given an integer array nums, move all 0's to the end of while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// */

// const moveZeroes = function (nums) {
//     let low = 0;
//     let high = low + 1;

//     while (high <= nums.length - 1) {
//         if (nums[low] !== 0) {
//             low++;
//             high++;
//         } else {
//             if (nums[high] !== 0) {
//                 [nums[low], nums[high]] = [nums[high], nums[low]];
//                 low++;
//             }
//             high++;
//         }
//     }
// };

// const nums1 = [0, 1, 0, 3, 12];
// moveZeroes(nums1);
// console.log(nums1);

// /*
// Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// */

// const rotate = function (nums, k) {
//     const copy = [...nums];
//     for (let i = 0; i < nums.length; i++) {
//         const newIndex = (i + k) % nums.length;
//         nums[newIndex] = copy[i];
//     }
// };

// var input = [1, 2, 3, 4, 5, 6, 7];
// rotate(input, 3);
// console.log(input);

/*
Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
*/

const removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    for (let k = nums.length - 1; k > i; k--) {
        nums.pop();
    }

    return i + 1;
};

const input1 = [1, 1, 2];
const input2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(input1));
console.log(input1);
console.log(removeDuplicates(input2));
console.log(input2);
