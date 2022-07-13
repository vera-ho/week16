/**
 * Maintain a sorted region on the left side of the array
 * Take the next unsorted index value and insert it into the correct position within the sorted portion
 *   - Need to move values larger than current value to the right
 *   - insert when left value is smaller than current value and right value is larger than current value
 */
function insertionSort(arr) {
    // console.log("arr: " + arr);
    // console.log("");

    for(let i = 1; i < arr.length; i++) {
        let current = arr[i];

        // console.log("i: " + i);
        // console.log("current: " + current);

        for(let j = i - 1; j > -1; j--) {
            // console.log("j: " + j);
            // console.log("arr[j]: " + arr[j]);

            if(current < arr[j]) {
                arr[j + 1] = arr[j]; // initially, j + 1 is i and that *value* is saved in current
                arr[j] = current;
            } else {
                arr[j + 1] = current;
                break;
            }
            // console.log(arr);
            // console.log("");
        }
    }
    return arr;
}

module.exports = {
    insertionSort
};