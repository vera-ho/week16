function inOrderArray(root) {
    if(!root) return [];

    let left = inOrderArray(root.left);
    let right = inOrderArray(root.right);
    let array = left.concat(root.val, right);
    return array;
}

function postOrderArray(root) {

}

module.exports = {
    inOrderArray,
    postOrderArray
};