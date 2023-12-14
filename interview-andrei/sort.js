const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i = 0, len = array.length; i < len; i++) {
        let j = 0;
        while (j < array.length - 1 - i) {
            if (array[j] > array[j + 1])
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            j++;
        }
    }
}

//bubbleSort(numbers);
console.log(numbers);

function selectionSort(array) {
    for (let i = 0, len = array.length; i < len - 1; i++) {
        let min = i;
        let j = i + 1;
        while (j < len) {
            if (array[j] < array[min]) min = j;
            j++;
        }
        [array[i], array[min]] = [array[min], array[i]];
    }
}

//selectionSort(numbers);
console.log(numbers);

function insertionSort(array) {
    for (let i = 0, len = array.length; i < len; i++) {
        let j = i + 1;
        while (j >= 0 && array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            j--;
        }
    }
}

//insertionSort(numbers);
console.log(numbers);

function mergeSort(array) {
    if (array.length === 1) return array;

    //split in right and left
    const half = Math.floor(array.length / 2);
    const left = array.slice(0, half);
    const right = array.slice(half);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    if (!left.length) return right;
    if (!right.length) return left;
    if (left.length === 1 && right.length === 1) {
        return right[0] < left[0] ? [right[0], left[0]] : [left[0], right[0]];
    }
    return right[0] < left[0]
        ? [right[0], ...merge(left, right.slice(1))]
        : [left[0], ...merge(left.slice(1), right)];
}

const result = mergeSort(numbers);
console.log(result);
