function merge(array1, array2) {
    let sorted = [];

    while(array1.length && array2.length) {
        if(array1[0] > array2[0]) {
            sorted.push(array2.shift());
        } else {
            sorted.push(array1.shift());
        }
    }

    return sorted.concat(array1, array2);
}

function mergeSort(array) {
    if(array.length <= 1) return array;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};