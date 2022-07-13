function inOrderArray(root) {
    if(!root) return [];

    let left = inOrderArray(root.left);
    let right = inOrderArray(root.right);
    let array = left.concat(root.val, right);
    return array;
}

function postOrderArray(root) {
    if(!root) return [];

    let left = postOrderArray(root.left);
    let right = postOrderArray(root.right);
    let array = left.concat(right, root.val);
    return array;
}

module.exports = {
    inOrderArray,
    postOrderArray
};