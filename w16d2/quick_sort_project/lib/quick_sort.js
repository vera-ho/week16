function quickSort(array) {
    if(array.length <= 1) return array;

    let pivot = array.shift();
    let left = array.filter( ele => pivot > ele);
    let right = array.filter( ele => pivot <= ele);

    left = quickSort(left);
    right = quickSort(right);

    return left.concat(pivot, right);
}


module.exports = {
    quickSort
};