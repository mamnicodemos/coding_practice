function maxPathSum(root){
    let max = Number.MIN_SAFE_INTEGER;
    function helper(node){
        if(!node){
            return 0;
        }
        let left = Math.max(helper(node.left), 0);
        let right = Math.max(helper(node.right), 0);
        max = Math.max(left + right + node.val, max);
        return Math.max(left, right) + node.val;
    }
    helper(root);
    return max;
}

function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}