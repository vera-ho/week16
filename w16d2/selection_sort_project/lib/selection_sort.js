function swap(arr, index1, index2) {
    let v1 = arr[index1];
    let v2 = arr[index2];

    arr[index1] = v2;
    arr[index2] = v1;
}

/**
 * Sort the smallest values first
 * Loop through the array each time and record index of the smallest value
 * Once a loop is done, take smallest value and move it to the end of the sorted portion of the array
 * */
function selectionSort(arr) {
    let smallest = 0;

    for(let i = 0; i < arr.length; i++) {
        smallest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        swap(arr, smallest, i);
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};