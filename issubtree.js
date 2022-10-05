function isSubtree(root, subRoot){
    if(root == null){
        return subRoot == null;
    }
    if(subRoot == null || isSameTree(root, subRoot)){
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(t1, t2){
    if(t1 == null && t2 == null){
        return true;
    }
    if(t1 == null || t2 == null){
        return false;
    }
    return t1.val == t2.val && isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}

function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}