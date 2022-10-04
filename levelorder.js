function levelOrder(root){
    if(!root){
        return [];
    }
    return helper([[root]], 0);
}

function helper(output, level){
    const current = output[level];
    const next = [];
    
    for(let i = 0; i < current.length; i++){
        if(current[i].left){
            next.push(current[i].left);
        }
        if(current[i].right){
            next.push(current[i].right);
        }
        current[i] = current[i].val;
    }
    
    if(next.length){
        output.push(next);
        helper(output, level + 1);
    }
    return output;
}

function TreeNode(val, left, right){
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}