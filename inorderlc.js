/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const values = [];
    const stack = [];
    let p = root;
    while(p){
        stack.push(p);
        p = p.left;
    }
    while(stack.length > 0){
        let n = stack.pop();
        values.push(n.val);
        n = n.right;
        while(n){
            stack.push(n);
            n = n.left;
        }
    }
    return values;
};
