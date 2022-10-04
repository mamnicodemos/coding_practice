function isSameTree(p, q){
    const stack1 = [p];
    const stack2 = [q];
    let l = null;
    let r = null;
    while(stack1.length && stack2.length){
        l = stack1.pop();
        r = stack2.pop();
        if(!l && !r){
            continue;
        }
        if(!l || !r){
            return false;
        }
        if(l.val != r.val){
            return false;
        }
        stack1.push(l.left);
        stack1.push(l.right);
        stack2.push(r.left);
        stack2.push(r.right);
    }
    return true;
}

function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}