function isValidBST(root){
    return checkValues(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function checkValues(leaf, min, max){
    if(!leaf){
        return true;
    }
    if(leaf.val <= min || leaf.val >= max){
        return false;
    }
    return checkValues(leaf.left, min, leaf.val) && checkValues(leaf.right, leaf.val, max);
}