function maxDepth(root){
    return helper(root, 0);
}

function helper(node, depth){
    if(!node){
        return depth;
    }
    depth++;
    let left = helper(node.left, depth);
    let right = helper(node.right, depth);
    return Math.max(left, right);
}

function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}