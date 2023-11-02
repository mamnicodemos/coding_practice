function TreeNode(val, left, right){
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : left);
}

function BFS(root){
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        let currentNode = queue.shift();
        console.log(currentNode.val);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
    }
}

const root = new TreeNode(2);
const l1 = new TreeNode(1);
const r1 = new TreeNode(3);
root.left = l1;
root.right = r1;
BFS(root);