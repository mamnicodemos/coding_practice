function isSameTree(p, q){
    if(p == null && q == null){
        return true;
    }
    if(p == null || q == null){
        return false;
    }
    return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}