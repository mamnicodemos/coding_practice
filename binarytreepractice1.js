function TreeNode(val, left, right){
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : right);
}

function preorder(root){
    if(root){
        console.log(root.val);
        if(root.left){
            preorder(root.left);
        }
        if(root.right){
            preorder(root.right);
        }
    }
}

function inorder(root){
    if(root.left){
        preorder(root.left);
    }
    console.log(root.val);
    if(root.right){
        preorder(root.right);
    }
}

function postorder(root){
    if(root.left){
        preorder(root.left);
    }
    if(root.right){
        preorder(root.right);
    }
    console.log(root.val);
}

const root = new TreeNode(1);
const l1 = new TreeNode(2);
const r1 = new TreeNode(3);
root.left = l1;
root.right = r1;
console.log(preorder(root));
console.log(inorder(root));
console.log(postorder(root));