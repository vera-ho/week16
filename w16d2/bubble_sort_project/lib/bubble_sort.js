function swap(array, idx1, idx2) {
    let value1 = array[idx1];
    let value2 = array[idx2];
    array[idx1] = value2;
    array[idx2] = value1;
    return array;
}

/**
 * Loop through entire array until completely sorted
 * Each loop, track index and swap two idx if the right one is larger
 */
function bubbleSort(array) {
    let sorted = true;

    while(sorted) {
        sorted = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]) {
                array = swap(array, i, i + 1);
                sorted = true;
            }
        }
    }

    return array;
}

module.exports = {
    bubbleSort,
    swap
};