function kthSmallest(root, k){
    let furthestLeftNode = root;
    const values = preorder(root, []);
    values.sort((a, b) => {return a - b});
    return values[k - 1];
}

function preorder(root, nums){
    if(root){
        nums.push(root.val);
    }
    if(root.left){
        preorder(root.left, nums);
    }
    if(root.right){
        preorder(root.right, nums);
    }
    return nums;
}